import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { AccountCreation } from '../../data/account-creation';
import { DataService } from '../../data/data.service';
@Component({
  selector: 'app-create-account-form1',
  templateUrl: './create-account-form1.component.html',
  styleUrls: ['./create-account-form1.component.css']
})
export class CreateAccountForm1Component implements OnInit {

  originalAccountCreationInputs : AccountCreation = {
    name: '',
    email: '',
    password: '',
    termsconditions: true,
  }

  accountCreationInputs : AccountCreation = {...this.originalAccountCreationInputs};
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  postError = false;
  postSuccess = false;
  postErrorMessage = '';
  postSucessMessage = '';
  cb_state = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onHttpError(errorResponse: any){
    console.log('error: ', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit: ', form.valid);

    if (form.valid){
    // this will return an observable, to get an obs to start working, need to call the subscribe function
    this.dataService.postCreateAccountForm(this.accountCreationInputs).subscribe(
      result => console.log('success: ', result),
      error => this.onHttpError(error),

      );
      this.postSuccess = true;
      this.postSucessMessage = 'Informations saved!';
      this.postError = false;
    }
    else {
      this.postError = true;
      this.postErrorMessage = 'Please fix above errors';
      this.postSuccess = false;
    }
  }

  nameErrorMessage() {
    return 'You must enter a first name';
}

  emailErrorMessage() {
    return 'You must enter an email address';
  }

  passwordErrorMessage() {
    return 'You must enter a password';
  }

}

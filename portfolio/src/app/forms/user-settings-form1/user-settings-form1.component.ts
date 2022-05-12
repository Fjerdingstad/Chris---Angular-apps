import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../../data/data.service';
import { UserSettings } from '../../data/user-settings';

@Component({
  selector: 'app-user-settings-form1',
  templateUrl: './user-settings-form1.component.html',
  styleUrls: ['./user-settings-form1.component.css']
})
export class UserSettingsForm1Component implements OnInit {

  originalUserSettings : UserSettings = {
    name: 'Caleb',
    lastName: 'Fjerd',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: ''
  }

  title = 'User Settings';
  subscriptionTypes: Observable<string[]> | undefined;
  userSettings : UserSettings = {...this.originalUserSettings};
  postError = false;
  postSuccess = false;
  postErrorMessage = '';
  postSucessMessage = '';
  name = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
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
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
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

  lastNameErrorMessage() {
    return 'You must enter a last name';
}


}

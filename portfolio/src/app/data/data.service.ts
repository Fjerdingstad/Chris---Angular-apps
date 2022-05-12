import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';
import { AccountCreation } from './account-creation';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any>{
    // creating an 'of' function creates an observable
    // return of(userSettings);

    // returns the url of the http, taken from putsreq.com which is site for requests
    return this.http.post('https://putsreq.com/eg1VttC0vFtyDWR9OghX', userSettings);
  }

  postCreateAccountForm(createAccount: AccountCreation) : Observable<any>{
    return this.http.post('https://putsreq.com/eg1VttC0vFtyDWR9OghX', createAccount);
  }

}

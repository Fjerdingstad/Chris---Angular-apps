import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { Pc1Module } from './productscart1/pc1.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserSettingsForm1Component } from './forms/user-settings-form1/user-settings-form1.component';
import { CreateAccountForm1Component } from './forms/create-account-form1/create-account-form1.component';
import { WelcomePageComponent } from './home-page/home-page.component';
import { FormsIndexComponent } from './forms/forms-index/forms-index.component';
import { FormsAppComponent } from './forms/forms-app.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserSettingsForm1Component,
    CreateAccountForm1Component,
    WelcomePageComponent,
    FormsIndexComponent,
    FormsAppComponent,
  ],
  imports: [
    Pc1Module,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

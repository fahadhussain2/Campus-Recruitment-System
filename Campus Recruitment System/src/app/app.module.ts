import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {router} from './app.router';
import {Router, Routes, RouterModule} from '@angular/router';
import {HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {UserService} from './Services/userService';
import {firebaseAuthConfig, firebaseconfig} from './app.config';
import { AuthGuard } from './Services/authGuard';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResumeComponent } from './resume/resume.component';
import { CompanyComponent } from './company/company.component';
import { AddresumeComponent } from './addresume/addresume.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { JobsComponent } from './jobs/jobs.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ResumeComponent,
    CompanyComponent,
    AddresumeComponent,
    AddcompanyComponent,
    AdminComponent,
    StudentsComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    router,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseconfig,firebaseAuthConfig)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},UserService, AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

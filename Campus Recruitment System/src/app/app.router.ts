import { RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './Services/authGuard';



import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ResumeComponent} from './resume/resume.component';
import {AddresumeComponent} from './addresume/addresume.component';
import {CompanyComponent} from './company/company.component';
import {AddcompanyComponent} from './addcompany/addcompany.component';
import {AdminComponent} from './admin/admin.component';
import {StudentsComponent} from './students/students.component';
import {JobsComponent} from './jobs/jobs.component';


const routes = [ 
  {path: '', redirectTo: 'login',pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'addcompany/resume', component: ResumeComponent,
canActivate:[AuthGuard]},
  {path: 'addresume', component: AddresumeComponent,
canActivate:[AuthGuard]},
  {path: 'addresume/company', component: CompanyComponent,
canActivate:[AuthGuard]},
  {path: 'addcompany', component: AddcompanyComponent,
canActivate:[AuthGuard]},
  {path: 'admin', component: AdminComponent,
canActivate:[AuthGuard]},
  {path: 'admin/students', component: StudentsComponent,
canActivate:[AuthGuard]},
  {path: 'admin/jobs', component: JobsComponent,
canActivate:[AuthGuard]}
  

]

export const router: ModuleWithProviders = RouterModule.forRoot(routes)
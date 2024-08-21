import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NameComponent } from './components/basicInformation/name/name.component';
import { BirthdayComponent } from './components/basicInformation/birthday/birthday.component';
import { EmailComponent } from './components/basicInformation/email/email.component';
import { PasswordComponent } from './components/basicInformation/password/password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'register', component: RegisterComponent
    , children: [
      { path: 'name', component: NameComponent },
      { path: 'birthday', component: BirthdayComponent },
      {path : 'email', component : EmailComponent},
      { path: 'password', component: PasswordComponent },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [authGuard],
    children: [
      {path: 'notes', component: NotesComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

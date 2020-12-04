import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { ListpropComponent } from './property/listprop/listprop.component';
import { PropertyComponent } from './property/property.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {path:'', redirectTo:'profile', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  {path:'profile', component : ProfileComponent,canActivate:[AuthGuard]},
  {path:'property', component : PropertyComponent,canActivate:[AuthGuard]},
  {path:'listprop',component:ListpropComponent,canActivate:[AuthGuard]},
  {path:'**',component:PagenotfoundComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rco=[

  LoginComponent,
  ProfileComponent,
  SignupComponent,
  ListpropComponent,
  PropertyComponent,
  PagenotfoundComponent

];

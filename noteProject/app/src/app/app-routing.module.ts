import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './componanet/sign-in/sign-in.component';
import { SignUpComponent } from './componanet/sign-up/sign-up.component';
import { ProfileComponent } from './componanet/profile/profile.component';
import { NotFoundComponent } from './componanet/not-found/not-found.component';


const routes: Routes = [
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'signin', component: SignInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { LoginDoisComponent } from './login-dois/login-dois.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'loginDois', component: LoginDoisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

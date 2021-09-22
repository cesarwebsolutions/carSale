import { CheckboxComponent } from './views/checkbox/checkbox.component';

import { LoginDoisComponent } from './login-dois/login-dois.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './resources/services/auth-guard.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'loginDois', component: LoginDoisComponent},
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    loadChildren: () => import ('./views/dashboard/dashboard.module').then(
    (module) => module.DashboardModule
    ),
  },
  {path: 'checkbox', component: CheckboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

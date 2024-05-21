import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { EmployeeListingPageComponent } from './components/employee-listing-page/employee-listing-page.component';
import { authGuard } from './login.guard';

const routes: Routes = [
  { path: '',component: LoginPageComponent },
  { path: 'employee-list',component: EmployeeListingPageComponent,canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

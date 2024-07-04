import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './component/loginform/loginform.component';
import { LoginPageComponent } from './container/login-page/login-page.component';

const routes: Routes = [
  {path:'loginform', component: LoginformComponent },
  {path: 'loginPage', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

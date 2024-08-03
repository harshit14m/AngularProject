import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './component/loginform/loginform.component';
import { LoginPageComponent } from './container/login-page/login-page.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsPrComponent } from './rxjs-pr/rxjs-pr.component';
import { RxjsBasicComponent } from './rxjs-basic/rxjs-basic.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';

const routes: Routes = [
  {path:'loginform', component: LoginformComponent },
  {path: 'loginPage', component: LoginPageComponent},
  {path: 'rxjs-learning', component: RxjsLearningComponent},
  {path: 'rxjs-pr', component: RxjsPrComponent},
  {path: 'rxjs-basic', component: RxjsBasicComponent},
  {path: 'new-observable', component: NewObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

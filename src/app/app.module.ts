import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './component/loginform/loginform.component';
import { LoginPageComponent } from './container/login-page/login-page.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { RxjsPrComponent } from './rxjs-pr/rxjs-pr.component';
import { RxjsBasicComponent } from './rxjs-basic/rxjs-basic.component';
import { NewObservableComponent } from './components/new-observable/new-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    LoginPageComponent,
    RxjsLearningComponent,
    RxjsPrComponent,
    RxjsBasicComponent,
    NewObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

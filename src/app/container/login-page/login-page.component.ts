import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginDetail: any;
  loginValue: any;
  constructor(){};
  ngOnInit(): void {
    this.loginDetail={
      email: 'test@gmail.com',
      password:'12345'
    }
  }

}

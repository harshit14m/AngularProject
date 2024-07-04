import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit{

  
  constructor(public fb : FormBuilder){};

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  @Input() loginDetails: any={};
  @Output() loginValue = new EventEmitter();
  
  ngOnInit(): void {
    this.createForm();
  }

  bindForm(value:any){
    this.loginForm.patchValue({
      email: value.email,
      password: value.password
    })
  };

  createForm() {
    setTimeout(() => {
      this.bindForm(this.loginForm)
    }, 1000);
  }

  

  onSubmit() {
    console.log(this.loginForm.value);
    
    if ((this.loginForm.value.email == this.loginDetails.email) && (this.loginForm.value.password == this.loginDetails.password)){
      
      console.log('good');
      
    } else {
      console.log('wrong')
    }
    this.loginValue.emit(this.loginForm.value);
    }
    
  

}

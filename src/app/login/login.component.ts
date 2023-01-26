import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  pageTitle:string='Login ';
  loginForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder,private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    console.log('in ngoninit of login')
    this.loginForm = this.fb.group({
      username: [, [Validators.required]],
      password: [, [Validators.required]],
    });
  }
  
  cancel():void{
    this.router.navigate(['home']);
  } 
  onSubmit(loginForm:NgForm){
    console.log('in onsubmit')
    if(loginForm && loginForm.valid){
      const username = loginForm.form.value.username;
      const password=loginForm.form.value.password;
      
      this.authService.login(username,password);
      console.log('after login')
      if(this.authService.redirectToUrl){
        
        this.router.navigateByUrl(this.authService.redirectToUrl);
      }
      else{
        console.log('in else of login')
        this.router.navigate(['veges']);
      }



    }

}
}

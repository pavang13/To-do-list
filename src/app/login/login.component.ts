import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { LoginService } from '../login.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver,private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.pattern("^([0-9a-z]{4,16})+@[a-z]+\.[a-z]{2,3}$")]),
    password:new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(12)])      

  })
  login(){
    window.localStorage.clear();
    this.loginservice.loginUser(this.loginForm.value).subscribe(response=>{
      // alert("You have logged in successfully");
      alertify.success("You have logged in successfully")
      console.log(response);
      window.localStorage.setItem('tgt',response.token);
      window.localStorage.setItem('emailId',response.email);
      window.localStorage.setItem('username',response.username);
      this.router.navigate(['/studio'])
    },
    error => {
      console.log(error);
      alertify.error("Login failed,Please check your login details");
    });

    
    


  }
  get emailId(){
    return this.loginForm.get('emailId');
  }
  get password(){
    return this.loginForm.get('password');
  }

  userlist:any

}

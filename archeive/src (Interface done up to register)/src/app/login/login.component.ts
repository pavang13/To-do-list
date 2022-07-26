import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide : boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private loginservice:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password:new FormControl('',[Validators.required, Validators.minLength(4)])      

  })
  login(){
    window.localStorage.clear();
    this.loginservice.loginUser(this.loginForm.value).subscribe(response=>{
      alert("You have logged in successfully");
      console.log(response);
      window.localStorage.setItem('tgt',response.token);
      window.localStorage.setItem('emailId',response.email);
      window.localStorage.setItem('username',response.username);
      this.router.navigate(['/studio'])
    },
    error => {
      console.log(error);
      alert("Login failed,Please check your login details");
    });
    


  }
  get emailId(){
    return this.loginForm.get('emailId');
  }
  get password(){
    return this.loginForm.get('password');
  }

}

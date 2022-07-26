import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent {
  image!:any;

  constructor(private router:Router,private taskservice:TaskService ) { }

  
    email:any
    userlist:any
    initialValues:any

  ngOnInit(): void {
    this.initialValues=this.registerForm.value;
    this.getUserDetails();
  }


  registerForm=new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    username:new FormControl('',[Validators.required, Validators.minLength(4)]),
    password:new FormControl('',[Validators.required, Validators.minLength(4)]),
    address:new FormControl('',[Validators.required, Validators.minLength(4)]),
    mobileNo:new FormControl('',[Validators.required, Validators.minLength(4)])
    

  })
  get emailId(){
    return this.registerForm.get('emailId');
  }
  get username(){
    return this.registerForm.get('username');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get address(){
    return this.registerForm.get('address');
  }
  get mobileNo(){
    return this.registerForm.get('mobileNo');
  }


  getUserDetails():void{
    this.email=localStorage.getItem("emailId")
    this.taskservice.getUserDetails(this.email).subscribe(response=>{
      console.log(response);
      this.userlist=response;
    })

  }


  toedit(user:any){
    localStorage.setItem("emailId",user.emailId);
    localStorage.setItem("password",user.password);
    localStorage.setItem("username",user.username);
    localStorage.setItem("address",user.address);
    localStorage.setItem("mobileNo",user.mobileNo);
    localStorage.setItem("image",user.image);
    this.router.navigateByUrl('/uploaduser');
  }

  

 
 
}

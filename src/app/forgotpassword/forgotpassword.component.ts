import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import * as alertify from 'alertifyjs';
import { TaskService } from '../task.service';
import { GetpasswordService } from '../getpassword.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email: any

  constructor(private taskservice:TaskService,private router:Router,private getservice:GetpasswordService) { 
    
  }

  ngOnInit(): void {
  }
  passwordForm=new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.pattern("^([0-9a-z]{4,16})+@[a-z]+\.[a-z]{2,3}$")]),

  })


  // getPassword(){
  //   this.getservice.getPassword(this.passwordForm.value).subscribe(response=>{
  //     // alert("You have logged in successfully");
  //     window.localStorage.setItem('email1',response.emailId);
  //     alertify.success("Your Password is sent to your email")
  //     console.log(response);
  //     this.router.navigate(['/login'])
  //   },
  //   error => {
  //     console.log(error);
  //     alertify.error("Password sent failed");
  //   });

    
    


  // }
  // get emailId(){
  //   return this.passwordForm.get('emailId');
  // }



  res:any
  setValue(){
    this.email=this.passwordForm.get("emailId")?.value;
    console.log(this.email);
    window.localStorage.setItem("eid",this.email)
    this.getservice.getPassword(this.email).subscribe(response=>{
      alertify.success("Your Password is sent to your email")
      this.router.navigateByUrl("/login")
      this.res=response;
      console.log(this.res);
    },
    error=>{
      console.log(error);
      alertify.error("Enter a Valid Email Id");
    }
    )
  }

  

 

}

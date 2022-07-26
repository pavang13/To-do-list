import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { RegisterService } from '../register.service';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide : boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    // image!:any;
    // url:any="";
  
  
  constructor(private breakpointObserver: BreakpointObserver,private registerservice:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  registerForm=new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.pattern("^([0-9a-z]{4,16})+@[a-z]+\.[a-z]{2,3}$")]),
    username:new FormControl('',[Validators.required, Validators.pattern("^[a-zA-Z]{3,20}$")]),
    password:new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(12)]),
    address:new FormControl('',[Validators.required, Validators.minLength(3)]),
    mobileNo:new FormControl('',[Validators.required, Validators.pattern("^[0-9]{10}$")]),
    image:new FormControl('No profile Picture')
    

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
  
  
   userName:any
  register(){
    
    this.registerservice.registerUser(this.registerForm.value).subscribe(response=>{
      alertify.success("You have registerd successfully, please login to continue");
      this.router.navigateByUrl("/login");
      console.log("response");
    },
    error => {
      console.log(error);
      alertify.error("User Already Exits");
    });

  }


  // register():void{
  //   this.registerservice.registerUser({
  //     emailId:this.registerForm.value.emailId,
  //     username:this.registerForm.value.username,
  //     password:this.registerForm.value.password,
  //     address:this.registerForm.value.address,
  //     mobileNo:this.registerForm.value.mobileNo,
  //     image:this.image,
  //   }).subscribe(response=>{
  //     alert("You have registerd successfully, please login to continue");
  //     this.router.navigateByUrl("/login");
  //     console.log("response");
  //   },
  //   error => {
  //     console.log(error);
  //     alert("User Already Exits");
  //   });

  //   this.image=''

  // }

  

  
  // onuploadimage(event:any){
  //   // this.tfile=<File>event.target.files[0]
  //   console.log(event)
  //   // console.log(this.tfile)
  //   if(!event.target.files[0] || event.target.files[0].length==0){
  //     return;
  //   }
  //   let mimeType=event.target.files[0].type;
  //   if(mimeType.match(/image\/*/)==null){
  //     return;
  //   }
  //   let reader=new FileReader();
  //   reader.readAsDataURL(event.target.files[0]);
  //   reader.onload = (_event)=>{
  //     this.url=reader.result;
  //     console.log(this.url)
  //     this.image=this.url
  //   }
    
  // }

}

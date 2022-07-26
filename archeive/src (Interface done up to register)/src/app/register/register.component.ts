import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { RegisterService } from '../register.service';

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

    image!:any;
    url:any="";
  
  
  constructor(private breakpointObserver: BreakpointObserver,private registerservice:RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  registerForm=new FormGroup({
    emailId:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    username:new FormControl('',[Validators.required, Validators.minLength(4)]),
    password:new FormControl('',[Validators.required, Validators.minLength(4)]),
    address:new FormControl('',[Validators.required, Validators.minLength(4)]),
    mobileNo:new FormControl('',[Validators.required, Validators.minLength(4)]),
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
  // register(){
    
  //   this.registerservice.registerUser(this.registerForm.value).subscribe(response=>{
  //     alert("You have registerd successfully, please login to continue");
  //     this.router.navigateByUrl("/login");
  //     console.log("response");
  //   },
  //   error => {
  //     console.log(error);
  //     alert("User Already Exits");
  //   });

  // }


  register():void{
    this.registerservice.registerUser({
      emailId:this.registerForm.value.emailId,
      username:this.registerForm.value.username,
      password:this.registerForm.value.password,
      address:this.registerForm.value.address,
      mobileNo:this.registerForm.value.mobileNo,
      image:this.image,
    }).subscribe(response=>{
      alert("You have registerd successfully, please login to continue");
      this.router.navigateByUrl("/login");
      console.log("response");
    },
    error => {
      console.log(error);
      alert("User Already Exits");
    });

    this.image='Image Not Found Please upload....'

  }

  

  
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

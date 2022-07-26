import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, shareReplay } from 'rxjs';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-uploaduser',
  templateUrl: './uploaduser.component.html',
  styleUrls: ['./uploaduser.component.css']
})
export class UploaduserComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private taskservice:TaskService) { }

  ngOnInit(): void {
    this.assignValue();
  
  }

  image!: any;
  url:any="";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  onuploadimage(event:any){
    
    console.log(event)
   
    if(!event.target.files[0] || event.target.files[0].length==0){
      return;
    }
    let mimeType=event.target.files[0].type;
    if(mimeType.match(/image\/*/)==null){
      return;
    }
    let reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event)=>{
      this.url=reader.result;
      console.log(this.url)
      this.image=this.url
    }
    
  }

  assignValue(){
    this.updateForm.patchValue({
      username:localStorage.getItem("username"),
      password:localStorage.getItem('password'),
      address:localStorage.getItem('address'),
      mobileNo:localStorage.getItem('mobileNo'),
    })
  }


  updateForm=new FormGroup({
    username:new FormControl(""),
    password:new FormControl(""),
    address:new FormControl(""),
    mobileNo:new FormControl("")
  })


  get username(){
    return this.updateForm.get('username');
  }

  get password(){
    return this.updateForm.get('password');
  }

  get address(){
    return this.updateForm.get('address');
  }

  get mobileNo(){
    return this.updateForm.get('mobileNo');
  }


  email:any

  updateUser():void{
    this.email=localStorage.getItem("emailId")
    console.log(this.updateForm+","+this.image+","+localStorage.getItem("emailId"))
    this.taskservice.updateUser({
      emailId:localStorage.getItem("emailId"),
      username:this.updateForm.value.username,
      password:this.updateForm.value.password,
      address:this.updateForm.value.address,
      mobileNo:this.updateForm.value.mobileNo,
      image:this.image,

    }).subscribe(response=>{
      alert("Your Details Updated Successfully");
      this.router.navigateByUrl("/userdetails")
    })
  }

}

import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskService } from '../task.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';



@Component({
  selector: 'app-uploadstudio',
  templateUrl: './uploadstudio.component.html',
  styleUrls: ['./uploadstudio.component.css']
})
export class UploadstudioComponent {
  display = "none";
  noOfIncomplete:number=0;
  incomplete:any
  isBadgeHidden:boolean=true

   image!: any;
  url:any="";
  taskList:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    openModal() {
      this.display = "block";
    
    }

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private taskservice:TaskService) {}

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

  // taskTitle:string;
  ngOnInit(): void {
    this.assignValue();
    this.initialValues1=this.registerForm.value;
    this.getUserDetails();
  
  }

  assignValue(){
    this.updateForm.patchValue({
      taskId:localStorage.getItem("TaskId"),
      taskTitle:localStorage.getItem("TaskTitle"),
      description:localStorage.getItem("TaskDescription"),
      date:localStorage.getItem("TaskDate"),
      priority:localStorage.getItem("TaskPriority"),
      // image:localStorage.getItem("TaskImage")
    })
  }

  updateForm=new FormGroup({
    taskId:new FormControl("",Validators.required),
    taskTitle:new FormControl(""),
    description:new FormControl(""),
    date:new FormControl("",Validators.required),
    priority:new FormControl("",Validators.required),
    // image:new FormControl("")
  })

  get taskId(){
    return this.updateForm.get('taskId');
  }
  get title(){
    return this.updateForm.get('taskTitle')
  }
  get description(){
    return this.updateForm.get('description');
  }
  get date(){
    return this.updateForm.get('date');
  }
  get priority(){
    return this.updateForm.get('priority');
  }
  


  email:any

  updateTask():void{
    this.email=localStorage.getItem("emailId")
     console.log(this.updateForm+","+this.image+","+localStorage.getItem("emailId"))
    this.taskservice.updateTask({
      taskId:localStorage.getItem("TaskId"),
      taskTitle:this.updateForm.value.taskTitle,
      description:this.updateForm.value.description,
      date:this.updateForm.value.date,
      priority:this.updateForm.value.priority,
      // image:this.updateForm.value.image,
       image:this.image,
      emailId:this.email
    }).subscribe(response=>{
      alertify.success("Task Updated successfully");
      localStorage.setItem("TaskId","");
      this.router.navigateByUrl("/gettaskstudio")
    })
    
  }

    userlist:any
    initialValues1:any

  // ngOnInit(): void {
  //   this.initialValues1=this.registerForm.value;
  //   this.getUserDetails();
  // }


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


  toedit1(user:any){
    localStorage.setItem("emailId",user.emailId);
    localStorage.setItem("password",user.password);
    localStorage.setItem("username",user.username);
    localStorage.setItem("address",user.address);
    localStorage.setItem("mobileNo",user.mobileNo);
    localStorage.setItem("image",user.image);
    this.router.navigateByUrl('/uploaduser');
  }


}

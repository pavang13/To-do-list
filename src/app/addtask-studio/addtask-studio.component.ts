import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-addtask-studio',
  templateUrl: './addtask-studio.component.html',
  styleUrls: ['./addtask-studio.component.css']
})
export class AddtaskStudioComponent {
  display = "none";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private taskservice:TaskService) {}
  image!:any;
  url:any="";
  id:number;


  openModal(){
    this.display="block";
  }
  isBadgeHidden:boolean=true;
  noOfIncomplete:number=0;

  onuploadimage(event:any){
    // this.tfile=<File>event.target.files[0]
    console.log(event)
    // console.log(this.tfile)
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
  
  addtaskForm=new FormGroup({
    // taskId:new FormControl("",Validators.required),
    taskTitle:new FormControl(""),
    description:new FormControl(""),
    date:new FormControl("",Validators.required),
    priority:new FormControl("",Validators.required)
  })

  // get taskId(){
  //   return this.addtaskForm.get('taskId');
  // }
  get taskTitle(){
    return this.addtaskForm.get('taskTitle');
  }
  get description(){
    return this.addtaskForm.get('description');
  }
  get date(){
    return this.addtaskForm.get('date');
  }
  get priority(){
    return this.addtaskForm.get('priority');
  }

  email:any;

  addTask():void{
    this.email=localStorage.getItem("emailId")
    console.log(this.addtaskForm.value+","+this.image+","+localStorage.getItem("emailId"))
    this.taskservice.addTasks({
      taskId:this.id,
      // taskId:this.addtaskForm.value.taskId,
      taskTitle:this.addtaskForm.value.taskTitle,
      description:this.addtaskForm.value.description,
      date:this.addtaskForm.value.date,
      priority:this.addtaskForm.value.priority,
      image:this.image,
      emailId:this.email,
    }).subscribe(response=>{
      alertify.success('Task added successfully');
      this.router.navigate(['/gettaskstudio'])
    },
    error=>{
      alertify.error("Task is already Exists. Please try again adding a task with new ID");
    }
    )
    this.image=''
  }

  unique(){
    var d=new Date().getTime();
    this.id=d;
    console.log(this.id);
  }




    userlist:any
    incomplete:any
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

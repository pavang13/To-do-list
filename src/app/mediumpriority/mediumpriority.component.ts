import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import * as alertify from 'alertifyjs';



@Component({
  selector: 'app-mediumpriority',
  templateUrl: './mediumpriority.component.html',
  styleUrls: ['./mediumpriority.component.css']
})
export class MediumpriorityComponent implements OnInit {

  display = "none";
  initialValues1: any

  constructor(private router:Router,private taskservice:TaskService,private snackBar:MatSnackBar ) {}
  email:any
  taskList:any
  initialValues:any
  page:number=1;
  totalLength:any;
  count:any;

  addtaskForm=new FormGroup({
    taskId:new FormControl("",Validators.required),
    taskTitle:new FormControl(""),
    description:new FormControl(""),
    date:new FormControl("",Validators.required),
    priority:new FormControl("",Validators.required)
  })

  get taskId(){
    return this.addtaskForm.get('taskId');
  }
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


  ngOnInit():void{
    this.initialValues=this.addtaskForm.value;
    this.getTasks();
    this.initialValues1=this.registerForm.value;
    this.getUserDetails();
    
  }

  getTasks(){
    this.email=localStorage.getItem("emailId");
    this.taskservice.mediumprioritytask(this.email)
    .subscribe(response=>{
      this.taskList=response;
      this.count=this.taskList.length;
      this.taskList.sort(function(a:any,b:any){
        if(a.priority=='Low')
        {
          return 0;
        }
        else if(a.priority>b.priority){
          return 1;
        }
        return -1;

      })
      let currentDate=new Date();
      this.incomplete=this.taskList.filter((a:any)=>{
        let a_date=new Date(a.date);
        return a_date<=currentDate;
      })
      this.noOfIncomplete=this.incomplete.length;

    })
  }

  deleteTask(taskId:any):void{
    this.taskservice.deleteTask(taskId)
    .subscribe(response=>{
      alertify.success(response);
      this.getTasks();
    }); 
  }

  toedit(task:any){
    localStorage.setItem("TaskId",task.taskId);
    localStorage.setItem("TaskTitle",task.taskTitle);
    localStorage.setItem("TaskDescription",task.description);
    localStorage.setItem("TaskDate",task.date);
    localStorage.setItem("TaskPriority",task.priority);
    localStorage.setItem("TaskImage",task.image);
    this.router.navigateByUrl('/uploadstudio');
  }


  openModal(){
    this.display="block";
  }

  onCloseHandled(){
    this.display="none";
  }

  openSnackBar(message:string,action:any,taskId:string){
    let snackBarRef=this.snackBar.open(message,action);

    snackBarRef.afterDismissed().subscribe(()=>{
      console.log('After completion'+taskId);
      this.deleteTask(taskId);
      this.getTasks();
    })
  }


  isBadgeHidden:boolean=true
  noOfIncomplete:number=0;
  incomplete:any


  userlist:any

// ngOnInit(): void {
//   this.initialValues=this.registerForm.value;
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

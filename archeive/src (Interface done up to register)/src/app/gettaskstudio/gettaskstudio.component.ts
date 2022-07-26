import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-gettaskstudio',
  templateUrl: './gettaskstudio.component.html',
  styleUrls: ['./gettaskstudio.component.css']
})
export class GettaskstudioComponent {
  display = "none";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  snackBar: any;
    openModal(){
      this.display="block";
    }
    isBadgeHidden:boolean=true;
    noOfIncomplete:number=0;

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private taskservice:TaskService ) {}
  email:any
  taskList:any
  username:string
  incomplete:any
  initialValues:any

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
    this.username=localStorage.getItem("username");
  }

  getTasks(){
    this.email=localStorage.getItem("emailId");
    this.taskservice.getTaskByEmailId(this.email)
    .subscribe(response=>{
      this.taskList=response;
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
      alert(response);
      this.getTasks();
    }); 
  }

  toedit(task:any){
    localStorage.setItem("TaskId",task.taskId);
    localStorage.setItem("Tasktitle",task.taskTitle);
    localStorage.setItem("TaskDescription",task.description);
    localStorage.setItem("TaskDate",task.date);
    localStorage.setItem("TaskPriority",task.priority);
    localStorage.setItem("TaskImage",task.image);
    this.router.navigateByUrl('/uploadstudio');
  }

  openSnackBar(message:string,action:any,taskId:string){
    let snackBarRef=this.snackBar.open(message,action);

    snackBarRef.afterDismissed().subscribe(()=>{
      console.log('After completion'+taskId);
      this.deleteTask(taskId);
      this.getTasks();
    })
  }

  onCloseHandled(){
    this.display="none";
  }

}

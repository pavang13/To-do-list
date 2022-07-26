import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskStudioComponent } from './addtask-studio/addtask-studio.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { GettaskstudioComponent } from './gettaskstudio/gettaskstudio.component';
import { HighpriorityComponent } from './highpriority/highpriority.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LowpriorityComponent } from './lowpriority/lowpriority.component';
import { MediumpriorityComponent } from './mediumpriority/mediumpriority.component';
import { RegisterComponent } from './register/register.component';
import { StudioComponent } from './studio/studio.component';
import { TaskComponent } from './task/task.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { UploadstudioComponent } from './uploadstudio/uploadstudio.component';
import { UploaduserComponent } from './uploaduser/uploaduser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent

  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"task",
    component:TaskComponent
  },
  {
    path:"addtask",
    component:AddtaskComponent
  },
  {
    path:"view",
    component:ViewtaskComponent
  },
  {
    path:"update",
    component:UpdatetaskComponent
  },
  {
    path:"studio",
    component:StudioComponent
  },
  {
    path:"addtaskstudio",
    component:AddtaskStudioComponent
  },
  {
    path:"gettaskstudio",
    component:GettaskstudioComponent
  },
  {
    path:"uploadstudio",
    component:UploadstudioComponent
  },
  {
    path:"userdetails",
    component:UserdetailsComponent
  },
  {
    path:"uploaduser",
    component:UploaduserComponent
  },
  {
    path:"highpriority",
    component:HighpriorityComponent
  },
  {
    path:"mediumpriority",
    component:MediumpriorityComponent
  },
  {
    path:"lowpriority",
    component:LowpriorityComponent
  },
  {
    path:"viewtask",
    component:ViewtaskComponent
  },
  {
    path:"forgotpassword",
    component:ForgotpasswordComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

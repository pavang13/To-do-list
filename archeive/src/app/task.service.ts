import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient:HttpClient) { }


  baseurl:string="http://localhost:8050/taskservice"

  userurl:string="http://localhost:8050/user"

  token:string=''
  reqHeader:any;

  addTasks(data:any){
    this.token=localStorage.getItem('tgt')||''
    console.log(this.token)
    this.reqHeader=new HttpHeaders().set("Authorization",'Bearer '+this.token).set('access-control-allow-origin', '*');
    return this.httpClient.post<any>(this.baseurl+"/addtask",data,{headers:this.reqHeader});
  }

  getAllTasks(){
    this.token=localStorage.getItem('tgt')||''
    console.log(this.token)
    this.reqHeader=new HttpHeaders().set("Authorization",'Bearer '+this.token).set('access-control-allow-origin', '*');
    return this.httpClient.get<any>(this.baseurl+"/getalltasks",{headers:this.reqHeader});
  }

  deleteTask(id:number){
    this.token=localStorage.getItem('tgt')||''
    console.log(this.token)
    this.reqHeader=new HttpHeaders().set("Authorization",'Bearer '+this.token).set('access-control-allow-origin', '*');
    return this.httpClient.delete<any>(this.baseurl+"/delete/"+id,{headers:this.reqHeader,responseType:"text" as "json"});
  }

  updateTask(data:any){
    this.token=localStorage.getItem('tgt')||''
    console.log(this.token)
    this.reqHeader=new HttpHeaders().set("Authorization",'Bearer '+this.token).set('access-control-allow-origin', '*');
    return this.httpClient.put<any>(this.baseurl+"/update",data,{headers:this.reqHeader});
    
  }

  getTaskByEmailId(emailId:any){
    this.token=localStorage.getItem('tgt')||''
    console.log(this.token)
    this.reqHeader=new HttpHeaders().set("Authorization",'Bearer '+this.token).set('access-control-allow-origin', '*');
    return this.httpClient.get<any>(this.baseurl+"/gettaskbyemailid/"+emailId,{headers:this.reqHeader});

  }

  updateUser(data:any){
    this.token=localStorage.getItem('tgt')||''
    console.log(this.token)
    this.reqHeader=new HttpHeaders().set("Authorization",'Bearer '+this.token).set('access-control-allow-origin', '*');
    return this.httpClient.put<any>(this.userurl+"/updateuser",data,{headers:this.reqHeader});
    
  }

  getUserDetails(emailId:any){
    this.token=localStorage.getItem('tgt')||''
    console.log(this.token)
    this.reqHeader=new HttpHeaders().set("Authorization",'Bearer '+this.token).set('access-control-allow-origin', '*');
    return this.httpClient.get<any>(this.userurl+"/getuser/"+emailId,{headers:this.reqHeader});

  }



}

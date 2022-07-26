import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetpasswordService {

  constructor(private httpClient:HttpClient) { }

  userurl:string="http://localhost:8050/user"

  token:string=''
  reqHeader:any;


  getPassword(eid:any){
    this.reqHeader=new HttpHeaders().set('access-control-allow-origin', '*');
    return this.httpClient.get<any>(this.userurl+"/getPassword/"+window.localStorage.getItem("eid"),{headers:this.reqHeader});
  }
}

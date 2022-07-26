import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  baseUrl:string="http://localhost:8050/authentication";
  loginUser(data:any){
   return this.httpClient.post<any>(this.baseUrl+"/login",data);
  }
}

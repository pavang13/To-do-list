import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient ) { }
  baseurl:string="http://localhost:8050/authentication/register";
  registerUser(data:any){
   return this.httpClient.post<any>(this.baseurl,data);
  }



 

  
}

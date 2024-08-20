import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpservicesService } from './httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  Email : string = '';
  Password : string = '';

  constructor(private httpservices : HttpservicesService) { }
  loginAPIcall(url : any){
    return this.httpservices.postAPICall(url,{Email : this.Email, Password : this.Password});
  }
}

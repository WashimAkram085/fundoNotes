import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  BaseUrl = 'http://localhost:3000/';

  constructor(private httpclient : HttpClient) {
   }

    getApiCall(url:any){
      return this.httpclient.get(this.BaseUrl+url);
    }

    postAPICall(url:any,data:any){
      return this.httpclient.post(this.BaseUrl+url,data);
    }
}

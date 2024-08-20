import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {
  BaseUrl = 'https://fundoonotes.incubation.bridgelabz.com/api//user/login';

  constructor(private httpclient: HttpClient) {
  }

  // to post the log in data in the api body
  login(data: any) {
    return this.httpclient.post(this.BaseUrl, data);
  }

  // getNotes(){
  //   console.log("API is on");
  //   return this.httpclient.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=7iCJEpYTdL5h3OAfv4MiACxQrX2Gpbb3ZyMlv1uWly5W2ifuwhOoBAYFHEyRJ8Q5");
  // }
}

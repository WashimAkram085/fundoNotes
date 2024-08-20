import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpservicesService } from './httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
  constructor(private httpservice : HttpservicesService, private httpclient: HttpClient) {}

  getNotes(){
    console.log("API is on");
    return this.httpclient.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=7iCJEpYTdL5h3OAfv4MiACxQrX2Gpbb3ZyMlv1uWly5W2ifuwhOoBAYFHEyRJ8Q5");
  }

}

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
    const id = localStorage.getItem("access_token");
    // console.log(id);
    return this.httpclient.get(`https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=${id}`);
  }

  addNotes(data:any){
    const id = localStorage.getItem("access_token");
    return this.httpclient.post(`https://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes?access_token=${id}`,data);
  }

}

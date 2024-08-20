import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpservicesService } from './httpservices.service';

@Injectable({
  providedIn: 'root'
})
export class NoteservicesService {
  constructor(private httpservice : HttpservicesService) {}

  getNotes(url : any){
    return this.httpservice.getApiCall('notes/'+url);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  name: string = '';
  email: string = '';
  password: string = '';
  dob: string = '';
  gender: string = '';

  constructor(private httpclient: HttpClient) { }

  setname(fname: string, lname: string) {
    this.name = fname + ' ' + lname;
  }
  setemail(email: string) {
    this.email = email;
  }
  setpassword(password: string) {
    this.password = password;
  }
  setdob(dob: string) {
    this.dob = dob;
  }
  setgender(gender: string) {
    this.gender = gender;
  }

  // display() {
  //   console.log(this.name);
  //   console.log(this.email);
  // }

}

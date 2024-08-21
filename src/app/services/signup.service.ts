import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { last } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  dob : string = '';
  password: string = '';
  service: string = 'advance';
  gender: string = '';



  constructor(private httpclient: HttpClient) { }

  setname(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
    //console.log(this.name);
  }
  // getname() {
  //   return this.name;

  // }
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
    //console.log(this.gender);
  }

  getData() {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      service : this.service,
    };
    //console.log(data);
    return data;
  }





  // display() {
  //   console.log(this.name);
  //   console.log(this.email);
  // }


  // to post the log in data in the api body
  signup(data: any) {
    console.log(data);
    return this.httpclient.post('https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', data);
  }
}

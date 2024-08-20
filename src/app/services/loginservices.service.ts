import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private email: string = '';
  private password: string = '';
  setEmail(email: string) {this.email = email;};
  getEmail() {return this.email;};
  setPassword(password: string) {this.password = password;};
  getPassword() {return this.password;};
 
 
  constructor() { }
}
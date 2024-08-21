import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  signupform!: FormGroup;


  email: string = '';
  confirmEmail: string = '';
  //lname: string = '';


  constructor(private fb: FormBuilder, private route: Router, private httpservice: HttpservicesService, private signupservice: SignupService) {
    this.signupform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
    });

  }

  regformsubmit() {

    this.email = this.signupform.get('email')?.value;
    this.confirmEmail = this.signupform.get('confirmEmail')?.value;

    if (this.email != this.confirmEmail) {
      alert("Emails do not match");
      return;
    } else {
      console.log(this.email);
      this.signupservice.setemail(this.email);
      this.route.navigate(['register/password']);
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent {
  signupform!: FormGroup;


  fname: string = '';
  lname: string = '';

  constructor(private fb: FormBuilder, private route: Router, private httpservice: HttpservicesService, private signupservice: SignupService) {
    this.signupform = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3)]],
      lname: ['',]
    });

  }

  regformsubmit() {
    if (this.signupform.invalid) {
      // If the form is invalid, do not proceed
      console.log('Form is invalid');
      return;
    }
      
    this.fname = this.signupform.get('fname')?.value;
    this.lname = this.signupform.get('lname')?.value;

    //console.log(this.fname);
    console.log(this.lname);

    this.signupservice.setname(this.fname, this.lname);
    
    //console.log(this.signupservice.getname());
    this.route.navigate(['register/birthday']);
  }
}

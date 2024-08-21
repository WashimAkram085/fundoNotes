import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent {
  signupform!: FormGroup;
  dob: string = '';
  gender: string = '';
  constructor(private router: Router, private signupservice: SignupService, private fb: FormBuilder) {
    this.signupform = this.fb.group({
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });
  }

  regformsubmit() {
    if (this.signupform.invalid) {
      // If the form is invalid, do not proceed
      console.log('Form is invalid');
      return;
    }
    else {
      this.dob = this.signupform.get('dob')?.value;

      this.gender = this.signupform.get('gender')?.value;
      console.log(this.dob);
      console.log(this.gender);

      this.signupservice.setdob(this.dob);
      this.signupservice.setgender(this.gender);

      this.router.navigate(['register/email']);
    }

  }
  // goToNext() {
  //   this.router.navigate(['register/password']);
  // }
}

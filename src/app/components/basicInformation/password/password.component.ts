import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  signupform!: FormGroup;

  password: string = '';
  confirmPassword: string = '';

  constructor(private fb: FormBuilder, private route: Router, private signupservice: SignupService) {
    this.signupform = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  regformsubmit() {
    

    this.password = this.signupform.get('password')?.value;
    this.confirmPassword = this.signupform.get('confirmPassword')?.value;

    if (this.signupform.invalid) {
      // If the form is invalid, do not proceed
      console.log('Form is invalid');
      return;
    }else if (this.password != this.confirmPassword) {
      alert("Passwords do not match");
      return;
    } else {
      console.log(this.password);
      this.signupservice.setpassword(this.password);
      this.route.navigate(['']);
    }
  }

}

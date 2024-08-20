import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private route: Router, private httpservice: HttpservicesService) {

  }
  email : string = '';
  password : string = '';

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  submitform(){
    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;
    console.log(this.email);
    console.log(this.password);

    this.httpservice.login({email:this.email,password:this.password}).subscribe(
      (res:any)=>{
        console.log(res);
        const id = res.id;
        console.log("response",id);
        localStorage.setItem("access_token",id);
        this.route.navigate(['/dashboard']);
      },
      (err:any)=>{
        console.log("response",err);
      }
    );

  }


  openNewAccount(e: Event) {
    e.preventDefault();
    //@ts-ignore
    document.getElementById('newcard').style.display = 'block';
  }

}
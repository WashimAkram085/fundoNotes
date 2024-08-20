import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/loginservices.service';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private LoginServiceService: LoginserviceService, private userServcies: UserservicesService) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  handleLogin() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    this.LoginServiceService.setEmail(email);
    console.log(email);

    this.LoginServiceService.setPassword(password);
    console.log(password);

    const email1 = this.LoginServiceService.getEmail();
    console.log(email1);

    const password1 = this.LoginServiceService.getPassword();
    console.log(password1);

    this.userServcies.loginAPIcall({email:"qwerty123@samp.com",password:"qwerty123"}).subscribe({
      next:(res:any)=>{
       const {id} = res;
       console.log("response",id);
       localStorage.setItem("access_token",id);
       this.route.navigate(['./dashboard/']);
      },
      error:(err: any) => {
        console.log("response",err);
      }
    });

  }

  openNewAccount(e: Event) {
    e.preventDefault();
    //@ts-ignore
    document.getElementById('newcard').style.display = 'block';
  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpservicesService } from 'src/app/services/httpservices.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  currentRout :string = '';
  constructor(private router : Router, private httpservice : HttpservicesService, private fb : FormBuilder) { 
    this.router.events.subscribe((val) => {
      this.currentRout = this.router.url;
    })
  }

  // submitregform(){

  // }
}

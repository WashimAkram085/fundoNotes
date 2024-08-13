import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  currentRout :string = '';
  constructor(private router : Router) { 
    this.router.events.subscribe((val) => {
      this.currentRout = this.router.url;
    })
  }
}

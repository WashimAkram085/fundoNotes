import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss']
})
export class BirthdayComponent {
  constructor(private router: Router) {}

  goToNext() {
    this.router.navigate(['register/password']);
  }
}

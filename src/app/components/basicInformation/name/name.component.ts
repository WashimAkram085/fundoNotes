import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent {
  constructor(private router: Router) {}

  goToNext() {
    this.router.navigate(['register/birthday']);
  }
}

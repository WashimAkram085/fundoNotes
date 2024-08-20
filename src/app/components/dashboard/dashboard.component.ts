import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  currentRoute: string = '';
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      this.currentRoute = this.router.url;
    })
  }
}

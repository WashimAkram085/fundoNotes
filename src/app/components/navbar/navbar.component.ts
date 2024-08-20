import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navTitile : string = 'FundooNotes';

  constructor(private router : Router) { }

  logout(){
    localStorage.removeItem("access_token");
    this.router.navigate(['']);
  }
}

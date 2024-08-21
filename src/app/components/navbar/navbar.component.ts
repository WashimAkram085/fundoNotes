import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navTitile: string = 'FundooNotes';

  constructor(private router: Router) { }

  logout() {
    let dlt : boolean = confirm("Do you want to logout?");
    //console.log(dlt);
    if (!dlt) {
      //console.log('Logout cancelled');
      return;
    } else {
      localStorage.removeItem("access_token");
      this.router.navigate(['']);
    }
  }
}

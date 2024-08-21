import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navTitile: string = 'FundooNotes';

  constructor(private router: Router, private searchservice : SearchService) { }

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

  search : string = '';

  onsearch() {
    this.searchservice.updateSearch(this.search);
  }
}

import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private searchservice: SearchService) { }

  sidebar: boolean = true;

  ngOnInit(): void {
    this.searchservice.sidebar.subscribe((val: any) => {
      this.sidebar = val;
    });
  }

}

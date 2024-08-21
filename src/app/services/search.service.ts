import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search = new BehaviorSubject('');
  
  sidebar = new BehaviorSubject(true);

  updateSearch(value: string) {
    this.search.next(value);
  }

  updateSidebar(value: boolean) {
    this.sidebar.next(value);
  }

  constructor() { }


}

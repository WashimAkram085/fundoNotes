import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  openNewAccount(e: Event) {
    e.preventDefault();
    //@ts-ignore
    document.getElementById('newcard').style.display = 'block';
  }
}

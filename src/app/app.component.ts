import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaploittePayrollFrontend';
  constructor() {
    if (localStorage.getItem('currentUser') === null) {
      localStorage.setItem('currentUser', JSON.stringify({
        "sub": "",
        "Role": "",
        "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": "",
        "exp": 0,
        "iss": "",
        "aud": ""
      }))
    }

    if (localStorage.getItem('JwtToken') === null) {
        localStorage.setItem('JwtToken', '');
    }
  }
}

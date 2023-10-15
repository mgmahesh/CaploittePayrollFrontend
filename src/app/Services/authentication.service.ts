import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isLogged(): boolean {
    let user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return (user.sub === "" || user.sub === null) ? false : true;
  }

  currentUser():any{
    return JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  getJwt():any{
    return localStorage.getItem('JwtToken') 
  }
}

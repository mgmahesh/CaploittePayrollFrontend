import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuardService {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.auth.isLogged()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

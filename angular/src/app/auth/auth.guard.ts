import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  // 
  constructor(public auth: AuthService, public router: Router) {
    console.log("AuthGuard");
  }

  canActivate(): boolean {
    console.log("canActivate");
    if (!this.auth.isAuthenticated()) {
      console.log("Authentication failed! isAuthenticated");
      
      this.router.navigate(['/main/login']);
      return false;
    }
    console.log("Authentication sucess! isAuthenticated");
    return true;
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  // public jwtHelper: JwtHelperService
  constructor() {}

  // ...
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');
    console.log("token inside authservice:", token);
    
    // Check whether the token is expired and return
    // true or false
    return true;
  }

}
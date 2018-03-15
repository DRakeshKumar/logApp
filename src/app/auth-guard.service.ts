import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (localStorage.getItem('apiToken') !== null) {
      console.log('getting true..')
      return true;
    }
    this.router.navigate(['/']);
    return false;
   /* if (this.authService.loggedIn()) {
     // this.router.navigateByUrl('/dashboard');
      return true;
    } else {
      console.log('-------------------2' + this.authService.loggedIn())
      this.router.navigateByUrl('/');
      return false;
    }*/

  }
}

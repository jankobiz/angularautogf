import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ForumsRouteGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const id = +next.url[1].path;
      // if (isNaN(id) || id < 1) {
      //     alert('Invalid Site ID');
      //     // start a new navigation to redirect to list page
      //     this.router.navigate(['/sites']);
      //     // abort current navigation
      //     return false;
      // }
      return true;
  }
}

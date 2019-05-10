import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}
  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
       if (user ) {
         return true;
       } else {
         this.router.navigate(['Login'], { queryParams: { returnUrl: state.url}});
         return false;
       }
    });
  }

}


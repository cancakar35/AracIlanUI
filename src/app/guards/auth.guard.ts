import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private authService:AuthService, private router:Router,
    private toastr:ToastrService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean {
    if(this.authService.isAuthenticated()){
      return true;
    }
    else {
      this.router.navigate(["login"], {queryParams:{next:state.url}});
      this.toastr.warning("Giriş yapmalısınız.", "Uyarı");
      return false;
    }
  }
}

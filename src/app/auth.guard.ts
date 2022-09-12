import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public routes:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean{
    if(localStorage.getItem('uname')==null && localStorage.getItem('pwd')==null){
      this.routes.navigate(['/login']);
      return false;
    }
    else{
      return true;
    }
  }
  
}

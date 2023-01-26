import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      console.log(state.url);
      return this.checkLoggedIn(state.url);


}
 checkLoggedIn(url:string):boolean{


    if(!this.authService.isLoggedIn()){
        this.router.navigate(['/login']);
        return true;
    }
    
    
    /* return false; */
 }





}
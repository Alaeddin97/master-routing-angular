import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from "@angular/router"
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn:'root'})
export class authGuard implements CanActivateChild{
    constructor(private authService:AuthService,private router:Router){}
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.isAuthenticated()
        .then(
            (isLoggin: boolean) => {
                if (isLoggin) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                }
            }
        );
    }
}
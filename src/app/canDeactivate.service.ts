import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export  interface canDeactivateComponent{
canDeactivate:()=>boolean|Promise<boolean>|Observable<boolean>;
}

@Injectable({providedIn:'root'})
export class canDeactivateGuard implements CanDeactivate<canDeactivateComponent>{
    canDeactivate(
        component: canDeactivateComponent, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot)
        : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canDeactivate();
    }
}
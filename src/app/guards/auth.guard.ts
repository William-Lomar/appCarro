import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth/auth.service";


@Injectable({
    providedIn:'root'
})
//canActive, CanaAtiveChild, CanDeactivate (é necessário passar o component),Resolve, CanLoad(usado quando tem a prop loadChildren)
export class AuthGuard implements CanActivate{
    constructor(
        private authService:AuthService,
        private router:Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | boolean{
        if(this.authService.verificaUsuario()){
            return true;
        }else{
            this.router.navigate(['/login']);
            return false
        }
    }
}



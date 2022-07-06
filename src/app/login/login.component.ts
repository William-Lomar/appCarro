import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
import { Usuario } from "../shared/interfaces/usuario.interface";


@Component({
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{

    usuario:Usuario = {
        nome:'',
        senha:''
    };

    constructor(
        private authService:AuthService,
        private router:Router
    ){} 

    logar(){
        if( this.authService.fazerLogin(this.usuario)){
            this.router.navigate(["/home"]);
        }else{
            console.log("Usuario ou senha incorretos");
            this.usuario = {
                nome:'',
                senha:''
            }
        }
    }
}
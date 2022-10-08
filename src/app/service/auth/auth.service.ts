import { loadingService } from './../loading.service';
import { Injectable,EventEmitter } from "@angular/core";
import { Usuario } from "../../shared/interfaces/usuario.interface";


@Injectable({
    providedIn:'root'
})
export class AuthService{

    constructor(
      private loading:loadingService
    ){}

    mostrarMenu = new EventEmitter();

    usuarioAutenticado:boolean = false;

    fazerLogin(usuario:Usuario){

        if (usuario.nome == 'william' && usuario.senha == 'masterkey'){
            this.usuarioAutenticado = true;
            this.mostrarMenu.emit(this.usuarioAutenticado);
            return true
        }else{
            this.usuarioAutenticado = false;
            this.mostrarMenu.emit(this.usuarioAutenticado);

            return false
        }
    }

    verificaUsuario(){
      let user = this.loading.getUser();
      return user;


    }

}

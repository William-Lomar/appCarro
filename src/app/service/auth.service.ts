import { Injectable,EventEmitter } from "@angular/core";
import { Usuario } from "../shared/interfaces/usuario.interface";


@Injectable({
    providedIn:'root'
})
export class AuthService{
    mostrarMenu = new EventEmitter();

    fazerLogin(usuario:Usuario){
        if (usuario.nome == 'william' && usuario.senha == 'masterkey'){
            console.log('Usuario correto');
            this.mostrarMenu.emit(true);
            return true
        }else{
            this.mostrarMenu.emit(false);
            return false
        }
    }

}
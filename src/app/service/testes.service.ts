import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'any' // any -> Gera uma instancia para o modulo , Root -> gera uma instancia global, platform -> Instancia superior ao root, usado para mais de uma aplicação angular
})
export class TestesService{
    valorTeste:string = 'testando valor';
}
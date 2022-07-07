import { Component } from "@angular/core";
import { TestesService } from "src/app/service/testes.service";


@Component({
    selector:'app-Pai',
    templateUrl: './pai.component.html'
})
export class PaiComponent{
    constructor(private testeService:TestesService){}

    teste = this.testeService.valorTeste;

    atualizarValor(){
        this.testeService.valorTeste = this.teste;
    }

    pegarValor(){
        this.teste =  this.testeService.valorTeste;
    }
}
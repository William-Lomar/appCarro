import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TestesService } from "src/app/service/testes.service";


@Component({
    selector:'app-filho',
    templateUrl: './filho.component.html',
})
export class FilhoComponent implements OnInit{
    @Output() testes = new EventEmitter;

    constructor(private testeService:TestesService){}

    teste = this.testeService.valorTeste;

    ngOnInit(): void {
        console.log("Filho instanciado")
    }

    emitir(){
        console.log('Clicou no filho');
        this.testes.emit("Passando informações para o pai");
    }

    atualizarValor(){
        this.testeService.valorTeste = this.teste;
    }

    pegarValor(){
        this.teste =  this.testeService.valorTeste;
    }

}
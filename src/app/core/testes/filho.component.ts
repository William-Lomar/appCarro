import { Component, OnInit, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'app-filho',
    templateUrl: './filho.component.html',
})
export class FilhoComponent implements OnInit{
    @Output() testes = new EventEmitter;

    constructor(){}

    ngOnInit(): void {
        console.log("Filho instanciado")
    }

    emitir(){
        console.log('Clicou no filho');
        this.testes.emit("Passando informações para o pai");
    }
}
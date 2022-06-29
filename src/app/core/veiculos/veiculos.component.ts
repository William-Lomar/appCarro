import { Component, OnInit } from "@angular/core";
import { VeiculosService } from "src/app/service/veiculos.service";
import { VeiculoInterface } from "src/app/shared/interfaces/veiculo.interface";

@Component({
    templateUrl: './veiculos.component.html'
})

export class VeiculosComponent implements OnInit{
    constructor(private veiculoService:VeiculosService){}

    results : object = {};

    carros:VeiculoInterface[] = [];
    
    ngOnInit(): void {
        this.getAll();
    }

    getAll():void{
        this.veiculoService.getVeiculos().subscribe({
            next: (retorno)=>{
                this.carros = retorno;
            },
            error: (erro)=>{
                console.log(erro)
            }
        })
    }

    excluirCarro(id:number){
        this.veiculoService.excluirVeiculo(id).subscribe({
            next:(retorno)=>{
                console.log(retorno);
            },error:(erro)=>{
                console.log(erro);
            }
        });
        this.getAll();

    }
}
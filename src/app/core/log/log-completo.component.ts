import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VeiculosService } from "src/app/service/veiculos.service";
import { LogInterface } from "src/app/shared/interfaces/log.interface";
import { VeiculoInterface } from "src/app/shared/interfaces/veiculo.interface";

@Component({
    templateUrl: './log-completo.component.html'
})
export class logCompletoComponent implements OnInit{

    constructor(private veiculoService:VeiculosService, private activatedRoute:ActivatedRoute){}

    id:number = 0;

    carro!:VeiculoInterface; 

    logs: LogInterface[] = [];

    ngOnInit(): void {
        this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;

        this.veiculoService.getVeiculoId(this.id).subscribe({
            next: (retorno)=>{
                this.carro = retorno[0];
            },error: (erro)=>{
                console.log(erro);
            }
        })

        this.veiculoService.getLogCompleto(this.id).subscribe({
            next:(retorno)=>{
                this.logs = retorno;
            },error:(erro)=>{
                console.log(erro);
            }
        })
    }
}
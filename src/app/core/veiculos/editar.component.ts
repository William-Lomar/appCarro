import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VeiculosService } from "src/app/service/veiculos.service";
import { VeiculoInterface } from "src/app/shared/interfaces/veiculo.interface";

@Component({
    templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit{

    carro:VeiculoInterface[] = [];

    id:number = 0;

    constructor(private veiculosService:VeiculosService, private activedRoute:ActivatedRoute){}
    
    ngOnInit(): void {
        this.id = +this.activedRoute.snapshot.paramMap.get('id')!;

        this.veiculosService.getVeiculoId(this.id).subscribe({
            next:(carro)=>{
                this.carro = carro;
            },error:(erro)=>{
                console.log(erro)
            }
        })
    }

    atualizar(){
        this.veiculosService.atualizarVeiculo(this.carro[0]).subscribe({
            next:(results)=>{
                console.log(results);
            },error:(erro)=>{
                console.log(erro);
            }
        })
    }

}
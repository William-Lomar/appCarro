import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AlertModalService } from "src/app/service/alert-model.service";
import { VeiculosService } from "src/app/service/veiculos.service";
import { VeiculoInterface } from "src/app/shared/interfaces/veiculo.interface";

@Component({
    templateUrl: './editar.component.html'
})
export class EditarComponent implements OnInit{

    carro!:VeiculoInterface;

    id:number = 0;

    constructor(private veiculosService:VeiculosService, private activedRoute:ActivatedRoute, private alertService:AlertModalService){}
    
    ngOnInit(): void {
        this.activedRoute.params.subscribe(
            (params:any)=>{
                this.id = params['id']
                this.getVeiculo()
            }
        )
    }

    getVeiculo(){
        this.veiculosService.getVeiculoId(this.id).subscribe({
            next:(carro)=>{
                this.carro = carro[0];
            },error:(erro)=>{
                console.log(erro)
            }
        })
    }

    atualizar(){
        this.veiculosService.atualizarVeiculo(this.carro).subscribe({
            next:(results)=>{
                console.log(results);
            },error:(erro)=>{
                console.log(erro);
            },complete:()=>{
                this.alertService.showAlert({
                    type:'success',
                    message:"Veículo atualizado com sucesso!"
                })
            }
        })
    }

}


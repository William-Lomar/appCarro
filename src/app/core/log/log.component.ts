import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VeiculosService } from "src/app/service/veiculos/veiculos.service";
import { LogInterface } from "src/app/shared/interfaces/log.interface";
import { VeiculoInterface } from "src/app/shared/interfaces/veiculo.interface";

@Component({
    templateUrl: './log.component.html'
})
export class LogComponent implements OnInit{
    constructor(private veiculoService:VeiculosService, private activatedRoute:ActivatedRoute){}
    id:number = 0;

    carro!:VeiculoInterface;

    logs: LogInterface[] = [];

    logCadastro: LogInterface = {
        id:0,
        data:'',
        km_final:0,
        km_inicial:0,
        motorista:'',
        objetivo:'',
        obs:'',
        carro_id:0
    }

    ngOnInit(): void {
        this.id = +this.activatedRoute.snapshot.paramMap.get('id')!;
        this.logCadastro.carro_id = this.id;

        this.getCarro();
        this.getLog();
    }

    getCarro(){
        this.veiculoService.getVeiculoId(this.id).subscribe({
            next: (retorno)=>{
                this.carro = retorno[0];
            },error: (erro)=>{
                console.log(erro);
            }
        })
    }

    getLog(){
        this.veiculoService.getLog(this.id).subscribe({
            next:(retorno)=>{
                this.logs = retorno;
                console.log(retorno);
            },error:(erro)=>{
                console.log(erro);
            }
        })
    }

    cadastrarLog(){
         this.veiculoService.cadastrarLog(this.logCadastro).subscribe({
            next:(results)=>{
                console.log(results);
            },error:(erro)=>{
                console.log(erro);
            },complete:()=>{
              this.getLog();
            }
         })

         this.logCadastro = {
            id:0,
            data:'',
            km_final:0,
            km_inicial:0,
            motorista:'',
            objetivo:'',
            obs:'',
            carro_id:this.id
        }
    }

}

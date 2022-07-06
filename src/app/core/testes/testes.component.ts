import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { finalize, tap } from "rxjs";
import { VeiculosService } from "src/app/service/veiculos.service";

@Component({
    templateUrl: './testes.component.html'
})

export class TestesComponent{
    constructor(private http:HttpClient,private veiculoService:VeiculosService){

    }

    resultadoApiPython = '';


    testePipe(){ // Pipe Prepara o Observable para mais funções ou tarefas quando for realizada um subscription / examples: map, filter ... 
        this.veiculoService.getVeiculos().pipe(
            tap(
                {
                    next:(value)=>{
                        console.log(value)
                    },error:()=>{

                    },complete:()=>{

                    }
                }
            ),
            finalize(
                ()=>{
                    console.log("finalizei minha requisição")
                }
            )
        ).subscribe({
            next:(value)=>{
                //console.log(value)
            },error:()=>{
                console.log("Ocorreu um erro")
            },complete:()=>{
                console.log("requisição realizada com sucesso");
            }
        })
        console.log("testando!");
    }

    testesApiPython(){
        this.veiculoService.testesPython().subscribe({
            next:(results)=>{
                console.log(results)
            },error:(err)=>{
                console.log(err)
            }
        })
    }

    filhoChamando(dados:any){
        console.log('Filho Chamou para: '+dados)
    }

}
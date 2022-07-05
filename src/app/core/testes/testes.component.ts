import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";
import { VeiculosService } from "src/app/service/veiculos.service";

@Component({
    templateUrl: './testes.component.html'
})

export class TestesComponent{
    constructor(private http:HttpClient,private veiculoService:VeiculosService){

    }

    resultadoApiPython = '';

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
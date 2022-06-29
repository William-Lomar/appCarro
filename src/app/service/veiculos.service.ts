import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { VeiculoInterface } from "../shared/interfaces/veiculo.interface";
import { LogInterface } from "../shared/interfaces/log.interface";

@Injectable({
    providedIn:'root'
})
export class VeiculosService{
    constructor(private httpClient:HttpClient){}

    private apiUrl: string = 'http://localhost:3100/api/';

    getVeiculos():Observable<VeiculoInterface[]>{
        return this.httpClient.get<VeiculoInterface[]>(this.apiUrl+'veiculos');
    }

    getVeiculoId(id:number):Observable<VeiculoInterface[]>{
        return this.httpClient.get<VeiculoInterface[]>(this.apiUrl+'veiculo/'+id);
    }

    getLog(id:number):Observable<LogInterface[]>{
        return this.httpClient.get<LogInterface[]>(this.apiUrl+'log/'+id);
    }

    getLogCompleto(id:number):Observable<LogInterface[]>{
        return this.httpClient.get<LogInterface[]>(this.apiUrl+'logCompleto/'+id);
    }

    cadastrarVeiculo(){

    }

    atualizarVeiculo(){

    }

    excluirVeiculo(id:number):Observable<object>{
        return this.httpClient.delete<object>(this.apiUrl+'deletarCarro/'+id);
    }
}
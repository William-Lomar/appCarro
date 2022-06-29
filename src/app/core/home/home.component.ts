import { Component, OnInit } from "@angular/core";
import { VeiculosService } from "../../service/veiculos.service";
import { VeiculoInterface } from "src/app/shared/interfaces/veiculo.interface";

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
    carros: VeiculoInterface[] = [];

    constructor(private veiculoService:VeiculosService){}

    ngOnInit(): void {
        this.veiculoService.getVeiculos().subscribe({
            next: (retorno)=>{
                this.carros = retorno;
            },
            error: (erro)=>{
                console.log(erro)
            }
        })
    }

}
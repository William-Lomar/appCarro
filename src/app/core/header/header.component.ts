import { Component, OnInit } from "@angular/core";
import { VeiculosService } from "src/app/service/veiculos.service";
import { VeiculoInterface } from "src/app/shared/interfaces/veiculo.interface";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
    carros: VeiculoInterface[] = [{
        id:0,
        marca:'',
        placa:''
    }];

    constructor(private service:VeiculosService){}

    ngOnInit(): void {
        this.pegarVeiculos();
    }

    pegarVeiculos(){
        this.service.getVeiculos().subscribe({
            next: (retorno)=>{
                this.carros = retorno;
            },
            error: (erro)=>{
                console.log(erro)
            }
        })
    }


}
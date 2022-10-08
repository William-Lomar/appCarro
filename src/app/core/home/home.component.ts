import { Component, OnInit } from "@angular/core";
import { VeiculosService } from "../../service/veiculos/veiculos.service";
import { VeiculoInterface } from "src/app/shared/interfaces/veiculo.interface";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AlertModalService } from "src/app/service/alert-model.service";
import { TestesService } from "src/app/service/testes.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
    carros: VeiculoInterface[] = [];
    bsModalRef!: BsModalRef;
    results = {
        carros:[]
    };

    constructor(
        private veiculoService:VeiculosService,
        private modalService:BsModalService,
        private alertService:AlertModalService,
        private route:ActivatedRoute
        ){}

    ngOnInit(): void {
        this.route.data.subscribe((info)=>{
            this.carros = info["carros"];
        })


        // this.veiculoService.getVeiculos().subscribe({
        //     next: (retorno)=>{
        //         this.carros = retorno;
        //     },
        //     error: (erro)=>{
        //         console.log(erro);
        //         this.alertService.showAlert({
        //             type:'danger',
        //             message:"Erro ao conectar ao back-end!!"
        //         });
        //     }
        // })
    }
}

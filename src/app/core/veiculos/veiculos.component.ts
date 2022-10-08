import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { EMPTY, Subject, switchMap, take } from "rxjs";
import { AlertModalService } from "src/app/service/alert-model.service";
import { VeiculosService } from "src/app/service/veiculos/veiculos.service";
import { ConfirmComponent } from "src/app/shared/alerts/confirm.component";
import { VeiculoInterface } from "src/app/shared/interfaces/veiculo.interface";

@Component({
    templateUrl: './veiculos.component.html'
})

export class VeiculosComponent implements OnInit{
    userForm:FormGroup;
    modalRef!:BsModalRef;
    idExcluir:number = 0;

    constructor(private veiculoService:VeiculosService,
          private fb:FormBuilder,
          private alertService:AlertModalService,
          ){
        this.userForm = this.fb.group({
            id:0,
            marca:'',
            placa:''
        })
    }

    results : object = {};

    carros:VeiculoInterface[] = [];

    ngOnInit(): void {
        // this.router.navigate(['/']); -> redireciona para a rota desejada

        // this.userForm.patchValue({ -> Seta os valores do formulario
        //     id:0,
        //     marca:'',
        //     placa:''
        // })

        this.getAll();
    }

    getAll():void{
        this.veiculoService.getVeiculos().subscribe({
            next: (retorno)=>{
                this.carros = retorno;
            },
            error: (erro)=>{
                console.log(erro);
                this.alertService.showAlert({
                    type:'danger',
                    message:"Erro ao conectar ao back end"
                });
            }
        })
    }

    confirmExcluir(id:number){
        const result$ = this.alertService.confirmAlert();
        result$.subscribe((result)=>{
            if(result){
                this.ExcluirCarro(id)
            }
        })
    }

    ExcluirCarro(id:number){
        this.veiculoService.excluirVeiculo(id).subscribe({
                next:(retorno)=>{
                    console.log(retorno);
                },error:(erro)=>{
                    console.log(erro);
                    this.alertService.showAlert({
                        type:'danger',
                        message:'Erro ao excluir carro!'
                    })
                },complete:()=>{
                    this.getAll();
                    this.alertService.showAlert({
                        type:'success',
                        message:'Carro excluído com sucesso!'
                    })
                }
        });
    }

    cadastrarCarro(){
        this.veiculoService.cadastrarVeiculo(this.userForm.value).subscribe({
            next:(results)=>{
                console.log(results);
                this.userForm.reset();
            },error:(erro)=>{
                console.log(erro);
            },complete:()=>{
                this.getAll();
                this.alertService.showAlert({
                    type:'success',
                    message:"Veículo cadastrado com sucesso!"
                });

            }
        })
    }
}

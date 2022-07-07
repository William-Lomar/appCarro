import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { VeiculosService } from "../service/veiculos.service";
import { VeiculoInterface } from "../shared/interfaces/veiculo.interface";


@Injectable({
    providedIn:'root'
})
export class GuardsResolve implements Resolve<VeiculoInterface>{

    constructor(private veiculoService:VeiculosService){}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot):Observable<VeiculoInterface[]>|any|Promise<VeiculoInterface[]>{
            return this.veiculoService.getVeiculos()
    }

}
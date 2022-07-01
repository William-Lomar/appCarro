import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EditarComponent } from "./editar.component";
import { VeiculosComponent } from "./veiculos.component";

@NgModule({
    declarations:[
        VeiculosComponent,
        EditarComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
            path: 'veiculos',
            component: VeiculosComponent
            },
            {
                path:'editar/:id',
                component: EditarComponent
            }
        ])
    ]
})
export class VeiculosModule{

}
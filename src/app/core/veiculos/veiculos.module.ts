import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
        ReactiveFormsModule,
        RouterModule.forChild([
            {
            path: '',
            component: VeiculosComponent
            },
            {
                path:':id',
                component: EditarComponent
            }
        ])
    ]
})
export class VeiculosModule{

}
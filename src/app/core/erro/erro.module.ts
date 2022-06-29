import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErroComponent } from "./erro.component";

@NgModule({
    declarations: [
        ErroComponent
    ], 
    imports:[
        RouterModule.forChild([
            {
                path:'', // Raiz do projeto
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: '**',component:ErroComponent
            }
        ])
    ]
})
export class ErroModule{

}
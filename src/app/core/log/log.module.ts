import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { logCompletoComponent } from "./log-completo.component";
import { LogComponent } from "./log.component";

@NgModule({
    declarations: [
        LogComponent,
        logCompletoComponent
    ], 
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
            path: 'log/:id',component:LogComponent
        },
        {
            path: 'logCompleto/:id',component:logCompletoComponent
        }
    ])
    ]
})
export class LogModule{

}
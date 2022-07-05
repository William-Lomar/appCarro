import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { Directives } from "./directives.module";
import { FilhoComponent } from "./filho.component";
import { PaiComponent } from "./pai.component";
import { TestesComponent } from "./testes.component";

@NgModule({
    declarations: [
        TestesComponent,
        PaiComponent,
        FilhoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        Directives,
        RouterModule.forRoot([
            {
                path: 'testes', component: TestesComponent
            }
        ])
    ],exports:[
     
    ]
})
export class TestesModule{}
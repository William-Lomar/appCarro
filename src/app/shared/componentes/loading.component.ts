import { Component } from "@angular/core";
import { loadingService } from "src/app/service/loading.service";


@Component({
    selector: 'app-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css']
})
export class LoadingComponent{
    constructor(public loadingService:loadingService){}
}
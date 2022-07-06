import { Injectable } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { AlertModalComponent } from "../shared/alerts/alert-modal.component";
import { ConfirmComponent } from "../shared/alerts/confirm.component";
import { AlertsInterface } from "../shared/interfaces/alerts.interface";


@Injectable({
    providedIn: 'root'
})
export class AlertModalService{
    bsModalRef!:BsModalRef;
    
    constructor(private modalService:BsModalService){}

    showAlert(config:AlertsInterface){
        this.bsModalRef = this.modalService.show(AlertModalComponent);
        this.bsModalRef.content.type = config.type;
        this.bsModalRef.content.message = config.message;
    }

    confirmAlert(){
        this.bsModalRef = this.modalService.show(ConfirmComponent);
        return (<ConfirmComponent>this.bsModalRef.content).confirmResults; 
    }


}
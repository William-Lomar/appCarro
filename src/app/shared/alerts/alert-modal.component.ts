import { Component, Input } from "@angular/core";
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: '',
    templateUrl:'./alert-modal.component.html'
})
export class AlertModalComponent{
   @Input() message:string = '';
   @Input() type:string = '';

   constructor(public bsModalRef: BsModalRef){}

   onClose(){
        this.bsModalRef.hide();
   }

}
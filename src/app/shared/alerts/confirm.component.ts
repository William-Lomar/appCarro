import { Component } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Subject } from "rxjs";


@Component({
    templateUrl:'./confirm.component.html'
})
export class ConfirmComponent{
    confirmResults!:Subject<boolean>;

    constructor(private bsModalRef:BsModalRef){}

    ngOnInit(): void {
        this.confirmResults = new Subject();
    }

    onConfirm(){
        this.confirmResults.next(true);
        this.bsModalRef.hide();
    }

    onClose(){
        this.confirmResults.next(false);
        this.bsModalRef.hide();
    }

}
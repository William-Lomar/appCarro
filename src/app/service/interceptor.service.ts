import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { loadingService } from './loading.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

    private activeRequests = 0;

    constructor(
        private loadingService:loadingService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler): 
      Observable<HttpEvent<any>> {

        if(this.activeRequests == 0){
            this.loadingService.show();
        }

        this.activeRequests++;

        return next.handle(req).pipe(
            finalize(()=>{
                this.activeRequests--;
                if(this.activeRequests == 0){
                    this.loadingService.hide();
                }
            })
        );

    }
}
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { ErroComponent } from './core/erro/erro.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { TestesModule } from './core/testes/testes.module';
import { AlertModalComponent } from './shared/alerts/alert-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingComponent } from './shared/componentes/loading.component';
import { LoadingInterceptor } from './service/interceptor.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AlertModalComponent,
    ErroComponent,
    LoadingComponent
    ],
  imports: [
    MatProgressSpinnerModule,
    ModalModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TestesModule,
    RouterModule.forRoot([
      {
        path:'', // Raiz do projeto
        redirectTo: 'home',
        pathMatch: 'full'
      },{
        path:'home',loadChildren: ()=>import('./core/home/home.module').then(m => m.HomeModule)
      },{
        path:'veiculos',loadChildren: ()=>import('./core/veiculos/veiculos.module').then(m => m.VeiculosModule)
      },
      {
        path:'log',loadChildren: ()=>import('./core/log/log.module').then(m => m.LogModule)
      },
      {
        path:'login',component:LoginComponent
      },
      {
          path: '**',component:ErroComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    AlertModalComponent
  ]
})
export class AppModule { }

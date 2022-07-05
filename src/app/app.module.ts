import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { ErroModule } from './core/erro/erro.module';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeModule } from './core/home/home.module';
import { LogModule } from './core/log/log.module';
import { TestesModule } from './core/testes/testes.module';
import { VeiculosModule } from './core/veiculos/veiculos.module';
import { AlertModalComponent } from './shared/alerts/alert-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertModalComponent
    ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    HomeModule,
    VeiculosModule,
    HttpClientModule,
    TestesModule,
    LogModule,
    RouterModule.forRoot([
      {
        path:'', // Raiz do projeto
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]),
    ErroModule, // Erro module deve ser importado por ultimo para funcionar 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    AlertModalComponent
  ]
})
export class AppModule { }

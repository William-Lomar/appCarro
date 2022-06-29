import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErroModule } from './core/erro/erro.module';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeModule } from './core/home/home.module';
import { LogModule } from './core/log/log.module';
import { VeiculosModule } from './core/veiculos/veiculos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
    ],
  imports: [
    BrowserModule,
    HomeModule,
    VeiculosModule,
    HttpClientModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logado:boolean = false;
  title = 'appCarro';

  constructor(
    private authService:AuthService
  ){}

  ngOnInit(): void {
    this.authService.mostrarMenu.subscribe((show)=>{
      this.logado = show
    })
  }
}

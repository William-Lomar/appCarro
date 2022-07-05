import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective implements OnInit{

  constructor() { }

  ngOnInit(): void {
    console.log('Diretiva chamada');
  }

}

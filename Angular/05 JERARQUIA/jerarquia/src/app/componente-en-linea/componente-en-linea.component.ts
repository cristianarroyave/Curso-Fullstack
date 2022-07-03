import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  template: `
    <div class="card">
      <h1>Ejemplo de componente en linea</h1>
      <p>Ejemplo de interpolacion {{valorEnLinea}}</p>
    </div>
  `,
  styles: [
    
  ]
})
export class ComponenteEnLineaComponent implements OnInit {

  valorEnLinea: string = "hola mundo!";

  constructor() { }

  ngOnInit(): void {
  }

}

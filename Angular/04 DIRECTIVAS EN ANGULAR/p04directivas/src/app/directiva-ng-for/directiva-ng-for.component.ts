import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores: Array<any> = [
    {nombre: 'Gas Natural', cif: 'A123456789'},
    {nombre: 'Iberdrola', cif: 'A123456789'},
    {nombre: 'Jazztel', cif: 'A123456789'},
    {nombre: 'Movistar', cif: 'A123456789'}
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.proveedores.push({nombre: 'Orange', cif: 'A123456789'})
    }, 3000)
  }

}

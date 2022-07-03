import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-class',
  templateUrl: './directiva-class.component.html',
  styleUrls: ['./directiva-class.component.css']
})
export class DirectivaClassComponent implements OnInit {

  jugadores: Array<any> = [
    {nombre: 'Magic Johnson', equipo: 'lakers'},
    {nombre: 'Larry Bird', equipo: 'celtics'},
    {nombre: 'Michael Jordan', equipo: 'bulls'},
    {nombre: 'Kareem Abdul Jabbar', equipo: 'lakers'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

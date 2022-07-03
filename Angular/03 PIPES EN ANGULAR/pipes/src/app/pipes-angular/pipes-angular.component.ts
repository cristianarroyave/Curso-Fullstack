import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-angular',
  templateUrl: './pipes-angular.component.html',
  styleUrls: ['./pipes-angular.component.css']
})
export class PipesAngularComponent implements OnInit {

  texto: string = 'ciudad de Madrid';
  id: any = 12;
  ahora: Date = new Date();
  importe: number = 1876.57127312;
  divisa: string = '$';

  constructor() { }

  ngOnInit(): void {
    this.id = '000' + this.id;
  }

}

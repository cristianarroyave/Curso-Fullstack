import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.css']
})
export class MarcadorComponent implements OnInit {

  puntosLocales: number = 0;
  puntosVisitantes: number = 0;

  equipoLocal: any = {
    nombre: 'lakers',
    logo: '/assets/img/LAL.svg',
    jugadores : [
      {nombre: 'Isaiah Thomas', puntos: 0, imagen: '/assets/img/thomas.png'},
      {nombre: 'Kyle Kuzma', puntos: 0, imagen: '/assets/img/kuzma.png'},
      {nombre: 'Julius Randle', puntos: 0, imagen: '/assets/img/randle.png'},
      {nombre: 'Brandom Ingram', puntos: 0, imagen: '/assets/img/ingram.png'},
      {nombre: 'Brook López', puntos: 0, imagen: '/assets/img/lopez.png'}
    ]
  }

  equipoVisitante: any = {
    nombre: 'celtics',
    logo: '/assets/img/BOS.svg',
    jugadores : [
      {nombre: 'Kadeem Allen', puntos: 0, imagen: '/assets/img/allen.png'},
      {nombre: 'Aaron Bynes', puntos: 0, imagen: '/assets/img/bynes.png'},
      {nombre: 'Jabari Bird', puntos: 0, imagen: '/assets/img/bird.png'},
      {nombre: 'Jaylem Brown', puntos: 0, imagen: '/assets/img/brown.png'},
      {nombre: 'Jonathan Gibson', puntos: 0, imagen: '/assets/img/gibson.png'}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  getCanastaLocal($event: any) {
    this.puntosLocales += $event.puntos;
    console.log(this.equipoLocal.jugadores);
    this.equipoLocal.jugadores.forEach((elem: any) => {
      if(elem.nombre === $event.nombreJugador){
        elem.puntos += $event.puntos;
      }
    });
  }

  getCanastaVisitante($event: any) {
    this.puntosVisitantes += $event.puntos;
    this.equipoVisitante.jugadores.forEach((elem: any) => {
      if(elem.nombre === $event.nombreJugador){
        elem.puntos += $event.puntos;
      }
    });
  }

}

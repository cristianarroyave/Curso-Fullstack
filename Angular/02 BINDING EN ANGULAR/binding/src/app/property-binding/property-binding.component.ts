import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imagen: string = '/assets/img/santander-red.svg';

  constructor() { }

  ngOnInit(): void {
    this.cambiarImagen();
  }

  cambiarImagen(): void {
    const logoRojo = '/assets/img/santander-red.svg';
    const logoBlanco = '/assets/img/santander-white.svg';
    setInterval(() => {
      this.imagen === logoRojo ? this.imagen = logoBlanco : this.imagen = logoRojo
      }, 2000);
  }

}

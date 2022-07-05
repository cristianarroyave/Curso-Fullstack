import { Injectable } from '@angular/core';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[] = [
    {nombre: 'Iberdrola', cif: '123456789', localidad: 'Bilbao'},
    {nombre: 'Jazztel', cif: '123456789', localidad: 'Madrid'},
    {nombre: 'La Caixa', cif: '123456789', localidad: 'Barcelona'}
  ]

  constructor() { }

  getClientes(): Cliente[] {
    return this.clientes;
  }

  setCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }
}

import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit {

  clientes: any;

  constructor(private clientesServices: ClientesService) { }

  ngOnInit(): void { 
    this.cargarClientes();
  }

  cargarClientes() {
    this.clientesServices.getClientes().subscribe((res: any) => {
      this.clientes = res;
      console.log(this.clientes);
    }, (err: any) => {
      console.log(err);
    }
    );
  }

  eliminarCliente(cif: string) {
    this.clientesServices.deleteCliente(cif).subscribe((res: any) => {
      this.clientes = res;
      this.cargarClientes();
    }, (err: any) => {
      console.log(err);
    }
    );
  }

}

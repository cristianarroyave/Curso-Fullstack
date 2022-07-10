import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  form: FormGroup; 
  cif: string; 
  cliente: any;

  constructor(private route: ActivatedRoute, private clientesServices: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.cif = this.route.snapshot.params.cif;
    this.clientesServices.getCliente(this.cif).subscribe((res: any) => {
      this.cliente = res.cliente;
      this.form.patchValue(this.cliente);
    }, (err: any) => {
      console.log(err);
    });

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cif: new FormControl('', [Validators.required, Validators.minLength(9)]),
      direccion: new FormControl(''),
      localidad: new FormControl('')
    });
  }

  actualizarCliente() {
    this.clientesServices.putCliente(this.form.value, this.cif).subscribe((res: any) => {
      this.router.navigate(['/clientes']);
    }, (err: any) => {
      console.log(err);
    });
  }

}

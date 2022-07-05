import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { InicioComponent } from './inicio/inicio.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'ventas', component: VentasComponent},
  {path: 'compras', component: ComprasComponent},
  {path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

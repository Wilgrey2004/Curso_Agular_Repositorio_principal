import { Routes } from '@angular/router';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';
import { App } from './app';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { Padre } from './padre/padre';
import { Hijo } from './hijo/hijo';

export const routes: Routes = [
  // asi agregamos una ruta
  { path: '', component: ListadoUsuarios },
  { path: 'mostrar-mensaje', component: MostrarMensaje },
  {
    path: 'configuracion',
    children: [
      { path: 'padre', component: Padre }, //localhost:4200/configuracion/padre esta es la ruta de esta pagina
      { path: 'hijo', component: Hijo },
    ],
  },
];

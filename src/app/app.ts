import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from './nuevo-componente/nuevo-componente';
import { ComponenteEnLinea } from './componente-en-linea/componente-en-linea';
import { Interpolacion } from './interpolacion/interpolacion';
import { Padre } from './padre/padre';
import { Hijo } from './hijo/hijo';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { Replicador } from './replicador/replicador';
import { Saludar } from './saludar/saludar';
import { ComponenteIf } from './componente-if/componente-if';
import { AgregarTarea } from './agregar-tarea/agregar-tarea';
import { ComponenteFor } from './componente-for/componente-for';
import { MessajeS } from './messaje-s';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';
import { HttpClientModule } from '@angular/common/http';
import { Ejemplopipes } from './ejemplopipes/ejemplopipes';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',

  styleUrl: './app.css',
  imports: [ListadoUsuarios, HttpClientModule, Ejemplopipes],
})
export class App {
  protected readonly titulo = 'Practicas de';
  protected readonly remate = '!Angular!';
  mensaje: string;
  constructor(servicio: MessajeS) {
    this.mensaje = servicio.obtenerMensaje();
  }
}

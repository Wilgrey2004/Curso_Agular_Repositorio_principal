import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.html',
  styleUrl: './interpolacion.css',
})
export class Interpolacion {
  titulo: string = 'Universidad angular';

  usuario = {
    nombre: 'Wilgrey Ravelo Cruz',
    edad: 20,
  };

  saludar() {
    return `hola ${this.usuario.nombre}`;
  }
}

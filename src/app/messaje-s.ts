import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessajeS {
  private messaje: string = 'hola desde el servicio de mensaje';
  constructor() {}

  obtenerMensaje(): string {
    return this.messaje;
  }
}

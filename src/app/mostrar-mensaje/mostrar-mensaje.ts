import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css',
})
export class MostrarMensaje {
  constructor(private route: ActivatedRoute) {}

  ngOninit() {
    this.mensaje = this.route.snapshot.queryParams['mensaje'] || '';
  }

  mensaje: string = '';
  quitarMensaje() {
    this.mensaje = '';
  }
  mostrarMensaje() {
    this.mensaje = 'Hola, has echo click!';
  }
}

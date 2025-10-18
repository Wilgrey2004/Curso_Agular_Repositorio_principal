import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  private titulo: string = 'Titulo del hijo';

  get mostrarTitulo() {
    return this.titulo;
  }

  getTitulo() {
    return this.titulo;
  }
}

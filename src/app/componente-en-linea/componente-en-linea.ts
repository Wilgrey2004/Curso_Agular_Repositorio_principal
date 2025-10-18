import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  imports: [],
  template: `
    <h1 class="text-xl text-blue-300 p-4 bg-gray-500 w-max rounded-xl">
      {{ tituloComponenteEnlinea }}
    </h1>
  `,
  styles: ``,
})
export class ComponenteEnLinea {
  tituloComponenteEnlinea = 'Soy un componente en linea!!';
}

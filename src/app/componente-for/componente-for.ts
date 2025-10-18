import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.html',
  styleUrl: './componente-for.css',
})
export class ComponenteFor {
  tareas: string[] = ['aprender angular', 'desarrollar una app', 'Aprender tyeScrip'];

  
  agregar(nuevaTarea: string): void {
    if (nuevaTarea) {
      this.tareas.push(nuevaTarea);
    }
  }
}

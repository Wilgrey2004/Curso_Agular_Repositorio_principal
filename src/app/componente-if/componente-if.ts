import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  imports: [],
  templateUrl: './componente-if.html',
})
export class ComponenteIf {
  isAutenticate: boolean = false;

  alternarAutenticacion(): void {
    this.isAutenticate = !this.isAutenticate;
  }
}

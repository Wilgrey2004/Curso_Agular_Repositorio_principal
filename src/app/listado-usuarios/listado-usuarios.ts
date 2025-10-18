import { Component } from '@angular/core';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.html',
})
export class ListadoUsuarios {
  usuarios_lst: any[] = [];

  constructor(private usuariosServices: Usuarios) {}
  // etsa funcion hace que cuando se cargue un componente se haga algo
  ngOnInit() {
    this.usuariosServices.obtenerDatos().subscribe((data) => {
      this.usuarios_lst = data;
    });
  }
}

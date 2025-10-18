import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// registramois los datos locale spara el idemoa español

@Component({
  selector: 'app-ejemplopipes',
  imports: [CommonModule],
  templateUrl: './ejemplopipes.html',
})
export class Ejemplopipes {
  empleados = [
    {
      nombre: 'Wilgrey Ravelo',
      sueldo: 1200,
      fechaDeNacimiento: new Date('2000-08-01'),
    },
    {
      nombre: 'Alberto Juares De Permellon',
      sueldo: 1300,
      fechaDeNacimiento: new Date('2003-10-18'),
    },
    {
      nombre: 'David alberto de Madura',
      sueldo: 1400,
      fechaDeNacimiento: new Date('1978-10-18'),
    },
  ];
}

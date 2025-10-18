import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludar',
  //standalone: true, // si usas componentes standalone
  imports: [FormsModule],
  templateUrl: './saludar.html',
  styleUrls: ['./saludar.css'],
})
export class Saludar {
  saludo = 'saludo inicial';
}

import { Component, signal } from '@angular/core';
import { Productos } from './components/productos/productos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Productos, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tienda-guitarras');
}

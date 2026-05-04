import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})


export class Productos {
  guitarraSeleccionada: any = null;

  guitarras = [
    {
      nombre: 'Gibson SG',
      precio: 1200,
      imagen: 'guitarras/gibsonsg.jpg',
      specs: {
        madera: 'Caoba',
        pastillas: 'Humbucker',
        puente: 'Fijo',
        uso: 'Rock / Metal'
      }
    },
    {
      nombre: 'Gibson Les Paul',
      precio: 1500,
      imagen: 'guitarras/lespaul.png',
      specs: {
        madera: 'Caoba con tapa de arce',
        pastillas: 'Humbucker',
        puente: 'Tune-o-matic',
        uso: 'Rock / Blues'
      }
    },
    {
      nombre: 'Ibanez RG',
      precio: 900,
      imagen: 'guitarras/ibanez.jpg',
      specs: {
        madera: 'Tilo',
        pastillas: 'Humbucker',
        puente: 'Floyd Rose',
        uso: 'Metal / Shred'
      }
    }
  ];

  verMas(guitarra: any) {
    this.guitarraSeleccionada = guitarra;
  }
}
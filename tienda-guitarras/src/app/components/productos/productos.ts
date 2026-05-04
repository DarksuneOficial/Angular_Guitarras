import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})

export class Productos {
  guitarraSeleccionada: any = null;
  // Variable para mostrar u ocultar la ventana del carrito
  showCarrito: boolean = false; 

  constructor(private cartService: CartService) {}

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

  // --- Lógica de la Tienda ---

  verMas(guitarra: any) {
    this.guitarraSeleccionada = guitarra;
  }

  // --- Lógica del Carrito ---

  // Obtiene los items directamente del servicio
  get carrito() {
    return this.cartService.getItems();
  }

  // Agrega y abre el carrito automáticamente para dar feedback al usuario
  agregarAlCarrito(guitarra: any) {
    this.cartService.addToCart(guitarra);
    this.showCarrito = true; 
  }

  // Alterna la visibilidad de la mini ventana
  toggleCarrito() {
    this.showCarrito = !this.showCarrito;
  }

  // Elimina un objeto del array usando su posición (index)
  eliminarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
  }

  // Suma los precios de todo lo que hay en el carrito
  calcularTotal() {
    return this.carrito.reduce((acc, item) => acc + item.precio, 0);
  }

  // Simulación de pago
  pagar() {
    if (this.carrito.length > 0) {
      alert(`🎸 ¡Gracias por tu compra! Total a pagar: $${this.calcularTotal()}`);
      // Opcional: vaciar el carrito después de pagar
      this.carrito.length = 0; 
      this.showCarrito = false;
    }
  }
}
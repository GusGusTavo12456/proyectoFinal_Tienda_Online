import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 ESTE ES CLAVE
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Producto } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 AÑADE FormsModule AQUÍ
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    precio: 0,
    imagenUrl: ''
  };

  constructor(private productService: ProductService) {}

  agregarProducto(): void {
    this.productService.agregarProducto(this.producto).subscribe(() => {
      alert('✅ Producto guardado para la gloria de Dios');
      this.producto = { id: 0, nombre: '', descripcion: '', precio: 0, imagenUrl: '' };
    });
  }
}

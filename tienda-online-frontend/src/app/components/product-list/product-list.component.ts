import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 Asegúrate de importar FormsModule
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productos: Producto[] = [];
  productoSeleccionado: Producto | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productService.obtenerProductos().subscribe(data => {
      this.productos = data;
      console.log('📦 Productos cargados:', this.productos);
    });
  }

  editarProducto(producto: Producto): void {
    // Clonamos el producto para no modificarlo directamente
    this.productoSeleccionado = { ...producto };
  }

  cancelarEdicion(): void {
    this.productoSeleccionado = null;
  }

  guardarCambios(): void {
    if (!this.productoSeleccionado) return;

    this.productService.actualizarProducto(this.productoSeleccionado).subscribe(() => {
      alert('✅ Producto actualizado para la gloria de Dios');
      this.productoSeleccionado = null;
      this.cargarProductos(); // Recargar la lista
    });
  }

  eliminarProducto(id: number): void {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      this.productService.eliminarProducto(id).subscribe(() => {
        alert('🗑️ Producto eliminado');
        this.cargarProductos();
      });
    }
  }
}

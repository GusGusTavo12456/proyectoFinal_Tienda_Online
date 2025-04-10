import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
  agregarProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>('http://localhost:8080/productos', producto);
  }
  actualizarProducto(producto: Producto) {
    return this.http.put(`${this.apiUrl}/${producto.id}`, producto);
  }
  eliminarProducto(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}

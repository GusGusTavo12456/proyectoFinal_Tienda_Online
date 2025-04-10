package com.tienda.tiendaonline.controller;

import com.tienda.tiendaonline.model.Producto;
import com.tienda.tiendaonline.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller // ✅ Usamos Controller para HTML y REST con @ResponseBody
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    // 🌐 Vista con Thymeleaf
    @GetMapping("/ver")
    public String verProductos(Model model) {
        List<Producto> productos = productoService.obtenerTodos();
        model.addAttribute("productos", productos);
        return "productos";
    }

    // 🔁 API REST: Obtener todos los productos
    @GetMapping
    @ResponseBody
    public List<Producto> listarProductos() {
        return productoService.obtenerTodos();
    }

    @PostMapping
    @ResponseBody
    public ResponseEntity<?> agregarProducto(@RequestBody Producto producto) {
        try {
            producto.setId(null); // <--- ¡Ignora el id enviado!
            Producto guardado = productoService.guardar(producto);
            return ResponseEntity.ok(guardado);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Error al guardar el producto: " + e.getMessage());
        }
    }


    // 🔎 Obtener producto por ID
    @GetMapping("/{id}")
    @ResponseBody
    public Producto obtenerPorId(@PathVariable Long id) {
        return productoService.obtenerPorId(id);
    }
    @PutMapping("/{id}")
    @ResponseBody
    public Producto actualizarProducto(@PathVariable Long id, @RequestBody Producto producto) {
        producto.setId(id);
        return productoService.guardar(producto);
    }

    // ❌ Eliminar producto
    @DeleteMapping("/{id}")
    @ResponseBody
    public void eliminarProducto(@PathVariable Long id) {
        productoService.eliminar(id);
    }
}

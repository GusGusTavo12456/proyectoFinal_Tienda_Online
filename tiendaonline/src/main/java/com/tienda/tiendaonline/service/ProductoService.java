package com.tienda.tiendaonline.service;

import com.tienda.tiendaonline.model.Producto;

import java.util.List;

public interface ProductoService {

    List<Producto> obtenerTodos();

    Producto guardar(Producto producto);

    Producto obtenerPorId(Long id);

    void eliminar(Long id);
}

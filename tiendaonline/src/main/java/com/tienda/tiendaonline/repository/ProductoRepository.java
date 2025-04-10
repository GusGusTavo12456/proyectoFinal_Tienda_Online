package com.tienda.tiendaonline.repository;

import com.tienda.tiendaonline.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    // Aquí puedes definir métodos personalizados si los necesitas más adelante
}

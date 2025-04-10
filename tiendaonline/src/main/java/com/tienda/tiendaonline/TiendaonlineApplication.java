package com.tienda.tiendaonline;

import com.tienda.tiendaonline.model.Producto;
import com.tienda.tiendaonline.repository.ProductoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TiendaonlineApplication {

	public static void main(String[] args) {
		SpringApplication.run(TiendaonlineApplication.class, args);
	}

	// 🟢 Este método inserta productos al iniciar si la tabla está vacía
	@Bean
	CommandLineRunner cargarDatos(ProductoRepository productoRepository) {
		return args -> {
			if (productoRepository.count() == 0) {
				productoRepository.save(new Producto("Biblia Reina Valera", "Biblia de estudio RVR1960 con índice", 29.99, "https://via.placeholder.com/300x200?text=Biblia"));
				productoRepository.save(new Producto("Camiseta Cristiana", "Camiseta con versículo bíblico", 15.50, "https://via.placeholder.com/300x200?text=Camiseta"));
			}
		};
	}
}

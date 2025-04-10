import { provideRouter } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component'; // asegúrate de importar tu nuevo componente
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✨ Importación esencial para ngModel

export const appConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(FormsModule) // ✅ Aquí activamos el soporte de formularios
  ],
  imports: [
    ProductListComponent,
    ProductFormComponent // ✅ También asegúrate de importar tu formulario
  ]
};

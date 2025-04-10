import { Component } from '@angular/core';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductFormComponent} from './components/product-form/product-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductListComponent,
    ProductFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda-online-frontend';
}

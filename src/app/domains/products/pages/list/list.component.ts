import { Component, inject, signal } from '@angular/core';

import { ProductComponent } from './../../components/product/product.component';
import { HeaderComponent } from "../../../shared/components/header/header.component";

import { Product } from './../../../shared/models/product.model';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartService = inject(CartService);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 230,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 22,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 120,
        image: 'https://picsum.photos/640/640?r=12',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 4',
        price: 210,
        image: 'https://picsum.photos/640/640?r=31',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 5',
        price: 122,
        image: 'https://picsum.photos/640/640?r=32',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 6',
        price: 320,
        image: 'https://picsum.photos/640/640?r=33',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}

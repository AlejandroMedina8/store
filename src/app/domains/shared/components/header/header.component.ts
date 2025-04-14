import { Component, inject, signal, SimpleChanges } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSiteMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSiteMenu.update((prevState) => !prevState);
  }
}

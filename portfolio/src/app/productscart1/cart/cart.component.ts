import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  title = "Cart";
  items = this.cartService.getItems();
  subtotal = "0";
  shipping = "0";
  total = "0";
  totalPrice: number = 0;
  totalQuantity: number = 0;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.updateCartStatus();
  }

  updateCartStatus() {
    // subscribe to the events
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )

    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )

    // console.log(`updated total price: ${this.totalPrice}, updated Total quantity: ${this.totalQuantity}`);
  }

  clearButton(): void {
    this.items = this.cartService.clearCart();
  }

  removeItem(index: any){
    this.cartService.removeItem(index);
  }

}

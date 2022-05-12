import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProducts1 } from '../products1';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IProducts1[] = [];
  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  addToCart(product: IProducts1) {

    // let alreadyExistsInCart: boolean = false;
    // let existingCartItem: IProducts1;

    // if (this.items.length > 0){
    //   existingCartItem = this.items.find(tempItems => tempItems.id === product.id);

    //   alreadyExistsInCart = (existingCartItem != undefined);
    // }
    this.items.push(product);
    this.calculateTotalPrice();
  }

  calculateTotalPrice(){
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentItem of this.items){
      totalPriceValue += currentItem.quantity * currentItem.price;
      totalQuantityValue += currentItem.quantity;
    }

    console.log(`total price: ${totalPriceValue}, Total quantity: ${totalQuantityValue}`);

    // publish the events
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeItem(index: any){
    // indexOf gets the position of the item in question, splice removes the item from array
    this.items.splice(this.items.indexOf(index), 1);
  }

  constructor() { }
}

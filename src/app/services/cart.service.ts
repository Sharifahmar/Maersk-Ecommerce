import { Injectable } from '@angular/core';
import { Products } from '../model/generic-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Products[] = [];

  constructor() { }

  addToCart(product) {
    this.items = product;
  }

  getItems() {
    return this.items;
  }

}

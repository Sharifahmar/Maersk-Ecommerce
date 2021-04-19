import { Component, OnInit } from '@angular/core';
import { Products } from '../model/generic-interfaces';
import { CartService } from '../services/cart.service';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartSharedArr = [];
  public totalPrice:number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    if (this.cartService.getItems().length !== 0) {
      this.cartSharedArr = this.cartService.getItems();
    }

    this.totalPrice = this.cartSharedArr.reduce((x,y)=>x+y.price,0);
  }

  removeItems(e):void{
  this.cartSharedArr.splice(e.id, 1);
  this.totalPrice = this.cartSharedArr.reduce((x,y)=>x+y.price,0);
  }

}

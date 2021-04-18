import { Component, OnInit } from '@angular/core';
import { Products } from '../model/generic-interfaces';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartSharedArr: Products[] = [];

  constructor(private sharedDataService:SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.currentData.subscribe(cartData => this.cartSharedArr = cartData);
    console.log("object"+this.cartSharedArr);
  }

}

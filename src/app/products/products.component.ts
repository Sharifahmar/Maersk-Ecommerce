import { Component, OnInit } from '@angular/core';
import { Products } from '../model/generic-interfaces';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products:Products;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(resp => {
     this.products=resp;
    },
      error => {
        alert('Something went wrong !!')
      }

    );
  }
}



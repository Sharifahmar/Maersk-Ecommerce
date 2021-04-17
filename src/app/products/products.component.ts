import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Products } from '../model/generic-interfaces';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  
  products:Products;
  inputValue?: string;
  options: string[] = [];
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

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.options = value ? [value, value + value, value + value + value] : [];
  }
}



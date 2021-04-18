import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Products } from '../model/generic-interfaces';
import { ProductsService } from '../services/products.service';
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {

  products: any = [];
  options: string[] = [];
  searchArr: Products[] = [];
  respArr: any = [];
  selectedValue = null;

  @ViewChild('prdSearchInput', { static: true }) prdSearchInput: ElementRef;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(resp => {
      this.products = resp;
      this.respArr = resp;

    },
      error => {
        alert('Something went wrong !!')
      }

    );

    fromEvent(this.prdSearchInput.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => {
        if (res.length > 2) {
          return true;
        } else {
          this.options = [];
          this.products = this.respArr;
          return false;
        }
      })

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is different from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {
      this.searchArr = this.respArr.filter((e: Products) => e.title.toLowerCase().includes(text.toLowerCase()));
      this.options = this.searchArr.map(e => e.title);
    });
  }

  onSearch(): void {
    this.products = this.respArr.filter((e: { title: string; }) => e.title.toLowerCase() == (this.prdSearchInput.nativeElement.value.toLowerCase()));
  }

  modelChangeFn(e): void {
    if (e == 1) {
      this.products = this.respArr.sort((a, b) => a.price - b.price);
    } else {
      this.products = this.respArr.sort((a, b) => b.price - a.price);
    }
  }
}



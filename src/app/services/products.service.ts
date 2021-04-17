import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../model/generic-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private loginApi='https://fakestoreapi.com/products?limit=8'

  constructor(private http:HttpClient) { }

  getProducts(): Observable<Products> {
    return this.http.get<Products>(this.loginApi);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../model/generic-interfaces';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private messageSource = new BehaviorSubject(null);
  currentData = this.messageSource.asObservable();

  constructor() { }

  updateData(product: Products) {
    this.messageSource.next(product);
  }

}

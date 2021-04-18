import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NzCardModule,
    NzAutocompleteModule,
    FormsModule,
    NzSelectModule
  ]
})
export class ProductsModule { }

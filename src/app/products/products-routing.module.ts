import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';

import { ProductsComponent } from './products.component';

const routes: Routes = [{ path: '', component: ProductsComponent,/*canActivate: [AuthGuard]*/ }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

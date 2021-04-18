import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';


@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    ChartsModule
  ]
})
export class ChartsNgModule { }

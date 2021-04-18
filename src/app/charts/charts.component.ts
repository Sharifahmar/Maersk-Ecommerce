import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Products } from '../model/generic-interfaces';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public products: any = [];
  public pieChartDataArr:number[] = [];
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Electronics', 'Jewellery', 'Men Clothing', 'Women Clothing'];
  public pieChartData: SingleDataSet = this.pieChartDataArr;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  constructor(private productsService: ProductsService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    let counterElectronics = 0;
    let counterJewellery = 0;
    let countermClothing = 0;
    let counterwClothing = 0;
    this.productsService.getProducts().subscribe(resp => {
      this.products = resp;
      this.products.forEach(element => {
        if (element.category === 'electronics') {
          counterElectronics++;
        } else if (element.category === 'jewelery') {
          counterJewellery++;
        } else if (element.category === 'men clothing') {
          countermClothing++;
        } else if (element.category === 'women clothing') {
          counterwClothing++;
        }
      });
      
    },
      error => {
        alert('Something went wrong !!')
      }

    );
    this.pieChartDataArr=[counterElectronics,counterJewellery,countermClothing,counterwClothing];

  }

  


}

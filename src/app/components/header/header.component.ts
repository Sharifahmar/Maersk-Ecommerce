import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Products } from '../../model/generic-interfaces';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cartSharedData: Products[] = [];
  public cartCount = 0;

  constructor(private sharedDataService: SharedDataService, private router: Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.sharedDataService.currentData.subscribe(cartData => {
      if(cartData !=null){
        this.cartSharedData.push(cartData)
      }
      this.cartCount = this.cartSharedData.length;
    });
  }
  logout(): void {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  onRouteCart():void{
    this.cartService.addToCart(this.cartSharedData);
    this.router.navigate(['/cart']);
  }

}

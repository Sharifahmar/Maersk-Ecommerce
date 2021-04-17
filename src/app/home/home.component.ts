import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  //images = ['assets/img/h4-slide.png', "assets/img/h4-slide2.png", "assets/img/h4-slide3.png", "assets/img/h4-slide4.png"];

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);


  constructor() {
    
   }

  ngOnInit(): void {
  }

}

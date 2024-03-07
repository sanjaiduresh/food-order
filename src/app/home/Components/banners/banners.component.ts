import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss'],
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],

})
export class BannersComponent  implements OnInit {
  bannerItems = [
    {
      imageUrl:
        '/assets/Images/row-banner 1.jpg',
      alt: 'Burger',
    },
    {
      imageUrl:
        '/assets/Images/row-banner 1.jpg',
      alt: 'Burger',
    },{
      imageUrl:
        '/assets/Images/row-banner 1.jpg',
      alt: 'Burger',
    },
    
  ];
  constructor() { }

  ngOnInit() {}

}

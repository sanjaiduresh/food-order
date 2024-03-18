import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonSearchbar, IonSelect, IonSelectOption, IonItem, IonTitle, IonBackButton, IonCol, IonGrid, IonRow, IonContent, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonIcon, IonList, IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  standalone:true,
  imports: [ IonApp, IonList, IonHeader, IonToolbar, IonSearchbar, IonSelect, IonItem, IonSelectOption, IonTitle, IonBackButton, IonGrid, IonCol, IonRow, IonContent, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonIcon],

})
export class RestaurantsComponent  implements OnInit {
  restaurants: any[] = [
    
    {
      imageUrl: 'assets/Images/A2B.png',
      name: 'A2B - Adyar Ananda Bhavan',
      vegIconUrl: '/assets/Images/Veg.png',
      rating: 4.3,
      favourites: "/assets/Images/Favourites.png",
      orderBefore: 'order before today 11:00 am',
      cuisine: 'SOUTH INDIAN . TANDOOR . SWEETS . SNACKS . PURE VEG',
      distance: '2.5km',
      location: 'Egattur',
      offer: "",
    },
    {
      imageUrl: 'assets/Images/A2B.png',
      name: 'GK Home Foods',
      vegIconUrl: '/assets/Images/Non-veg.png',
      rating: 4.2,
      favourites: "/assets/Images/Favourites.png",
      orderBefore: 'order before today 10:30 am',
      cuisine: 'NORTH INDIAN . MUGHLAI . CHINESE',
      distance: '3.2km',
      location: 'Egattur',
      offer: "20%",

    },
    {
      imageUrl: 'assets/Images/Briyani.jpg',
      name: 'Sharief Bhai Biryani',
      vegIconUrl: '/assets/Images/Non-veg.png',
      rating: 4.1,
      favourites: "/assets/Images/Favourites.png",
      orderBefore: 'order before today 12:00 pm',
      cuisine: 'BIRYANI . HYDERABADI . CHETTINAD',
      distance: '4.1km',
      location: 'Egattur',
      offer: "20%",
    },
  ];
  constructor() { }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar,IonSearchbar,IonSelect,IonSelectOption,IonItem, IonTitle,IonBackButton,IonCol, IonGrid,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader, IonCard, IonIcon, IonList, IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-top-restaurants',
  templateUrl: './top-restaurants.component.html',
  styleUrls: ['./top-restaurants.component.scss'],
  standalone:true,
  imports: [ IonApp, IonList, IonHeader, IonToolbar,IonSearchbar,IonSelect,IonItem,IonSelectOption, IonTitle, IonBackButton,IonGrid,IonCol,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader,IonCard,IonIcon],

})
export class TopRestaurantsComponent  implements OnInit {
  restaurants: any[] = [
    {
      location: 'Egattur',
      cuisine: 'SOUTH INDIAN . CHETTINADU',
      name: 'A2B - Adyar Anandha Bhavan',
      imageUrl: '/assets/Images/Rooti.jpg',
      orderBefore: 'Today 12.00 pm - 14.00 pm',
      favourites:"/assets/Images/FavouritesMini.png",
      distance: 2.5,
      rating: 4.4,
      offer:"20%",
    },
    {
      location: 'Siruseri',
      cuisine: 'SOUTH INDIAN . CHETTINADU',
      name: 'Eatfit',
      imageUrl: '/assets/Images/Eatfit.jpg',
      orderBefore: 'Today 12.00 pm - 14.00 pm',
      favourites:"/assets/Images/FavouritesMini.png",
      distance: 2.5,
      rating: 4.3,
      offer:"40%",

    },
  ];
  constructor() { }

  ngOnInit() {}

}

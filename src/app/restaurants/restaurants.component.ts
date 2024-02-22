import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar,IonSearchbar,IonSelect,IonSelectOption,IonItem, IonTitle,IonBackButton,IonCol, IonGrid,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader, IonCard, IonIcon, IonList, IonApp } from '@ionic/angular/standalone';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
  standalone:true,
  imports: [NgFor, IonApp, IonList, IonHeader, IonToolbar,IonSearchbar,IonSelect,IonItem,IonSelectOption, IonTitle, IonBackButton,IonGrid,IonCol,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader,IonCard,IonIcon],
})
export class RestaurantsComponent  implements OnInit {
  restaurants: any[] = [
    {
      imageUrl: '../../assets/Images/A2B.png',
      name: 'A2B - Adyar Ananda Bhavan',
      vegIconUrl: 'assets/Images/Veg.png',
      rating: 4.3,
      orderBefore: 'order before today 11:00 am',
      cuisine: 'SOUTH INDIAN . TANDOOR . SWEETS . SNACKS . PURE VEG',
      distance: '2.5km',
      location: 'Egattur'
    },
    {
      imageUrl: '../../assets/Images/A2B.png', 
      name: 'GK Home Foods',
      vegIconUrl: 'assets/Images/Non-veg.png', 
      rating: 4.2,
      orderBefore: 'order before today 10:30 am',
      cuisine: 'NORTH INDIAN . MUGHLAI . CHINESE',
      distance: '3.2km',
      location: 'Anna Nagar'
    },
    {
      imageUrl: '../../assets/Images/Briyani.jpg', 
      name: 'Sharief Bhai Biryani',
      vegIconUrl: 'assets/Images/Non-veg.png',
      rating: 4.0,
      orderBefore: 'order before today 12:00 pm',
      cuisine: 'BIRYANI . HYDERABADI . CHETTINAD',
      distance: '4.1km',
      location: 'Aminjikarai'
    },
  ];
    ngOnInit(): void {
    }

}

import { Component } from '@angular/core';
import { IonHeader, IonToolbar,IonSearchbar,IonSelect,IonSelectOption,IonItem, IonTitle,IonBackButton,IonCol, IonGrid,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader, IonCard, IonIcon, IonList, IonApp } from '@ionic/angular/standalone';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { ExploreComponent } from '../explore/explore.component';
import { NgFor } from '@angular/common';
import { TopRestaurantsComponent } from '../top-restaurants/top-restaurants.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:true,
  imports: [ NgFor,TopRestaurantsComponent,RestaurantsComponent,ExploreComponent,IonApp, IonList, IonHeader, IonToolbar,IonSearchbar,IonSelect,IonItem,IonSelectOption, IonTitle, IonBackButton,IonGrid,IonCol,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader,IonCard,IonIcon],
})
export class HomePage {
  
  constructor() {}

}

import { Component } from '@angular/core';
import { IonHeader,IonFooter, IonToolbar,IonSearchbar,IonSelect,IonSelectOption,IonItem, IonTitle,IonBackButton,IonCol, IonGrid,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader, IonCard, IonIcon, IonList, IonApp } from '@ionic/angular/standalone';
import { TopRestaurantsComponent } from './Components/top-restaurants/top-restaurants.component';
import { ExploreComponent } from './Components/explore/explore.component';
import { RestaurantsComponent } from './Components/restaurants/restaurants.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RestaurantsComponent,ExploreComponent, TopRestaurantsComponent,IonFooter,IonApp, IonList, IonHeader, IonToolbar,IonSearchbar,IonSelect,IonItem,IonSelectOption, IonTitle, IonBackButton,IonGrid,IonCol,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader,IonCard,IonIcon],
})
export class HomePage {
  constructor() {}
}

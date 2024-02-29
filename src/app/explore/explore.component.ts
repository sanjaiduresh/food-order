import { Component, OnInit } from '@angular/core';
import {IonHeader, IonToolbar,IonSearchbar,IonSelect,IonSelectOption,IonItem, IonTitle,IonBackButton,IonCol, IonGrid,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader, IonCard, IonIcon, IonList, IonApp } from '@ionic/angular/standalone';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
  standalone:true,
  imports: [IonApp, IonList, IonHeader, IonToolbar,IonSearchbar,IonSelect,IonItem,IonSelectOption, IonTitle, IonBackButton,IonGrid,IonCol,IonRow,IonContent,IonCardContent,IonCardSubtitle,IonCardTitle,IonCardHeader,IonCard,IonIcon],

})
export class ExploreComponent implements OnInit {
  exploreItems = [
    {
      imageUrl:
        'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=beef-bread-buns-1633578.jpg&fm=jpg',
      name: 'Burger',
    },
    {
      imageUrl:
        'https://www.watscooking.com/icooked/images/dish/large/south-indian-breakfast-idli-dosa-chutney-indian-breakfast-lentil-rice-pancake-also-known-as-dosa-dumplings-known-as-idli-158574513.jpg',
      name: 'Tiffen',
    },
    {
      imageUrl:
        '/assets/Images/BriyaniExplore.png',
      name: 'Briyani',
    },
    {
      imageUrl:
        'https://www.tasteofhome.com/wp-content/uploads/2018/01/Simple-Italian-Salad_EXPS_FT20_25957_F_0624_1.jpg',
      name: 'Salad',
    },
    {
      imageUrl:
        'https://th.bing.com/th/id/R.a2bf14b5e1d5206d5461e4ed588dbc85?rik=eDI0G4OaRUDL6w&riu=http%3a%2f%2fweknowyourdreams.com%2fimages%2fjuice%2fjuice-07.jpg&ehk=5FNILbtMVqnCLCTM1iPHx3n6wmXDLfaGh7ApWVMbXEs%3d&risl=&pid=ImgRaw&r=0',
      name: 'Juice',
    },
  ];
  ngOnInit() {}
}

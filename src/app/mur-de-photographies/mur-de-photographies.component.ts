import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-mur-de-photographies',
  templateUrl: './mur-de-photographies.component.html',
  styleUrls: ['./mur-de-photographies.component.css'],
})
export class MurDePhotographiesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  public title = 'Mur de photographies'

  public medias: any[] = [
    {
      mediaId: 1,
      mediaName: 'Buea sweet life',
      description: 'Belle vue au bord de la mer',
      price: 230.5,
      imageUrl: 'assets/img/hotel-room.jpg',
      rating: 3.5,
    },
    {
      mediaId: 2,
      mediaName: 'Marakech',
      description: 'Profitez de la vue sur les montagnes',
      price: 145.5,
      imageUrl: 'assets/img/the-interior.jpg',
      rating: 5,
    },
    {
      mediaId: 3,
      mediaName: 'Abudja new look palace',
      description: 'Séjour complet avec service de voitures',
      price: 120.12,
      imageUrl: 'assets/img/indoors.jpg',
      rating: 4,
    },
    {
      mediaId: 4,
      mediaName: 'Cape town city',
      description: 'Magnifique cadre pour votre séjour',
      price: 135.12,
      imageUrl: 'assets/img/window.jpg',
      rating: 2.5,
    },
  ]

  public showBadge: boolean;
  public mediaFilter = "je recherche...";

  //Donne l'inverse de showBadge
  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;

  }
}

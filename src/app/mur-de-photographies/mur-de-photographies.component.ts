import { Component, OnInit } from '@angular/core';
import { IPhotographie } from './photographie';

@Component({
  selector: 'app-mur-de-photographies',
  templateUrl: './mur-de-photographies.component.html',
  styleUrls: ['./mur-de-photographies.component.css'],
})
export class MurDePhotographiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.filteredMedias = this.medias;
    this.mediaFilter = '';
  }

  public title = 'Mur de photographies';
  public showBadge: boolean;
  private _mediaFilter = "";
  public filteredMedias: IPhotographie[] = [];

  public medias: IPhotographie[] = [
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
      mediaName: 'Marakech new palace',
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

  public get mediaFilter(): string {
    return this._mediaFilter;
  }

  public set mediaFilter(filter: string) {
    this._mediaFilter = filter;
    //Si (this.mediaFilter) contient une valeur à rechercher... on passe à l'étape suivante
    //Si cherche la valeur (this.mediaFilter) dans la liste  (this.filterMedias(this.mediaFilter))
    //Si aucune valeur dans(this.mediaFilter) on retourne le tableau initial (this.medias)
    this.filteredMedias = this.mediaFilter ? this.filterMedias(this.mediaFilter) : this.medias;
  }


  //On retourne un nouveau tableau filtré par rapport à criteria
  private filterMedias(criteria: string): IPhotographie[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.medias.filter(
      (media: IPhotographie) => media.mediaName.toLocaleLowerCase().indexOf(criteria) != -1
    )

    return res;
  }

  //Donne l'inverse de showBadge
  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;

  }
}

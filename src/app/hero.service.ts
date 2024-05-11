import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  friends = [
    {
      name: 'Castii',
      img: 'assets/img/hero02.jpg',
      prof: 'Healer',
    },
    {
      name: 'Hikari',
      img: 'assets/img/hero03.jpg',
      prof: 'Warrior',
    },
    {
      name: 'Temenos',
      img: 'assets/img/hero04.jpg',
      prof: 'Cleric',
    },
  ];

  constructor() {}

  addHero(friend) {}
}

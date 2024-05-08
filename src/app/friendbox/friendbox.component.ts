import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-friendbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friendbox.component.html',
  styleUrl: './friendbox.component.scss',
})
export class FriendboxComponent {
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
}

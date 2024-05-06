import { Component } from '@angular/core';
import { ProfileItemComponent } from '../profile-item/profile-item.component';

@Component({
  selector: 'app-proposal',
  standalone: true,
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.scss',
  imports: [ProfileItemComponent],
})
export class ProposalComponent {
  proposals = [
    {
      name: 'Castii',
      img: 'assets/img/hero02.jpg',
    },
    {
      name: 'Hikari',
      img: 'assets/img/hero03.jpg',
    },
    {
      name: 'Temenos',
      img: 'assets/img/hero04.jpg',
    },
  ];
}

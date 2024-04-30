import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { ProposalComponent } from './proposal/proposal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    HeroCardComponent,
    ProposalComponent,
  ],
})
export class AppComponent {
  title = 'devaka_anagular';

  images = [
    'assets/img/hero01.jpg',
    'assets/img/hero02.jpg',
    'assets/img/hero03.jpg',
    'assets/img/hero04.jpg',
  ];
  names = ['Agnea', 'Castii', 'Hikari', 'Temenos'];

  myAlert() {
    alert('Hello');
  }
}

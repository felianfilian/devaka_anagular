import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroCardComponent } from './hero-card/hero-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HeaderComponent, HeroCardComponent],
})
export class AppComponent {
  title = 'devaka_anagular';

  myAlert() {
    alert('Hello');
  }
}

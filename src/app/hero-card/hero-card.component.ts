import { Component, Input } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss',
})
export class HeroCardComponent {
  @Input() name: string = '';
  @Input() image: string = '';
  @Input() prof: string = '';
}

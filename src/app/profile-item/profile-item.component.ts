import { Component, Input } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-profile-item',
  standalone: true,
  imports: [],
  templateUrl: './profile-item.component.html',
  styleUrl: './profile-item.component.scss',
})
export class ProfileItemComponent {
  @Input() name = 'Agnea';
  @Input() img = 'assets/img/hero01.jpg';
  @Input() prof = 'Dancer';

  constructor(public hs: HeroService) {}
}

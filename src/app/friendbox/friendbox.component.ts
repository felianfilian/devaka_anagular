import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-friendbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friendbox.component.html',
  styleUrl: './friendbox.component.scss',
})
export class FriendboxComponent {
  constructor(public hs: HeroService) {}
}

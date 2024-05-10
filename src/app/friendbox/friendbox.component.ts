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
  constructor() {}
}

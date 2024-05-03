import { Component } from '@angular/core';
import { ProfileItemComponent } from '../profile-item/profile-item.component';

@Component({
  selector: 'app-proposal',
  standalone: true,
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.scss',
  imports: [ProfileItemComponent],
})
export class ProposalComponent {}

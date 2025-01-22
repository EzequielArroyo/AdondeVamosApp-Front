import { Component, input } from '@angular/core';
import { Activity } from '../../../core/models/Activity.model';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [NgIf, DatePipe],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css'
})
export class ActivityCardComponent {
  activity = input<Activity>();
  showEditButton = input<boolean>();
  

}

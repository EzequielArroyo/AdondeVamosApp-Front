import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css'
})
export class ActivityCardComponent {
  @Input() activity: Activity = {
    id: 0,
    title: '',
    category: '',
    date: '',
    location: '',
    participants: 0,
    maxParticipants: 0
  }
}

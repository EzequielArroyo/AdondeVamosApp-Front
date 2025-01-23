import { Component, input } from '@angular/core';
import { Activity } from '../../../core/models/Activity.model';
import { DatePipe, NgIf } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [NgIf, DatePipe, ButtonComponent],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.css'
})
export class ActivityCardComponent {
  activity = input<Activity>();
  showActionButtons = input<boolean>();
  
  test() {
    console.log('test');
  }
}

import { DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Activity } from '../../models/activity.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  activityList: Activity[]= []

  ngOnInit(): void {
    // Initialize with some sample data
    this.activityList = [
      {
        id: 1,
        title: 'Basketball Game',
        category: 'Sports',
        description: 'Friendly basketball match at the local court',
        date: '2024-02-20',
        time: '15:00',
        location: 'Local court',
        participants: 10,
        maxParticipants: 15
      },
      {
        id: 2,
        title: 'Guitar Workshop',
        category: 'Music',
        description: 'Learn basic guitar techniques',
        date: '2024-02-22',
        time: '18:00',
        location: 'Music School',
        participants: 5,
        maxParticipants: 10
      },
      {
        id: 3,
        title: 'Yoga Class',
        category: 'Fitness',
        description: 'Relaxing yoga session',
        date: '2024-02-25',
        time: '10:00',
        location: 'Yoga Studio',
        participants: 8,
        maxParticipants: 12
      }
    ];
  }
}

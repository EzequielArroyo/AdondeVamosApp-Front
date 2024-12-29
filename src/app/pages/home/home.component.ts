import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Activity } from '../../models/activity.model';
import { ActivityCardComponent } from "../../components/activity-card/activity-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, ActivityCardComponent],
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
        date: '2024-02-20T18:00:00',
        location: 'Local court',
        participants: 10,
        maxParticipants: 15
      },
      {
        id: 2,
        title: 'Guitar Workshop',
        category: 'Music',
        description: 'Learn basic guitar techniques',
        date: '2024-02-22T14:00:00',
        location: 'Music School',
        participants: 5,
        maxParticipants: 10
      },
      {
        id: 3,
        title: 'Yoga Class',
        category: 'Fitness',
        description: 'Relaxing yoga session',
        date: '2024-02-25T09:00:00',
        location: 'Yoga Studio',
        participants: 8,
        maxParticipants: 12
      }
    ];
  }
}

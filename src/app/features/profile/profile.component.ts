import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { User } from '../../core/models/User.model';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { ActivityCardComponent } from '../../shared/components/activity-card/activity-card.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, BadgeComponent,  ActivityCardComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user!: Observable<User>;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
 

}

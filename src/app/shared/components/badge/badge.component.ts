import { NgClass, NgIf } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent{
  badgeText = input.required<string>();
  colorClass = input<string>('');
  iconName = input<string>('');
  
  
  get iconSrc(): string | null {
    return this.iconName() ? `/${this.iconName()}.png` : null;
  }
}

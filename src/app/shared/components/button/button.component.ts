import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, input} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent{
  buttonIcon = input<string>();
  buttonText =  input<string>();
  buttonClass =  input<string>();
  
}

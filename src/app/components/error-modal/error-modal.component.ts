import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.css'
})
export class ErrorModalComponent {
  @Input() showModal!: boolean;
  @Input() errorMessage!: string;
  @Output() modalClosed = new EventEmitter<void>();

  closeModal(): void {
    this.modalClosed.emit();
  }
}

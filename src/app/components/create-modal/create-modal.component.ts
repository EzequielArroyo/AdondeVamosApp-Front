import { Component, effect, Input, Signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Activity } from '../../models/activity.model';
import { max } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-modal',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-modal.component.html',
  styleUrl: './create-modal.component.css'
})
export class CreateModalComponent {
  showModal: boolean = false;
  activityForm: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    
    this.activityForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      description: [''],
      date: ['', Validators.required],
      location: ['', Validators.required],
      maxParticipants: ['', [Validators.required, Validators.min(1)]]
      
  }); 
  }
  createActivity() {
    console.log(this.activityForm.value);
  }
  closeModal(){
  }
}

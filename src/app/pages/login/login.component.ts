import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from '../../models/loginRequest';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl:'./login.component.css'
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  
  
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',Validators.required]
  });
  
  hasErrors(controlName: string, errorname: string){
    return this.loginForm.get(controlName)?.hasError(errorname) && this.loginForm.get(controlName)?.touched;

  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginForm.reset();
      this.router.navigate(['']);
    } else {
      this.loginForm.markAllAsTouched();
      alert("Invalid credentials");
    }
  }
}

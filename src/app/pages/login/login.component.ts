import { NgIf } from '@angular/common';
import { Component, inject, signal} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { LoginRequest } from '../../models/loginRequest';
import { User } from '../../models/user.model';
import { ErrorModalComponent } from "../../components/error-modal/error-modal.component";
import { LoginResponse } from '../../models/loginResponse';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, ErrorModalComponent],
  templateUrl: './login.component.html',
  styleUrl:'./login.component.css'
})
export class LoginComponent {
  
  private router = inject(Router);
  private formBuilder = inject(FormBuilder);
  private loginService = inject(LoginService);

  showErrorModal = signal(false)
  errorMessage = signal('');

  loginForm = this.formBuilder.group({
    username: ['', Validators.required,],
    password: ['', Validators.required],
  });
  
  hasErrors(controlName: string, errorname: string){
    return this.loginForm.get(controlName)?.hasError(errorname) && this.loginForm.get(controlName)?.touched;

  }
  loginResquest(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
        next: (data: LoginResponse) => {
          console.log(data.userData);
          
        },
        error: (error) => {
          console.error(error);
          this.showErrorModal.set(true);
          this.errorMessage.set(error);

        },
        complete: () => {
          console.log(' login complete');
          this.router.navigate(['']);
          this.loginForm.reset();
        }
      });
      
    } else {
      this.loginForm.markAllAsTouched();
      alert("Invalid credentials");
    }
  }
}

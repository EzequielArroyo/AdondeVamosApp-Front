import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user/user.service';
import { environment } from '../../../environments/environment';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/auth/login.service';
import { NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private router = inject(Router);
  private loginService = inject(LoginService);
  private userService = inject(UserService);
  private formBuilder = inject(FormBuilder);

  errorMessage: String = "";
  user: User = this.userData;
  editMode: boolean = false;

  registerForm = this.formBuilder.group({
    id: [''],
    username: ['', Validators.required,],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor() {
    this.userService.getUser(environment.userId).subscribe({
      next: (userData) => {
        this.registerForm.controls.id.setValue(userData.id.toString());
        this.registerForm.controls.username.setValue(userData.username)
        this.registerForm.controls.firstname.setValue(userData.firstname);
        this.registerForm.controls.lastname.setValue(userData.lastname);
        this.registerForm.controls.email.setValue(userData.email);
      },
      error: (errorData) => {
        this.errorMessage = errorData
      },
      complete: () => {
        console.info("User Data ok");
      }
    })
  }
  get isUserLoggedIn(): boolean {
    return this.loginService.userLoginOn();
  }

  get userData(): User {
    return this.loginService.userData();
  }

  hasErrors(controlName: string, errorname: string) {
    return this.registerForm.get(controlName)?.hasError(errorname) && this.registerForm.get(controlName)?.touched;

  }
  
  savePersonalDetailsData() {
    if (this.registerForm.valid) {
      this.userService.updateUser(this.registerForm.value as unknown as User).subscribe({
        next: (data: string) => {
          this.editMode = false;
          
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log(' user update complete');
          this.router.navigate(['/profile']);
        }
      }
       
      );
    }
  }
}

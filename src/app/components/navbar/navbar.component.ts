import { Component, inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/auth/login.service';
import { User } from '../../models/user.model';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  private loginService = inject(LoginService);

  get isUserLoggedIn(): boolean {
    return this.loginService.userLoggedIn$();
  }

  get userData(): User {
    return this.loginService.userData$()
  }
  
  logOut(){
    this.loginService.logout();

  }
}

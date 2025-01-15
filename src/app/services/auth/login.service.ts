import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { LoginRequest } from '../../models/loginRequest';
import { environment } from '../../../environments/environment';
import { LoginResponse } from '../../models/loginResponse';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLoginOn = signal<boolean>(!!sessionStorage.getItem('token'));
  userData = signal<User>({ id: 0, username: '', firstname: '', lastname: '', email: '' }); 

  userLoggedIn$ = computed(() => this.userLoginOn());
  userData$ = computed(() => this.userData());

  private http = inject(HttpClient);

  constructor() {
    // Check if there is a token in sessionStorage
    const token = sessionStorage.getItem('token');
    if (token) {
      this.fetchUserData(token);
    }
  }

  public login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.urlHost+"auth/login",credentials).pipe(
      tap((data: LoginResponse) => {
        sessionStorage.setItem('token', data.token);
        this.userData.set({ id: data.userData.id, username: data.userData.username, firstname: data.userData.firstname, lastname: data.userData.lastname, email: data.userData.email });
        this.userLoginOn.set(true);
      }),
      map((data: LoginResponse) => data),
      catchError(this.handleError)
    )
  }
  
  public logout(): void {
    sessionStorage.removeItem('token');
    this.userData.set({ id: 0, username: '', firstname: '', lastname: '', email: '' });
    this.userLoginOn.set(false);
  }
  private fetchUserData(token: string): void {
    this.http.get<User>(environment.urlHost + 'auth/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }).pipe(
      tap((user: User) => {
        // Update user data in state
        this.userData.set(user);
        this.userLoginOn.set(true);
      }),
      catchError((error) => {
        console.error('Failed to fetch user data:', error);
        this.logout(); // Clear session on failure
        return throwError(() => new Error('Failed to fetch user data'));
      })
    ).subscribe();
  }
    
  private handleError(error: HttpErrorResponse) {
    if(error.status === 0 ){
      console.error('An error occurred:', error);
    }else{
      console.error("Backend returned code", error)
    }
    return throwError(() => new Error('Something bad happened, please try again later.'));
  }
  get userToken(): string{
    const token = sessionStorage.getItem('token');
    return token ? token.toString() : '';
  }
} 
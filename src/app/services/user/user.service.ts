import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';
import { UpdateRequest } from '../../models/updateRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);

  getUser(id: number): Observable<User> {
    return this.http.get<User>(environment.urlApi + '/user/' + id);
  }
  updateUser(user: User): Observable<any> {
    console.log("llega al uodateUser");
    const userRequest: UpdateRequest = {
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: "test"

    }
    return this.http.post(`${environment.urlApi}/user/${user.id}`, userRequest,
      {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token') || ''}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        responseType: 'text' as 'json'
      }
    ).pipe(
      catchError(this.handleError)
    )
    
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened, please try again later.'));
  }
}

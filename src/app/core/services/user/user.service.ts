import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/User.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataUrl = 'userMock.json';
  private http = inject(HttpClient);
  constructor() { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.dataUrl)
  }  
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsHomeService {

  constructor() { }
  isHome = signal<number>(0);

}


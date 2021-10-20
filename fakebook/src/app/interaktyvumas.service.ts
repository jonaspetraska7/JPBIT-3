import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InteraktyvumasService {

  private _feedoZinute = new Subject<string>();
  feedoZinute$ = this._feedoZinute.asObservable();


  constructor() { }

  sendMessage(message: string) {
    this._feedoZinute.next(message);
  }

}



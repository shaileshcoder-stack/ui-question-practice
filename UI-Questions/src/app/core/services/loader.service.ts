import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loadingsubject =new BehaviorSubject <boolean>(false);
  public loading$: Observable <boolean> = this.loadingsubject.asObservable();

  constructor() { }

  show(){
    this.loadingsubject.next(true)
  }
  hide(){
    this.loadingsubject.next(false)
  }
}

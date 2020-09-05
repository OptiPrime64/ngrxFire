import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  message$: Observable<string>

  constructor(private store: Store<AppState>){

  }

  spanishMessage(){
    this.store.dispatch({type: 'SPANISH'})
  }

  frenchMessage(){
    this.store.dispatch({type: 'FRENCH'})
  }
  englishMessage(){
    this.store.dispatch({type: 'ENGLISH'})
  }

  ngOnInit(){
    this.message$ = this.store.select('message');
  }

}

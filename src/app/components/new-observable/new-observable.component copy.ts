import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent implements OnInit{

  constructor(){ }

  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      for(let i=0; i<5; i++){
        observer.next(i);
      }
      observer.complete();
    });

    let observer = {
      next: (data: number) => console.log(data),
      error: (error: string) => console.log(error),
      complete: () => console.log("Complete!!!!!")
    }
    newObservable.subscribe();
  }
}

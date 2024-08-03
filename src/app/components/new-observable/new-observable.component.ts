import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer4 } from 'src/app/services/observer4';

@Component({
  selector: 'app-new-observable',
  templateUrl: './new-observable.component.html',
  styleUrls: ['./new-observable.component.css']
})
export class NewObservableComponent implements OnInit{

  constructor(){ }

  ngOnInit(): void {
    const newObservable = new Observable<number>((observer) => {
      for(let i=0; i<=5; i++){
        if(i===4){
          observer.error("unknown error, i value is 4")
        }
        observer.next(i);
      }
      observer.complete();
    });

    let observer = {
      next: (data: number) => console.log('Observer 1: '+ data),
      error: (error: string) => console.log(error),
      complete: () => console.log("Complete!!!!!")
    };
    newObservable.subscribe(observer);

    newObservable.subscribe({
      next: (data: number) => console.log('Observer 2: ' + data),
      error: (error: string) => console.log(error),
      complete: () => console.log("Complete!!!!!")
    });

    newObservable.subscribe(
      (data) => console.log('Observer 3: ' + data),
      (error) => console.log("error"),
      () => console.log("Done")
  );

    newObservable.subscribe(new Observer4());
  }
}

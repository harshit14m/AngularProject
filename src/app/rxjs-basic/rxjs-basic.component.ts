import { AfterViewInit, Component } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-rxjs-basic',
  templateUrl: './rxjs-basic.component.html',
  styleUrls: ['./rxjs-basic.component.css']
})
export class RxjsBasicComponent implements AfterViewInit{
  
  title = 'rxjs-basic';
  
  postArray = [
    {title: 'leela1', description: 'leela1 description'},
    {title: 'leela2', description: 'leela2 description'},
    {title: 'leela3', description: 'leela3 description'}
  ];

  postArrayObservable$ = from(this.postArray);

  studentList = ['Mark', 'Sita', 'Ram', 'Lisa'];
  studentListObservable$ = of(this.studentList);

  promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("Resolve the promise. Sending data");
    }, 3000);
  })


  promiseObservable$ = from(this.promise);


  constructor(){
    this.postArrayObservable$.subscribe({
      next: (data)=>console.log(data),
      error: (error) => console.log(error),
      complete: ()=>console.log("complete done!")
    });
    this.studentListObservable$.subscribe({
      next: (studentData) => console.log(studentData),
      error: (error) => console.log(error),
      complete: () => console.log("Done!!")
    });

    this.promiseObservable$.subscribe({
      next: (data)=>console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("complete! Promise done")
    })
  }
  ngAfterViewInit(): void {
    fromEvent(document.getElementById('click-button')!, 'click').subscribe({
      next: (data)=>console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("complete! Promise done")
    })
  }
  
  
  
}

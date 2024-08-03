import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {
  
  agents: Observable<string> | undefined;
  agentName: string | undefined;

  studentList = ['Mark', 'Sita', 'Ram', 'Lisa'];
  students$: Observable<string[]> = of(this.studentList);
  studentName: Observable<string> = of('Ram');
  studentObj = {
    id: 10,
    name: "Harshit"
  }

  student$: Observable<any> = of(this.studentObj);

  constructor() { }

  ngOnInit(): void {

    
    this.students$.subscribe((data) =>{
      console.log(data);
    })

    this.studentName.subscribe((data) =>{
      console.log(data);
    })

    this.student$.subscribe((data)=>{
      console.log(data);
    })

    /*
    this.agents = new Observable(
      function(observer){
        try {
          observer.next("Ram");
          setInterval(()=>{
            observer.next("Mark");
          }, 2000);
          setInterval(()=>{
            observer.next("Sita");
          },4000);
        } catch (e) {
          observer.error(e); 
        }
      }
    );
    this.agents.subscribe(data=>{
      this.agentName = data;
    })*/
  } 
}

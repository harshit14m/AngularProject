import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-pr',
  templateUrl: './rxjs-pr.component.html',
  styleUrls: ['./rxjs-pr.component.css']
})
export class RxjsPrComponent implements OnInit{

  agents: Observable<string> | undefined
  agentName: string | undefined
  constructor(){}

  ngOnInit(): void {
    this.agents = new Observable(
      function(observer){
        try {
          observer.next('Harshit');
          setInterval(()=>{
            observer.next('Sharma');
          }, 2000);
          setInterval(()=>{
            observer.next('Goldy');
          },4000);
        } catch (e) {
          observer.error(e);
        }
      }
    );
    this.agents.subscribe(data =>{
      this.agentName = data;
    })
    
  }

}

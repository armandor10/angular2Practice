import { Component, OnInit, Injectable,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Injectable()
export class TaskService {
  tasks = ["First Task","Second Task","Third Task","Fourth Task"];
}

@Component({
  selector:'tasks',
  providers:[TaskService],
  template:`
    <h4></h4>
    <ul>
      <li *ngFor = "let task of taskService.tasks">
        {{task}}
      </li>
    </ul>
  `
})
export class TasksComponent implements OnInit{
    constructor(public taskService:TaskService){}
    ngOnInit(){}
}

@Component({
  selector: 'app-root',
  providers:[],
  template:`
    <h4 [class.re] = "true" >This is the task componet</h4>
    <h4 [class.blue] = "true" >This is the task componet</h4>
    <h4 [ngClass] = "{ re:toggle, blue:!toggle}" >This is the task componet</h4>
    <h5 *ngIf= "toggle"> Hello world! </h5>
    <ul>
      <li *ngFor = "let person of people">
        {{person}}
      </li>
    </ul>
    <button (click)="clicked()" >Click me!</button> <br><br>
    <input [(ngModel)]="sample" />
    <span> {{sample}} </span> <br><br>
    Otro con directiva<br><br><br><br>Router<br>
    <a routerLink="/tasks">Tasks</a><br>
    <a routerLink="/other">Other</a>
    <router-outlet></router-outlet> 
  `,
  styles:[ ".re {color: red}", ".blue {color:blue}" ]
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  toggle: boolean = true;
  people:Array<string> = ["person 1","person 2","person 3"];

  sample:string = "";

  ngOnInit() {}

  clicked(){
    alert("Button clicked!");
  }

}


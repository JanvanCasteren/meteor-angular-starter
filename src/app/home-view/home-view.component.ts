import {Component, OnInit} from '@angular/core';
import {Tasks, Task} from '../../../api/imports/collections/tasks';
import {MeteorObservable} from 'meteor-rxjs';
import {MethodObservable} from '../../../api/imports/other/method-observable';
import {Observable, timer} from 'rxjs';
import {finishTask, removeTask} from '../../../api/imports/methods/task-methods';
import {debounce} from 'rxjs/operators';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  // we use debounce to lower the amounts of emits
  tasks$: Observable<Task[]> = Tasks.find({}).pipe(debounce(() => timer(10)));
  // to see the difference, simply compare with:
  // tasks$: Observable<Task[]> = Tasks.find({});
  description = '';
  updateCnt = 0;

  constructor() {
    MeteorObservable.subscribe('tasks').subscribe();
    this.tasks$.subscribe((tasks) => {
      console.log('task count: ', tasks.length);
    	this.updateCnt++;
    });
  }

  ngOnInit() {
  }

  addTask() {
    MeteorObservable.call('tasks.add', {description: this.description})
      .subscribe(() => {
        this.description = '';
      }, (error) => {
        console.log(error);
      });
  }

  finishTask(id) {
    return MethodObservable(finishTask, {id})
      .subscribe(() => {
      }, (error) => {
        console.log(error);
      });
  }

  removeTask(id) {
    return MethodObservable(removeTask, {id})
      .subscribe(() => {
      }, (error) => {
        console.log(error);
      });
  }
}

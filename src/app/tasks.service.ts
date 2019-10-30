import {Injectable} from '@angular/core';
import {Observable, timer} from 'rxjs';
import {Task, Tasks} from '../../api/imports/collections/tasks';
import {debounce} from 'rxjs/operators';
import {MeteorObservable} from 'meteor-rxjs';
import {MethodObservable} from '../../api/imports/other/method-observable';
import {finishTask, removeTask} from '../../api/imports/methods/task-methods';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks$: Observable<Task[]> = Tasks.find({}).pipe(debounce(() => timer(10)));

  constructor() {
    MeteorObservable.subscribe('tasks').subscribe();
  }

  addTask(description) {
    return MeteorObservable.call('tasks.add', {description});
  }

  finishTask(id) {
    return MethodObservable(finishTask, {id});
  }

  removeTask(id) {
    return MethodObservable(removeTask, {id});
  }
}

import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {TasksService} from '../tasks.service';

// this component is completely unaware of Meteor
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  taskDescriptions$;
  description = '';
  updateCnt = 0;

  constructor(
    private tasksService: TasksService
  ) {
    // since our collection is an rxjs observable, we can apply
    // any rxjs operator on it
    this.taskDescriptions$ = this.tasksService.tasks$
      .pipe(map(tasks => tasks.map(task => task.description).sort()));
    // and subscribe to it
    this.tasksService.tasks$.subscribe(() => {
        this.updateCnt++;
      });
  }

  ngOnInit() {
  }

  addTask() {
    this.tasksService.addTask(this.description).subscribe(() => {
        this.description = '';
      }, (error) => {
        console.log(error);
      });
  }

  finishTask(id) {
    this.tasksService.finishTask(id).subscribe(() => {
      }, (error) => {
        console.log(error);
      });
  }

  removeTask(id) {
    this.tasksService.removeTask(id).subscribe(() => {
      }, (error) => {
        console.log(error);
      });
  }
}

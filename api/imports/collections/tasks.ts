import {MongoObservable} from 'meteor-rxjs';

export class Task {
  _id?: string;
  description: string;
  finished = false;
}

export const Tasks = new MongoObservable.Collection<Task>('tasks');

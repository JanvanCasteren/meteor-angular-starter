import {ObservableCursor} from 'meteor-rxjs';
import {Task, Tasks} from '../../../imports/collections/tasks';

Meteor.publish('tasks', function (): ObservableCursor<Task> {
  return Tasks.find({});
});

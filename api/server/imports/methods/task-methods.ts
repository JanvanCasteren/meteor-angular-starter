import {Meteor} from 'meteor/meteor';
import {Tasks} from '../../../imports/collections/tasks';

Meteor.methods({
  // task.add method is implemented server only
  'tasks.add'(newTask) {
    console.log('tasks.add');
    return Tasks.collection.insert(newTask);
  }
  // task.finish and task.remove methods are
  // implemented in /api/imports/methods/task-methods
});

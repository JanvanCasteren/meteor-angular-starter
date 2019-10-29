import {Tasks} from '../collections/tasks';

export const finishTask = new ValidatedMethod({
  name: 'tasks.finish',
  validate: null,
  // run function receives object, we obtain the taskId
  // by destructering
  run({id}) {
    console.log('tasks.finish');
    return Tasks.collection.update(id, {
      $set: {
        finished: true
      }
    });
  }
});
export const removeTask = new ValidatedMethod({
  name: 'tasks.remove',
  validate: null,
  run({id}) {
    console.log('tasks.remove');
    return Tasks.collection.remove({_id: id});
  }
});
// task.add method is implemented only server side
// see /api/server/imports/methods/task-methods

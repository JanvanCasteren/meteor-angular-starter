import {Observable} from 'rxjs';
import {Subscriber} from 'rxjs';
import {Meteor} from 'meteor/meteor';
import { forkZone } from 'meteor-rxjs/dist/utils';

// Meteor-rxjs does not provide an Obervable wrapper for validated methods,
// wo we created our own
export const MethodObservable = function<T>(method: any, args?: any) {

    const zone = forkZone();

    return Observable.create((observer: Subscriber<Meteor.Error | any>) => {
        method.call(args,  (error: Meteor.Error, result: T) => {
                zone.run(() => {
                    error ? observer.error(error) :
                        observer.next(result);
                    observer.complete();
                });
            }
        );
    });
};

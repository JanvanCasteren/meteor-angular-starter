# Meteor-Angular Starter

## Introduction
This repository is a skeleton application for a Meteor-Angular application.
It uses the Meteor build system only to build the server and uses Angular Cli to build the client.
Meteor modules that are needed in the client are compiled as a single bundle 
with the help of [Meteor Client Bundler](https://github.com/Urigo/meteor-client-bundler).

## Example: Observable Task collection with Meteor-rxjs
The app contains one example workflow: A Task Collection that is turned into an Rxjs Observable by means of  [Meteor-Rxjs](https://github.com/Urigo/meteor-rxjs).
Included as well are examples of server-only and client-server Method calls wrapped in Observables. 
Using Rxjs gives you the opportunity to program in a reactive style and to minimise the Meteor dependencies in your code, which I think is a good thing.

## How to install and use
- clone the repository
- open two terminals: one in the root folder and one in the api folder, make sure you have **Node, NPM  and Angular CLI 7** installed

In the api folder do:
- give the command ```meteor npm install```  (this presumes you already have installed Meteor on your system, see https://www.meteor.com/install)
- when installation is finished give the command ```meteor``` (this will finish the setup and start the server)

In the root folder you do
- give the command ```npm install```, and after installation has finished
- build the client side Meteor Bundle with ```npm run bundle-meteor-client:local```.
- start angular with the command ```npm run start``` or ```ng serve```
- the application will be running at http://localhost:4200/

### Main dependencies are
- Meteor (version 1.8.1)
- Angular (version 7.2, version 8 uses rxjs version 6.4 which does not play well with meteor-rxjs)
- Meteor-rxjs (version 1.4.1)
- meteor-client-bundler
- angular2-meteor-polyfills
- meteor-node-stubs
- various @type packages (see both package.json files)

The following imports are included in the main entry files of the client application (src/main.ts and src/test.ts)
```
import { Meteor } from 'meteor/meteor';
import 'angular2-meteor-polyfills';
import './meteor-bundles/meteor-client.local';
```
The last two dependencies (angular2-meteor-polyfills and meteor-node-stubs) are taken over from other projects. I didn't check 
yet if and why they are really needed. 

### Typescript
The most difficult part in setting up this project was getting rid of typescript complaining about dependencies.
I have taken ideas and input from various sides until I finally had a version that would compile. Unfortunately,
I didn't exactly note down which steps I followed to arrive there. At least some of the parts are:

 - include @types/meteor only in Meteor's package.json and not in Angular's. Angular Cli knows about meteor typings 
 by a reference to the api-folder in ```src/typings.d.ts```;
 - manually adding some meteor-related types in ```api/typings.d.ts```

## Miscellaneous

### Html file type association in Webstorm
Because of the mixed nature of the project (Meteor and Angular), the association of html file type with Angular is not 
automatically create and even sometimes gets lost in Webstorm.

To fix this, adjust the following in Settings:

    Editor - File Types - Angular Html Template -> add pattern *.html

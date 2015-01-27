# React in Angular

This repo is simply an example of using React in AngularJS. There are three tags. Check them out in order to see the
process of moving an Angular app to React. Kinda fun and stuff :-)

Note: In an effort to make the transition from angular to react as smooth as possible, some of the file structure/naming
may resemble angular a little more than react (for example `MainCtrl`).

## To use

```
$ git clone https://github.com/kentcdodds/react-in-angular.git
$ cd react-in-angular
$ git checkout step1
$ npm install
$ webpack-dev-server --content-base app
```

Go to localhost:8080 and play around a bit. This is a 100% angular app.

```
$ git checkout step2
$ npm install
$ webpack-dev-server --content-base app
```

Go to localhost:8080 and play around a bit. This is a 50% angular app, 50% react app.

```
$ git checkout step3
$ npm install
$ webpack-dev-server --content-base app
```
Go to localhost:8080 and play around a bit. This is a 100% react app.

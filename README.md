# Welcome to the NetAnimations App project.

NetAnimations is a mobile app built with [Ionic Framework](http://ionicframework.com/).

## How to build this project

*This template does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

### With the Ionic tool:

Take the name after `ionic-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myApp sidemenu
```

Then, to run it, cd into `netanimations-app` and run:

```bash
$ ionic platform add android
$ ionic build android
$ ionic emulate android
```

Substitute android for ios if on a Mac.

## Demo
http://plnkr.co/edit/0RXSDB?p=preview

## Issues
If you do find an issue or an error please go to [issues](https://github.com/jorool/netanimations-app/issues).
On the other hand, pull requests are aways welcome here!
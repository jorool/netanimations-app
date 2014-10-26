This is then NetAnimations App project.

NetAnimations is an mobile app made with [Ionic Framework](http://ionicframework.com/).

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
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.

## Demo
http://plnkr.co/edit/0RXSDB?p=preview

## Issues
If you do find an issue or an error please go to [issues](https://github.com/jorool/netanimations-app/issues).
On the other hand, pull requests are welcome here!
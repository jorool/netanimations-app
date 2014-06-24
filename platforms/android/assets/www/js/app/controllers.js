angular.module('netanimations.controllers', [])

    .controller('AppCtrl', function($scope) {
    })

    .controller('PlaylistsCtrl', function($scope) {
        $scope.playlists = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];
    })

    .controller('AnimationsCtrl', function($scope, $stateParams) {

    })

    .controller('ConfigCtrl', function($scope, $stateParams, $translate) {

        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };

    })

    .controller('PlaylistCtrl', function($scope, $stateParams) {

    })

    .controller('ContactCtrl', function($scope) {

    })

    .controller('ThreeWayHandshakeCtrl', function($scope, $ionicPopup) {

        $scope.showPresentation = true;

        $scope.start = function() {
            $scope.showPresentation = false;
        };

        $scope.teste = function() {

            //create a TimelineLite instance
            var tl = new TimelineLite();


            tl.to("pacote", 1, {className:"ng-show"});
            tl.to("pacote", 2, {top: "1000px"});

            tl.call(function() {
                tl.pause();

                $ionicPopup.alert({
                    title: 'Don\'t eat that!',
                    template: 'It might taste good'
                }).then(function(result) {
                    tl.resume();
                });

            });


            tl.to("pacote", 2, {width:"50%"});

//add another sequenced tween (by default, tweens are added to the end of the timeline which makes sequencing simple)
            tl.to("pacote", 1, {height:"300px", ease:Elastic.easeOut});

//offset the next tween by 0.75 seconds so there's a gap between the end of the previous tween and this new one
            tl.to("pacote", 1, {opacity:0.5}, "+=0.75");

//overlap the next tween with the previous one by 0.5 seconds (notice the negative offset at the end)
            tl.to("pacote", 1, {backgroundColor:"#FF0000"}, "-=0.5");

//animate 3 elements (e1, e2, and e3) to a rotation of 60 degrees, and stagger their start times by 0.2 seconds


//then call myFunction()


            //tl.staggerTo(["pacote"], 1, {rotation:60}, 0.2);


            tl.call(function() {
                $ionicPopup.alert({
                    title: '=)',
                    template: 'acabou'
                });
            });


//now we can control the entire sequence with the standard methods like these:
            //tl.pause();
            //tl.resume();
            //tl.restart();
            tl.play();
            //tl.reverse();

//jump to exactly 2.5 seconds into the animation
            //tl.seek(2.5);

//slow down playback to 10% of the normal speed
            //tl.timeScale(0.1);



            //TweenLite.to("pacote", 0, {className:"ng-show", width:"50px"});
            //TweenLite.to("pacote", 1, {width:100, ease:Linear.easeNone});


            //TweenLite.to("server", 0.5, {width:100});


        };
    })

    .controller('AboutCtrl', function($scope, $stateParams) {

    });

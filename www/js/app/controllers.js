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
            animation();
        };

        function animation() {

            var tl = new TimelineLite();

            tl.delay(2);

            tl.call(function() {
                tl.pause();
                $ionicPopup.alert({
                    title: "{{'STEP_1' | translate}}",
                    template: "{{'TWHS_STEP_1' | translate}}"
                }).then(function(result) {
                    tl.resume();
                });
            });

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
            tl.to("pacote", 1, {height:"300px", ease:Elastic.easeOut});
            tl.to("pacote", 1, {opacity:0.5}, "+=0.75");
            tl.to("pacote", 1, {backgroundColor:"#FF0000"}, "-=0.5");

            tl.call(function() {
                $ionicPopup.alert({
                    title: '=)',
                    template: 'acabou'
                });
            });

        };
    })

    .controller('AboutCtrl', function($scope, $stateParams) {

    });

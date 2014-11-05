angular.module('netanimations.purealoha', [])

    .controller('PureAlohaCtrl', function($scope, $stateParams, $ionicPopup) {
        TweenLite.defaultEase = Power1.easeInOut;

        $scope.end = false;

        var segment1 = "#segment-1";
        var segment2 = "#segment-2";
        var initialPosition1 = {top: "53.5px", left: "168px"};
        var initialPosition2 = {top: "242px", left: "138px"};
        var rotate90 = {rotation: 90};
        var rotate0 = {rotation: 0};
        var hide = {opacity: 0};
        var show = {opacity: 1};
        var sendDown = {top: "+=150px"};
        var sendRight = {left: "+=124px"};
        var sendLeft = {left: "-=124px"};

        var tl = new TimelineMax();

        $scope.restart = function () {
            tl.seek(0);
            $scope.end = false;
        };

        tl.to(segment1, 0, initialPosition1);
        tl.to(segment2, 0, hide);
        tl.to(segment2, 0, initialPosition2);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_1' | translate}}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy step - do not remove
        tl.to('.animationFrame', 0.5, {x: 0});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_2' | translate}}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy step - do not remove
        tl.to('.animationFrame', 0.5, {x: 0});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_3' | translate}}"
            }).then(function() {
                tl.resume();
            });
        });

        //Host A sends first segment
        tl.to(segment1, 2, sendRight);
        tl.to(segment1, 0.5, rotate90);
        tl.to(segment1, 2, sendDown);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_4' | translate}}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy step - do not remove
        tl.to('.animationFrame', 0.5, {x: 0});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_5' | translate}}"
            }).then(function() {
                tl.resume();
            });
        });

        //Host B sends a segment and there's a colision
        tl.to(segment2, 0.5, show);
        tl.to(segment2, 2, sendRight);
        tl.to(segment1, 2, {top:"+=35px", delay: -2});
        tl.to(segment1, 1, {scale:0, opacity:0});
        tl.to(segment2, 1, {scale:0, opacity:0, delay: -1});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_6' | translate}}"
            }).then(function() {
                tl.resume();
            });
        });

        //Host A sends the segment to Host C
        tl.to(segment1, 0, initialPosition1);
        tl.to(segment1, 0, rotate0);
        tl.to(segment1, 0, {scale: 1, opacity: 1});
        tl.to(segment1, 2, sendRight);
        tl.to(segment1, 0.5, rotate90);
        tl.to(segment1, 4, {top: "+=383px"});
        tl.to(segment1, 0.5, rotate0);
        tl.to(segment1, 2, sendLeft);
        tl.to(segment1, 0.5, hide);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_7' | translate}}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy step - do not remove
        tl.to('.animationFrame', 0.5, {x: 0});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_8' | translate}}"
            }).then(function() {
                tl.resume();
            });
        });

        //Host B sends segment to Host C
        tl.to(segment2, 0, initialPosition2);
        tl.to(segment2, 0, rotate0);
        tl.to(segment2, 0, {scale: 1, opacity: 1});
        tl.to(segment2, 2, sendRight);
        tl.to(segment2, 0.5, rotate90);
        tl.to(segment2, 2, {top: "+=195px"});
        tl.to(segment2, 0.5, rotate0);
        tl.to(segment2, 2, sendLeft);
        tl.to(segment2, 1, hide);

        //end
        tl.call(function() {
            $ionicPopup.alert({
                title: 'Fim',
                template: "{{'ANIMATION_END' | translate}}"
            });
        });

        $scope.end = true;
    });
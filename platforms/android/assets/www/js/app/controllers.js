angular.module('netanimations.controllers', [])

    .controller('AppCtrl', function($scope) {
    })

    .controller('AnimationsCtrl', function($scope, $stateParams) {

    })

    .controller('ConfigCtrl', function($scope, $stateParams, $translate) {

        $scope.changeLanguage = function (key) {
            $translate.use(key);
        };

    })

    .controller('ContactCtrl', function($scope) {

    })

    .controller('ThreeWayHandshakeCtrl', function($scope, $ionicPopup) {

        $scope.showPresentation = true;
        $scope.end = false;

        var tl = new TimelineLite();

        $scope.start = function() {
            $scope.showPresentation = false;
            $scope.end = false;
            buildAnimation();
            tl.seek(0);
        };

        $scope.restart = function () {
            tl.stop();
            $scope.showPresentation = true;
        };

        function buildAnimation() {
            //initial position
            tl.to("pacote", 0, {x:230, y:30, width:"50px"});
            //tl.set("pacote", {xPercent:-50, yPercent:-50});

            tl.call(function() {
                tl.pause();
                $ionicPopup.alert({
                    title: "Passo 1",
                    template: "{{'TWHS_STEP_1' | translate}}"
                }).then(function(result) {
                    tl.resume();
                });
            });

            //zoom +
            tl.to("pacote", 2, {width:300, x:70, className:"ng-show"});

            tl.call(function() {
                tl.pause();
                $ionicPopup.alert({
                    title: "Primeiro pacote",
                    template: "Porta origem: TCP 1026<br/>"+
                        "Porta destino: TCP 524<br/>"+
                        "Nº de sequência: SEQ=0<br/>"+
                        "Tam. da janela: WIN=8192bytes<br/>"+
                        "Flag SYN: SYN=1<br/>"+
                        "Flag ACK: ACK=0<br/>"
                }).then(function(result) {
                    tl.resume();
                });
            });

            //rotate and zoom -
            tl.to("pacote", 1, {width:50, x:180, rotation:-90});
            //send
            tl.to("pacote", 3, {y:500});
            //hide
            tl.to("pacote", 0, {className:"ng-hide"});

            tl.call(function() {
                tl.pause();
                $ionicPopup.alert({
                    title: "Passo 2",
                    template: "{{'TWHS_STEP_2' | translate}}"
                }).then(function(result) {
                    tl.resume();
                });
            });

            //show
            tl.to("pacote", 0, {className:"ng-show", rotation:0});
            //rotante and zoom +
            tl.to("pacote", 1, {width:300, x:70});

            tl.call(function() {
                tl.pause();
                $ionicPopup.alert({
                    title: "Segundo pacote",
                    template: "Porta origem: TCP 524<br/>"+
                        "Porta destino: TCP 1026<br/>"+
                        "Nº de sequência: SEQ=0<br/>"+
                        "Tam. da janela: WIN=32768bytes<br/>"+
                        "Flag SYN: SYN=1<br/>"+
                        "Flag ACK: ACK=1<br/>"
                }).then(function(result) {
                    tl.resume();
                });
            });

            //rotate and zoom -
            tl.to("pacote", 1, {width:50, x:180, rotation:+90});
            //send
            tl.to("pacote", 3, {y:30});
            //hide
            tl.to("pacote", 0, {className:"ng-hide"});

            tl.call(function() {
                tl.pause();
                $ionicPopup.alert({
                    title: "Passo 3",
                    template: "{{'TWHS_STEP_3' | translate}}"
                }).then(function(result) {
                    tl.resume();
                });
            });

            //show
            tl.to("pacote", 0, {className:"ng-show", rotation:0});
            //zoom +
            tl.to("pacote", 1, {width:300, x:70});

            tl.call(function() {
                tl.pause();
                $ionicPopup.alert({
                    title: "Terceiro pacote",
                    template: "Porta origem: TCP 524<br/>"+
                        "Porta destino: TCP 1026<br/>"+
                        "Nº de sequência: SEQ=0<br/>"+
                        "Tam. da janela: WIN=32768bytes<br/>"+
                        "Flag SYN: SYN=0<br/>"+
                        "Flag ACK: ACK=1<br/>"
                }).then(function(result) {
                    tl.resume();
                });
            });

            //rotate and zoom -
            tl.to("pacote", 1, {width:50, x:180, rotation:-90});
            //send
            tl.to("pacote", 3, {y:500});

            tl.call(function() {
                $ionicPopup.alert({
                    title: 'Fim',
                    template: "{{'TWHS_END' | translate}}"
                }).then(function() {
                    $scope.end = true;
                });
            });

            //hide
            tl.to("pacote", 1, {className:"ng-hide"});

        };
    })

    .controller('SequenceNumberCtrl', function($scope) {
        TweenLite.defaultEase = Power1.easeInOut;

        var tl = new TimelineMax({paused:true});
        tl.set("#instructions", {text:"Start with 3 boxes <code>{position:absolute;}</code>", immediateRender:true})
            .set("#instructions", {text:"Move boxes to <code>{left:50%, top:50%}</code> to place their origins in the center"}, 0.0001)
            .to("#next", 0.1, {autoAlpha:0})
            .staggerTo(".box", 1, {left:"50%", top:"50%"}, 0.2)
            .to("#next", 0.1, {autoAlpha:1, yoyo:true, repeat:2})
            .addPause()

            .set("#instructions", {text:"Tween to <code>{xPercent:-50, yPercent:-50}</code> to get their centers aligned"}, "+=0.01")
            .to("#next", 0.1, {autoAlpha:0})
            .staggerTo(".box", 0.5, {xPercent:-50, yPercent:-50}, 0.1)
            .to("#next", 0.1, {autoAlpha:1, yoyo:true, repeat:2})
            .addPause()

            .set("#instructions", {text:"Now a <code>{x:150}</code> tween will always be 150px from the center"}, "+=0.01")
            .to("#next", 0.1, {autoAlpha:0})
            .staggerTo(".box", 0.5, {x:150}, 0.1)
            .to("#next", 0.1, {autoAlpha:1, yoyo:true, repeat:2})
            .addPause()

            .set("#instructions", {text:"Bonus! <code>{rotation:360}</code>, still uses a center transform origin!"}, "+=0.01")
            .to("#next", 0.1, {autoAlpha:0})
            .staggerTo(".box", 0.8, {rotation:360}, 0.2)
            .set("#next", {text:"restart"})
            .to("#next", 0.1, {autoAlpha:1});

        $scope.continue = function() {
            tl.play();
        };
    })

    .controller('AboutCtrl', function($scope, $stateParams) {

    });

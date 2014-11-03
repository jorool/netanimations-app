angular.module('netanimations.threewayhandshake', [])

    .controller('ThreeWayHandshakeCtrl', function($scope, $ionicPopup) {
        $scope.end = false;

        var tl = new TimelineLite();

        $scope.restart = function () {
            tl.seek(0);
            $scope.end = false;
        };

        TweenLite.defaultEase = Power1.easeInOut;

        var segment = ".segment";
        var zoomIn = {width: 300, left:"50%", top:"50%"};
        var zoomOutAndRotate90 = {width: 40, rotation: 90};
        var rotate0 = {rotation: 0};
        var hide = {className:"ng-hide"};
        var show = {className:"ng-show"};
        var sendBottom = {y: 420};
        var sendTop = {y: 10};

        //initial position
        tl.to(segment, 0, {x:10, width:"50px"});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Passo 1",
                template: "{{'TWHS_STEP_1' | translate}}"
            }).then(function(result) {
                tl.resume();
            });
        });

        tl.to(segment, 1, show);
        tl.to(segment, 2, zoomIn);

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

        tl.to(segment, 1, zoomOutAndRotate90);
        tl.to(segment, 3, sendBottom);
        tl.to(segment, 0, hide);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Passo 2",
                template: "{{'TWHS_STEP_2' | translate}}"
            }).then(function(result) {
                tl.resume();
            });
        });

        tl.to(segment, 0, rotate0);
        tl.to(segment, 1, show);
        tl.to(segment, 1, zoomIn);

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

        tl.to(segment, 1, zoomOutAndRotate90);
        tl.to(segment, 3, sendTop);
        tl.to(segment, 0, hide);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Passo 3",
                template: "{{'TWHS_STEP_3' | translate}}"
            }).then(function(result) {
                tl.resume();
            });
        });

        tl.to(segment, 0, rotate0);
        tl.to(segment, 0, show);
        tl.to(segment, 1, zoomIn);

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

        tl.to(segment, 1, zoomOutAndRotate90);
        tl.to(segment, 3, sendBottom);

        tl.call(function() {
            $ionicPopup.alert({
                title: 'Fim',
                template: "{{'TWHS_END' | translate}}"
            }).then(function() {
                $scope.end = true;
            });
        });

        //hide
        tl.to(segment, 1, hide);
    });
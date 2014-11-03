angular.module('netanimations.sequencenumber', [])

    .controller('SequenceNumberCtrl', function($scope, $ionicPopup) {
        TweenLite.defaultEase = Power1.easeInOut;

        $scope.end = false;

        var zoomIn = {width: 300, left:"50%", top:"50%"};
        var zoomOutAndRotate90 = {width: 40, rotation: 90};
        var rotate0 = {rotation: 0};
        var hide = {className:"ng-hide"};
        var show = {className:"ng-show"};
        var sendBottom = {y: 420};
        var sendTop = {y: 10};

        var tl = new TimelineMax();
        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'SEQUENCE_NUMBER_PRESENTATION_1' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy step - do not remove
        tl.add(".segment-01", 0, {width: 50});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'SEQUENCE_NUMBER_PRESENTATION_2' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy step - do not remove
        tl.to(".segment-01", 0.1, {width: 50});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'SEQUENCE_NUMBER_PRESENTATION_3' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy step - do not remove
        tl.to(".segment-01", 0.1, {width: 50});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'SEQUENCE_NUMBER_PRESENTATION_4' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy step - do not remove
        tl.to(".segment-01", 0.1, {width: 50});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'SEQUENCE_NUMBER_PRESENTATION_5' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        tl.to(".segment-01", 1, sendTop);
        tl.to(".segment-01", 1, show);
        tl.to(".segment-01", 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: 'Primeiro pacote',
                template: "Número de sequência: 0 <br/>"
            }).then(function() {
                tl.resume();
            });
        });

        tl.to(".segment-01", 1, zoomOutAndRotate90);
        tl.to(".segment-01", 3, sendBottom);
        tl.to(".segment-01", 0, hide);

        tl.call(function() {
           tl.pause();
           $ionicPopup.alert({
               title: "Informação",
               template: "{{'SEQUENCE_NUMBER_PRESENTATION_6' | translate}}"
           }).then(function () {
               tl.resume();
           });
        });

        //initial position of segment 2
        tl.to(".segment-02", 0, sendBottom);
        tl.to(".segment-02", 1, show);
        tl.to(".segment-02", 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
               template: "Número de sequência: 0<br>"+
                   "Número de reconhecimento: 1000"
            }).then(function () {
                tl.resume();
            });
        });

        tl.to(".segment-02", 1, zoomOutAndRotate90);
        tl.to(".segment-02", 3, sendTop);
        tl.to(".segment-02", 0, hide);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: 'Ao receber o segmento com o número de reconhecimento 1000, o host A encaminha os bytes de 1000 a 1999 ao host B. O host A também solicita o próximo segmento ao host B, informando o número 536 no campo número de reconhecimento.'
            }).then(function () {
                tl.resume();
            });
        });

        tl.to(".segment-02", 0, rotate0);
        tl.to(".segment-02", 0, show);
        tl.to(".segment-02", 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "Número de sequência: 1000<br>"+
                    "Número de reconhecimento: 536"
            }).then(function () {
                tl.resume();
            });
        });

        tl.to(".segment-02", 1, zoomOutAndRotate90);
        tl.to(".segment-02", 3, sendBottom);
        tl.to(".segment-02", 0, hide);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: 'Vamos considerar que logo em seguida o host A encaminha o próximo segmento ao host B, com número de sequência 2000.'+
                    'Como o host A ainda não recebeu o segmento de sequência 536, ele informa novamente este valor no campo número de reconhecimento.'
            }).then(function () {
                tl.resume();
            });
        });

        //origem mostra outro pacote
        tl.to(".segment-02", 0, rotate0);
        tl.to(".segment-02", 0, sendTop);
        tl.to(".segment-02", 0, show);
        tl.to(".segment-02", 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "Número de sequência: 2000<br>"+
                    "Número de reconhecimento: 536"
            }).then(function () {
                tl.resume();
            });
        });

        tl.to(".segment-02", 1, zoomOutAndRotate90);
        tl.to(".segment-02", 3, sendBottom);
        tl.to(".segment-02", 0, hide);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: 'O host B por sua vez envia o segmento com número de sequência 536 ao host A.'+
                    'Como o host B recebeu os segmentos de sequência 1000 e 2000 sucessivamente, ele envia no campo número de reconhecimento o valor 3000, que é o próximo segmento a ser enviado pelo host A.'
            }).then(function () {
                tl.resume();
            });
        });

        //dummy step - do not remove
        tl.to(".segment-01", 0.1, {width: 50});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: 'Dizemos que o TCP provê reconhecimentos cumulativos, pois ele reconhece todos os bytes até o primeiro byte que está faltando na cadeia.'
            }).then(function () {
                tl.resume();
            });
        });

        //origin shows another segment
        tl.to(".segment-02", 0, sendTop);
        tl.to(".segment-02", 0, rotate0);
        tl.to(".segment-02", 0, show);
        tl.to(".segment-02", 1, zoomIn);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "Número de sequência: 536<br>"+
                    "Número de reconhecimento: 3000"
            }).then(function () {
                tl.resume();
            });
        });

        tl.to(".segment-02", 1, zoomOutAndRotate90);
        tl.to(".segment-02", 3, sendBottom);
        tl.to(".segment-02", 0, hide);

        //end
        tl.call(function() {
            $ionicPopup.alert({
                title: 'Fim',
                template: "{{'ANIMATION_END' | translate}}"
            }).then(function () {
                $scope.end = true;
            });
        });
    });
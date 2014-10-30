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
    })

    .controller('SequenceNumberCtrl', function($scope, $ionicPopup) {
        TweenLite.defaultEase = Power1.easeInOut;

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
                template: 'Fim da animação.'
            });
        });
    })

    .controller('PureAlohaCtrl', function($scope, $stateParams, $ionicPopup) {
        TweenLite.defaultEase = Power1.easeInOut;

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

        tl.to(segment1, 0, initialPosition1);
        tl.to(segment2, 0, hide);
        tl.to(segment2, 0, initialPosition2);

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_1' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy
        tl.to('.animationFrame', 0.5, {x: 0});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_2' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy
        tl.to('.animationFrame', 0.5, {x: 0});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_3' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //envia do a ate quase o b
        tl.to(segment1, 2, sendRight);
        tl.to(segment1, 0.5, rotate90);
        tl.to(segment1, 2, sendDown);

        //msg 4
        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_4' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //dummy
        tl.to('.animationFrame', 0.5, {x: 0});

        //msg 5
        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_5' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //b envia e colide com o segmento de a e vai pro lixo
        tl.to(segment2, 0.5, show);
        tl.to(segment2, 2, sendRight);
        tl.to(segment1, 2, {top:"+=35px", delay: -2});
        tl.to(segment1, 1, {scale:0, opacity:0});
        tl.to(segment2, 1, {scale:0, opacity:0, delay: -1});

        //msg 6
        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_6' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //a envia ateh c
        tl.to(segment1, 0, initialPosition1);
        tl.to(segment1, 0, rotate0);
        tl.to(segment1, 0, {scale: 1, opacity: 1});
        tl.to(segment1, 2, sendRight);
        tl.to(segment1, 0.5, rotate90);
        tl.to(segment1, 4, {top: "+=383px"});
        tl.to(segment1, 0.5, rotate0);
        tl.to(segment1, 2, sendLeft);
        tl.to(segment1, 0.5, hide);

        //msg 7
        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "Informação",
                template: "{{'PURE_ALOHA_PRESENTATION_7' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //b envia ateh c
        tl.to(segment2, 0, initialPosition2);
        tl.to(segment2, 0, rotate0);
        tl.to(segment2, 0, {scale: 1, opacity: 1});
        tl.to(segment2, 2, sendRight);
        tl.to(segment2, 0.5, rotate90);
        tl.to(segment2, 2, {top: "+=195px"});
        tl.to(segment2, 0.5, rotate0);
        tl.to(segment2, 2, sendLeft);
        tl.to(segment2, 1, hide);

        //fim
        tl.call(function() {
            $ionicPopup.alert({
                title: 'Fim',
                template: 'Fim da animação.'
            });
        });

        $scope.end = true;
    })

    .controller('AboutCtrl', function($scope, $stateParams) {

    });

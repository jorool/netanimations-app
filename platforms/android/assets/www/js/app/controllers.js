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

    .controller('SequenceNumberCtrl', function($scope, $ionicPopup) {
        TweenLite.defaultEase = Power1.easeInOut;

        var tl = new TimelineMax();
        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "{{'INFO' | translate}}",
                template: "{{'SEQUENCE_NUMBER_PRESENTATION_1' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        tl.add(".pacote", 0, {width: 50});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "{{'INFO' | translate}}",
                template: "{{'SEQUENCE_NUMBER_PRESENTATION_2' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        tl.to(".pacote", 0.1, {width: 50});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "{{'INFO' | translate}}",
                template: "{{'SEQUENCE_NUMBER_PRESENTATION_3' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        tl.to(".pacote", 0.1, {width: 50});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "{{'INFO' | translate}}",
                template: "{{'SEQUENCE_NUMBER_PRESENTATION_4' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        tl.to(".pacote", 0.1, {width: 50});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: "{{'INFO' | translate}}",
                template: "{{'SEQUENCE_NUMBER_PRESENTATION_5' | translate }}"
            }).then(function() {
                tl.resume();
            });
        });

        //zoom
        tl.to(".pacote", 1, {width: 300, left:"50%", top:"50%"});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                title: 'Primeiro pacote',
                template: "Número de sequência: 0 <br/>"
            }).then(function() {
                tl.resume();
            });
        });

        //zoom + rotate
        tl.to(".pacote", 1, {width: 50, rotation: 90});

        //send
        tl.to(".pacote", 3, {y: 400});

        //hide
        tl.to(".pacote", 0, {className:"ng-hide"});

        tl.call(function() {
           tl.pause();
           $ionicPopup.alert({
               title: '',
               template: "{{'SEQUENCE_NUMBER_PRESENTATION_6' | translate}}"
           }).then(function () {
               tl.resume();
           });
        });

        //rerotate
        tl.to(".pacote", 0.5, {rotation: 0});
        //show
        tl.to(".pacote", 0, {className:"ng-show", width: 300});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
               template: "Número de sequência: 0<br>"+
                   "Número de reconhecimento: 1000"
            }).then(function () {
                tl.resume();
            });
        });

        //rotate and zoom
        tl.to(".pacote", 0.5, {width: 50, rotation: 90});
        //send
        tl.to(".pacote", 3, {y: 0});
        //hide
        tl.to(".pacote", 0, {className:"ng-hide"});

        tl.call(function() {
            tl.pause();
            $ionicPopup.alert({
                template: 'Ao receber o segmento com o número de reconhecimento 1000, o host A encaminha os bytes de 1000 a 1999 ao host B. O host A também solicita o próximo segmento ao host B, informando o número 536 no campo número de reconhecimento.'
            }).then(function () {
                tl.resume();
            });
        });

        //mostrar o pacote
        //numero de sequencia 1000
        //numero de reconhecimento: 536

        //envia

        //Vamos considerar que logo em seguida o host A encaminha o próximo segmento ao host B, com número de sequência 2000.
        //Como o host A ainda não recebeu o segmento de sequência 536, ele informa novamente este valor no campo número de reconhecimento.

        //origem mostra outro pacote
        //numero de sequencia: 2000
        //numero de reconhecimento: 536

        //envia

        //O host B por sua vez envia o segmento com número de sequência 536 ao host A.
        //Como o host B recebeu os segmentos de sequência 1000 e 2000 sucessivamente, ele envia no campo número de reconhecimento o valor 3000, que é o próximo segmento a ser enviado pelo host A.

        //Dizemos que o TCP provê reconhecimentos cumulativos, pois ele reconhece todos os bytes até o primeiro byte que está faltando na cadeia.

        //destino mostra pacote
        //numero de sequencia: 536
        //numero de reconhecimento: 3000

        //envia

        //fim!
    })

    .controller('AboutCtrl', function($scope, $stateParams) {

    });

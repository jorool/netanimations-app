angular.module('netanimations', ['ionic', 'netanimations.controllers', 'pascalprecht.translate',
    'netanimations.threewayhandshake', 'netanimations.sequencenumber', 'netanimations.purealoha'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if(window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })

            .state('app.about', {
                url: "/about",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/about.html",
                        controller: 'AboutCtrl'
                    }
                }
            })

            .state('app.config', {
                url: "/config",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/config.html",
                        controller: 'ConfigCtrl'
                    }
                }
            })

            .state('app.animations', {
                url: "/animations",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/animations.html",
                        controller: 'AnimationsCtrl'
                    }
                }
            })

            .state('app.three-way-handshake', {
                url: "/three-way-handshake",
                views: {
                    'menuContent': {
                        templateUrl: "templates/three-way-handshake.html",
                        controller: 'ThreeWayHandshakeCtrl'
                    }
                }
            })

            .state('app.sequence-number',{
                url: '/sequence-number',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/sequence-number.html',
                        controller: 'SequenceNumberCtrl'
                    }
                }
            })

            .state('app.pure-aloha',{
                url: '/pure-aloha',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/pure-aloha.html',
                        controller: 'PureAlohaCtrl'
                    }
                }
            })

            .state('app.novo',{
                url: '/novo',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/novo.html',
                        controller: 'NovoCtrl'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/app/animations');

        $translateProvider.translations('en', {
            LANGUAGE: 'Language',
            PORTUGUESE: 'Portuguese',
            ENGLISH: 'English',
            CONFIGS: 'Config',
            ANIMATIONS: 'Animations',
            ABOUT: 'About',
            CONTINUE: 'Continue',
            INFO: 'Information',
            ANIMATION_END: 'End of animation.',

            STEP_1: 'First step',
            STEP_2: 'Second step',
            STEP_3: 'Third step',
            STEP_4: 'Fourth step',
            STEP_5: 'Fifth step',

            THREEWAY_HANDSHAKE: 'Three-way Handshake',
            THREEWAY_HANDSHAKE_DESC: 'Process of TCP connection establishment',
            THREEWAY_HANDSHAKE_PRESENTATION: 'The Three-Way Handshake is a process of agreement between the two parties wishing to establish a communication that consists of three steps.',
            TWHS_STEP_1: 'O cliente envia um pacote (requisição) com as flags SYN = 1 e ACK = 0',
            TWHS_STEP_2: 'The server responds with a packet containing the SYN = 1 and ACK = 1 flags, representing that the connection is accepted and established',
            TWHS_STEP_3: 'The client responds with a packet with the ACK flag = 1',
            TWHS_END: 'After the end of the 3 steps, the Three-way handshake is complete and the two parties can exchange data with each other.',

            SEQUENCE_NUMBER_TITLE: 'Sequence number and acknowledgment',
            SEQUENCE_NUMBER_DESC: 'Two of the most important fields of the TCP header.',
            SEQUENCE_NUMBER_PRESENTATION_1: 'Two of the most important fields of the TCP header is the field sequence number and the acknowledgment number field.',
            SEQUENCE_NUMBER_PRESENTATION_2: 'These numbers are applied to the string of bytes transmitted, and not on the number of segments transmitted.',
            SEQUENCE_NUMBER_PRESENTATION_3: 'The sequence number for a segment is the number of the first byte of the segment. Ex: Suppose a process on host A wants to send a message to the process in host B over a TCP connection.',
            SEQUENCE_NUMBER_PRESENTATION_4: 'Consider that the data string is a file of 500,000 bytes, the MSS (maximum segment size) is 1000 bytes and the number 0 is assigned to the first byte of the data string.',
            SEQUENCE_NUMBER_PRESENTATION_5: 'In this case, TCP segments 500 builds from the data string. The first segment receives the sequence number 0, the second 1000, a third 2000 and so on.',
            SEQUENCE_NUMBER_PRESENTATION_6: 'The number of recognition that a host assigns its segment is the sequence number of the next byte that it is waiting. EX: Host B is about to send the bytes numbered 0-535 to host A. As just get the bytes 0-999, host B sends acknowledgment number as the value for the upcoming 1000 byte.',

            PURE_ALOHA_TITLE: 'Pure Aloha Protocol',
            PURE_ALOHA_DESC: 'Solving channel allocation problems at the data link layer',
            PURE_ALOHA_PRESENTATION_1: 'The pure Aloha protocol is random access, without intermission and totally decentralized.',
            PURE_ALOHA_PRESENTATION_2: 'When a frame arrives first, the host immediately transmits the entire frame to the broadcast channel.',
            PURE_ALOHA_PRESENTATION_3: 'We will use an example to demonstrate the operation of the Aloha protocol. Ex: The host A wants to send a frame to host C and forwards the broadcast channel.',
            PURE_ALOHA_PRESENTATION_4: 'During transmission, the transmitter is able to infer whether or not there was a collision of frame sent.',
            PURE_ALOHA_PRESENTATION_5: 'Now, suppose host B also wants to send a frame to host C and forwards the broadcast channel at the same time the frame sent by host A is transmitted, thereby causing a collision.',
            PURE_ALOHA_PRESENTATION_6: 'In this case the host immediately retransmits the frame via the broadcast channel.',
            PURE_ALOHA_PRESENTATION_7: 'Consider a probability p, or a number between 0 and 1.',
            PURE_ALOHA_PRESENTATION_8: 'The host B waits for a transmission time frame and then retransmit the frame with probability p, or wait for another time frame with probability 1-p.'
        });

        $translateProvider.translations('pt-br', {
            LANGUAGE: 'Idioma',
            PORTUGUESE: 'Português',
            ENGLISH: 'Inglês',
            CONFIGS: 'Configurações',
            ANIMATIONS: 'Animações',
            ABOUT: 'Sobre',
            CONTINUE: 'Continuar',
            INFO: 'Informação',
            ANIMATION_END: 'Fim da animação.',

            STEP_1: 'Primeiro passo',
            STEP_2: 'Segundo passo',
            STEP_3: 'Terceiro passo',
            STEP_4: 'Quarto passo',
            STEP_5: 'Quinto passo',

            THREEWAY_HANDSHAKE: 'Three-way Handshake',
            THREEWAY_HANDSHAKE_DESC: 'Processo de estabelecimento de conexão TCP',
            THREEWAY_HANDSHAKE_PRESENTATION: 'O Three-way Handshake é um processo de acordo entre as duas partes que desejam estabelecer uma comunicação que consiste em três etapas.',
            TWHS_STEP_1: 'O cliente envia um pacote (requisição) com as flags SYN = 1 e ACK = 0',
            TWHS_STEP_2: 'O servidor responde com um pacote contendo as flags SYN = 1 e ACK = 1, representando que a conexão foi aceita e estabelecida',
            TWHS_STEP_3: 'O cliente responde com um pacote com a flag ACK = 1',
            TWHS_END: 'Após o término dos 3 passos, o Three-way Handshake está completo e as duas partes podem trocar dados entre si.',

            SEQUENCE_NUMBER_TITLE: 'Número de sequência e de reconhecimento',
            SEQUENCE_NUMBER_DESC: 'Dois dos mais importantes campos do cabeçalho TCP.',
            SEQUENCE_NUMBER_PRESENTATION_1: 'Dois dos mais importantes campos do cabeçalho TCP são o campo de número de sequência e o campo de número de reconhecimento.',
            SEQUENCE_NUMBER_PRESENTATION_2: 'Esses números são aplicados sobre a cadeia de bytes transmitidos, e não sobre a série de segmentos transmitidos.',
            SEQUENCE_NUMBER_PRESENTATION_3: 'O número de sequência para um segmento é o número do primeiro byte do segmento. Ex: Suponha que um processo no host A deseja enviar uma mensagem ao processo no host B por uma conexão TCP.',
            SEQUENCE_NUMBER_PRESENTATION_4: 'Considere que a cadeia de dados seja um arquivo de 500.000 bytes, o MSS (maximum segment size) seja de 1.000 bytes e que seja atribuído o número 0 ao primeiro byte da cadeia de dados.',
            SEQUENCE_NUMBER_PRESENTATION_5: 'Neste caso, o TCP constrói 500 segmentos a partir da cadeia de dados. O primeiro segmento recebe o número de sequência 0, o segundo 1000, o terceiro 2000 e assim sucessivamente.',
            SEQUENCE_NUMBER_PRESENTATION_6: 'Já o número de reconhecimento que um host atribui a seu segmento é o número de sequência do próximo byte que ele está aguardando. EX: O host B está prestes a enviar os bytes numerados de 0 a 535 ao host A. Como acabou de receber os bytes de 0 a 999, o host B envia como número de reconhecimento o valor 1000 referente ao próximo byte.',

            PURE_ALOHA_TITLE: 'Protocolo Aloha Puro',
            PURE_ALOHA_DESC: 'Resolvendo problemas de alocação de canais na camada de enlace',
            PURE_ALOHA_PRESENTATION_1: 'O protocolo Aloha puro é um protocolo de acesso aleatório, sem intervalo e totalmente descentralizado.',
            PURE_ALOHA_PRESENTATION_2: 'Quando um quadro chega pela primeira vez, o host imediatamente transmite o quadro inteiro ao canal broadcast.',
            PURE_ALOHA_PRESENTATION_3: 'Usaremos um exemplo para demonstrar o funcionamento do protocolo Aloha. Ex: O host A deseja enviar um quadro para o host C e o encaminha ao canal broadcast.',
            PURE_ALOHA_PRESENTATION_4: 'Durante a transmissão, o transmissor é capaz de inferir se houve uma colisão ou não do quadro enviado.',
            PURE_ALOHA_PRESENTATION_5: 'Agora, suponha que o host B também deseja enviar um quadro para o host C e o encaminha ao canal broadcast no mesmo momento em que o quadro enviado pelo host A é transmitido, ocasionando assim uma colisão.',
            PURE_ALOHA_PRESENTATION_6: 'Neste caso o host A retransmite imediatamente o quadro através do canal broadcast.',
            PURE_ALOHA_PRESENTATION_7: 'Considere p uma probabilidade, ou seja, um número entre 0 e 1.',
            PURE_ALOHA_PRESENTATION_8: 'O host B aguardará por um tempo de transmissão de quadro e então retransmitirá o quadro com probabilidade p, ou aguardará por um outro tempo de quadro com probabilidade 1-p.'
        });

        $translateProvider.preferredLanguage('pt-br');

        //$translateProvider.useCookieStorage();

    });
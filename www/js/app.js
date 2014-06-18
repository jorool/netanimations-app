angular.module('netanimations', ['ionic', 'netanimations.controllers', 'pascalprecht.translate'])

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

            .state('app.search', {
                url: "/search",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/search.html"
                    }
                }
            })

            .state('app.browse', {
                url: "/browse",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/browse.html"
                    }
                }
            })
            .state('app.playlists', {
                url: "/playlists",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/playlists.html",
                        controller: 'PlaylistsCtrl'
                    }
                }
            })

            .state('app.single', {
                url: "/playlists/:playlistId",
                views: {
                    'menuContent' :{
                        templateUrl: "templates/playlist.html",
                        controller: 'PlaylistCtrl'
                    }
                }
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
            });

        $urlRouterProvider.otherwise('/app/animations');

        $translateProvider.translations('en', {
            LANGUAGE: 'Language',
            PORTUGUESE: 'Portuguese',
            ENGLISH: 'English',
            CONFIGS: 'Config',
            ANIMATIONS: 'Animations',
            CONTACT: 'Contact',
            ABOUT: 'About',

            THREEWAY_HANDSHAKE: 'Three-way Handshake',
            THREEWAY_HANDSHAKE_DESC: 'TCP connection establishment process'
        });

        $translateProvider.translations('pt-br', {
            LANGUAGE: 'Idioma',
            PORTUGUESE: 'Português',
            ENGLISH: 'Inglês',
            CONFIGS: 'Configurações',
            ANIMATIONS: 'Animações',
            CONTACT: 'Contato',
            ABOUT: 'Sobre',

            THREEWAY_HANDSHAKE: 'Three-way Handshake',
            THREEWAY_HANDSHAKE_DESC: 'Processo de estabelecimento de conexão TCP'
        });

        $translateProvider.preferredLanguage('pt-br');

    });
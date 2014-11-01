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

    .controller('AboutCtrl', function($scope, $stateParams) {
    });

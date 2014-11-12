'use strict';

/**
 * @ngdoc function
 * @name angularPlaygroundApp.controller:WatchmeCtrl
 * @description
 * # WatchmeCtrl
 * Controller of the angularPlaygroundApp
 */
angular.module('angularPlaygroundApp')
    .controller('WatchmeCtrl', function($scope, Watchservice) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.click = function() {
            Watchservice.changeProp('someWhere');
        };

        $scope.startTime = 13570200;
    });

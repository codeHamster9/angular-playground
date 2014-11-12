'use strict';

/**
 * @ngdoc function
 * @name angularPlaygroundApp.controller:DropCtrl
 * @description
 * # DropCtrl
 * Controller of the angularPlaygroundApp
 */
angular.module('angularPlaygroundApp')
    .controller('DropCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.sortableOptions = {
            placeholder: "app",
            connectWith: ".apps-container"
        };

        $scope.listA = [{
            id: 1
        }, {
            id: 2
        }, {
            id: 3
        }, {
            id: 4
        }, {
            id: 5
        }];
        $scope.listB = [];
    });

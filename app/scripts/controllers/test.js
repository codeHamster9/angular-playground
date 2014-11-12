'use strict';

/**
 * @ngdoc function
 * @name angularPlaygroundApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the angularPlaygroundApp
 */
/*define(['app', 'ngload!'], function(app) {*/
angular.module('angularPlaygroundApp').controller('TestCtrl', function($scope) {
    $scope.awesomeThings = [
        'Start',
        'Results',
        'Stats',
        'HardWare',
        'Monitor',
        'Reports'
    ];



    $scope.list = ['Last Task Status', 'Target population', 'Email threats', 'Language Detection'];
    $scope.active = -1;
    $scope.show = -1;

    $scope.setActive = function(i) {
        $scope.active = i;
    };

    $scope.dragComplete = function(data, $event) {
        console.log(data);
    };

    $scope.arrowClick = function(index) {
        if (index === $scope.show)
            $scope.show = -1;
        else
            $scope.show = index;
    };
});

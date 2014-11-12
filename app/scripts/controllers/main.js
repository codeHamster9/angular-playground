'use strict';

/**
 * @ngdoc function
 * @name angularPlaygroundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPlaygroundApp
 */


/*define(['app', 'ngload!'], function(app) {*/
angular.module('angularPlaygroundApp').controller('MainCtrl', function($scope) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];

    $scope.navbar = [{
        name: 'Home',
        route: '#'
    }, {
        name: 'About',
        route: '#/about'
    }, {
        name: 'Test',
        route: '#/test'
    }, {
        name: 'Watch',
        route: '#/watchme'
    }, {
        name: 'Drag',
        route: '#/drop'
    }];
});
/*});*/

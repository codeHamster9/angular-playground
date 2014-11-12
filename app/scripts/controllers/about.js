'use strict';

/**
 * @ngdoc function
 * @name angularPlaygroundApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPlaygroundApp
 */

/*define(['app', 'ngload!'], function(app) {*/
angular.module('angularPlaygroundApp').controller('AboutCtrl', function($scope) {
    $scope.outerModel = 'new';
    $scope.portal = 5;

    $scope.sayhi = function  (val) {
    	console.log('message from : ',val);
    };

    $scope.$watch('outerModel', function(newVal, oldVal) {
        // console.log($scope.outerModel);
    });
});
/*});*/

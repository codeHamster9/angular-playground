/**
 * app Module
 *
 * Description
 */
angular.module('angularPlaygroundApp').directive('scooper', ['$log',
    function($log) {
        // Runs during compile
        'use strict';
        return {
            // name: '',
            // priority: 1,
            // terminal: true,
            scope: {
                comChannel: '=',
                teleport: '@',
                callback: '&'
            }, // {} = isolate, true = child, false/undefined = no change
            // controller: function($scope, $element, $attrs, $transclude) {},
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
            template: '<input type="text" ng-model="teleport" ng-model-options="{debounce:5000}"></input>',
            // templateUrl: '',
            replace: true,
            // transclude: true,
            // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
            link: function($scope, iElm, iAttrs, controller) {

                $scope.awesomeThings = [
                    'HTML5 Boilerplate',
                    'AngularJS',
                    'Karma'
                ];


                $scope.$watch('comChannel', function(newVal, oldVal) {

                    // $log.debug($scope.comChannel);
                });

                $scope.$watch('teleport', function(newVal, oldVal) {
                    $log.debug('isolated scope:', $scope.teleport);
                    $scope.callback({
                        val: newVal
                    });
                });
            }
        };
    }
]);

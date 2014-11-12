'use strict';

/**
 * @ngdoc directive
 * @name angularPlaygroundApp.directive:watchDog
 * @description
 * # watchDog
 */
angular.module('angularPlaygroundApp')
    .directive('watchDog', function(Watchservice) {
        return {
            template: '<div><timer start-time=startTime interval="1000">{{hhours}} hours, {{mminutes}} minutes, {{sseconds}} seconds.</timer></div>',
            restrict: 'E',
            scope: {},
            link: function postLink(scope, element, attrs) {
                element.text('this is the watchDog directive');
                scope.myProp = Watchservice.watchObj;

                scope.$watch(function() {
                    return scope.myProp;
                }, function(newVal, oldVal) {
                    if (newVal === oldVal) {
                        return;
                    }
                    console.log(newVal, 'watchdog myProp');
                }, true);

                scope.$watchCollection(function() {
                    return Watchservice.watchArray;
                }, function(newVal, oldVal) {
                    if (newVal === oldVal) {
                        return;
                    }
                    console.log(newVal, 'watchdog array');
                });

                scope.$watch(function() {
                    return Watchservice.watchProp;
                }, function(newVal, oldVal) {
                    if (newVal === oldVal) {
                        return;
                    }
                    console.log(newVal, 'watching from directive func return (true)');
                }, true);
            }
        };
    });

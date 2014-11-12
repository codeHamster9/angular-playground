 'use strict';

 /**
  * @ngdoc overview
  * @name angularPlaygroundApp
  * @description
  * # angularPlaygroundApp
  *
  * Main module of the application.
  */

 /*define(['angularAMD',
  'angular-route',
  'angular-resource',
  'angular-cookies',
  'angular-sanitize',
  'angular-animate',
  'angular-touch',
  'angular-draggable'
], function(angularAMD) {*/


 angular.module('angularPlaygroundApp', [
     'ngAnimate',
     'ngCookies',
     'ngResource',
     'ngRoute',
     'ngSanitize',
     'ngTouch',
     // 'ui.bootstrap',
     'timer'
 ]).config(function($routeProvider) {
     $routeProvider
         .when('/', /*angularAMD.route(*/ {
             templateUrl: 'views/main.html',
             controllerUrl: 'scripts/controllers/main.js',
             controller: 'MainCtrl'
         }) /*)*/
         .when('/about', /*angularAMD.route(*/ {
             templateUrl: 'views/about.html',
             controllerUrl: 'scripts/controllers/about.js',
             controller: 'AboutCtrl'
         }) /*)*/
         .when('/test', /*angularAMD.route(*/ {
             templateUrl: 'views/test.html',
             controllerUrl: 'scripts/controllers/test.js',
             controller: 'TestCtrl'
         }) /*)*/
         .when('/watchme', {
             templateUrl: 'views/watchme.html',
             controller: 'WatchmeCtrl'
         })
         .when('/drop', {
             templateUrl: 'views/drop.html',
             controller: 'DropCtrl'
         })
         .otherwise({
             redirectTo: '/'
         });
 });

 /* angularAMD.bootstrap(app);
  return app;

});
*/

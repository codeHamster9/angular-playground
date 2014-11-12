'use strict';

describe('Controller: WatchmeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularPlaygroundApp'));

  var WatchmeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WatchmeCtrl = $controller('WatchmeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

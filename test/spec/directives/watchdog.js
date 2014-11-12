'use strict';

describe('Directive: watchDog', function () {

  // load the directive's module
  beforeEach(module('angularPlaygroundApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<watch-dog></watch-dog>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the watchDog directive');
  }));
});

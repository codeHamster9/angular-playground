'use strict';

describe('Service: watchService', function () {

  // load the service's module
  beforeEach(module('angularPlaygroundApp'));

  // instantiate service
  var watchService;
  beforeEach(inject(function (_watchService_) {
    watchService = _watchService_;
  }));

  it('should do something', function () {
    expect(!!watchService).toBe(true);
  });

});

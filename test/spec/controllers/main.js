'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ndiaApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of 3 categories to the scope', function () {
    expect(scope.categories.length).toBe(3);
  });
});

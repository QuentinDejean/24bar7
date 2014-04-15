'use strict';

describe('Directive: yourOptions', function () {

  // load the directive's module
  beforeEach(module('24bar7App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<your-options></your-options>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the yourOptions directive');
  }));
});

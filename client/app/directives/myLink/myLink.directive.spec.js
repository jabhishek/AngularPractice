'use strict';

describe('Directive: myLink', function () {

  // load the directive's module
  beforeEach(module('angularFullStackAllOptionsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-link></my-link>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myLink directive');
  }));
});
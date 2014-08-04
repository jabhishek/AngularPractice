'use strict';

describe('Directive: OneToTen', function () {

  // load the directive's module
  beforeEach(module('angularFullStackAllOptionsApp'));

  var element, 
    form,
    scope;

  function compileDirective(tpl) {
    tpl = tpl || '<input name = "username", ng-model="user.name" one-to-ten="10"/>';
    tpl = '<form name="form">' + tpl + '</form>';
    inject(function($compile) {
        form = $compile(tpl)(scope);
        element = form.find('div');
    });
    // $digest is necessary to finalize the directive generation
    scope.$digest();
  };

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    scope.user = { name: null };
  }));

  it('should set invalid if name longer than 10 letters', inject(function ($compile) {
    compileDirective();
    scope.form.username.$setViewValue('Abhishek Jain');
    expect(scope.form.username.$valid).toBe(false);
  }));

  it('should set valid if name smaller than 10 letters', inject(function ($compile) {
    compileDirective();
    scope.form.username.$setViewValue('Abhi');
    expect(scope.form.username.$valid).toBe(true);
  }));
});
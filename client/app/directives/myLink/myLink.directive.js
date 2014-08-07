'use strict';

angular.module('angularFullStackAllOptionsApp')
  .directive('myLink', function () {
    return {
      template: '<a href="{{myUrl}}">Click here!!</a>',
      restrict: 'A',
      replace: true,
      scope: {
        myUrl: '@'
      },
      link: function (scope, element, attrs) {
        console.log(scope);
      }
    };
  });
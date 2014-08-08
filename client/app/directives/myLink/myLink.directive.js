'use strict';

angular.module('angularFullStackAllOptionsApp')
  .directive('myLink', function () {
    return {
      template: '<div><input type="text" ng-model="myUrl" /><a href="{{myUrl}}">{{myLinkText}}</a></div>',
      restrict: 'A',
      replace: true,
      controller: function($scope, $element, $attrs, $transclude) {
        console.log($scope);
        $scope.log = function(message) {
            console.log(message);
        }
      }
      ,
      scope: {
        myLinkText: '@',
        myUrl: '='
      }
    };
  });

/*
  directive('', ['', function(){
      // Runs during compile
      return {
          // name: '',
          // priority: 1,
          // terminal: true,
          // scope: {}, // {} = isolate, true = child, false/undefined = no change
          // controller: function($scope, $element, $attrs, $transclude) {},
          // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
          // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
          // template: '',
          // templateUrl: '',
          // replace: true,
          // transclude: true,
          // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
          link: function($scope, iElm, iAttrs, controller) {
              
          }
      };
  }]);*/
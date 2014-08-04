'use strict';

angular.module('angularFullStackAllOptionsApp')
  .directive('oneToTen', function () {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function (scope, element, attrs, ngModel) {
        var maxLength = parseInt(attrs.oneToTen) || 7;
        if (!ngModel) return;
        ngModel.$parsers.unshift(function(viewValue) {
            if (viewValue) {
              console.log(maxLength);
                if (viewValue.length > maxLength) {
                    ngModel.$setValidity('OneToTen', false);
                    return viewValue;
                } else {
                    ngModel.$setValidity('OneToTen', true);
                    return viewValue;
                }
            }
        });
      }
    };
  });
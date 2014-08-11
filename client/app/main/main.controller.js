'use strict';

angular.module('angularFullStackAllOptionsApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];
    $scope.user = {name: "Abhi"};
    
    $scope.users = [
    { type: "Admin", name: "Abhi"},
    { type: "Admin", name: "Vanita"},
    { type: "Child", name: "Avni"},
    { type: "Child", name: "Vatsal"},
    ];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });


    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });
  });
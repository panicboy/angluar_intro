angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp
  .config(function() {
    // config
  })
  .run(function() {
    // initialize
  });

  myApp.controller('MyController', [ '$scope', function($scope) {
    // controler body
    $scope.myFirstName = 'Andrew';
    $scope.myModel='Ready Player One';
  }]);


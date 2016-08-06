angular.module('myApp')

.controller('MyController', [ '$scope', 'mainCharacter', function($scope, mainCharacter) {
  // controler body
  $scope.myFirstName = 'Andrew';

  $scope.myModel='Ready Player One';

  $scope.mainCharacter=mainCharacter;
}]);
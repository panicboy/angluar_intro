angular.module('myApp')

.controller('MyController', [ '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  function($scope, mainCharacter, CharacterVersionFactory) {
  // controler body
  $scope.myFirstName = 'Andrew';

  $scope.myModel='Ready Player One';

  $scope.mainCharacter=mainCharacter;
  $scope.characterVersion=CharacterVersionFactory.characterVersion();
}]);
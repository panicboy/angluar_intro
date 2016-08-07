angular.module('myApp')

.controller('MyController', [ '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  'BookService',
  function($scope,
    mainCharacter,
    CharacterVersionFactory,
    BookService) {
  // controler body
  $scope.myFirstName = 'Andrew';

  $scope.myModel='Ready Player One';

  $scope.mainCharacter=mainCharacter;
  $scope.characterVersion=CharacterVersionFactory.characterVersion();
  $scope.BookService = BookService;
}]);
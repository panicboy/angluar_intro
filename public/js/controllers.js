angular.module('myApp')

.controller('MyController', [ '$scope',
  'mainCharacter',
  'CharacterVersionFactory',
  'BookService',
  'Movies',
  function($scope,
    mainCharacter,
    CharacterVersionFactory,
    BookService,
    Movies) {
  // controler body
  $scope.myFirstName = 'Andrew';

  $scope.myModel='Ready Player One';

  $scope.mainCharacter=mainCharacter;
  $scope.characterVersion=CharacterVersionFactory.characterVersion();
  $scope.BookService = BookService;

  $scope.movies = [];
  Movies.getMovies().success(function(results){
    $scope.movies = results;
  });
}]);
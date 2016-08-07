angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp
  .config(['MoviesProvider', function(MoviesProvider) {
    // config
    MoviesProvider.setEndpoint('http://localhost:3000/api/movies');
  }])
  .run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
    $rootScope.version= APP_VERSION;
  }]);




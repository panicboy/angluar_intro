angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp
  .config(function() {
    // config
  })
  .run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
    $rootScope.version= APP_VERSION;
  }]);




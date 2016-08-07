angular.module('myApp')
  .provider('Movies', function() {
    // configuration
    this.endpoint = '';
    this.setEndpoint = function(url){
      this.endpoint = url;
    };

    this.$get = [ '$http', function($http){
      var endpoint = this.endpoint;
      return {
        getMovies: function() {
          return $http.get(endpoint);
        }
      };
    }];
  });
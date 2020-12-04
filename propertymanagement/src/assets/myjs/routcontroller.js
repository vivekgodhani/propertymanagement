var app = angular.module('bmsapp', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : "p.html"
  })
  .when('/aboutus.html', {
    templateUrl : "aboutus.html"
  })
  .otherwise({
  	redirectTo:'/'
  })
});
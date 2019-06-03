app.config([
	'$routeProvider',
	'$locationProvider',
	function($routeProvider, 
			$locationProvider){

    $routeProvider
    .when('/', {
      templateUrl : 'pages/index.html'
    }).when('/slide', {
      templateUrl : 'pages/slide.html'
    }).when('/tab', {
      templateUrl : 'pages/tab.html'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
var addBook = angular.module('addBook',['ui.bootstrap','ngRoute','sailsResource','ngMessages']);


addBook.run(function(){
	console.log('what the dick');
});

addBook.config(['$routeProvider','$locationProvider','sailsResourceProvider',function($routeProvider,$locationProvider,sailsResourceProvider){

	sailsResourceProvider.configuration = {
		prefix: '/api',
		verbose: true
	};

	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/',{
		templateUrl:'/views/home.html',
		controller:'HomeCtrl'
	})
	.when('/person',{
		templateUrl:'views/person/index.html',
		controller:'PersonCtrl'
	})
	.when('/person/:id',{
		templateUrl:'views/person/show.html',
		controller:'personShowCtrl'
	})
	.otherwise({
		template:"<h1>YOU BROKE YOUR PEOPLE THANKS A LOT</h1>"
	})
}]);
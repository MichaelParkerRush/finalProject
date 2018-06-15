(function(){
	angular.module('app', ['ngRoute'])
		.config(function($routeProvider){
			$routeProvider
				.when('/', {
					template: '<welcome></welcome>'
				})
				.when('/characters', {
					template: '<character-list></character-list>'
				})
				.when('/quiz', {
					template: '<quiz></quiz>'
				})
				.otherwise({
					template: '<four-zero-four></four-zero-four>'
				});
		})
})();
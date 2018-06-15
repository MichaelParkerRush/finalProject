(function(){
	angular.module('app')
		.controller('QuizCtrl', function($http, CharacterFactory){
			var $ctrl = this;
			$ctrl.offset = CharacterFactory.randomEvents();
			$ctrl.charId = CharacterFactory.getId();
			var url1 = `https://gateway.marvel.com:443/v1/public/events?limit=4&offset=${$ctrl.offset}&apikey=2f8031d608c86551d791af734d264500`
			var url2 = `https://gateway.marvel.com:443/v1/public/characters/${$ctrl.charId}/events?limit=75&apikey=2f8031d608c86551d791af734d264500`
			$http.get(url1).then(function(response1){
					$ctrl.test = response1.data.data.results[0].title;
					console.log(response1);
					$http.get(url2).then(function(response2){
						console.log(response2);
					});
				});
			
		});
})();
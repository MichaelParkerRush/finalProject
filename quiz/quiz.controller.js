(function(){
	angular.module('app')
		.controller('QuizCtrl', function($http, CharacterFactory){
			var $ctrl = this;
			$ctrl.checkboxModel = [
				{value : false},
				{value : false},
				{value : false},
				{value : false}
			];
			$ctrl.characterName = CharacterFactory.getName();
			$ctrl.answerkey = [false,false,false,false];
			$ctrl.offset = CharacterFactory.randomEvents();
			$ctrl.charId = CharacterFactory.getId();
			var url1 = `https://gateway.marvel.com:443/v1/public/events?limit=4&offset=${$ctrl.offset}&apikey=2f8031d608c86551d791af734d264500`
			var url2 = `https://gateway.marvel.com:443/v1/public/characters/${$ctrl.charId}/events?limit=75&apikey=2f8031d608c86551d791af734d264500`
			$http.get(url1).then(function(response1){
					$ctrl.test = response1.data.data.results[0].title;
					$ctrl.quizEvents = response1.data.data.results.map(function(name){
						return name.title;
					});
					$ctrl.eventDescription = response1.data.data.results.map(function(name){
						return name.description;
					});
					console.log(response1);
					console.log($ctrl.quizEvents);
					$http.get(url2).then(function(response2){
						$ctrl.charEvents = response2.data.data.results.map(function(name){
							return name.title;
						});
						$ctrl.finalize = function(){
							$ctrl.useranswers = $ctrl.checkboxModel.map(function(object){
								return object.value;
							})
							$ctrl.grade = [false,false,false,false];
							for (var i=0;i<$ctrl.useranswers.length;i++){
								if ($ctrl.useranswers[i] === $ctrl.answerkey[i]){
									$ctrl.grade[i] = true;
								}
							}
							console.log($ctrl.grade);
						}
						console.log(response2);
						console.log($ctrl.charEvents);
						for (var i=0;i<$ctrl.quizEvents.length;i++){
							for (var j=0;j<$ctrl.charEvents.length;j++){
								if ($ctrl.quizEvents[i] === $ctrl.charEvents[j]){
									$ctrl.answerkey[i] = true;
								}
							}
						}
						console.log($ctrl.answerkey)
					});
				});
			
		});
})();
(function(){
	angular.module('app')
		.controller('QuizCtrl', function($http, CharacterFactory, $timeout){
			var $ctrl = this;
			$ctrl.checkboxModel = [
				{value : false},
				{value : false},
				{value : false},
				{value : false}
			];
			$ctrl.loaded = false;
			$ctrl.characterImg = CharacterFactory.getImg();
			$ctrl.characterName = CharacterFactory.getName();
			$ctrl.answerkey = [false,false,false,false];
			$ctrl.offset = CharacterFactory.randomEvents();
			$ctrl.charId = CharacterFactory.getId();
			var url = `https://gateway.marvel.com:443/v1/public/events?orderBy=startDate&limit=4&offset=${$ctrl.offset}&apikey=2f8031d608c86551d791af734d264500`
			// var url2 = `https://gateway.marvel.com:443/v1/public/characters/${$ctrl.charId}/events?limit=75&apikey=2f8031d608c86551d791af734d264500`
			$http.get(url).then(function(response){
					$ctrl.quizEvents = response.data.data.results.map(function(path){
						return path.title;
					});
					console.log($ctrl.quizEvents);
					$ctrl.quizIds = response.data.data.results.map(function(path){
						return path.id;
					});
					$ctrl.eventDescription = response.data.data.results.map(function(path){
						return path.description;
					});
					var url1 = `https://gateway.marvel.com:443/v1/public/events/${$ctrl.quizIds[0]}/characters?name=${$ctrl.characterName}&apikey=2f8031d608c86551d791af734d264500`
					var url2 = `https://gateway.marvel.com:443/v1/public/events/${$ctrl.quizIds[1]}/characters?name=${$ctrl.characterName}&apikey=2f8031d608c86551d791af734d264500`
					var url3 = `https://gateway.marvel.com:443/v1/public/events/${$ctrl.quizIds[2]}/characters?name=${$ctrl.characterName}&apikey=2f8031d608c86551d791af734d264500`
					var url4 = `https://gateway.marvel.com:443/v1/public/events/${$ctrl.quizIds[3]}/characters?name=${$ctrl.characterName}&apikey=2f8031d608c86551d791af734d264500`
					var gets = [$http.get(url1),$http.get(url2),$http.get(url3),$http.get(url4)];
					Promise.all(gets).then(function(responses){
						$timeout(function(){
							$ctrl.loaded = true;
						});
						if(responses[0].data.data.count){
							$ctrl.answerkey[0] = true;
						}
						if(responses[1].data.data.count){
							$ctrl.answerkey[1] = true;
						}
						if(responses[2].data.data.count){
							$ctrl.answerkey[2] = true;
						}
						if(responses[3].data.data.count){
							$ctrl.answerkey[3] = true;
						}
						console.log($ctrl.answerkey);
						$ctrl.finalize = function(){
							$ctrl.useranswers = $ctrl.checkboxModel.map(function(object){
								return object.value;
							});
							$ctrl.grade = [false,false,false,false];
							for (var i=0;i<$ctrl.useranswers.length;i++){
								if ($ctrl.useranswers[i] === $ctrl.answerkey[i]){
									$ctrl.grade[i] = true;
								}
							}
						}
					});
					// $http.get(url2).then(function(response2){
						// $ctrl.charEvents = response2.data.data.results.map(function(path){
							// return path.title;
						// });
						// $ctrl.finalize = function(){
							// $ctrl.useranswers = $ctrl.checkboxModel.map(function(object){
								// return object.value;
							// })
							// $ctrl.grade = [false,false,false,false];
							// for (var i=0;i<$ctrl.useranswers.length;i++){
								// if ($ctrl.useranswers[i] === $ctrl.answerkey[i]){
									// $ctrl.grade[i] = true;
								// }
							// }
						// }
						// for (var i=0;i<$ctrl.quizEvents.length;i++){
							// for (var j=0;j<$ctrl.charEvents.length;j++){
								// if ($ctrl.quizEvents[i] === $ctrl.charEvents[j]){
									// $ctrl.answerkey[i] = true;
								// }
							// }
						// }
					// });
				});
			
		});
})();
(function(){
	angular.module('app')
		.factory('CharacterFactory', function(){
			var characterId = '1009220';
			return{
				setId: function(id){
					characterId = id;
				},
				getId: function(){
					return characterId;
				},
				randomEvents: function(){
					return Math.floor(Math.random() * 71)
				}
			}
		})
})();
(function(){
	angular.module('app')
		.factory('CharacterFactory', function(){
			var characterId = '1010373';
			var characterName = 'Howard the Duck'
			return{
				setId: function(id){
					characterId = id;
				},
				getId: function(){
					return characterId;
				},
				randomEvents: function(){
					return Math.floor(Math.random() * 71)
				},
				setName: function(Name){
					characterName = Name;
				},
                getName: function(){
                    return characterName;
                }
			}
		})
})();
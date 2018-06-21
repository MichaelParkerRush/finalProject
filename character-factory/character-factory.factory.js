(function(){
	angular.module('app')
		.factory('CharacterFactory', function(){
			var characterId = '1010373';
			var characterName = 'Howard the Duck';
			var characterImg = 'images-marvel/howardtheduck-select.jpg';
			return{
				setId: function(id){
					characterId = id;
				},
				getId: function(){
					return characterId;
				},
				setImg: function(img){
					characterImg = img;
				},
				getImg: function(){
					return characterImg;
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
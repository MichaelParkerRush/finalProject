(function(){
	angular.module('app')
		.controller('CharCtrl', function($http, CharacterFactory){
			var $ctrl = this;
			$ctrl.setChar = function(id, name, img){
				CharacterFactory.setId(id);
				CharacterFactory.setName(name);
				CharacterFactory.setImg(img);
			}
		});
})();
(function(){
	angular.module('app')
		.controller('CharCtrl', function($http, CharacterFactory){
			var $ctrl = this;
			$ctrl.setChar = function(id, name){
				CharacterFactory.setId(id);
				CharacterFactory.setName(name);
			}
		});
})();
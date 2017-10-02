import angular from 'angular';

function starsFilter(){
	return function(items, stars){
		var filtered = [],
			atLeastOne = false;
		for(var j = 1; j < stars.length; j++){
			if(stars[j].checked){
				atLeastOne = true;
				for (var i = 0; i < items.length; i++) {
					if(items[i].stars == stars[j].value){
						filtered.push(items[i])
					}
				}
			}
		}

		if(!filtered.length && !atLeastOne){
			return items;
		}else{
			return filtered;
		}
	}
}

export default angular.module('filters.starsFilter', [])
  .filter('starsFilter', starsFilter)
  .name;
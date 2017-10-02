import angular from 'angular';

function rangeFilter(){
	return function(items, min, max){
		var filtered = [];
		for(var i = 0; i < items.length; i++){
			var item = items[i];
			if(item.price > min && item.price < max){
				filtered.push(item)
			}
		}
		return filtered;
	}
}

export default angular.module('filters.rangeFilter', [])
  .filter('rangeFilter', rangeFilter)
  .name;
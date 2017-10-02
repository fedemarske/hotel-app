class HomeController {
  constructor(hotelService) {
    this.hotels = [];
    this.slider = {
    	min: 0,
    	max: 3000,
    	options: {
    		floor: 0,
    		step: 1,
    		noSwitching: true
    	}
    };

    this.stars = [
    	{value: '*', all: true, checked: true},
    	{value: 5, checked: false},
    	{value: 4, checked: false},
    	{value: 3, checked: false},
    	{value: 2, checked: false},
    	{value: 1, checked: false},
    ];
    this.hotelName = '';

    hotelService.getHotels().then(function(response){
		this.hotels = response.data.hotels;

		for(var i=0; i < this.stars.length; i++){
			if(this.stars[i].value === '*'){
				this.stars[i].quantity = this.hotels.length
			}else{
				this.stars[i].quantity = this.getQuantityByStars(this.stars[i].value)
			}
		}
    }.bind(this));
  }

  range(num) {
  	if(!isNaN(num))
    	return new Array(parseInt(num));
  }

  getQuantityByStars(star){
  	var filtered = this.hotels.filter(function(value){
  		if(value.stars == star)
  			return value;
  	})
  	return filtered.length;
  }
}

HomeController.$inject = ['hotelService'];

export default HomeController
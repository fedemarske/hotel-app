import angular from 'angular';

class hotelService {
  constructor($http) {
    this.$http = $http;
  }

  getHotels() {
    return this.$http.get('hotels')
  }
}

export default angular.module('services.hotels', [])
  .service('hotelService', hotelService)
  .name;
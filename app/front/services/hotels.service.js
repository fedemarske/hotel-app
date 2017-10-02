import angular from 'angular';

class hotelService {
  constructor($http) {
    this.$http = $http;
  }

  getHotels() {
    return this.$http.get('hotels')
  }
}

hotelService.$inject = ['$http']

export default angular.module('services.hotels', [])
  .service('hotelService', hotelService)
  .name;
import angular from 'angular';
import uirouter from 'angular-ui-router';
import rzModule from 'angularjs-slider';

import routing from './home.routes';
import HomeController from './home.controller';
import hotelService from '../../services/hotels.service';
import rangeFilter from '../../filters/range.filter';
import starsFilter from '../../filters/stars.filter';

export default angular.module('app.home', [uirouter, hotelService, rzModule, rangeFilter, starsFilter])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
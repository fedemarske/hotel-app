import angular from 'angular'
import routing from './app.config';
import uirouter from 'angular-ui-router';

import home from './modules/home';

angular.module('hotelsApp', [uirouter, home])
	.config(routing);

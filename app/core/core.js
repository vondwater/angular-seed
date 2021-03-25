'use strict';
import 'angular';
import 'core/version';
import 'core/version-directive';
import 'core/version/interpolate-filter';

import '@abi/my-app';

angular.module('myApp.core', [
	'myApp.version',
  	'myApp.core.components.myAppDirective',
]);

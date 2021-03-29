'use strict';
import 'angular';
import 'version/version';
import 'version/version-directive';
import 'version/interpolate-filter';

import '@abi/my-app';

angular.module('myApp.core', [
	'myApp.version',
  	'myApp.core.components.myAppDirective',
]);

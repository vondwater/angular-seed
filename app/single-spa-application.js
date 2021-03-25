// import {singleSpaAngularjs} from 'single-spa-angularjs';

System.register(['angular'], function (_export) {
	return {
		execute: function () {
			_export(window.singleSpaAngularjs.default({
				angular: angular,
				mainAngularModule: 'myApp',
				uiRouter: true,
				preserveGlobal: false,
				template: '<my-app />',
			}))
		}
	}
});

System.import('app-regs');
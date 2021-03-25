// import 'angular';
// import { registerApplication, start } from 'single-spa';
System.import('single-spa').then((singleSpa) => {
	singleSpa.registerApplication("@abi/app", () => System.import('@abi/app'), location => location.pathname.startsWith('/'));

	singleSpa.start();

	function loadingFn() {
		// Make sure the resolved value of the promise is an object!	
		// System.import('app');
		return System.import('app');
	}
});
import {registerApplication, start} from 'single-spa';

registerApplication("@abi/app", () => System.import('@abi/app'), location => location.pathname.startsWith('/'));
start();
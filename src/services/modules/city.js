import hyRequest from '../request/index.js';

export function getCityData() {
	return hyRequest.get({
		url: '/city/all'
	});
}

import hyRequest from '../request/index.js';

export function getHotSuggestsData() {
	return hyRequest.get({
		url: '/home/hotSuggests'
	});
}

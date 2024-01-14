import hyRequest from '../request/index.js';

export function getHotSuggestsData() {
	return hyRequest.get({
		url: '/home/hotSuggests'
	});
}

export function getCategorieData() {
	return hyRequest.get({
		url: '/home/categories'
	});
}

export function getHouseListDate(currentPage) {
	return hyRequest.get({
		url: '/home/houselist',
		params: {
			page: currentPage
		}
	});
}

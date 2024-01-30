import hyRequest from '@/services/request/index.js';

export function getDetailData(houseId) {
	return hyRequest.get({
		url: '/detail/infos',
		params: {
			houseId
		}
	});
}

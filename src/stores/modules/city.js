import { defineStore } from 'pinia';
import { getCityData } from '@/services';

export const useCityStore = defineStore('city', {
	state: () => ({
		allCities: {}
	}),
	getters: {},
	actions: {
		// 请求城市的数据
		async fetchCitiesData() {
			let res = await getCityData();
			this.allCities = res.data;
		}
	}
});

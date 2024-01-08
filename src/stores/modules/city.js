import { defineStore } from 'pinia';
import { getCityData } from '@/services';

export const useCityStore = defineStore('city', {
	state: () => ({
		allCities: {},
		currentCity: {
			cityName: '广州'
		}
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

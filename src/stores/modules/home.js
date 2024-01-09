import { defineStore } from 'pinia';
import { getHotSuggestsData } from '@/services';

export const useHomeStore = defineStore('home', {
	state: () => ({
		hotSuggests: []
	}),
	actions: {
		// 获取热门推荐数据
		async fetchHotSuggestsData() {
			const res = await getHotSuggestsData();
			this.hotSuggests = res.data;
			console.log(res.data);
		}
	}
});

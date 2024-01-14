import { defineStore } from 'pinia';
import { getHotSuggestsData, getCategorieData, getHouseListDate } from '@/services';

export const useHomeStore = defineStore('home', {
	state: () => ({
		hotSuggests: [],
		categories: [],

		currentPage: 1,
		houselist: []
	}),
	actions: {
		// 获取热门推荐数据
		async fetchHotSuggestsData() {
			const res = await getHotSuggestsData();
			this.hotSuggests = res.data;
		},

		// 获取类别数据（categories）
		async fetchCategoriesData() {
			const res = await getCategorieData();
			this.categories = res.data;
		},

		// 获取房屋列表数据
		async fetchHouseListData() {
			const res = await getHouseListDate(this.currentPage);
			this.houselist.push(...res.data);

			// 请求完数据后，页码自增，等待下一次的请求
			this.currentPage++;
		}
	}
});

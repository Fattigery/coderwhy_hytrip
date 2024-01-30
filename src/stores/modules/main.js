import { defineStore } from 'pinia';

const stateDate = new Date();
const endDate = new Date();
endDate.setDate(endDate.getDate() + 1);

export const useMainStore = defineStore('main', {
	state: () => ({
		startDate: stateDate,
		endDate: endDate,

		isLoading: false
	})
});

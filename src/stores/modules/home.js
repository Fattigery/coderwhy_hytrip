import { defineStore } from 'pinia';

export const useHomeStore = defineStore('home', {
	state: () => ({
		city: '广州'
	})
});

<template>
	<div class="home">
		<home-nav-bar />

		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="" />
		</div>

		<home-search-box />
		<home-categories />
		<home-content />
	</div>
</template>

<script setup>
	import { watch } from 'vue';
	import homeNavBar from './cpns/home-nav-bar.vue';
	import homeSearchBox from './cpns/home-search-box.vue';
	import homeCategories from './cpns/home-categories.vue';
	import homeContent from './cpns/home-content.vue';
	import { useHomeStore } from '@/stores/modules/home';
	import { useScroll } from '@/hooks/useScroll.js';

	const homeStore = useHomeStore();

	// 如果是在组件中直接发送网络请求：尽量不要在小组件中发送网络请求，应该放在一个统一的地方进行管理，等到小组件需要用到这个数据的时候，再把数据传到小组件中进行展示）
	// 发送网络请求获取热门推荐数据
	homeStore.fetchHotSuggestsData();
	// 获取类别数据
	homeStore.fetchCategoriesData();
	// 获取房屋列表数据
	homeStore.fetchHouseListData();

	// 触底加载更多功能
	// 方案一：传入一个回调函数，当滚动到底部的时候，会调用这个回调函数
	// useScroll(() => {
	// 	homeStore.fetchHouseListData();
	// });

	// 方案二：监听变量的变化
	const { isBottom } = useScroll();
	watch(isBottom, newValue => {
		if (newValue) {
			homeStore.fetchHouseListData().then(() => {
				// 当数据加载完成之后，由于高度发生了变化，需要将isBottom重新设置为false
				isBottom.value = false;
			});
		}
	});
</script>

<style lang="less" scoped></style>

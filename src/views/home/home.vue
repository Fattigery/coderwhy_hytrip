<template>
	<div class="home">
		<home-nav-bar />

		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="" />
		</div>

		<home-search-box />
	</div>
</template>

<script setup>
	import homeNavBar from './cpns/home-nav-bar.vue';
	import homeSearchBox from './cpns/home-search-box.vue';
	import { useHomeStore } from '@/stores/modules/home';

	const homeStore = useHomeStore();

	// 如果是在组件中直接发送网络请求：尽量不要在小组件中发送网络请求，应该放在一个统一的地方进行管理，等到小组件需要用到这个数据的时候，再把数据传到小组件中进行展示）
	// 发送网络请求获取热门推荐数据
	homeStore.fetchHotSuggestsData();
</script>

<style lang="less" scoped></style>

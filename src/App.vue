<template>
	<div class="app">
		<router-view></router-view>

		<!-- 判断tabbar组件是否需要隐藏 -->
		<Tabbar v-if="!route.meta.hideTabbar"></Tabbar>
	</div>
</template>

<script setup>
	import { useRoute } from 'vue-router';
	import Tabbar from '@/components/tabbar/tabbar.vue';

	// useRoute()：获取当前活跃的路由对象，是一个响应式对象
	let route = useRoute();
</script>

<style lang="less" scoped></style>

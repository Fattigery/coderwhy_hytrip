<template>
	<div class="app">
		<router-view></router-view>

		<div class="tabber">
			<router-link to="/home">首页</router-link>
			<router-link to="/favor">收藏</router-link>
			<router-link to="/order">订单</router-link>
			<router-link to="/message">消息</router-link>
		</div>
	</div>
</template>

<script setup>
	import { useUserStore } from '@/stores/user.js';

	const userStore = useUserStore();
</script>

<style lang="less" scoped>
	.tabber {
		position: fixed;
		bottom: 0;

		display: flex;
		width: 100vw;
		justify-content: space-around;
		height: 40px;

		& > a {
			display: block;
			width: 25vw;
			text-align: center;
			line-height: 40px;
			border-right: 1px solid #ccc;
		}

		& > a:last-of-type {
			border-right: none;
		}
	}
</style>

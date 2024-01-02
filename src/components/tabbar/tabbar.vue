<template>
	<div class="tabbar">
		<div
			class="tabbar-item"
			v-for="(item, index) in tabbarDate"
			:key="index"
			:class="{ active: currentIndex === index }"
			@click="itemClick(index, item.path)">
			<!--
        加载动态绑定的本地资源的路径问题（v-bind:src）:
        webpack：使用require()返回资源的路径
        <img :src="require('@/assets/images/tabbar/' + item.image)" alt="" />
        vite：定义一个函数，使用new URL(url,baseurl)返回资源的路径
       -->
			<img :src="getAssetURL(currentIndex === index ? item.activeImage : item.image)" alt="" />
			<span>{{ item.text }}</span>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	// tabbar的数据
	import tabbarDate from '@/assets/data/tabbar.js';
	// 获取本地资源路径的函数
	import { getAssetURL } from '@/utils/get_assets.js';
	// 路由对象
	import { useRouter } from 'vue-router';
	const router = useRouter();

	let currentIndex = ref(0);
	// 跳转到指定路由
	function itemClick(index, path) {
		currentIndex.value = index;
		router.push(path);
	}
</script>

<style lang="less" scoped>
	.tabbar {
		position: fixed;
		bottom: 55px;
		left: 0;
		right: 0;
		height: 50px;

		display: flex;

		border-top: 1px solid #f3f3f3;

		.tabbar-item {
			// 均分宽度
			flex: 1;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			&.active {
				color: var(--primary-color);
			}

			img {
				width: 32px;
			}

			& > span {
				font-size: 12px;
				margin-top: 2px;
			}
		}
	}
</style>

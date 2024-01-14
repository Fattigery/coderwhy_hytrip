<template>
	<div class="tabbar">
		<van-tabbar v-model="active" active-color="#ff9854">
			<van-tabbar-item v-for="(item, index) in tabbarDate" :key="index" :to="item.path">
				<span>{{ item.text }}</span>
				<template #icon="props">
					<!-- props.active：是否被选中 -->
					<img :src="getAssetURL(props.active ? item.activeImage : item.image)" />
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	// tabbar的数据
	import tabbarDate from '@/assets/data/tabbar.js';
	// 获取本地资源路径的函数
	import { getAssetURL } from '@/utils/get_assets.js';

	const active = ref(0);
</script>

<style lang="less" scoped>
	.tabbar {
		height: 50px;
		img {
			height: 28px;
			object-fit: contain;
		}
	}
</style>

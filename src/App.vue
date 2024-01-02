<template>
	<div class="app">
		<router-view></router-view>

		<van-tabbar v-model="active">
			<van-tabbar-item v-for="(item, index) in tabbarDate" :key="index" :to="item.path">
				<span>{{ item.text }}</span>
				<template #icon="props">
					<img :src="getAssetURL(props.active ? item.activeImage : item.image)" />
				</template>
			</van-tabbar-item>
		</van-tabbar>

		<Tabbar></Tabbar>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import Tabbar from '@/components/tabbar/tabbar.vue';
	// tabbar的数据
	import tabbarDate from '@/assets/data/tabbar.js';
	import { getAssetURL } from '@/utils/get_assets.js';

	const active = ref(0);
</script>

<style lang="less" scoped></style>

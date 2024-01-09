<template>
	<div class="city">
		<!-- 顶部固定区域 -->
		<div class="top">
			<!-- 1.搜索框 -->
			<van-search v-model="searchValue" shape="round" placeholder="城市/区域/位置" show-action @cancel="cancelClick" />

			<!-- 2.tab切换 -->
			<van-tabs v-model:active="tabActive" color="#ff9854" sticky>
				<template v-for="(value, key) in allCities" :key="key">
					<van-tab :title="value.title" :name="key"></van-tab>
				</template>
			</van-tabs>
		</div>

		<!-- 内容滚动区域 -->
		<div class="content">
			<!-- 旧：每次tab切换都根据最新的currentGroup数据进行渲染，会导致切换缓慢 -->
			<!-- <city-group :currentGroupData="currentGroup"></city-group> -->

			<!--
				tab切换性能优化:
				 - 最开始就渲染出所有的indexBar，然后使用v-show根据tabActive的改变来显示某一个indexBar。
			 -->
			<template v-for="(value, key) in allCities">
				<city-group :currentGroupData="value" v-show="tabActive === key"></city-group>
			</template>
		</div>
	</div>
</template>

<script setup>
	import { ref, toRefs, computed } from 'vue';
	import { useRouter } from 'vue-router';
	import { useCityStore } from '@/stores/modules/city.js';
	import cityGroup from './cpns/city-group.vue';

	const router = useRouter();
	const cityStore = useCityStore();

	// 搜索框功能
	const searchValue = ref('');
	function cancelClick() {
		// 返回上一页
		router.back();
	}

	// tab切换
	const tabActive = ref('');

	// 获取城市的数据
	cityStore.fetchCitiesData();
	let { allCities } = toRefs(cityStore);

	/**
	 * 目的：获取选中标签对应的城市数据，用于展示
	 * 1.获取正确的key
	 * 	1.1.给tab绑定name属性，值为key，这样tabs绑定的tabActive的值就是key了。
	 * 2.根据key从allCities中获取对应的城市数据
	 * 	2.1.默认直接获取的数据不是响应式的，所以需要使用computed计算属性（计算属性：当依赖项发生变化时，会重新计算）
	 */
	// let currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<style lang="less" scoped>
	.city {
		.top {
			position: relative;
			z-index: 9;
		}
		.content {
			height: calc(100vh - 98px);
			overflow-y: auto;
		}
	}
</style>

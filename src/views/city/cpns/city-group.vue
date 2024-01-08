<template>
	<div class="city-group">
		<!-- indexBar索引栏 -->
		<van-index-bar :index-list="indexList" highlight-color="#ff9854">
			<!-- 热门城市数据的展示 -->
			<van-index-anchor index="热门" />
			<div class="hot-city">
				<template v-for="item in currentGroupData.hotCities">
					<div @click="cityClick(item)">{{ item.cityName }}</div>
				</template>
			</div>

			<!-- 城市数据的展示 -->
			<!-- 第一层v-for -->
			<template v-for="item in currentGroupData.cities">
				<van-index-anchor :index="item.group" />
				<!-- 第二层v-for -->
				<template v-for="item1 in item.cities">
					<van-cell :title="item1.cityName" @click="cityClick(item1)" />
				</template>
			</template>
		</van-index-bar>
	</div>
</template>

<script setup>
	import { computed } from 'vue';
	import { useRouter } from 'vue-router';
	import { useCityStore } from '@/stores/modules/city.js';

	const router = useRouter();
	const cityStore = useCityStore();

	// 定义props
	const props = defineProps({
		currentGroupData: {
			type: Object,
			default: () => ({})
		}
	});

	// 自定义索引字符列表（根据城市数据标题（A-Z）结合热门城市（#）组成的数组）
	const indexList = computed(() => ['#', ...props.currentGroupData.cities.map(item => item.group)]);

	/**
	 * 监听城市的点击
	 *  - 将城市数据保存到cityStore中
	 *  - 然后返回上一页
	 * @param {object} city
	 */
	function cityClick(city) {
		cityStore.currentCity = city;
		router.back();
	}
</script>

<style lang="less" scoped>
	.city-group {
		.hot-city {
			padding: 10px 25px 10px 16px;

			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			& > div {
				width: 70px;
				height: 28px;
				background-color: #fff4ec;
				border-radius: 14px;
				text-align: center;
				line-height: 28px;

				margin: 5px 0;
			}
		}
	}
</style>

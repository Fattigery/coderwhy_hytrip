<template>
	<div class="city">
		<!-- 1.搜索框 -->
		<van-search v-model="searchValue" shape="round" placeholder="城市/区域/位置" show-action @cancel="cancelClick" />

		<!-- 2.tab切换 -->
		<van-tabs v-model:active="tabActive" color="#ff9854" sticky>
			<van-tab title="国内">
				<van-index-bar :index-list="indexList">
					<van-index-anchor index="#" />
					<div class="box">...</div>

					<van-index-anchor index="A" />
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />

					<van-index-anchor index="B" />
					<van-cell title="文本" />
					<van-cell title="文本" />
					<van-cell title="文本" />
				</van-index-bar>
			</van-tab>
			<van-tab title="国外">
				<van-index-bar :index-list="indexList">
					<van-index-anchor index="#" />
					<div class="box">...</div>

					<van-index-anchor index="A" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />

					<van-index-anchor index="B" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />

					<van-index-anchor index="C" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />

					<van-index-anchor index="D" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />

					<van-index-anchor index="E" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />

					<van-index-anchor index="F" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />

					<van-index-anchor index="G" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />
					<van-cell title="文本2" />
				</van-index-bar>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { getCityData } from '@/services';
	import { useRouter } from 'vue-router';
	let router = useRouter();

	// 搜索框功能
	let searchValue = ref('');
	function cancelClick() {
		// 返回上一页
		router.back();
	}

	// tab切换
	let tabActive = ref(0);

	// 请求城市的数据
	getCityData().then(res => {
		console.log(res.data);
	});

	let indexList = [
		'#',
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z'
	];
</script>

<style lang="less" scoped>
	.city {
		.box {
			height: 300px;
			padding: 0 16px;
		}

		:deep(.van-tabs__nav--line) {
			z-index: 2;
		}
	}
</style>

<template>
	<div class="city">
		<van-tabs v-model:active="active" sticky>
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
	let active = ref(0);
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

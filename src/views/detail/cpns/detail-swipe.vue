<template>
	<div class="swipe">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<template v-for="item in swipeData">
				<van-swipe-item class="img">
					<img :src="item.url" alt="" />
				</van-swipe-item>
			</template>

			<!-- 自定义指示器 -->
			<template #indicator="{ active }">
				<div class="indicator">
					<template v-for="(value, key) in swipeGroup">
						<span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
							<span class="text">{{ getName(value[0].title) }}</span>
							<span class="count" v-if="swipeData[active]?.enumPictureCategory == key"
								>{{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}</span
							>
						</span>
					</template>
				</div>
			</template>
		</van-swipe>
	</div>
</template>

<script setup>
	import { ref } from 'vue';

	const props = defineProps({
		swipeData: {
			type: Array,
			default: () => []
		}
	});

	const swipeGroup = ref({});
	for (const item of props.swipeData) {
		let groupKey = item.enumPictureCategory;
		if (!swipeGroup.value[groupKey]) {
			swipeGroup.value[groupKey] = [];
		}
		swipeGroup.value[groupKey].push(item);
	}

	// 对类别名称进行处理
	function getName(name) {
		return name.replace('：', '').replace('【', '').replace('】', '');
	}

	// 获取当前轮播到的图片在它的类别中的索引
	function getCategoryIndex(item) {
		return swipeGroup.value[item?.enumPictureCategory]?.findIndex(data => data === item) + 1;
	}
</script>

<style lang="less" scoped>
	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}

	.img {
		height: 200px;
		object-fit: cover;
	}

	.indicator {
		position: absolute;
		right: 5px;
		bottom: 5px;
		padding: 2px 0px;
		font-size: 12px;
		background-color: rgba(0, 0, 0, 0.3);

		.item {
			padding: 0 5px;
		}
	}

	.active {
		background-color: #fff;
		border-radius: 2px;
	}
</style>

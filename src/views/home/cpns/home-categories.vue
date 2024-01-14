<template>
	<div class="categories">
		<template v-for="item in categories">
			<div class="item">
				<img :src="item.pictureUrl" alt="" />
				<div class="text">{{ item.title }}</div>
			</div>
		</template>
	</div>
</template>

<script setup>
	import { toRefs } from 'vue';
	import { useHomeStore } from '@/stores/modules/home';

	const homeStore = useHomeStore();

	// 获取类别数据
	const { categories } = toRefs(homeStore);
</script>

<style lang="less" scoped>
	.categories {
		display: flex;
		height: 80px;
		overflow-y: hidden;
		overflow-x: auto;
		padding: 0 10px;

		// 隐藏滚动条
		&::-webkit-scrollbar {
			display: none;
		}

		.item {
			width: 70px;
			flex-shrink: 0;
			text-align: center;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			img {
				width: 32px;
				height: 32px;
			}

			.text {
				font-size: 12px;
				margin-top: 8px;
			}
		}
	}
</style>

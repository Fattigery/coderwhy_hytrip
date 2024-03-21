<template>
	<div class="loading" v-show="mainStore.isLoading" @click="loadingClick">
		<div class="bg">
			<img src="@/assets/img/home/full-screen-loading.gif" alt="" />
		</div>
	</div>
</template>

<script setup>
	import { useMainStore } from '@/stores/modules/main';

	const mainStore = useMainStore();

	// 当点击遮罩层的时候，将loading隐藏
	const loadingClick = () => {
		mainStore.isLoading = false;
	};
</script>

<style lang="less" scoped>
	.loading {
		position: fixed;
		z-index: 999;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.2);

		display: flex;
		justify-content: center;
		align-items: center;

		.bg {
			width: 104px;
			height: 104px;
			// background: image position / size
			background: url('@/assets/img/home/loading-bg.png') 0 0 / 100% 100%;

			display: flex;
			justify-content: center;
			align-items: center;

			img {
				width: 70px;
				height: 70px;
				margin-bottom: 10px;
			}
		}
	}
</style>

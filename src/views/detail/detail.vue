<template>
	<div class="detail">
		<!-- NavBar -->
		<van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />

		<!-- 轮播图 -->
		<div class="main" v-if="mainPart">
			<detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
		</div>
	</div>
</template>

<script setup>
	import { computed, ref } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { getDetailData } from '@/services/index.js';
	import DetailSwipe from './cpns/detail-swipe.vue';

	const router = useRouter();
	const route = useRoute();
	const houseId = route.params.id;

	// 发送网络请求获取房屋详情数据
	const detailInfos = ref({});
	const mainPart = computed(() => detailInfos.value.mainPart);
	getDetailData(houseId).then(res => {
		console.log(res.data);
		detailInfos.value = res.data;
	});

	// 监听返回按钮的点击
	function onClickLeft() {
		router.back();
	}
</script>

<style lang="less" scoped></style>

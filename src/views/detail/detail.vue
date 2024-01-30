<template>
	<div class="detail">
		<van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
	</div>
</template>

<script setup>
	import { computed, ref } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import { getDetailData } from '@/services/index.js';

	const router = useRouter();
	const route = useRoute();
	const houseId = route.params.id;

	// 发送网络请求获取房屋详情数据
	const detailInfos = ref({});
	const mainPart = computed(() => detailInfos.value.mainPart);
	getDetailData(houseId).then(res => {
		detailInfos.value = res.data;
	});

	// 监听返回按钮的点击
	function onClickLeft() {
		router.back();
	}
</script>

<style lang="less" scoped></style>

<template>
	<div class="content">
		<h2 class="title">热门精选</h2>
		<div class="list">
			<template v-for="item in houselist">
				<house-item-type9
					v-if="item.discoveryContentType === 9"
					:house-data="item.data"
					@click="itemClick(item.data)" />

				<house-item-type3
					v-else-if="item.discoveryContentType === 3"
					:house-data="item.data"
					@click="itemClick(item.data)" />
			</template>
		</div>
	</div>
</template>

<script setup>
	import { toRefs } from 'vue';
	import { useRouter } from 'vue-router';
	import { useHomeStore } from '@/stores/modules/home';
	import houseItemType9 from '@/components/house-item-type9/house-item-type9.vue';
	import houseItemType3 from '@/components/house-item-type3/house-item-type3.vue';

	const homeStore = useHomeStore();
	const router = useRouter();

	const { houselist } = toRefs(homeStore);

	const itemClick = item => {
		// 点击房屋时，跳转到房屋详情页(detail.vue)，并携带房屋id
		router.push(`/detail/${item.houseId}`);
	};
</script>

<style lang="less" scoped>
	.content {
		padding: 10px;
		.title {
			font-size: 22px;
			padding: 0 10px 10px;
		}

		.list {
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>

<template>
	<div class="item search-bar">
		<div class="search-time">
			<div class="item start">
				<div class="name">住</div>
				<div class="date">{{ startDateStr }}</div>
			</div>
			<div class="item end">
				<div class="name">离</div>
				<div class="date">{{ endDateStr }}</div>
			</div>
		</div>

		<div class="content">
			<div class="keyword">关键字/位置/名宿</div>
		</div>

		<div class="right">
			<i class="icon-search"></i>
		</div>
	</div>
</template>

<script setup>
	import { toRefs, computed } from 'vue';
	import { useMainStore } from '@/stores/modules/main.js';
	import { formatMonthDay } from '@/utils/format_date.js';

	const mainStore = useMainStore();
	const { startDate, endDate } = toRefs(mainStore);
	const startDateStr = computed(() => formatMonthDay(startDate.value, 'MM.DD'));
	const endDateStr = computed(() => formatMonthDay(endDate.value, 'MM.DD'));
</script>

<style lang="less" scoped>
	.item {
		display: flex;
		align-items: center;
	}

	.search-bar {
		height: 45px;

		padding: 0 10px;
		font-size: 14px;
		color: #999;

		border-radius: 6px;
		background: #f2f4f6;

		.search-time {
			.name {
				font-size: 12px;
			}

			.date {
				color: #333;
				font-weight: 500;
				margin-left: 3px;
			}

			.end {
				position: relative;
			}

			.end .date::after {
				content: '';
				width: 0;
				height: 0;
				border: 4px solid #666;
				border-color: transparent transparent transparent #666;
				border-radius: 3px;
				transform: rotate(45deg);
				position: absolute;
				z-index: 99;
				bottom: 0px;
				right: -12px;
			}
		}

		.content {
			flex: 1;
			margin: 0 15px;
		}

		.icon-search {
			width: 24px;
			height: 24px;
			display: inline-block;

			background-image: url(../../assets/img/home/home-sprite.png);
			background-position: -29px -151px;
			background-size: 207px 192px;
		}
	}
</style>

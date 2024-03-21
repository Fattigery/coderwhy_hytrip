<template>
	<div class="search-box">
		<!-- 城市/位置信息 -->
		<div class="item location bottom-gray-line">
			<div class="city">
				<span @click="cityClick">{{ currentCity.cityName }}</span>
			</div>
			<div class="position" @click="positionClick">
				<span class="text">我的位置</span>
				<img src="@/assets/img/home/icon_location.png" alt="" />
			</div>
		</div>

		<!--
			日期范围
				- 点击弹出日历组件
		-->
		<div class="item date-range bottom-gray-line" @click="showCalendar = true">
			<div class="start">
				<span>入住</span>
				<span>{{ startDateStr }}</span>
			</div>
			<div class="stay">共{{ stayCount }}晚</div>
			<div class="end">
				<span>离店</span>
				<span>{{ endDateStr }}</span>
			</div>
		</div>

		<!-- 日历ui组件 -->
		<van-calendar
			v-model:show="showCalendar"
			type="range"
			color="#ff9854"
			@confirm="onConfirm"
			:formatter="formatter"
			first-day-of-week="1"
			:show-confirm="false"
			:round="false" />

		<!-- 价格/人数的选择 -->
		<div class="item price-counter bottom-gray-line">
			<div class="statr">价格不限</div>
			<div class="end">人数不限</div>
		</div>

		<!-- 关键字 -->
		<div class="item keyword bottom-gray-line">关键字/位置/民宿名</div>

		<!-- 热门推荐 -->
		<div class="hot-suggests">
			<template v-for="item in hotSuggests">
				<div class="tag">{{ item.tagText.text }}</div>
			</template>
		</div>

		<!-- 开始搜索按钮 -->
		<div class="item search-btn">
			<div class="btn" @click="searchBtnClick">开始搜索</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, toRefs, computed } from 'vue';
	import { useRouter } from 'vue-router';
	import { useCityStore } from '@/stores/modules/city';
	import { useHomeStore } from '@/stores/modules/home';
	import { useMainStore } from '@/stores/modules/main.js';
	import { formatMonthDay, getDiffDate } from '@/utils/format_date.js';

	const router = useRouter();
	const cityStore = useCityStore();
	const homeStore = useHomeStore();

	// 点击城市跳转到城市选择页面
	function cityClick() {
		router.push('/city');
	}

	// 获取选择的城市
	const { currentCity } = toRefs(cityStore);

	// 点击获取当前位置（如果获取不到，可以尝试开启VPN，好像是因为需要连接国外的网站）
	function positionClick() {
		navigator.geolocation.getCurrentPosition(
			async position => {
				// 纬度
				let longitude = position.coords.longitude;
				// 经度
				let latitude = position.coords.latitude;
				// https://api.map.baidu.com/reverse_geocoding/v3/?ak=DNMDVVOsIRSX0QYW98XuiinvIdgNLk1E&output=json&coordtype=wgs84ll&location=${latitude},${longitude}
				let res = await fetch(`/baidu/geocoder?location=${latitude},${longitude}&output=json`);
				let data = await res.json();
				let city = data.result.addressComponent.city;
				let district = data.result.addressComponent.district;
				console.log([city, district]);
			},
			err => {
				console.log('获取位置失败', err);
			}
		);
	}

	// 日期的处理
	// 将日期在mainStore中进行管理（方便其他地方使用）
	const mainStore = useMainStore();
	const { startDate, endDate } = toRefs(mainStore);

	const startDateStr = computed(() => formatMonthDay(startDate.value));
	const endDateStr = computed(() => formatMonthDay(endDate.value));
	// 日期之间的天数差
	const stayCount = ref(getDiffDate(startDate.value, endDate.value));

	// 控制日历组件的显示与隐藏
	const showCalendar = ref(false);
	// 自定义日历组件的日期文案
	function formatter(day) {
		if (day.type === 'start') {
			day.bottomInfo = '入住';
		} else if (day.type === 'end') {
			day.bottomInfo = '离店';
		}
		return day;
	}
	// 选择完日期后触发
	function onConfirm(value) {
		// 隐藏日历组件
		showCalendar.value = false;
		// 保存选择的日期范围
		mainStore.startDate = value[0];
		mainStore.endDate = value[1];
		// 保存日期范围之间的天数差
		stayCount.value = getDiffDate(value[0], value[1]);
	}

	// 从homeStore中获取热门推荐数据
	const { hotSuggests } = toRefs(homeStore);

	// 点击开始搜索按钮，跳转到搜索页面
	function searchBtnClick() {
		router.push({
			path: '/search',
			query: {
				startDate: startDate.value,
				endDate: endDate.value,
				currentCity: currentCity.value.cityName
			}
		});
	}
</script>

<style lang="less" scoped>
	.search-box {
		// 日历组件弹层的高度
		--van-calendar-popup-height: 100%;

		.item {
			height: 44px;
			display: flex;
			align-items: center;
			padding: 0 20px;
		}

		.location {
			.city {
				flex: 1;
				color: #333;
			}

			.position {
				width: 71px;
				.text {
					color: #666;
					font-size: 12px;
				}

				img {
					width: 18px;
					height: 18px;
					vertical-align: -4px;
					margin-left: 5px;
				}
			}
		}

		.date-range {
			justify-content: space-between;

			.start span,
			.end span {
				display: block;
			}

			.start span:nth-child(1),
			.end span:nth-child(1) {
				color: #ccc;
				font-size: 12px;
			}
		}

		.price-counter {
			justify-content: space-between;
			color: #ccc;
		}

		.keyword {
			color: #ccc;
		}

		.hot-suggests {
			margin: 10px 0;
			padding: 0 20px;
			display: flex;
			flex-wrap: wrap;

			.tag {
				background-color: #ff9854;
				color: #fff;
				border-radius: 10px;
				padding: 4px 8px;
				margin: 5px;
				margin-left: 0;
				font-size: 12px;
			}
		}

		.search-btn {
			.btn {
				width: 100%;
				height: 38px;
				background-image: var(--theme-linear-gradient);
				color: #fff;
				font-weight: 500;
				font-size: 18px;
				text-align: center;
				line-height: 38px;
				border-radius: 20px;
			}
		}
	}
</style>

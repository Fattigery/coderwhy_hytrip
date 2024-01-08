<template>
	<div class="search-box">
		<!-- 位置信息 -->
		<div class="item location">
			<div class="city">
				<span @click="cityClick">{{ currentCity.cityName }}</span>
			</div>
			<div class="position" @click="positionClick">
				<span class="text">我的位置</span>
				<img src="@/assets/img/home/icon_location.png" alt="" />
			</div>
		</div>

		<!-- 日期范围 -->
		<!-- 点击弹出日历组件 -->
		<div class="item date-range" @click="showCalendar = true">
			<div class="start">
				<span>入住</span>
				<span>{{ startDate }}</span>
			</div>
			<div class="stay">共一晚</div>
			<div class="end">
				<span>离店</span>
				<span>{{ endDate }}</span>
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
	</div>
</template>

<script setup>
	import { ref, toRefs } from 'vue';
	import { useRouter } from 'vue-router';
	import { useCityStore } from '@/stores/modules/city';
	import { formatMonthDay, diffValue } from '@/utils/format_date.js';

	const router = useRouter();
	const cityStore = useCityStore();

	// 点击城市跳转到城市选择页面
	function cityClick() {
		router.push('/city');
	}

	// 点击获取当前位置
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

	// 获取当前城市
	const { currentCity } = toRefs(cityStore);

	// 日期范围的处理
	const nowDate = new Date();
	const startDate = ref(formatMonthDay(nowDate));
	const newDate = nowDate.setDate(nowDate.getDate() + 1);
	const endDate = ref(formatMonthDay(newDate));

	// 日历组件的显示与隐藏
	const showCalendar = ref(false);
	// 选择完日期后触发
	function onConfirm(value) {
		// 隐藏日历组件
		showCalendar.value = false;
		// 保存选择的日期范围
		startDate.value = formatMonthDay(value[0]);
		endDate.value = formatMonthDay(value[1]);

		console.log(diffValue(value[0], value[1]));
	}

	// 自定义日历组件的日期文案
	function formatter(day) {
		if (day.type === 'start') {
			day.bottomInfo = '入住';
		} else if (day.type === 'end') {
			day.bottomInfo = '离店';
		}
		return day;
	}
</script>

<style lang="less" scoped>
	.search-box {
		// 日历组件弹层的高度
		--van-calendar-popup-height: 100%;

		.item {
			display: flex;
			align-items: center;
			padding: 0 20px;
		}

		.location {
			height: 44px;
			align-items: center;

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
			height: 44px;
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
	}
</style>

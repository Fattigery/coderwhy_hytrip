<template>
	<div class="search-box">
		<div class="location">
			<div class="city">
				<span @click="cityClick">广州</span>
			</div>
			<div class="position" @click="positionClick">
				<span class="text">我的位置</span>
				<img src="@/assets/img/home/icon_location.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from 'vue-router';
	const router = useRouter();
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
				let res = await fetch(`/api/geocoder?location=${latitude},${longitude}&output=json`);
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
</script>

<style lang="less" scoped>
	.search-box {
		.location {
			display: flex;
			align-items: center;
			height: 44px;
			padding: 0 20px;

			.city {
				flex: 1;
				color: #333;
			}

			.position {
				width: 74px;
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
	}
</style>

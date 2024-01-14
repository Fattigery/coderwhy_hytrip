<template>
	<div class="house-item">
		<div class="item-inner">
			<div class="cover">
				<img :src="houseData.image.url" alt="" />
			</div>

			<div class="info">
				<div class="location">
					<img src="@/assets/img/home/location.png" alt="" />
					<span>{{ houseData.location }}</span>
				</div>

				<div class="name">{{ houseData.houseName }}</div>
				<div class="summary">{{ houseData.summaryText }}</div>
				<div class="price">
					<div class="new">{{ '￥' + houseData.finalPrice }}</div>
					<div class="old">{{ '￥' + houseData.productPrice }}</div>
					<div class="discount">{{ houseData.priceTipBadge.text }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps({
		houseData: {
			type: Object,
			default: () => ({})
		}
	});
</script>

<style lang="less" scoped>
	.house-item {
		position: relative;

		width: 50%;
		// background-color: red;

		.item-inner {
			padding: 5px;
			font-size: 12px;

			.cover img {
				border-top-left-radius: 6px;
				border-top-right-radius: 6px;
			}

			.info {
				position: absolute;
				bottom: 18px;

				background-color: #fff;
				padding: 0 10px;

				.location {
					img {
						width: 12px;
					}
					span {
						color: #999;
					}
				}

				.name {
					margin: 5px 0;

					/* 超出部分隐藏 */
					overflow: hidden;
					/* 超出部分显示省略号 */
					text-overflow: ellipsis;
					/* 使对象作为弹性盒子模型显示 */
					display: -webkit-box;
					/* 块容器中的内容限制为指定的行数 */
					-webkit-line-clamp: 2;
					/* 弹性盒子对象中的子元素排列方式为竖排 */
					-webkit-box-orient: vertical;
				}

				.price {
					display: flex;
					align-items: center;
					margin-top: 10px;

					.new {
						font-size: 14px;
						color: #ff9854;
					}

					.old {
						text-decoration: line-through;
						color: #999;
						margin-left: 2px;
					}

					.discount {
						padding: 0 5px;
						border-radius: 5px;
						background-image: linear-gradient(to right, #ff9f9f, #ff6666);
						color: #fff;
						margin-left: 2px;
					}
				}
			}
		}
	}
</style>

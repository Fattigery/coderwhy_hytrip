<template>
	<div class="house-item">
		<div class="item-inner">
			<div class="cover">
				<img :src="houseData.image.url" alt="" />
			</div>

			<div class="info">
				<div class="summary">{{ houseData.summaryText }}</div>
				<div class="name">{{ houseData.houseName }}</div>
				<div class="price">
					<van-rate
						:model-value="Number(houseData.commentScore)"
						size="12"
						gutter="0"
						color="#fff"
						readonly
						allow-half />

					<div class="new">{{ '￥' + houseData.finalPrice }}</div>
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
		width: 50%;

		.item-inner {
			position: relative;

			padding: 5px;
			font-size: 12px;

			.cover img {
				border-radius: 6px;
			}

			.info {
				position: absolute;
				bottom: 18px;

				padding: 0 10px;
				color: #fff;

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
					justify-content: space-between;
					margin-top: 10px;
				}
			}
		}
	}
</style>

<template>
	<div class="favor">
		<h2>favor</h2>
		<div class="box" ref="boxEl">
			<ul>
				<li v-for="item in 100">{{ item }}</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { ref, watch } from 'vue';
	import { throttle } from 'lodash';

	const boxEl = ref(null);
	watch(boxEl, () => {
		boxEl.value.addEventListener(
			'scroll',
			throttle(e => {
				let el = e.target;
				console.log(Math.ceil(el.scrollTop), el.scrollHeight - el.clientHeight);
				// 当滚动距离>=元素真实高度-元素高度的时候，就说明到底了
				if (el.scrollTop >= el.scrollHeight - el.clientHeight) {
					console.log('到底了');
				}
			}, 100)
		);
	});
</script>

<style lang="less" scoped>
	.box {
		height: 70vw;
		background-color: orange;
		margin-top: 20px;
		overflow: auto;
	}
</style>

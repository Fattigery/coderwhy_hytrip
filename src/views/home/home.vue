<template>
	<div class="home">
		<home-nav-bar />

		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="" />
		</div>

		<home-search-box />
	</div>
</template>

<script setup>
	import homeNavBar from './cpns/home-nav-bar.vue';
	import homeSearchBox from './cpns/home-search-box.vue';
</script>

<style lang="less" scoped></style>

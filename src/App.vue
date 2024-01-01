<template>
	<div class="app">
		<router-view></router-view>

		<Tabbar></Tabbar>
	</div>
</template>

<script setup>
	import Tabbar from '@/components/tabbar/tabbar.vue';
</script>

<style lang="less" scoped></style>

import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';
import { throttle } from 'lodash';

export function useScroll(callback) {
	// 是否滚动到底部
	const isBottom = ref(false);
	// 区域高度
	const clientHeight = ref(0);
	// 区域真实的高度
	const scrollHeight = ref(0);
	// 滚动距离
	const scrollTop = ref(0);

	// 使用节流函数，减少函数的执行次数
	const scrollListenerHandler = throttle(() => {
		let html = document.documentElement;
		clientHeight.value = html.clientHeight;
		scrollHeight.value = html.scrollHeight;
		scrollTop.value = Math.ceil(html.scrollTop);
		// 当滚动距离>=区域真实的高度-区域的高度时，就说明滚动到了底部
		if (scrollTop.value >= scrollHeight.value - clientHeight.value) {
			console.log(scrollTop.value, scrollHeight.value, clientHeight.value);
			console.log('滚动到底部了');
			// callback?.();
			isBottom.value = true;
		}
	}, 100);

	onMounted(() => {
		window.addEventListener('scroll', scrollListenerHandler);
	});
	onActivated(() => {
		window.addEventListener('scroll', scrollListenerHandler);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', scrollListenerHandler);
	});
	onDeactivated(() => {
		window.removeEventListener('scroll', scrollListenerHandler);
	});

	return { isBottom, clientHeight, scrollHeight, scrollTop };
}

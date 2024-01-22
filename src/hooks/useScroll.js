import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';

export function useScroll(callback) {
	const isBottom = ref(false);

	const scrollListenerHandler = () => {
		let html = document.documentElement;
		let clientHeight = html.clientHeight;
		let scrollHeight = html.scrollHeight;
		let scrollTop = Math.ceil(html.scrollTop);
		// 当滚动距离大于等于html元素的真实高度减去可视区域的高度时，就说明滚动到了底部
		console.log(scrollTop, scrollHeight, clientHeight);
		if (scrollTop >= scrollHeight - clientHeight) {
			console.log('滚动到底部了');
			// callback?.();
			isBottom.value = true;
		}
	};

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

	return { isBottom };
}

import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config.js';
import { useMainStore } from '@/stores/modules/main.js';
import { storeToRefs } from 'pinia';

const mainStore = useMainStore();
const { isLoading, isScrollY } = storeToRefs(mainStore);

class HYRequest {
	constructor(baseURL, timeout = 10000) {
		// 创建一个新的axios实例
		this.instance = axios.create({
			baseURL,
			timeout
		});

		// 请求拦截器
		this.instance.interceptors.request.use(
			config => {
				// 显示loading
				isLoading.value = true;

				return config;
			},
			err => {
				return err;
			}
		);

		// 响应拦截器
		this.instance.interceptors.response.use(
			res => {
				// 隐藏loading
				isLoading.value = false;

				return res;
			},
			err => {
				isLoading.value = false;

				return err;
			}
		);
	}

	// 添加原型方法
	request(config) {
		return new Promise((resolve, reject) => {
			this.instance(config)
				.then(res => resolve(res.data))
				.catch(err => reject(err));
		});
	}

	get(config) {
		return this.request({ method: 'get', ...config });
	}

	post(config) {
		return this.request({ method: 'post', ...config });
	}
}

export default new HYRequest(BASE_URL, TIMEOUT);

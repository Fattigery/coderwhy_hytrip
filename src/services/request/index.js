import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config.js';

class HYRequest {
	constructor(baseURL, timeout = 10000) {
		// 创建一个新的axios实例
		this.instance = axios.create({
			baseURL,
			timeout
		});
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

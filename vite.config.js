import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [VantResolver()]
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		port: 3000,
		host: true,
		proxy: {
			// 跨域代理
			// 匹配以/baidu开头的请求，代理到target，将/baidu重写为空
			'/baidu': {
				target: 'http://api.map.baidu.com',
				changeOrigin: true,
				// 将/baidu重写为空
				rewrite: path => path.replace(/^\/baidu/, '')
			}
		}
	}
});

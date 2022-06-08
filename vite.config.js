import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import legacy from '@vitejs/plugin-legacy'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
		
	],
	resolve: {
		alias: {
			// 键必须以斜线开始和结束
			'@': path.resolve(__dirname, './src')
		},
		extensions: [],
	},
	server: {
		host: '10.1.8.15',
		port: 3011,
		// 是否自动在浏览器打开
		open: true,
		// 是否开启 https
		https: false,
		// 服务端渲染
		ssr: false,
		base: './vue',
		outDir: 'dist',
		// 反向代理
		proxy: {
			"/WebHandler.ashx": {
				// target: 'https://www.loongair.cn',// 生产
				// target: 'http://test-sp.loongair.cn', // 测试
				target: 'http://test-spm.loongair.cn', // 开发
				// target: 'http://10.1.8.15:88', // 潘曙凯
				changeOrigin: true
			},
		}
	}
	
})

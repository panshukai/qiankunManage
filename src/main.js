import { createApp } from 'vue'
import App from './App.vue'
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';
import { createRouter, createWebHashHistory } from 'vue-router'
import ElementPlus from 'element-plus' // 这边引入 element-plus
import routes from './router/index.js'
import interfaces from './interfaces/index.js'
/* import 'amfe-flexible'
import './assets/style/reset.css' */
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

const app = createApp(App)
app.config.globalProperties.$interfaces = interfaces;
app.use(router).use(ElementPlus).mount('#mainApp')

registerMicroApps(
    [
        {
            name: 'angularApp', // app name registered
            entry: '//10.1.8.15:88',
            container: '#sub_app',
            activeRule: '/angular',
        },
    ],
    {
        beforeLoad: [
          app => {
            console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
          },
        ],
        beforeMount: [
          app => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
          },
        ],
        afterUnmount: [
          app => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
          },
        ],
    },
);

// const { onGlobalStateChange, setGlobalState } = initGlobalState({
//     user: 'qiankun',
//   });
  
//   onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));
  
//   setGlobalState({
//     ignore: 'master',
//     user: {
//       name: 'master',
//     },
//   });
  
  /**
   * Step3 设置默认进入的子应用
   */
//   setDefaultMountApp('/admin');
  
  /**
   * Step4 启动应用
   */
  start();
  
  /* runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
  }); */



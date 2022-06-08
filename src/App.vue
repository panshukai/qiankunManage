<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, computed } from 'vue';

  const isMicroApp = computed(() => {
    return window.location.pathname.indexOf('angular') > -1;
  })

  onMounted(() => {
    console.log('mount' + window.location);
  })
</script>

<template>
  
  <!-- vue3.0配置 -->
  <router-view v-if="!isMicroApp" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="keep"  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component" :key="keep" v-if="!$route.meta.keepAlive"/>
  </router-view>
  <div id="sub_app" v-else>子应用</div>
</template>

<style>
#mainApp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

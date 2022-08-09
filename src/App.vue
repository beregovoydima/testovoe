<script setup lang="ts">
import router from '@/router';
const goToHome = () => {
  router.push({ name: 'home' });
};
</script>

<template>
  <el-container>
    <el-header><span class="logo" @click="goToHome">Test Page</span></el-header>
    <router-view />
  </el-container>
</template>

<style lang="scss">
.logo {
  cursor: pointer;
}
.el-header {
  padding: 20px !important;
  background-color: $mainColor;
}
</style>

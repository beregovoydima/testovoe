<script lang="ts">
import { userService } from '@/core/services';
export default {
  name: 'UserPage',
};
</script>
<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from '@vue/reactivity';
import { UserData } from '@/core/interfaces';
import { computed, onMounted } from 'vue';

const route = useRoute();

const userInfo = ref<UserData | null>(null);

const getUserInfo = async () => {
  const res = await userService.getUserInfo(+route.params.id);
  userInfo.value = res.data;
};
onMounted(() => {
  getUserInfo();
});

const tableData = computed<any>(() => {
  return [
    {
      name: userInfo.value?.name,
      userName: userInfo.value?.username,
      email: userInfo.value?.email,
      street: userInfo.value?.address.street,
      suite: userInfo.value?.address.suite,
      zipcode: userInfo.value?.address.zipcode,
    },
  ];
});
</script>

<template>
  <div class="common-layout">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="userName" label="User name" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="street" label="Street" />
      <el-table-column prop="suite" label="Suite" />
      <el-table-column prop="zipcode" label="Zipcode" />
    </el-table>
  </div>
</template>

<style scoped lang="scss"></style>

<script lang="ts">
export default {
  name: 'CreateUserPage',
};
</script>
<script setup lang="ts">
import { userService } from '@/core/services';
import { reactive } from '@vue/runtime-core';
import router from '@/router';

const userData = reactive<any>({
  name: '',
  email: '',
  phone: '',
});
const apply = async () => {
  const res = await userService.createUser(userData);
  if (res.status === 201) {
    router.push({ name: 'home' });
  }
};
</script>

<template>
  <el-form label-width="auto" class="create-user">
    <el-form-item label-width="auto" class="create-user__item">
      <el-input v-model="userData.name" placeholder="Введите имя" />
    </el-form-item>
    <el-form-item label-width="auto" class="create-user__item">
      <el-input v-model="userData.email" placeholder="emailt" />
    </el-form-item>
    <el-form-item label-width="auto" class="create-user__item">
      <el-input v-model="userData.phone" placeholder="Телефон" />
    </el-form-item>
    <div class="create-user__btn">
      <el-button type="primary" round @click="apply"> Содать</el-button>
    </div>
  </el-form>
</template>

<style scoped lang="scss">
.create-user {
  width: 80%;
  margin: 0 auto;
  &__item {
    margin: 20px;
  }
  &__btn {
    display: flex;
    justify-content: center;
  }
}
</style>

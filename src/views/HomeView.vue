<script lang="ts">
export default {
  name: 'HomeView',
};
</script>
<script setup lang="ts">
import { userService } from '@/core/services';
import { onMounted, ref } from '@vue/runtime-core';
import { UserData } from '@/core/interfaces';
import router from '@/router';

const usersData = ref<UserData[]>([]);

const getUsers = async () => {
  let res = await userService.getUsers();
  usersData.value = res.data || [];
};

const getUserInfo = (i: number) => {
  router.push({ name: 'user', params: { id: usersData.value[i].id } });
};
const createUser = () => {
  router.push({ name: 'create' });
};
onMounted(() => {
  getUsers();
});
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <div class="user-info">
          <el-card
            v-for="(user, index) in usersData"
            :key="user.id"
            class="box-card"
            @click="getUserInfo(index)"
          >
            <template #header>
              <div class="card-header">
                <span>{{ user.name }}</span>
              </div>
            </template>
            <div>{{ user.email }}</div>
            <div>{{ user.phone }}</div>
          </el-card>
        </div>
        <div class="create-user__btn">
          <el-button plain type="primary" @click="createUser"> Создать пользователя </el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.user-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.box-card {
  min-width: 200px;
  width: calc(25% - 20px);
  margin: 10px;
  cursor: pointer;
}
.create-user {
  &__btn {
    display: flex;
    justify-content: center;
  }
}
</style>

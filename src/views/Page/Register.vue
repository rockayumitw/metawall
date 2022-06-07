<template>
  <div class="flex items-center justify-center mx-auto h-screen bg-gray-100">
    <div class="flex items-center max-w-3md border-2
     border-black mx-auto h-535 md:w-full px-10 drop-shadow-md">
        <div class="hidden md:block md:w-1/2">
            <img src="/assets/images/icon-login.svg" alt="">
        </div>
        <div class="w-full md:w-1/2">
            <h2 class="text-center text-6xl font-black text-blue-300">MetaWall</h2>
            <h3 class="text-center text-2xl mb-9 font-bold">註冊</h3>
            <form class="text-center max-w-sm">
                <label for="" class="block mb-4">
                    <input class="border-2 border-black w-full mb-1"
                        type="text" placeholder="暱稱" v-model="nick"/>
                    <small class="block text-left text-danger">暱稱至少 2 個字元以上</small>
                </label>
                <label for="" class="block mb-4">
                    <input class="border-2 border-black w-full mb-1"
                        type="text" placeholder="Email" v-model="email"/>
                    <small class="block text-left text-danger">帳號已被註冊，請替換新的 Email！</small>
                </label>
                <label for="" class="block mb-8">
                    <input class="border-2 border-black w-full mb-1"
                    type="password" placeholder="Password" v-model="password"/>
                    <small class="block text-left text-danger">密碼需至少 8 碼以上，並中英混合</small>
                </label>
                <input type="submit"
                 class="max-w-sm w-full rounded-lg bg-blue-200 text-white
                 py-4 border-2 border-gray-300 mb-4 drop-shadow" value="註冊" @click="submit">
                <a class="block text-center" href="/Login">登入</a>
            </form>
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref, rective } from 'vue';
import { useStore } from 'vuex';

const nick = ref('');
const email = ref('');
const password = ref('');
const message = ref('');
const store = useStore();

const submit = () => {
  console.log('送出');
  store.dispatch('auth/register', {
    nick,
    email,
    password,
  }).then((res) => {
    if (res.status === 200) {
      console.log('已註冊成功');
    } else {
      message.value = res.message;
    }
  }).catch((e) => {
    console.log(e);
    message.value = e.message;
  });
};
</script>

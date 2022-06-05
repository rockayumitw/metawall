<template>
  <div class="flex items-center justify-center mx-auto h-screen bg-gray-100">
    <div class="flex items-center max-w-3md border-2
     border-black mx-auto h-535 md:w-full px-10 drop-shadow-md">
        <div class="hidden md:block md:w-1/2">
            <img src="@/assets/images/icon-login.svg" alt="">
        </div>
        <div class="w-full md:w-1/2">
            <h2 class="text-center text-6xl font-black text-blue-300">MetaWall</h2>
            <h3 class="text-center text-2xl mb-9 font-bold">到元宇宙展開全新社交圈</h3>
            <form class="text-center max-w-sm">
                <label for="" class="block mb-4">
                    <input class="border-2 border-black w-full"
                        type="text" placeholder="Email"  v-model="email"/>
                </label>
                <label for="" class="block mb-8">
                    <input class="border-2 border-black w-full"
                    type="password" placeholder="Password" v-model="password"/>
                </label>
                <small class="block text-danger text-sm mb-4">
                  {{message}}
                </small>
                <input type="button"
                 class="max-w-sm w-full rounded-lg bg-blue-300 text-white
                 py-4 border-2 border-black mb-4 drop-shadow" value="登入" @click="submit">
                <a class="block text-center" href="/">註冊帳號</a>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
// import handleErrorAsync from '@/js/handleErrorAsync';

export default {
  data() {
    return {
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    async submit() {
      await this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      }).then((res) => {
        if (res.status === 200) {
          console.log('已經登入');
        }
      }).catch((e) => {
        console.log(e);
        this.message = e.data.message;
      });
    },
  },
};
</script>

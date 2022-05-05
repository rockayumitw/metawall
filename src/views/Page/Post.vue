<template>
    <div class="border-2 border-black mb-3 text-center py-5 bg-white font-bold text-xl">
        張貼動態
    </div>
    <div class="flex rounded-md border-2 border-black p-8 bg-white">
        <div class="w-full">
            <div class="w-full mb-5">
                <label for="textarea" class="form-label font-bold inline-block text-gray-700">
                    貼文內容
                </label>
                <textarea v-model="posts.content" class="textarea"
                id="textarea"
                rows="5"
                placeholder="Your message"
                ></textarea>
            </div>
            <div class="flex justify-center mb-8">
              <!--圖片上傳使用-->
                <div class="mb-5">
                    <label for="formFile" class="form-label text-base py-1 px-8 rounded-md inline-block mb-2 text-white bg-black">
                        上傳圖片
                    </label>
                    <input class="form-control hidden" type="file" id="formFile" @change="onFileChange" accept="image/*">
                    <img v-if="posts.image" :src="posts.image" alt="">
                </div>
                <!-- <div class="mb-5">
                    <label for="formFile" class="form-label text-base py-1 px-8 rounded-md inline-block mb-2 text-white bg-black">
                        上傳圖片
                    </label>
                    <input class="form-control" type="text" id="formFile" v-model="posts.image">
                    <img v-if="posts.image" :src="posts.image" alt="">
                </div> -->
            </div>
            <div class="mx-auto text-center">
                <!--判斷格式-->
                <!-- <div class="text-center mb-4">
                    <p class="text-danger">圖片檔案過大，僅限 1mb 以下檔案</p>
                    <p class="text-danger">圖片格式錯誤，僅限 JPG、PNG 圖片</p>
                </div> -->
                <button class="btn bg-gray-400 text-black font-bold border-2 border-black rounded-lg w-3/5 py-4" @click="submit">
                    送出貼文
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      posts: {
        content: '',
        image: '',
        type: '',
        tags: '',
        user_id: '',
      },
    };
  },
  methods: {
    // 上傳圖片
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) { return; }
      this.createImage(files[0]);
    },
    // 判斷圖片限定格式、渲染圖片於指定位置
    createImage(file) {
      // 判斷格式、尺寸
      const allowImageTypes = ['image/jpg', 'image/png', 'image/jpeg'];
      const maxSize = 100000;
      if (!allowImageTypes.includes(file.type)) {
        this.$swal('error', '圖片檔案格式不符', 'error');
        return;
      }
      if (file.size > maxSize) {
        this.$swal('error', '超過尺寸', 'error');
        return;
      }

      // 渲染圖片
      const reader = new FileReader();
      const vm = this;
      reader.onload = (e) => {
        console.log(e);
        vm.posts.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    // 移除圖片
    removeImage() {
      this.posts.image = '';
    },
    // 文章送出
    async submit() {
      this.posts.user_id = '626ff26de3a2ec22b6672f05';
      this.posts.type = 'group';
      this.posts.tags = 'cat';
      try {
        await this.$store.dispatch('posts/create', { ...this.posts }).then((res) => {
          this.init();
          this.$swal.fire({
            position: 'top-end',
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 1000,
          });
          this.$router.push({ path: '/' });
        }).catch((err) => {
          console.log(err);
          this.$swal.fire(err.message, '', 'error');
        });
      } catch (err) {
        console.log(err);
        this.$swal.fire(err.message, '', 'error');
      }
    },
    init() {
      this.posts = {
        content: '',
        image: '',
        type: '',
        tags: '',
        user_id: '',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea{
  @apply w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-solid border-black border-2 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none;
}
</style>

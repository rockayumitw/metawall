<template>
  <div>
    <!--追蹤-->
    <!-- <div class="flex mb-3 w-full bg-white border-2 border-black rounded-md">
      <div class="w-[80px] mr-4">
        <img src="@/assets/images/icon-user5.png">
      </div>
      <div class="flex items-center justify-between px-4 w-full">
        <div class="">
          <span class="font-bold block">阿爾敏</span>
          123,456 人追蹤
        </div>
        <button class="btn bg-yellow py-1 px-4 font-bold">
          追蹤
        </button>
      </div>
    </div> -->
    <!--選項-->
    <div class="grid md:grid-cols-3 mb-3">
      <div class="mb-1 md:mb-3 md:mr-3 md:col-span-1">
        <select class="form-select"
          @change="getQuerys"
          v-model="select">
          <option selected value="-1">從新到舊貼文</option>
          <option value="1">從舊到最新</option>
        </select>
      </div>
      <div class="md:col-span-2">
        <div class="mb-0 md:mb-3">
          <div class="input-group relative flex flex-wrap items-stretch w-full md:mb-4">
            <input type="search" class="search-input form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              v-model="search"
            />
            <button class="btn btn-search"
              type="button"
              id="button-addon2"
              @click="getQuerys"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                class="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--有貼文-->
    <div v-if="querys.length > 0">
      <div class="border-2 border-black p-6 rounded-lg bg-white mb-5" v-for="(item, index) in querys" :key="index">
        <!-- :name="item.user.name" :image="item.user.image"-->
        <Avater
          name="test"
          :createAt="item.createAt"
          image="#"/>
        <div class="">
          <!--內文-->
          <div class="mb-5">
            <p class="mb-4" v-html="item.content"></p>
            <img :src="item.image" alt="" />
          </div>
          <!--點讚-->
          <div class="pt-3">
            <div class="flex items-center">
              <span class="material-icons-outlined text-blue-300 mr-2"
                >thumb_up</span
              >
              <span>{{item.likes}}</span>
            </div>
            <div @click="del(item)">測試刪除</div>
            <!-- <div class="flex items-center">
              <span class="material-icons-outlined text-gray-300 mr-2">thumb_up</span>
              <span class="text-gray-300 ">成為第一個案讚的朋友</span>
            </div> -->
          </div>
        </div>
        <!--留言-->
        <!-- <div class="flex items-center py-5">
          <img
            src="@/assets/images/icon-user0.png"
            class="rounded-full mr-2"
            width="50"
            alt=""
            loading="lazy"
          />
          <div class="input-group relative flex flex-wrap items-stretch w-full">
            <input
              type="search"
              class="
                form-control
                relative
                flex-auto
                min-w-0
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border-2 border-solid border-black
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
              "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              class="btn inline-block
                px-6
                py-2.5
                bg-blue-300
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                shadow-md
                hover:bg-orange hover:shadow-lg hover:text-black
                focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out
                flex
                items-center
              "
              type="button"
              id="button-addon2"
            >
              留言
            </button>
          </div>
        </div> -->
        <!--他人留言-->
        <!-- <div class="bg-gray-100 py-5 px-4 rounded-lg">
          <Avater />
          <div class="pl-16">
            <p>真的～我已經準備冬眠了</p>
          </div>
        </div> -->
      </div>
    </div>
    <!--無貼文-->
    <div class="border-2 border-black p-6 rounded-lg bg-white" v-if="querys.length == 0">
      <p class="text-gray-300 text-center">目前尚無動態，新增一則貼文吧！</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Avater from '@/components/Avater.vue';

export default {
  components: {
    Avater,
  },
  data() {
    return {
      select: '-1',
      search: '',
    };
  },
  computed: {
    ...mapGetters({
      querys: 'posts/querys',
    }),
  },
  created() {
    this.getQuerys();
  },
  mounted() {
  },
  methods: {
    // 從新道舊資料等篩選, 模糊查詢
    async getQuerys() {
      await this.$store.dispatch('posts/getQuerys', {
        sort: this.select,
        content: this.search,
      });
    },
    async del(item) {
      // posts/626429db4d9d1b67c3719bf1
      await this.$store.dispatch('posts/deleteQuery', {
        // eslint-disable-next-line no-underscore-dangle
        _id: item._id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-select{
  @apply appearance-none
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
          border-2 border-solid border-black
          transition
          ease-in-out
          m-0
        focus:text-gray-700
        focus:bg-white
        focus:border-blue-600
        focus:outline-none;
}
.btn-search {
  @apply inline-block
                border-2 border-black
                px-6
                py-2.5
                bg-blue-300
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700
                focus:shadow-lg
                focus:outline-none
                focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out
                flex
                items-center
}
.search-input{
  @apply relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal
                text-gray-700
                bg-white bg-clip-padding
                border-solid border-2 border-black
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-blue-600
                focus:outline-none
}
</style>

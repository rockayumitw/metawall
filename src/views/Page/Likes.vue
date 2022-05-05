<template>
    <div>
      <div class="border-2 border-black mb-3 text-center py-5 bg-white font-bold text-xl">
        我按讚的貼文
      </div>
      <div class="flex justify-between rounded-md border-2 border-black p-4 bg-white">
        <div class="flex">
          <img
            src="@/assets/images/icon-user0.png"
            class="rounded-full mr-4"
            width="45"
            alt=""
            loading="lazy"
          />
          <div class="">
            <span class="block text-base font-black hover:text-blue-400">邊緣小杰</span>
            <div class="flex justify-between w-full">
              <span class="inline-block text-gray-300 text-sm">發文時間：2022/1/10 12:00</span>
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="text-center px-3">
            <span class="material-icons-outlined block text-blue">thumb_up</span>
            <span class="text-sm">
              取消
            </span>
          </div>
          <div class="text-center px-3">
            <span class="material-icons-outlined block text-blue ">arrow_circle_right</span>
            <span class="text-sm">
              查看
            </span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

export default {
  components: {
  },
};
</script>

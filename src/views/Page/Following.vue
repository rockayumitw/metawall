<template>
    <div>
      <div class="border-2 border-black mb-3 text-center py-5 bg-white font-bold text-xl">
        追蹤名單
      </div>
      <div class="flex rounded-md border-2 border-black p-4 bg-white">
        <img
          src="@/assets/images/icon-user0.png"
          class="rounded-full mr-4"
          width="45"
          alt=""
          loading="lazy"
        />
        <div class="w-full">
          <span class="block text-base font-black hover:text-blue-400">邊緣小杰</span>
          <div class="flex justify-between w-full">
            <span class="inline-block text-gray-300 text-sm">追蹤時間：2022/1/10 12:00</span>
            <span class="inline-block text-black text-sm">您已追蹤 90 天！</span>
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

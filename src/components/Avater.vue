<template>
  <div class="flex items-center flex-row mr-3 mb-4">
    <img
      :src="changePhoto(image)"
      class="rounded-full"
      width="45"
      alt=""
      loading="lazy"
    />
    <div class="ml-4">
      <span class="block text-base font-black hover:text-blue-400">{{$filters.ellipsis(name, 5)}}</span>
      <small class="inline-block text-gray-300">{{$filters.dateFormat(createAt)}}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    createAt: String,
    image: String,
  },
  methods: {
    changePhoto(image) {
      if (image === '' || image == null) {
        return require('@/assets/images/icon-user_default.png');
      }
      return image;
    },
  },
};
</script>

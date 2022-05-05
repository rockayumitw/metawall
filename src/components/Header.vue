<template>
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="max-w-3md mx-auto w-full flex flex-wrap items-center justify-between px-6">
  <router-link to="/" class="flex items-center text-xl font-black text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
    METAWALL
  </router-link>
  <!-- Collapsible wrapper -->

  <!-- Right elements -->
  <div class="flex items-center relative">
  <!-- Icon -->
  <div class="dropdown relative">
    <a class="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      <img src="../assets/images/icon-user0.png" class="rounded-full" width="30" alt="" loading="lazy" />
      <span class="ml-5 text-base font-black">Member</span>
    </a>
    <ul class="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    list-none
    text-left
    border-2
    border-black
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    left-auto
    right-0
  " aria-labelledby="dropdownMenuButton2">
      <li>
        <a class="
        dropdown-item
        text-sm
        py-2 px-7
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100 text-base border-b-2 border-black
      " href="#">我的貼文牆</a>
      </li>
      <li>
        <router class="
        dropdown-item
        py-2 px-7
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100 text-base border-b-2 border-black
      " router="/user/:id/edit">修改個人資料</router>
      </li>
      <li>
        <a class="
        dropdown-item
        py-2 px-7
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100 text-base
      " href="#">登出</a>
      </li>
    </ul>
  </div>
  </div>
  <!-- Right elements -->
  </div>
</nav>
</template>

<style lang="scss" scoped>
.navbar{
  @apply relative
    w-full
    flex flex-wrap
    items-center
    justify-between
    py-4
    bg-white
    text-black
    hover:text-gray-700
    focus:text-gray-700
    shadow-lg border-b-2 border-black;
}

</style>

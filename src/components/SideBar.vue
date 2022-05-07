<template>
  <div
    class="w-full md:max-w-xs border-3 border-black p-2 md:py-8 md:px-8 bg-gray-100 rounded-full md:rounded-lg md:bg-white"
  >
    <ul class="flex justify-around items-center md:block">
      <li>
        <router-link
          to="/user/6273edda00b09a7c5d39abb4/posts"
          class="text-center flex items-center group md:block rounded-full md:rounded-lg md:w-full md:border-2 md:text-white md:border-black md:bg-blue-300 md:hover:bg-orange font-black md:mb-6 md:py-4"
        >
          <span class="hidden md:block">張貼動態</span>
          <span class="bg-blue-100 group-hover:bg-blue-300 group-hover:text-white p-3 border-2 rounded-full border-black md:hidden">
            <svg
              class="h-5 w-5 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </span>
        </router-link>
      </li>
      <li class="block md:hidden">
        <router-link to="/" class="flex items-center group">
          <span class="bg-blue-100 group-hover:bg-blue-300 group-hover:text-white p-3 border-2 rounded-full border-black"
          >
            <svg
              class="h-5 w-5 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </span>
        </router-link>
      </li>
      <li class="hidden md:flex items-center md:mb-5">
        <img
          class="rounded-full w-12"
          src="../assets/images/icon-user0.png"
          alt=""
          loading="lazy"
        />
        <span class="hidden md:block ml-5 text-base font-black">邊緣小杰</span>
      </li>
      <li class="md:mb-5">
        <router-link class="flex items-center group" to="/user/:id/following">
          <span
            class="bg-blue-100 group-hover:bg-blue-300 group-hover:text-white p-3 border-2 rounded-full border-black"
          >
            <svg
              class="h-5 w-5 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </span>
          <span
            class="hidden md:block ml-5 text-base font-black group-hover:text-blue-300"
            >追蹤名單</span
          >
        </router-link>
      </li>
      <li class="">
        <router-link class="flex items-center group" to="/user/:id/likes">
          <span
            class="bg-blue-100 group-hover:bg-blue-300 group-hover:text-white p-3 border-2 rounded-full border-black"
          >
            <svg
              class="h-5 w-5 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
              />
            </svg>
          </span>
          <span
            class="hidden md:block ml-5 text-base font-black group-hover:text-blue-300"
            >我按讚的文章</span
          >
        </router-link>
      </li>
    </ul>
  </div>
</template>

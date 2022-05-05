<template>
  <Header/>
   <loading v-model:active="loading" loader="dots"
    :can-cancel="true"
    background-color="#000"
    color='#c8a769'
    opacity='0.7'
    transition="fade"></loading>
    <div class="bg-gray-100">
      <div class="max-w-3md mx-auto grid px-3 md:grid-cols-3 pt-4 md:pt-12">
        <div class="md:col-span-2">
          <div class="md:mr-7">
            <router-view/>
          </div>
        </div>
        <div class="fixed z-10 left-0 bottom-10 w-full p-3 md:p-0 md:static">
          <SideBar/>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import SideBar from '@/components/SideBar.vue';
import Loading from 'vue-loading-overlay';
import { mapGetters } from 'vuex';

export default {
  components: {
    Header,
    SideBar,
    Loading,
  },
  computed: {
    ...mapGetters({
      loading: 'all/loading',
    }),
  },
};
</script>

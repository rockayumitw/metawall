<template>
    <div>
      <div class="border-2 border-black mb-3 text-center py-5 bg-white font-bold text-xl">修改個人資料</div>
      <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none pl-0" id="tabs-tab" role="tablist">
        <li class="nav-item pl-4" role="presentation">
          <a href="#tabs-home" class="
            nav-link
            block
            font-medium
            text-base
            leading-tight
            uppercase
            border-x-0 border-t-0 border-transparent
            px-6
            py-2 rounded-t-md
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
            active
          " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">暱稱修改</a>
        </li>
        <li class="nav-item" role="presentation">
          <a href="#tabs-profile" class="
            nav-link
            block
            font-medium text-base
            leading-tight
            uppercase
            border-x-0 border-t-0 border-transparent
            px-6
            py-2 rounded-t-md
            hover:border-transparent hover:bg-gray-100
            focus:border-transparent
          " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
            aria-controls="tabs-profile" aria-selected="false">重設密碼</a>
        </li>
      </ul>
      <div class="tab-content bg-white rounded-md mx-auto" id="tabs-tabContent">
        <!--上傳頭貼-->
        <div class="tab-pane py-8 px-24 rounded-md border-2 border-black fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
          <div class="block p-6 rounded-lg bg-white max-w-sm">
            <form>
              <div class="form-group mb-6">
                <div class="flex justify-center mb-3">
                  <div class="mb-3 w-96">
                    <label for="formFilemd" class="form-label inline-block mb-1 text-gray-700">
                      上傳頭貼
                    </label>
                    <img class="mx-auto w-24 mb-4" src="@/assets/images/icon-user_default.png">
                    <input class="form-control
                    w-full
                    px-2
                    py-1
                    text-base
                    font-normal
                    text-white
                    bg-black bg-clip-padding
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="formFilemd" type="file">
                  </div>
                </div>
                <label for="nick" class="form-label inline-block mb-1 text-black">
                  暱稱
                </label>
                <input type="nick" class="form-control
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="nick"
                  aria-describedby="nickHelp" placeholder="輸入暱稱">
              </div>
              <div class="form-group mb-6">
                <label for="exampleInputPassword2" class="form-label inline-block mb-2 text-gray-700">
                  性別
                </label>
                <div class="flex">
                  <div class="form-check mr-5">
                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-black checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer +" type="radio" name="flexRadioDefault" id="check1">
                    <label class="form-check-label inline-block text-gray-800" for="check1">
                      男
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-black checked:border-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="check2" checked>
                    <label class="form-check-label inline-block text-gray-800" for="check2">
                       女
                    </label>
                  </div>
              </div>
              </div>
              <div class="mb-6 text-center text-sm">
                <p class="text-danger">1. 圖片寬高比必需為 1:1，請重新輸入</p>
                <p class="text-danger">2. 解析度寬度至少 300像素以上，請重新輸入</p>
              </div>
              <button type="submit" class="
                text-center block w-full border-2 text-white border-black bg-blue-300 hover:bg-orange font-black rounded-lg mb-6 py-4">送出更新</button>
            </form>
          </div>
        </div>
        <!--重設密碼-->
        <div class="tab-pane py-8 px-24 rounded-md border-2 border-black fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
          <form>
              <div class="form-group mb-6">
                <label for="newPassword" class="form-label inline-block mb-1 text-black">
                  輸入新密碼
                </label>
                <input type="password" class="form-control
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="newPassword"
                  aria-describedby="nickHelp" placeholder="輸入新密碼">
              </div>
              <div class="form-group mb-6">
                <label for="again-password" class="form-label inline-block mb- text-black">
                  再次輸入
                </label>
                <input type="password" class="form-control
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
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="again-password"
                  aria-describedby="againHelp" placeholder="再次輸入">
              </div>
              <button type="submit" class="
                text-center block w-full border-2 text-white border-black bg-blue-300 hover:bg-orange font-black rounded-lg mb-6 py-4" disabled="disabled">送出更新</button>
            </form>
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

<style lang="scss" scoped>
li.nav-item {
    a {
      @apply bg-white border-2 border-b-0 border-black;
      &.active {
        @apply bg-black text-white border-black;
      }
    }
  }
</style>

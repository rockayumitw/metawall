(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-893dbfe6"],{"0517":function(e,t,s){},"31a2":function(e,t,s){"use strict";s("0517")},"37ae":function(e,t,s){"use strict";s.r(t);s("ddb0");var a=s("7a23");const o=e=>(Object(a["pushScopeId"])("data-v-af1c3fac"),e=e(),Object(a["popScopeId"])(),e),r=o(()=>Object(a["createElementVNode"])("div",{class:"border-2 border-black mb-3 text-center py-5 bg-white font-bold text-xl"}," 張貼動態 ",-1)),c={class:"flex rounded-md border-2 border-black p-8 bg-white"},l={class:"w-full"},i={class:"w-full mb-5"},n=o(()=>Object(a["createElementVNode"])("label",{for:"textarea",class:"form-label font-bold inline-block text-gray-700"}," 貼文內容 ",-1)),d={class:"flex justify-center mb-8"},b={class:"mb-5 w-full"},m=["src"],p={class:"mx-auto text-center"};function u(e,t,s,o,u,g){return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[r,Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",i,[n,Object(a["withDirectives"])(Object(a["createElementVNode"])("textarea",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.posts.content=e),class:"textarea",id:"textarea",rows:"5",placeholder:"Your message"},null,512),[[a["vModelText"],u.posts.content]])]),Object(a["createElementVNode"])("div",d,[Object(a["createElementVNode"])("div",b,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"form-control w-full border-2 border-black",type:"text",id:"formFile","onUpdate:modelValue":t[1]||(t[1]=e=>u.posts.image=e),placeholder:"請輸入圖片網址"},null,512),[[a["vModelText"],u.posts.image]]),u.posts.image?(Object(a["openBlock"])(),Object(a["createElementBlock"])("img",{key:0,src:u.posts.image,alt:""},null,8,m)):Object(a["createCommentVNode"])("",!0)])]),Object(a["createElementVNode"])("div",p,[Object(a["createElementVNode"])("button",{class:"btn bg-gray-400 text-black font-bold border-2 border-black rounded-lg w-3/5 py-4",onClick:t[2]||(t[2]=(...e)=>g.submit&&g.submit(...e))}," 送出貼文 ")])])])],64)}var g={data(){return{posts:{content:"",image:"",type:"",tags:"",user_id:""}}},methods:{onFileChange(e){const t=e.target.files||e.dataTransfer.files;t.length&&this.createImage(t[0])},createImage(e){const t=["image/jpg","image/png","image/jpeg"],s=1e5;if(!t.includes(e.type))return void this.$swal("error","圖片檔案格式不符","error");if(e.size>s)return void this.$swal("error","超過尺寸","error");const a=new FileReader,o=this;a.onload=e=>{console.log(e),o.posts.image=e.target.result},a.readAsDataURL(e)},removeImage(){this.posts.image=""},async submit(){this.posts.user_id="6273edda00b09a7c5d39abb4",this.posts.type="group",this.posts.tags="cat",await this.$store.dispatch("posts/create",{...this.posts}).then(e=>{200===e.status?(this.init(),this.$swal.fire({position:"top-end",icon:"success",title:e.message,showConfirmButton:!1,timer:1e3}),this.$router.push({path:"/"})):this.$swal.fire(e.message,"","error")}).catch(e=>{400===e.response.status?this.$swal.fire(e.response.data.message,"","error"):this.$swal.fire(e.message,"","error")})},init(){this.posts={content:"",image:"",type:"",tags:"",user_id:""}}}},h=(s("31a2"),s("d959")),f=s.n(h);const w=f()(g,[["render",u],["__scopeId","data-v-af1c3fac"]]);t["default"]=w}}]);
//# sourceMappingURL=chunk-893dbfe6.8bb81849.js.map
if(!self.define){let e,i={};const d=(d,c)=>(d=new URL(d+".js",c).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(c,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const f=e=>d(e,r),n={module:{uri:r},exports:a,require:f};i[r]=Promise.all(c.map((e=>n[e]||f(e)))).then((e=>(s(...e),a)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/03/20/hello-world/index.html",revision:"4d200c510ca2fa26bf40bc596a7ef7b5"},{url:"2022/03/21/HTML学习笔记/index.html",revision:"24520ed4a85e00a5332f5ace9cc9bdab"},{url:"2022/03/22/用nvm管理多个node/index.html",revision:"25278dd0d1090ff6260ce8744a889c61"},{url:"2022/03/23/排序之冒泡排序/index.html",revision:"9ad4ff4c77ce937329ee3edfee6f3c89"},{url:"2022/03/25/CSS笔记之基础属性、选择器/index.html",revision:"e3990ad4c04d7683830739d2e86472bf"},{url:"2022/03/31/Leetcode每日一题/index.html",revision:"d094f358ebbdf30a9fb7b0f6b125d81a"},{url:"2022/04/04/排序之快速排序/index.html",revision:"d79ded34c42658b35fbf27cbffaee7f4"},{url:"2022/04/04/深拷贝和浅拷贝/index.html",revision:"9b0434da25bee963ac1a016f2a265394"},{url:"404.html",revision:"4389d08d626b30bbc4190fb3bff813a9"},{url:"about/index.html",revision:"917ebe72e6e42e800899a27c7a331f10"},{url:"archives/2022/03/index.html",revision:"6d2eeb894b49b035726af3504b9a61bc"},{url:"archives/2022/04/index.html",revision:"5ca2afd6456cfb97e5cd77ef65e566bd"},{url:"archives/2022/index.html",revision:"bcc57b83cea118c75f05d4a426070fe0"},{url:"archives/index.html",revision:"f213db830868391fc5c6e166625f1a00"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"9165f5016db16553c1463c93dc3f5ce2"},{url:"categories/刷题/index.html",revision:"8877ac0c697843dcdefbe6130b717fef"},{url:"categories/笔记/index.html",revision:"6a09061a032665a2e59657c3d823ad83"},{url:"categories/踩坑/index.html",revision:"93d3d03d582a62f0fa9371a1af0f464d"},{url:"css/iconfont.css",revision:"cb1cbb7840b4a41ae53da1f256067fc6"},{url:"css/index.css",revision:"c368a603757ce7c219bca79e6f21a470"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/head.png",revision:"9ae6cccde9d5833975cf02429ec13e94"},{url:"index.html",revision:"8e4d94bc233b6413ed374dec5e3cae57"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"92a043ea4276d31fee754c8e76b96c67"},{url:"music/index.html",revision:"f0c4f5ef11f172a423d2654392b2f3fe"},{url:"tags/CSS/index.html",revision:"41ff639ae3b42fc30b4de7602d5c9c97"},{url:"tags/html/index.html",revision:"0e5e95a530e764b2f05f5955e24ad0d3"},{url:"tags/index.html",revision:"8dae21d1812d4e3b1b4d5607970be9b8"},{url:"tags/JavaScript/index.html",revision:"80de37203b15ec1c350de474c258ea22"},{url:"tags/node/index.html",revision:"fbbef59f89e0d998033b486b4b34c808"},{url:"tags/nvm/index.html",revision:"0d681f0e7d9102e9042a3cf0dccafcc0"},{url:"tags/刷题/index.html",revision:"a6bc7961199b62c81e9a7ff4be6edfb2"},{url:"tags/排序/index.html",revision:"abdb5f2ff8b62701d10be60de175558d"},{url:"tags/数据结构与算法/index.html",revision:"024dde00dda353b0018dca8973b82c5a"},{url:"tags/环境/index.html",revision:"dcaa2730e0f1f82954e132b85d2caf17"},{url:"tags/笔记/index.html",revision:"7091519bf051619066ec7a469ce9481c"}],{})}));
//# sourceMappingURL=service-worker.js.map

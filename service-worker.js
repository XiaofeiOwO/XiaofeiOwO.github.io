/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2007c85af8d1ad2c222f1f93f98ef677"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.033db9c6.js",
    "revision": "e47a2d221ec3e6b79cd24b408109446a"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.8de5ed19.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.fd6a517a.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
  },
  {
    "url": "assets/js/16.60f506c7.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.85e574f5.js",
    "revision": "679e09d1bee7f18523c034f6c3e7dbed"
  },
  {
    "url": "assets/js/18.e73ba14d.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.36b1b186.js",
    "revision": "f2bfca1f88c82dc6a1285f5ae5174c76"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "6f94b2501fda31e7a0153ab1ef031835"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b5c6645a8815c6baaaf987347cb23c5a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "586ccd5e5fcfb97dd936ee4651031c2f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "332ba501efeac8524a2006c1941a890a"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "a69065baa28649fae6d31f0ac9f142df"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "013ffee32f104f6bcd38511ca68f02a3"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "7972af6dfe2703889720f9f1ad8a5db2"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "17ac3731c760fcfae086746293c3979b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "38df295c2b7782b60af6b3544f8c48e9"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "8d2f949df3cc39cab8604a13f2a20beb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8cb91bd41c8e0835dd83b325d1e7d5df"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2dfb5b2dd9578535573afd03d40fb567"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "0676780880be1fb8f476c0daea4063a5"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c3ca791313cd59520a385a03b50b9412"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f8b548a67fa965c1baa4ff44e8dbf909"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "0a23ef81db9cf69a9fcaf5afa3c4f1fd"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "61eaeeb9ff5ebe187292a568bbcdec94"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "7acf996d42a8dd8e52ff9a3deba0b5c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "6ecb30ae3efabb4d18496ec9e8ee48b1"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "619b542f6ae2c6f82ca0b43de31c0184"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "60f3a317d230f1d7e8306307a01217db"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2986627e6f3ca0979b087a21607567a7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "87b9e96a370cf3d69854430934ded45e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8be6fdb709cf2c0e9d0c80b10ac0677d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

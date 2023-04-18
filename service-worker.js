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
    "revision": "849cdad2777247fd3f7b2cc91ad91036"
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
    "url": "assets/js/12.bd626a2b.js",
    "revision": "09f4af06baaf275b5ac2d6cae2b0c79d"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.ea616527.js",
    "revision": "84c18ada04d7f96157697988af640b74"
  },
  {
    "url": "assets/js/15.92bf9ad9.js",
    "revision": "556a08b194bac7e4590106cf77c70c50"
  },
  {
    "url": "assets/js/16.172ea8bd.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.85e574f5.js",
    "revision": "679e09d1bee7f18523c034f6c3e7dbed"
  },
  {
    "url": "assets/js/18.285cfffd.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
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
    "url": "assets/js/app.a4760ea8.js",
    "revision": "87d371f5a4dc738cbad49125df586245"
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
    "revision": "09556bcaff90ab9c33586b8f1437952c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f4d913386002cace0d4d4d69779639b5"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9df9020514acdd9339d2b65a06a57324"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "740497af5fa4ed933cb3ca73ee247798"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "360beecaf48618eb7750774965359629"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "f423eeb2212b105644e428e19b91b018"
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
    "revision": "d7faf32b0b829215320fdc5a6ebb16f7"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8875b79b5a69914062c4257eb881281d"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4f97006b141e5ab2775bdcb8b36bd8cc"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "dc7032054bd0054542f82b207d8c9098"
  },
  {
    "url": "tags/js/index.html",
    "revision": "100809f7a264ef2f3321c1814d0e7707"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "3307bfe271c492f772d7726d75d58e0a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c46241173b17df3628a855127f32594b"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5b3c6b610148fe2c34b7e2208fc9d151"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8414a695dab43059bb813ad6b7372b45"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "94817cb8932d8b85e379ded1510e343f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "579ced053998837562685972e7b2582b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "5ecc93712f5fa814024755f5a05ab42c"
  },
  {
    "url": "timeline/index.html",
    "revision": "a31fa37195496878ed2b249cff2d238f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "1f82edcf3bd7706f4e4bcfa28675ae50"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "846856349f2db7c6de728d064d65113c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "56577982ccd858fae2aaa2ace79bd759"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "0a0a5d80e5c3846f0ec3533452932930"
  },
  {
    "url": "生活分享/life.html",
    "revision": "969ddf8f3fc945fe383342a8499c67b5"
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

if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>s(e,c),o={module:{uri:c},exports:t,require:r};a[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"99eb7fa6d243dfdba0934f5388104bec"},{url:"/_next/static/6SQQgaQg1Py2VSaM3KC9L/_buildManifest.js",revision:"df162c1ec13f81f4e8c47a879e03c890"},{url:"/_next/static/6SQQgaQg1Py2VSaM3KC9L/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e0608ea-6a8e8aa9175108e1.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/250-289cf4e80e76491b.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/33-d9de3217a6f9fa61.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/374-63b4b427d4aa88c8.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/401-462dcd32c9049a19.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/420-4107295ee2b71e18.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/461-b38bd82aa3fc8b6d.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/571-9d630c917f2e6039.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/636-13435c1547cd2c58.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/711-2b3df8aa689b472e.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/739-2cd05ca3ae297752.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/994-cb9e842f2ea073f2.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/app/(auth)/sign-in/%5B%5B...sign-in%5D%5D/page-36b8c7c6eedcf0a8.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/app/(auth)/sign-up/%5B%5B...sign-up%5D%5D/page-d5f41c6cf6fe027c.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/app/(landing)/layout-47a1fafaf1bbaefd.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/app/(landing)/page-bf8c0f36faa9bb5d.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/app/_not-found-57a2656ec2fb9623.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/app/layout-34a86381072d929a.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/app/leaderboard/layout-f206394327fe9639.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/app/leaderboard/page-d845e2491c2adc1c.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/framework-6e06c675866dc992.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/main-app-9dc5244275e0656e.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/main-f31d5c828e60642d.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/pages/_app-2491f08b6b152f5d.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/pages/_error-81b197053b76a437.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-06ebf0642730d568.js",revision:"6SQQgaQg1Py2VSaM3KC9L"},{url:"/_next/static/css/5e8dcc458e72ad8b.css",revision:"5e8dcc458e72ad8b"},{url:"/_next/static/media/0a142df36ef8561a-s.woff2",revision:"e2c8fe80d8c8b9386f0ffc843256864b"},{url:"/_next/static/media/599a613f62e752a4-s.woff2",revision:"95cd821e8e23199b760e3df2c19ee61f"},{url:"/_next/static/media/7af297af88ee7af1-s.p.woff2",revision:"86b96c4a50ce9679092bf267b08f7efd"},{url:"/_next/static/media/ab7219548a3cba84-s.woff2",revision:"7d31b62cd1afc33d0598c31a00850d4b"},{url:"/_next/static/media/da26043fce23c63a-s.woff2",revision:"c2614e141849b473b1967bacdc00406f"},{url:"/_next/static/media/ed478f395ba0a29a-s.woff2",revision:"17d80fe3079366f75542e7e15699f745"},{url:"/banner.png",revision:"ec6368e1afc28a4f6e0fa5db290dd950"},{url:"/favicon.ico",revision:"c4bd83959382f5bc31b44f5d76649d19"},{url:"/manifest.json",revision:"96067228860cfb9b20f6c36d54a603b5"},{url:"/pwa/icons/icon-128x128.png",revision:"65aab4afd26784fe10417e3bc5c8970c"},{url:"/pwa/icons/icon-144x144.png",revision:"07a0f0e64491f45e1498f0ebe34e67b5"},{url:"/pwa/icons/icon-152x152.png",revision:"280b80d5e28a5a32ac4ac9d44c718cdb"},{url:"/pwa/icons/icon-192x192.png",revision:"b866f9b9fe67c5f14fe0e8c027effda5"},{url:"/pwa/icons/icon-36x36.png",revision:"6bb5066f440c08faac04e7ea375a1787"},{url:"/pwa/icons/icon-384x384.png",revision:"336307965ce9d9cb81d3f11fa75597eb"},{url:"/pwa/icons/icon-48x48.png",revision:"7015873e0aeb33dc7c104e7c5b1cfcac"},{url:"/pwa/icons/icon-512x512.png",revision:"0cde089582f341d380913041a9b1587c"},{url:"/pwa/icons/icon-72x72.png",revision:"0643f79b2b7763a7248c40fa61aff00a"},{url:"/pwa/icons/icon-96x96.png",revision:"35129876b533c8e3e43ad3c90d0863c4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

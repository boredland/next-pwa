import{Workbox as r}from"workbox-window";if(typeof window!="undefined"&&"serviceWorker"in navigator&&typeof caches!="undefined"){if(__PWA_START_URL__&&caches.has("start-url").then(function(t){t||caches.open("start-url").then(_=>_.put(__PWA_START_URL__,new Response("",{status:200})))}),window.workbox=new r(window.location.origin+__PWA_SW__,{scope:__PWA_SCOPE__}),__PWA_START_URL__&&window.workbox.addEventListener("installed",async({isUpdate:t})=>{if(!t){let _=await caches.open("start-url"),e=await fetch(__PWA_START_URL__),n=e;e.redirected&&(n=new Response(e.body,{status:200,statusText:"OK",headers:e.headers})),await _.put(__PWA_START_URL__,n)}}),window.workbox.addEventListener("installed",async()=>{let t=window.performance.getEntriesByType("resource").map(e=>e.name).filter(e=>e.startsWith(`${window.location.origin}/_next/data/`)&&e.endsWith(".json")),_=await caches.open("next-data");t.forEach(e=>_.add(e))}),__PWA_ENABLE_REGISTER__&&window.workbox.register(),__PWA_CACHE_ON_FRONT_END_NAV__||__PWA_START_URL__){let t=function(n){if(window.navigator.onLine){if(__PWA_CACHE_ON_FRONT_END_NAV__&&n!==__PWA_START_URL__)return caches.open("others").then(o=>o.match(n,{ignoreSearch:!0}).then(a=>a?Promise.resolve():o.add(n)));if(__PWA_START_URL__&&n===__PWA_START_URL__)return fetch(__PWA_START_URL__).then(function(o){return o.redirected?Promise.resolve():caches.open("start-url").then(a=>a.put(__PWA_START_URL__,o))})}},_=history.pushState;history.pushState=function(){_.apply(history,arguments),t(arguments[2])};let e=history.replaceState;history.replaceState=function(){e.apply(history,arguments),t(arguments[2])},window.addEventListener("online",()=>{t(window.location.pathname)})}__PWA_RELOAD_ON_ONLINE__&&window.addEventListener("online",()=>{location.reload()})}
//# sourceMappingURL=register.mjs.map
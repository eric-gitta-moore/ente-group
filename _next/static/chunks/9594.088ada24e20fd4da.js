!function(){var e,t,r,n,o,s,i={99594:function(e,t,r){"use strict";let n=()=>"function"==typeof importScripts;r(93542).env.desktopAppVersion;let o="logs",s=e=>{let t={logLine:e,timestamp:Date.now()};try{let e=i();e.length>1e3&&e.slice(e.length-1e3),e.push(t),localStorage.setItem(o,JSON.stringify({logs:e}))}catch(e){console.error("Failed to persist log",e),e instanceof Error&&"QuotaExceededError"===e.name&&localStorage.removeItem(o)}},i=()=>{let e=localStorage.getItem("logs");if(!e)return[];let t=JSON.parse(e);return t&&"object"==typeof t&&"logs"in t&&Array.isArray(t.logs)?t.logs:(console.error("Unexpected log entries obtained from local storage",t),[])};var a=r(90758);let c=(0,a.Ud)(globalThis),u=e=>{let t=globalThis.electron;t?t.logToDisk(e):n()?l(e):s(e)},l=e=>{c.logToDisk(e).catch(t=>{console.error("Failed to log a message from worker",t,"\nThe message was",e)})},f=(e,t)=>{let r;if(!t)return e;if(t instanceof Error){r="".concat(t.name,": ").concat(t.message);let e=t.stack;e&&(r=e.startsWith(r)?r.concat(e.slice(r.length)):[r,e].join("\n"))}else r=String(t);return"".concat(e,": ").concat(r)};var p={error:(e,t)=>{let r="[error] ".concat(f(e,t));console.error(r),u(r)},debug:e=>{}};let h=e=>{if(null===e)throw Error("Required value was null");if(void 0===e)throw Error("Required value was undefined");return e},g={REQUEST_CANCELLED:"request canceled"};class d{queueUpRequest(e){let t={status:!1},r={exec:()=>{t.status=!0}};return{promise:new Promise((n,o)=>{this.requestQueue.push({request:e,successCallback:n,failureCallback:o,isCanceled:t,canceller:r}),this.processQueueIfNeeded()}),canceller:r}}async processQueueIfNeeded(){if(!this.isProcessingRequest){for(this.isProcessingRequest=!0;this.requestQueue.length>0;){let e=h(this.requestQueue.shift()),t=null;if(e.isCanceled.status)e.failureCallback(Error(g.REQUEST_CANCELLED));else try{t=await e.request(e.canceller),e.successCallback(t)}catch(t){e.failureCallback(t)}}this.isProcessingRequest=!1}}constructor(){this.requestQueue=[],this.isProcessingRequest=!1}}var m=r(42998);class y{async exec(e,t,r){this.ffmpeg.isLoaded()||await this.ffmpeg.load();let n=this.ffmpegTaskQueue.queueUpRequest(()=>v(this.ffmpeg,e,r,t));return await n.promise}constructor(){this.ffmpegTaskQueue=new d,this.ffmpeg=(0,m.createFFmpeg)({corePath:"/js/ffmpeg/ffmpeg-core.js",mt:!1})}}(0,a.Jj)(y,self);let v=async(e,t,r,n)=>{let o=b(),s=b()+(r?"."+r:""),i=w(t,o,s),a=new Uint8Array(await n.arrayBuffer());try{let t=Date.now();e.FS("writeFile",o,a),await e.run(...i);let r=e.FS("readFile",s),n=Date.now()-t;return p.debug(()=>"[wasm] ffmpeg ".concat(i.join(" ")," (").concat(n," ms)")),r}finally{try{e.FS("unlink",o)}catch(e){p.error("Failed to remove input ".concat(o),e)}try{e.FS("unlink",s)}catch(e){p.error("Failed to remove output ".concat(s),e)}}},b=()=>{let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="";for(let r=0;r<10;r++)t+=h(e[Math.floor(Math.random()*e.length)]);return t},w=(e,t,r)=>e.map(e=>{if("FFMPEG"!=e)return"INPUT"==e?t:"OUTPUT"==e?r:e}).filter(e=>void 0!==e)}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}},n=!0;try{i[e](r,r.exports,c),n=!1}finally{n&&delete a[e]}return r.exports}c.m=i,c.x=function(){var e=c.O(void 0,[1661],function(){return c(99594)});return c.O(e)},e=[],c.O=function(t,r,n,o){if(r){o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o];return}for(var i=1/0,s=0;s<e.length;s++){for(var r=e[s][0],n=e[s][1],o=e[s][2],a=!0,u=0;u<r.length;u++)i>=o&&Object.keys(c.O).every(function(e){return c.O[e](r[u])})?r.splice(u--,1):(a=!1,o<i&&(i=o));if(a){e.splice(s--,1);var l=n();void 0!==l&&(t=l)}}return t},c.d=function(e,t){for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.f={},c.e=function(e){return Promise.all(Object.keys(c.f).reduce(function(t,r){return c.f[r](e,t),t},[]))},c.u=function(e){return"static/chunks/"+e+".5b3cdd640ce4030b.js"},c.miniCssF=function(e){},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.tt=function(){return void 0===t&&(t={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(t=trustedTypes.createPolicy("nextjs#bundler",t))),t},c.tu=function(e){return c.tt().createScriptURL(e)},c.p="/_next/",r={9594:1},c.f.i=function(e,t){r[e]||importScripts(c.tu(c.p+c.u(e)))},o=(n=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push.bind(n),n.push=function(e){var t=e[0],n=e[1],s=e[2];for(var i in n)c.o(n,i)&&(c.m[i]=n[i]);for(s&&s(c);t.length;)r[t.pop()]=1;o(e)},s=c.x,c.x=function(){return c.e(1661).then(s)},_N_E=c.x()}();
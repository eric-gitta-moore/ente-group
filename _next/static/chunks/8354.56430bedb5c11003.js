!function(){var e,t,a,r,n,c,i={11165:function(e,t,a){"use strict";let r=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),c=Symbol("Comlink.releaseProxy"),i=Symbol("Comlink.finalizer"),s=Symbol("Comlink.thrown"),o=e=>"object"==typeof e&&null!==e||"function"==typeof e,y=new Map([["proxy",{canHandle:e=>o(e)&&e[r],serialize(e){let{port1:t,port2:a}=new MessageChannel;return u(e,t),[a,[a]]},deserialize:e=>(e.start(),function e(t,a=[],r=function(){}){let i=!1,s=new Proxy(r,{get(r,n){if(l(i),n===c)return()=>{d&&d.unregister(s),_(t),i=!0};if("then"===n){if(0===a.length)return{then:()=>s};let e=E(t,{type:"GET",path:a.map(e=>e.toString())}).then(g);return e.then.bind(e)}return e(t,[...a,n])},set(e,r,n){l(i);let[c,s]=m(n);return E(t,{type:"SET",path:[...a,r].map(e=>e.toString()),value:c},s).then(g)},apply(r,c,s){l(i);let o=a[a.length-1];if(o===n)return E(t,{type:"ENDPOINT"}).then(g);if("bind"===o)return e(t,a.slice(0,-1));let[y,u]=f(s);return E(t,{type:"APPLY",path:a.map(e=>e.toString()),argumentList:y},u).then(g)},construct(e,r){l(i);let[n,c]=f(r);return E(t,{type:"CONSTRUCT",path:a.map(e=>e.toString()),argumentList:n},c).then(g)}});return function(e,t){let a=(h.get(t)||0)+1;h.set(t,a),d&&d.register(e,t,e)}(s,t),s}(e,[],void 0))}],["throw",{canHandle:e=>o(e)&&s in e,serialize:({value:e})=>[e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]],deserialize(e){if(e.isError)throw Object.assign(Error(e.value.message),e.value);throw e.value}}]]);function u(e,t=globalThis,a=["*"]){t.addEventListener("message",function n(c){let o;if(!c||!c.data)return;if(!function(e,t){for(let a of e)if(t===a||"*"===a||a instanceof RegExp&&a.test(t))return!0;return!1}(a,c.origin)){console.warn(`Invalid origin '${c.origin}' for comlink proxy`);return}let{id:y,type:l,path:_}=Object.assign({path:[]},c.data),h=(c.data.argumentList||[]).map(g);try{var d,f;let t=_.slice(0,-1).reduce((e,t)=>e[t],e),a=_.reduce((e,t)=>e[t],e);switch(l){case"GET":o=a;break;case"SET":t[_.slice(-1)[0]]=g(c.data.value),o=!0;break;case"APPLY":o=a.apply(t,h);break;case"CONSTRUCT":d=new a(...h),o=Object.assign(d,{[r]:!0});break;case"ENDPOINT":{let{port1:t,port2:a}=new MessageChannel;u(e,a),f=[t],w.set(t,f),o=t}break;case"RELEASE":o=void 0;break;default:return}}catch(e){o={value:e,[s]:0}}Promise.resolve(o).catch(e=>({value:e,[s]:0})).then(a=>{let[r,c]=m(a);t.postMessage(Object.assign(Object.assign({},r),{id:y}),c),"RELEASE"===l&&(t.removeEventListener("message",n),p(t),i in e&&"function"==typeof e[i]&&e[i]())}).catch(e=>{let[a,r]=m({value:TypeError("Unserializable return value"),[s]:0});t.postMessage(Object.assign(Object.assign({},a),{id:y}),r)})}),t.start&&t.start()}function p(e){"MessagePort"===e.constructor.name&&e.close()}function l(e){if(e)throw Error("Proxy has been released and is not useable")}function _(e){return E(e,{type:"RELEASE"}).then(()=>{p(e)})}let h=new WeakMap,d="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{let t=(h.get(e)||0)-1;h.set(e,t),0===t&&_(e)});function f(e){var t;let a=e.map(m);return[a.map(e=>e[0]),(t=a.map(e=>e[1]),Array.prototype.concat.apply([],t))]}let w=new WeakMap;function m(e){for(let[t,a]of y)if(a.canHandle(e)){let[r,n]=a.serialize(e);return[{type:"HANDLER",name:t,value:r},n]}return[{type:"RAW",value:e},w.get(e)||[]]}function g(e){switch(e.type){case"HANDLER":return y.get(e.name).deserialize(e.value);case"RAW":return e.value}}function E(e,t,a){return new Promise(r=>{let n=[,,,,].fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",function t(a){a.data&&a.data.id&&a.data.id===n&&(e.removeEventListener("message",t),r(a.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:n},t),a)})}let b=e=>{let t=new Uint8Array(e.reduce((e,t)=>e+t.length,0));return e.reduce((e,a)=>(t.set(a,e),e+a.length),0),t},S={PROCESSING_FAILED:"processing failed"};var T=a(88505),x=a.n(T);let v=async e=>(await x().ready,x().to_base64(e,x().base64_variants.ORIGINAL)),A=async e=>(await x().ready,x().from_base64(e,x().base64_variants.ORIGINAL)),I=async e=>(await x().ready,x().to_base64(e,x().base64_variants.URLSAFE));async function k(e){return await x().ready,x().from_string(e)}async function N(e){return await x().ready,x().to_string(await A(e))}async function M(e){return await x().ready,x().to_hex(await A(e))}async function O(e){return await x().ready,await v(x().from_hex(e))}let L=async e=>"string"==typeof e?A(e):e,B=async(e,t)=>{await x().ready;let a=x().randombytes_buf(x().crypto_secretbox_NONCEBYTES),r=x().crypto_secretbox_easy(await L(e),a,await L(t));return{encryptedData:await v(r),nonce:await v(a)}},C=async(e,t)=>{await x().ready;let a=await L(t),r=x().crypto_secretstream_xchacha20poly1305_init_push(a),[n,c]=[r.state,r.header];return{encryptedData:x().crypto_secretstream_xchacha20poly1305_push(n,await L(e),null,x().crypto_secretstream_xchacha20poly1305_TAG_FINAL),decryptionHeader:c}},R=async(e,t)=>{let{encryptedData:a,decryptionHeader:r}=await C(e,t);return{encryptedData:await v(a),decryptionHeader:await v(r)}},G=async e=>{await x().ready;let t=x().crypto_secretstream_xchacha20poly1305_keygen(),a=x().crypto_secretstream_xchacha20poly1305_init_push(t),[r,n]=[a.state,a.header],c=0,i=x().crypto_secretstream_xchacha20poly1305_TAG_MESSAGE,s=[];for(;i!==x().crypto_secretstream_xchacha20poly1305_TAG_FINAL;){let t=4194304;c+4194304>=e.length&&(t=e.length-c,i=x().crypto_secretstream_xchacha20poly1305_TAG_FINAL);let a=e.slice(c,c+t);c+=t;let n=x().crypto_secretstream_xchacha20poly1305_push(r,a,null,i);s.push(n)}return{key:await v(t),file:{encryptedData:b(s),decryptionHeader:await v(n)}}};async function P(){await x().ready;let e=x().crypto_secretstream_xchacha20poly1305_keygen(),t=x().crypto_secretstream_xchacha20poly1305_init_push(e),[a,r]=[t.state,t.header];return{key:await v(e),decryptionHeader:await v(r),pushState:a}}async function F(e,t,a){await x().ready;let r=a?x().crypto_secretstream_xchacha20poly1305_TAG_FINAL:x().crypto_secretstream_xchacha20poly1305_TAG_MESSAGE;return x().crypto_secretstream_xchacha20poly1305_push(t,e,null,r)}let D=async(e,t)=>{let{encryptedData:a,nonce:r}=e;return await x().ready,x().crypto_secretbox_open_easy(await L(a),await L(r),await L(t))},j=(e,t)=>D(e,t).then(v),H=async(e,t)=>{let{encryptedData:a,decryptionHeader:r}=e;await x().ready;let n=x().crypto_secretstream_xchacha20poly1305_init_pull(await L(r),await L(t));return x().crypto_secretstream_xchacha20poly1305_pull(n,await L(a),null).message},K=async(e,t,a)=>{await x().ready;let r=x().crypto_secretstream_xchacha20poly1305_init_pull(t,await A(a)),n=4194304+x().crypto_secretstream_xchacha20poly1305_ABYTES,c=0,i=[],s=x().crypto_secretstream_xchacha20poly1305_TAG_MESSAGE;for(;s!==x().crypto_secretstream_xchacha20poly1305_TAG_FINAL;){let t=n;c+t>e.length&&(t=e.length-c);let a=e.slice(c,c+t),o=x().crypto_secretstream_xchacha20poly1305_pull(r,a);if(!o.message)throw Error(S.PROCESSING_FAILED);i.push(o.message),s=o.tag,c+=t}return b(i)};async function U(e,t){return await x().ready,{pullState:x().crypto_secretstream_xchacha20poly1305_init_pull(e,t),decryptionChunkSize:4194304+x().crypto_secretstream_xchacha20poly1305_ABYTES,tag:x().crypto_secretstream_xchacha20poly1305_TAG_MESSAGE}}async function Y(e,t){await x().ready;let a=x().crypto_secretstream_xchacha20poly1305_pull(t,e);if(!a.message)throw Error(S.PROCESSING_FAILED);let r=a.tag;return{decryptedData:a.message,newTag:r}}async function z(e,t){await x().ready;let a=await B(e,t);return{encryptedData:a.encryptedData,key:t,nonce:a.nonce}}async function V(e){await x().ready;let t=x().crypto_secretbox_keygen();return await z(e,await v(t))}async function J(e,t){let a=await v(await k(e));return await z(a,t)}async function W(e,t,a){return j({encryptedData:e,nonce:t},a)}async function X(e,t,a){await x().ready;let r=await D({encryptedData:e,nonce:t},a);return x().to_string(r)}async function $(){return await x().ready,x().crypto_generichash_init(null,x().crypto_generichash_BYTES_MAX)}async function q(e,t){await x().ready,x().crypto_generichash_update(e,t)}async function Q(e){return await x().ready,v(x().crypto_generichash_final(e,x().crypto_generichash_BYTES_MAX))}async function Z(e,t,a,r){return await x().ready,await v(x().crypto_pwhash(x().crypto_secretbox_KEYBYTES,await k(e),await A(t),a,r,x().crypto_pwhash_ALG_ARGON2ID13))}async function ee(e,t){await x().ready;let a=x().crypto_pwhash_MEMLIMIT_MIN,r=x().crypto_pwhash_OPSLIMIT_SENSITIVE,n=x().crypto_pwhash_MEMLIMIT_SENSITIVE;for(;n>a;)try{return{key:await Z(e,t,r,n),opsLimit:r,memLimit:n}}catch(e){r*=2,n/=2}throw Error("Failed to derive key: Memory limit exceeded")}async function et(e,t){return await x().ready,{key:await v(x().crypto_pwhash(x().crypto_secretbox_KEYBYTES,await k(e),await A(t),x().crypto_pwhash_OPSLIMIT_INTERACTIVE,x().crypto_pwhash_MEMLIMIT_INTERACTIVE,x().crypto_pwhash_ALG_ARGON2ID13)),opsLimit:x().crypto_pwhash_OPSLIMIT_INTERACTIVE,memLimit:x().crypto_pwhash_MEMLIMIT_INTERACTIVE}}async function ea(){return await x().ready,await v(x().crypto_kdf_keygen())}async function er(){return await x().ready,await v(x().randombytes_buf(x().crypto_pwhash_SALTBYTES))}let en=async()=>{await x().ready;let e=x().crypto_box_keypair();return{publicKey:await v(e.publicKey),privateKey:await v(e.privateKey)}};async function ec(e,t,a){return await x().ready,await v(x().crypto_box_seal_open(await A(e),await A(t),await A(a)))}async function ei(e,t){return await x().ready,await v(x().crypto_box_seal(await A(e),await A(t)))}async function es(e,t,a,r){return await x().ready,await v(x().crypto_kdf_derive_from_key(t,a,r,await A(e)))}let eo=async(e,t)=>{let{encryptedData:a,decryptionHeader:r}=await C(e,t);return{encryptedData:a,decryptionHeader:await v(r)}},ey=(e,t)=>R(new TextEncoder().encode(JSON.stringify(e)),t),eu=async e=>{let{encryptedData:t,decryptionHeader:a}=await ey(e.jsonValue,e.keyB64);return{encryptedDataB64:t,decryptionHeaderB64:a}},ep=(e,t)=>H(e,t).then(v),el=async(e,t)=>JSON.parse(new TextDecoder().decode(await H(e,t))),e_=async e=>el({encryptedData:e.encryptedDataB64,decryptionHeader:e.decryptionHeaderB64},e.keyB64);class eh{async decryptFile(e,t,a){return K(e,t,a)}async encryptFile(e){return G(e)}async encryptFileChunk(e,t,a){return F(e,t,a)}async initChunkEncryption(){return P()}async initChunkDecryption(e,t){return U(e,t)}async decryptFileChunk(e,t){return Y(e,t)}async initChunkHashing(){return $()}async hashFileChunk(e,t){return q(e,t)}async completeChunkHashing(e){return Q(e)}async deriveKey(e,t,a,r){return Z(e,t,a,r)}async deriveSensitiveKey(e,t){return ee(e,t)}async deriveInteractiveKey(e,t){return et(e,t)}async decryptB64(e,t,a){return W(e,t,a)}async decryptToUTF8(e,t,a){return X(e,t,a)}async encryptToB64(e,t){return z(e,t)}async generateKeyAndEncryptToB64(e){return V(e)}async encryptUTF8(e,t){return J(e,t)}async generateEncryptionKey(){return ea()}async generateSaltToDeriveKey(){return er()}async generateKeyPair(){return en()}async boxSealOpen(e,t,a){return ec(e,t,a)}async boxSeal(e,t){return ei(e,t)}async generateSubKey(e,t,a,r){return es(e,t,a,r)}async fromUTF8(e){return k(e)}async toUTF8(e){return N(e)}async toB64(e){return v(e)}async toB64URLSafe(e){return I(e)}async fromB64(e){return A(e)}async toHex(e){return M(e)}async fromHex(e){return O(e)}constructor(){this.encryptBoxB64=B,this.encryptThumbnail=eo,this._encryptBlobB64=R,this.encryptMetadataJSON_New=ey,this.encryptMetadataJSON=eu,this.decryptBox=D,this.decryptBoxB64=j,this.decryptBlob=H,this.decryptBlobB64=ep,this.decryptThumbnail=H,this.decryptMetadataJSON_New=el,this.decryptMetadataJSON=e_}}u(eh)},24031:function(){},68484:function(){}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var a=s[e]={exports:{}},r=!0;try{i[e].call(a.exports,a,a.exports,o),r=!1}finally{r&&delete s[e]}return a.exports}o.m=i,o.x=function(){var e=o.O(void 0,[2479,8934,7518,8742],function(){return o(11165)});return o.O(e)},e=[],o.O=function(t,a,r,n){if(a){n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,r,n];return}for(var i=1/0,c=0;c<e.length;c++){for(var a=e[c][0],r=e[c][1],n=e[c][2],s=!0,y=0;y<a.length;y++)i>=n&&Object.keys(o.O).every(function(e){return o.O[e](a[y])})?a.splice(y--,1):(s=!1,n<i&&(i=n));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce(function(t,a){return o.f[a](e,t),t},[]))},o.u=function(e){return"static/chunks/"+(({2479:"27263495",8934:"e893f787"})[e]||e)+"."+({2479:"49ac711006241c06",7518:"fbe1453a695955f1",8742:"cc6d661f3d9979ee",8934:"a38e02114c19c9f5"})[e]+".js"},o.miniCssF=function(e){},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.tt=function(){return void 0===t&&(t={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(t=trustedTypes.createPolicy("nextjs#bundler",t))),t},o.tu=function(e){return o.tt().createScriptURL(e)},o.p="/_next/",a={8354:1},o.f.i=function(e,t){a[e]||importScripts(o.tu(o.p+o.u(e)))},n=(r=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push.bind(r),r.push=function(e){var t=e[0],r=e[1],c=e[2];for(var i in r)o.o(r,i)&&(o.m[i]=r[i]);for(c&&c(o);t.length;)a[t.pop()]=1;n(e)},c=o.x,o.x=function(){return Promise.all([2479,8934,7518,8742].map(o.e,o)).then(c)},_N_E=o.x()}();
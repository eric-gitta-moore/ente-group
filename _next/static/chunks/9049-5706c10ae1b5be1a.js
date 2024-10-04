"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9049],{50193:function(e,t,r){r.d(t,{$Q:function(){return d},IG:function(){return l},O3:function(){return s},XD:function(){return y},gd:function(){return p},zx:function(){return u}});var n=r(10934),a=r(68351),i=r(27949),o=r(56810),c=r(80613);let s=async e=>{try{return(await o.Z.get(await (0,a.QH)("/users/srp/attributes"),{email:e})).data.attributes}catch(e){return n.ZP.error("failed to get SRP attributes",e),null}},u=async(e,t)=>{try{return(await o.Z.post(await (0,a.QH)("/users/srp/setup"),t,void 0,{"X-Auth-Token":e})).data}catch(e){throw n.ZP.error("failed to post SRP attributes",e),e}},y=async(e,t)=>{try{return(await o.Z.post(await (0,a.QH)("/users/srp/complete"),t,void 0,{"X-Auth-Token":e})).data}catch(e){throw n.ZP.error("failed to complete SRP setup",e),e}},l=async(e,t)=>{try{return(await o.Z.post(await (0,a.QH)("/users/srp/create-session"),{srpUserID:e,srpA:t})).data}catch(e){throw n.ZP.error("createSRPSession failed",e),e}},p=async(e,t,r)=>{try{return(await o.Z.post(await (0,a.QH)("/users/srp/verify-session"),{sessionID:e,srpUserID:t,srpM1:r},void 0)).data}catch(e){if(n.ZP.error("verifySRPSession failed",e),e instanceof i.MS&&e.httpStatusCode===c.WE.Unauthorized)throw Error(i.sH.INCORRECT_PASSWORD);throw e}},d=async(e,t)=>{try{return(await o.Z.post(await (0,a.QH)("/users/srp/update"),t,void 0,{"X-Auth-Token":e})).data}catch(e){throw n.ZP.error("updateSRPAndKeys failed",e),e}}},49354:function(e,t,r){r.d(t,{L:function(){return u}});var n=r(52903),a=r(39596),i=r(91430),o=r(42541),c=r(24991),s=r(2784);let u=e=>{let{password:t}=e,r=(0,s.useMemo)(()=>(0,a.rp)(t),[t]);return(0,n.tZ)(i.A0,{mt:"8px",mb:"4px",children:(0,n.tZ)(o.Z,{variant:"small",sx:e=>({color:"weak"==r?e.colors.danger.A700:"moderate"==r?e.colors.warning.A500:e.colors.accent.A500}),textAlign:"left",flex:1,children:t?(0,c.t)("passphrase_strength",{context:r}):""})})}},34360:function(e,t,r){var n,a;r.d(t,{q:function(){return n}}),(a=n||(n={})).ROOT="/",a.CHANGE_EMAIL="/change-email",a.CHANGE_PASSWORD="/change-password",a.CREDENTIALS="/credentials",a.GENERATE="/generate",a.LOGIN="/login",a.RECOVER="/recover",a.SIGNUP="/signup",a.TWO_FACTOR_SETUP="/two-factor/setup",a.TWO_FACTOR_VERIFY="/two-factor/verify",a.TWO_FACTOR_RECOVER="/two-factor/recover",a.VERIFY="/verify",a.SHARED_ALBUMS="/shared-albums"},19764:function(e,t,r){r.d(t,{Bs:function(){return d},a4:function(){return w},pL:function(){return f},u1:function(){return h}});var n=r(22969),a=r(10934),i=r(38045),o=r(29650),c=r(50232),s=r(6364),u=r(50193),y=r(39596),l=r(79644).Buffer;let p=c.SRP.params["4096"],d=async e=>{let{srpSalt:t,srpUserID:r,srpVerifier:n,loginSubKey:i}=e;try{let e=await h(t,r,i),c=(0,y.HC)(e.computeA());a.ZP.debug(()=>"srp a: ".concat(c));let s=(0,o.LP)(),{setupID:l,srpB:p}=await (0,u.zx)(s,{srpA:c,srpUserID:r,srpSalt:t,srpVerifier:n});e.setB((0,y.GS)(p));let d=(0,y.HC)(e.computeM1()),{srpM2:w}=await (0,u.XD)(s,{srpM1:d,setupID:l});e.checkM2((0,y.GS)(w))}catch(e){throw a.ZP.error("Failed to configure SRP",e),e}},w=async e=>{let t=await (0,n.Lb)(),r=await t.generateSaltToDeriveKey(),i=(0,s.Z)(),o=c.SRP.computeVerifier(p,(0,y.GS)(r),l.from(i),(0,y.GS)(e)),u={srpUserID:i,srpSalt:r,srpVerifier:(0,y.HC)(o),loginSubKey:e};return a.ZP.debug(()=>"SRP setup attributes generated: ".concat(JSON.stringify(u))),u},f=async(e,t)=>{try{let r=await (0,i.uA)(t),n=await h(e.srpSalt,e.srpUserID,r),o=n.computeA(),{srpB:c,sessionID:s}=await (0,u.IG)(e.srpUserID,(0,y.HC)(o));n.setB((0,y.GS)(c));let l=n.computeM1();a.ZP.debug(()=>"srp m1: ".concat((0,y.HC)(l)));let{srpM2:p,...d}=await (0,u.gd)(s,e.srpUserID,(0,y.HC)(l));return a.ZP.debug(()=>"srp verify session successful,srpM2: ".concat(p)),n.checkM2((0,y.GS)(p)),a.ZP.debug(()=>"srp server verify successful"),d}catch(e){throw a.ZP.error("srp verify failed",e),e}},h=async(e,t,r)=>new Promise((n,a)=>{c.SRP.genKey(function(i,o){try{if(i&&a(i),!o)throw Error("secret1 gen failed");let s=new c.SrpClient(p,(0,y.GS)(e),l.from(t),(0,y.GS)(r),o,!1);n(s)}catch(e){a(e)}})})},39596:function(e,t,r){r.d(t,{DZ:function(){return u},GS:function(){return c},HC:function(){return o},rp:function(){return s}});var n=r(16152),a=r.n(n),i=r(79644).Buffer;let o=e=>e.toString("base64"),c=e=>i.from(e,"base64");function s(e){if(!e)return"weak";let t=a()(e);return t.score<2?"weak":t.score<3?"moderate":"strong"}let u=e=>"weak"==s(e)},46170:function(e,t,r){r.d(t,{j:function(){return o}});var n=r(22969),a=r(38045),i=r(19764);async function o(e){let t=await (0,n.Lb)(),r=await t.generateEncryptionKey(),o=await t.generateEncryptionKey(),c=await t.generateSaltToDeriveKey(),s=await t.deriveSensitiveKey(e,c),u=await t.encryptToB64(r,s.key),y=await t.encryptToB64(r,o),l=await t.encryptToB64(o,r),p=await t.generateKeyPair(),d=await t.encryptToB64(p.privateKey,r),w=await (0,a.uA)(s.key),f=await (0,i.a4)(w);return{keyAttributes:{kekSalt:c,encryptedKey:u.encryptedData,keyDecryptionNonce:u.nonce,publicKey:p.publicKey,encryptedSecretKey:d.encryptedData,secretKeyDecryptionNonce:d.nonce,opsLimit:s.opsLimit,memLimit:s.memLimit,masterKeyEncryptedWithRecoveryKey:y.encryptedData,masterKeyDecryptionNonce:y.nonce,recoveryKeyEncryptedWithMasterKey:l.encryptedData,recoveryKeyDecryptionNonce:l.nonce},masterKey:r,srpSetupAttributes:f}}},22063:function(e,t,r){var n=r(52903),a=r(91430),i=r(37862);r(2784),t.Z=e=>{let{sx:t,style:r,...o}=e;return(0,n.BX)(n.HY,{children:[(0,n.tZ)(i.Z,{}),(0,n.tZ)(a.wx,{style:{flexDirection:"row",...r},sx:{mt:3,...t},...o,children:o.children})]})}},63462:function(e,t,r){var n=r(52903),a=r(42541);r(2784),t.Z=e=>{let{sx:t,...r}=e;return(0,n.tZ)(a.Z,{variant:"h2",sx:{mb:8,...t},...r,children:r.children})}},39382:function(e,t,r){var n=r(52903),a=r(73216),i=r(16331),o=r(36673),c=r(53091);r(2784),t.Z=e=>{let{showPassword:t,handleClickShowPassword:r,handleMouseDownPassword:s}=e;return(0,n.tZ)(o.Z,{position:"end",children:(0,n.tZ)(c.Z,{tabIndex:-1,color:"secondary","aria-label":"toggle password visibility",onClick:r,onMouseDown:s,edge:"end",children:t?(0,n.tZ)(i.Z,{}):(0,n.tZ)(a.Z,{})})})}},83446:function(e,t,r){var n=r(52903),a=r(72595);r(2784),t.Z=e=>{let{children:t,sx:r,color:i,...o}=e;return(0,n.tZ)(a.Z,{component:"button",sx:{color:"text.base",textDecoration:"underline rgba(255, 255, 255, 0.4)",paddingBottom:.5,"&:hover":{color:"".concat(i,".main"),textDecoration:"underline ",textDecorationColor:"".concat(i,".main")},...r},...o,children:t})}},43643:function(e,t,r){var n=r(52903),a=r(53819),i=r(10222),o=r(7706);r(2784),t.Z=e=>{let{loading:t,buttonText:r,disabled:c,success:s,sx:u,...y}=e;return(0,n.tZ)(i.Z,{size:"large",variant:"contained",color:"accent",type:"submit",disabled:c||t||s,sx:{my:4,...t?{"&.Mui-disabled":{backgroundColor:e=>e.colors.accent.A500,color:e=>e.colors.text.base}}:{},...u},...y,children:t?(0,n.tZ)(o.Z,{size:20}):s?(0,n.tZ)(a.Z,{sx:{fontSize:20}}):r})}},38045:function(e,t,r){r.d(t,{CP:function(){return d},OT:function(){return w},PN:function(){return y},iv:function(){return l},uA:function(){return p},yr:function(){return f}});var n=r(30433),a=r(22969),i=r(10934),o=r(25683),c=r(29650),s=r(50267),u=r(1799);async function y(e,t){let r=await (0,a.Lb)(),n=(0,o.Yu)(o.Pd.USER),i=null,{encryptedToken:c}=n;if(c&&c.length>0){let a=await r.decryptB64(e.encryptedSecretKey,e.secretKeyDecryptionNonce,t),s=await r.boxSealOpen(c,e.publicKey,a),u=await r.fromB64(s);i=await r.toB64URLSafe(u),await (0,o.CA)({...n,token:i,encryptedToken:null})}}async function l(e,t,r){let n=await (0,a.Lb)(),i=await n.generateSaltToDeriveKey(),c=await n.deriveInteractiveKey(e,i),s=await n.encryptToB64(r,c.key),u=Object.assign(t,{kekSalt:i,encryptedKey:s.encryptedData,keyDecryptionNonce:s.nonce,opsLimit:c.opsLimit,memLimit:c.memLimit});return(0,o.a_)(o.Pd.KEY_ATTRIBUTES,u),u}let p=async e=>{let t=await (0,a.Lb)(),r=await t.generateSubKey(e,32,1,"loginctx"),n=await t.fromB64(r);return await t.toB64(n.slice(0,16))},d=async(e,t,r)=>{let n=await (0,a.Lb)(),i=await n.generateKeyAndEncryptToB64(t);(0,s.Dt)(e,i);let o=globalThis.electron;o&&!r&&e===s.Qm.ENCRYPTION_KEY&&o.saveMasterKeyB64(t)};async function w(e){let t=await (0,a.Lb)(),r=await f(),n=await t.fromHex(r);return await t.encryptToB64(e,n)}let f=async()=>{try{let e;let t=await (0,a.Lb)(),{recoveryKeyEncryptedWithMasterKey:r,recoveryKeyDecryptionNonce:n}=(0,o.Yu)(o.Pd.KEY_ATTRIBUTES),i=await (0,u.G)();return e=r?await t.decryptB64(r,n,i):await h(),e=await t.toHex(e)}catch(e){throw console.log(e),i.ZP.error("getRecoveryKey failed",e),e}};async function h(){let e=await (0,u.G)(),t=(0,o.Yu)(o.Pd.KEY_ATTRIBUTES),r=await (0,a.Lb)(),i=await r.generateEncryptionKey(),s=await r.encryptToB64(e,i),y=await r.encryptToB64(i,e),l={masterKeyEncryptedWithRecoveryKey:s.encryptedData,masterKeyDecryptionNonce:s.nonce,recoveryKeyEncryptedWithMasterKey:y.encryptedData,recoveryKeyDecryptionNonce:y.nonce};await (0,n.Jl)((0,c.LP)(),l);let p=Object.assign(t,l);return(0,o.a_)(o.Pd.KEY_ATTRIBUTES,p),i}}}]);
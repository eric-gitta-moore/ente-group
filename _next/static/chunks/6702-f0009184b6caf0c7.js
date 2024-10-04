"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6702],{50193:function(t,e,a){a.d(e,{$Q:function(){return p},IG:function(){return d},O3:function(){return s},XD:function(){return u},gd:function(){return y},zx:function(){return l}});var r=a(10934),n=a(68351),o=a(27949),i=a(56810),c=a(80613);let s=async t=>{try{return(await i.Z.get(await (0,n.QH)("/users/srp/attributes"),{email:t})).data.attributes}catch(t){return r.ZP.error("failed to get SRP attributes",t),null}},l=async(t,e)=>{try{return(await i.Z.post(await (0,n.QH)("/users/srp/setup"),e,void 0,{"X-Auth-Token":t})).data}catch(t){throw r.ZP.error("failed to post SRP attributes",t),t}},u=async(t,e)=>{try{return(await i.Z.post(await (0,n.QH)("/users/srp/complete"),e,void 0,{"X-Auth-Token":t})).data}catch(t){throw r.ZP.error("failed to complete SRP setup",t),t}},d=async(t,e)=>{try{return(await i.Z.post(await (0,n.QH)("/users/srp/create-session"),{srpUserID:t,srpA:e})).data}catch(t){throw r.ZP.error("createSRPSession failed",t),t}},y=async(t,e,a)=>{try{return(await i.Z.post(await (0,n.QH)("/users/srp/verify-session"),{sessionID:t,srpUserID:e,srpM1:a},void 0)).data}catch(t){if(r.ZP.error("verifySRPSession failed",t),t instanceof o.MS&&t.httpStatusCode===c.WE.Unauthorized)throw Error(o.sH.INCORRECT_PASSWORD);throw t}},p=async(t,e)=>{try{return(await i.Z.post(await (0,n.QH)("/users/srp/update"),e,void 0,{"X-Auth-Token":t})).data}catch(t){throw r.ZP.error("updateSRPAndKeys failed",t),t}}},16645:function(t,e,a){a.d(e,{px:function(){return R},yr:function(){return P},$G:function(){return m},MF:function(){return E},Yn:function(){return T},lQ:function(){return x}});var r=a(60373),n=a(22969),o=a(84836),i=a(58034),c=a(10934),s=a(68351),l=a(93275),u=a(30195);let d=u.z.object({}).passthrough(),y=u.z.object({id:u.z.number(),keyAttributes:d.nullish().transform(l.Y),encryptedToken:u.z.string().nullish().transform(l.Y)});var p=a(8033),w=a(38045),f=a(27949),h=a(56810),b=a(25683),Z=a(29650),v=a(12595);let T=t=>{let e=new URLSearchParams({clientPackage:r.SL,passkeySessionID:t,redirect:"".concat(window.location.origin,"/passkeys/finish"),...r.nI?{}:{recover:"".concat(window.location.origin,"/passkeys/recover")}});return"".concat((0,s.z2)(),"/passkeys/verify?").concat(e.toString())},m=t=>{let{passkeySessionID:e,url:a}=t;sessionStorage.setItem("inflightPasskeySessionID",e),globalThis.electron?window.open(a):window.location.href=a},P=async()=>{if(!await g()){let t=await (0,w.yr)(),e=await (0,o.Ty)(),a=await (0,n.Lb)(),r=await (0,o.hK)(e,await a.fromHex(t));await k(e,r.encryptedData,r.nonce)}let t=new URLSearchParams({token:await S()});window.open("".concat((0,s.z2)(),"/passkeys?").concat(t.toString()))},g=async()=>{try{let t=(0,Z.LP)(),e=await h.Z.get(await (0,s.QH)("/users/two-factor/recovery-status"),{},{"X-Auth-Token":t});if(void 0===e.data)throw Error(f.sH.REQUEST_FAILED);return e.data.isPasskeyRecoveryEnabled}catch(t){throw c.ZP.error("failed to get passkey recovery status",t),t}},k=async(t,e,a)=>{try{let r=(0,Z.LP)(),n=await h.Z.post(await (0,s.QH)("/users/two-factor/passkeys/configure-recovery"),{secret:t,userSecretCipher:e,userSecretNonce:a},void 0,{"X-Auth-Token":r});if(void 0===n.data)throw Error(f.sH.REQUEST_FAILED)}catch(t){throw c.ZP.error("failed to configure passkey recovery",t),t}},S=async()=>{let t=(0,Z.LP)();return(await h.Z.get(await (0,s.QH)("/users/accounts-token"),void 0,{"X-Auth-Token":t})).data.accountsToken},E="Passkey session has expired",R=async t=>{let e=await (0,s.QH)("/users/two-factor/passkeys/get-token"),a=new URLSearchParams({sessionID:t}),r=await fetch("".concat(e,"?").concat(a.toString()),{headers:(0,i.Vl)()});if(!r.ok){if(404==r.status||410==r.status)throw Error(E);if(400==r.status)return;throw new i.Bb(r)}return y.parse(await r.json())},x=async t=>{var e;let{id:a,encryptedToken:r,keyAttributes:n}=t;return await (0,b.CA)({...(0,b.Yu)(b.Pd.USER),encryptedToken:r,id:a}),(0,b.a_)(b.Pd.KEY_ATTRIBUTES,(0,p.zx)(n)),null!==(e=(0,v.pr)())&&void 0!==e?e:"/credentials"}},39382:function(t,e,a){var r=a(52903),n=a(73216),o=a(16331),i=a(36673),c=a(53091);a(2784),e.Z=t=>{let{showPassword:e,handleClickShowPassword:a,handleMouseDownPassword:s}=t;return(0,r.tZ)(i.Z,{position:"end",children:(0,r.tZ)(c.Z,{tabIndex:-1,color:"secondary","aria-label":"toggle password visibility",onClick:a,onMouseDown:s,edge:"end",children:e?(0,r.tZ)(o.Z,{}):(0,r.tZ)(n.Z,{})})})}},83446:function(t,e,a){var r=a(52903),n=a(72595);a(2784),e.Z=t=>{let{children:e,sx:a,color:o,...i}=t;return(0,r.tZ)(n.Z,{component:"button",sx:{color:"text.base",textDecoration:"underline rgba(255, 255, 255, 0.4)",paddingBottom:.5,"&:hover":{color:"".concat(o,".main"),textDecoration:"underline ",textDecorationColor:"".concat(o,".main")},...a},...i,children:e})}},50006:function(t,e,a){a.d(e,{Z:function(){return w}});var r=a(52903),n=a(91430),o=a(39382),i=a(94848),c=a(10222),s=a(53793),l=a(31708),u=a(24991),d=a(2784),y=a(48601),p=a(43643);function w(t){var e;let{submitButtonProps:a}=t,{sx:w,...f}=null!=a?a:{},[h,b]=(0,d.useState)(!1),[Z,v]=(0,d.useState)(!1),T=async(e,a)=>{let{setFieldError:r,resetForm:n}=a;b(!0),await t.callback(e.inputValue,t=>r("inputValue",t),n),b(!1)},m=()=>{v(!Z)},P=t=>{t.preventDefault()},g=(0,d.useMemo)(()=>{switch(t.fieldType){case"text":case"password":return y.Ry().shape({inputValue:y.Z_().required((0,u.t)("REQUIRED"))});case"email":return y.Ry().shape({inputValue:y.Z_().email((0,u.t)("EMAIL_ERROR")).required((0,u.t)("REQUIRED"))})}},[t.fieldType]);return(0,r.tZ)(l.J9,{initialValues:{inputValue:null!==(e=t.initialValue)&&void 0!==e?e:""},onSubmit:T,validationSchema:g,validateOnChange:!1,validateOnBlur:!1,children:e=>{let{values:a,errors:l,handleChange:d,handleSubmit:y}=e;return(0,r.BX)("form",{noValidate:!0,onSubmit:y,children:[t.hiddenPreInput,(0,r.tZ)(s.Z,{hiddenLabel:t.hiddenLabel,variant:"filled",fullWidth:!0,type:Z?"text":t.fieldType,id:t.fieldType,name:t.fieldType,...t.hiddenLabel?{placeholder:t.placeholder}:t.realPlaceholder?{placeholder:t.realPlaceholder,label:t.realLabel}:{label:t.placeholder},value:a.inputValue,onChange:d("inputValue"),error:!!l.inputValue,helperText:l.inputValue,disabled:h,autoFocus:!t.disableAutoFocus,autoComplete:t.autoComplete,InputProps:{autoComplete:t.disableAutoComplete||"password"===t.fieldType?"off":"on",endAdornment:"password"===t.fieldType&&(0,r.tZ)(o.Z,{showPassword:Z,handleClickShowPassword:m,handleMouseDownPassword:P})}}),(0,r.tZ)(i.Z,{sx:{position:"relative",top:l.inputValue?"-22px":"0",float:"right",padding:"0 8px"},children:t.caption}),t.hiddenPostInput,(0,r.BX)(n.A0,{justifyContent:"flex-end",flexWrap:t.blockButton?"wrap-reverse":"nowrap",children:[t.secondaryButtonAction&&(0,r.tZ)(c.Z,{onClick:t.secondaryButtonAction,size:"large",color:"secondary",sx:{"&&&":{mt:t.blockButton?.5:2,mb:t.blockButton?0:4,mr:t.blockButton?0:1,...w}},...f,children:(0,u.t)("cancel")}),(0,r.tZ)(p.Z,{sx:{"&&&":{mt:2,...w}},buttonText:t.buttonText,loading:h,...f})]})]})}})}},43643:function(t,e,a){var r=a(52903),n=a(53819),o=a(10222),i=a(7706);a(2784),e.Z=t=>{let{loading:e,buttonText:a,disabled:c,success:s,sx:l,...u}=t;return(0,r.tZ)(o.Z,{size:"large",variant:"contained",color:"accent",type:"submit",disabled:c||e||s,sx:{my:4,...e?{"&.Mui-disabled":{backgroundColor:t=>t.colors.accent.A500,color:t=>t.colors.text.base}}:{},...l},...u,children:e?(0,r.tZ)(i.Z,{size:20}):s?(0,r.tZ)(n.Z,{sx:{fontSize:20}}):a})}},38045:function(t,e,a){a.d(e,{CP:function(){return p},OT:function(){return w},PN:function(){return u},iv:function(){return d},uA:function(){return y},yr:function(){return f}});var r=a(30433),n=a(22969),o=a(10934),i=a(25683),c=a(29650),s=a(50267),l=a(1799);async function u(t,e){let a=await (0,n.Lb)(),r=(0,i.Yu)(i.Pd.USER),o=null,{encryptedToken:c}=r;if(c&&c.length>0){let n=await a.decryptB64(t.encryptedSecretKey,t.secretKeyDecryptionNonce,e),s=await a.boxSealOpen(c,t.publicKey,n),l=await a.fromB64(s);o=await a.toB64URLSafe(l),await (0,i.CA)({...r,token:o,encryptedToken:null})}}async function d(t,e,a){let r=await (0,n.Lb)(),o=await r.generateSaltToDeriveKey(),c=await r.deriveInteractiveKey(t,o),s=await r.encryptToB64(a,c.key),l=Object.assign(e,{kekSalt:o,encryptedKey:s.encryptedData,keyDecryptionNonce:s.nonce,opsLimit:c.opsLimit,memLimit:c.memLimit});return(0,i.a_)(i.Pd.KEY_ATTRIBUTES,l),l}let y=async t=>{let e=await (0,n.Lb)(),a=await e.generateSubKey(t,32,1,"loginctx"),r=await e.fromB64(a);return await e.toB64(r.slice(0,16))},p=async(t,e,a)=>{let r=await (0,n.Lb)(),o=await r.generateKeyAndEncryptToB64(e);(0,s.Dt)(t,o);let i=globalThis.electron;i&&!a&&t===s.Qm.ENCRYPTION_KEY&&i.saveMasterKeyB64(e)};async function w(t){let e=await (0,n.Lb)(),a=await f(),r=await e.fromHex(a);return await e.encryptToB64(t,r)}let f=async()=>{try{let t;let e=await (0,n.Lb)(),{recoveryKeyEncryptedWithMasterKey:a,recoveryKeyDecryptionNonce:r}=(0,i.Yu)(i.Pd.KEY_ATTRIBUTES),o=await (0,l.G)();return t=a?await e.decryptB64(a,r,o):await h(),t=await e.toHex(t)}catch(t){throw console.log(t),o.ZP.error("getRecoveryKey failed",t),t}};async function h(){let t=await (0,l.G)(),e=(0,i.Yu)(i.Pd.KEY_ATTRIBUTES),a=await (0,n.Lb)(),o=await a.generateEncryptionKey(),s=await a.encryptToB64(t,o),u=await a.encryptToB64(o,t),d={masterKeyEncryptedWithRecoveryKey:s.encryptedData,masterKeyDecryptionNonce:s.nonce,recoveryKeyEncryptedWithMasterKey:u.encryptedData,recoveryKeyDecryptionNonce:u.nonce};await (0,r.Jl)((0,c.LP)(),d);let y=Object.assign(e,d);return(0,i.a_)(i.Pd.KEY_ATTRIBUTES,y),o}}}]);
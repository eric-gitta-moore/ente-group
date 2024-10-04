(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6203],{84856:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/two-factor/setup",function(){return n(56310)}])},56310:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return D}});var r,a,i=n(52903),o=n(30433),c=n(94167),l=n(93727),u=n(42541),s=n(24991),d=n(83446);function Z(t){var e;let{twoFactorSecret:n,changeToQRMode:r}=t;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(u.Z,{children:(0,s.t)("TWO_FACTOR_MANUAL_CODE_INSTRUCTION")}),(0,i.tZ)(l.Z,{code:null!==(e=null==n?void 0:n.secretCode)&&void 0!==e?e:"",my:2}),(0,i.tZ)(d.Z,{onClick:r,children:(0,s.t)("SCAN_QR_CODE")})]})}var p=n(98996),h=n(91430),f=n(31572);let w=(0,f.ZP)("img")(t=>{let{theme:e}=t;return"\n    height: 200px;\n    width: 200px;\n    margin: ".concat(e.spacing(2),";\n")}),y=(0,f.ZP)(h.wx)(t=>{let{theme:e}=t;return"\n    width:200px;\n    aspect-ratio:1;\n    border: 1px solid ".concat(e.palette.grey.A200,";\n    margin: ").concat(e.spacing(2),";\n    ")});function T(t){let{twoFactorSecret:e,changeToManualMode:n}=t;return(0,i.BX)(i.HY,{children:[(0,i.tZ)(u.Z,{children:(0,s.t)("TWO_FACTOR_QR_INSTRUCTION")}),e?(0,i.tZ)(w,{src:"data:image/png;base64,".concat(null==e?void 0:e.qrCode)}):(0,i.tZ)(y,{children:(0,i.tZ)(p.Z,{})}),(0,i.tZ)(d.Z,{onClick:n,children:(0,s.t)("ENTER_CODE_MANUALLY")})]})}var m=n(2784);function _(t){let{twoFactorSecret:e}=t,[n,r]=(0,m.useState)(a.QR_CODE);return(0,i.tZ)(h.wx,{sx:{mb:3},children:n===a.QR_CODE?(0,i.tZ)(T,{twoFactorSecret:e,changeToManualMode:()=>r(a.MANUAL_CODE)}):(0,i.tZ)(Z,{twoFactorSecret:e,changeToQRMode:()=>r(a.QR_CODE)})})}var b=n(10934),x=n(8033),E=n(38045),g=n(25683),C=n(58694),v=n(58488),O=n(3718),R=n(5632),A=n(12595);(r=a||(a={}))[r.QR_CODE=0]="QR_CODE",r[r.MANUAL_CODE=1]="MANUAL_CODE";var N=()=>{let[t,e]=(0,m.useState)(),n=(0,R.useRouter)();(0,m.useEffect)(()=>{t||(async()=>{try{let t=await (0,o.ks)();e(t)}catch(t){b.ZP.error("failed to get two factor setup code",t)}})()},[]);let r=async(e,r)=>{let a=await (0,E.OT)((0,x.zx)(t).secretCode);await (0,o.er)(e,a),await r(),await (0,g.CA)({...(0,g.Yu)(g.Pd.USER),isTwoFactorEnabled:!0}),n.push(A.Pm)};return(0,i.tZ)(h.wx,{children:(0,i.tZ)(O.Z,{children:(0,i.tZ)(C.Z,{children:(0,i.BX)(h.wx,{sx:{p:3},children:[(0,i.tZ)(v.Z,{mb:4,children:(0,i.tZ)(u.Z,{variant:"h2",children:(0,s.t)("TWO_FACTOR")})}),(0,i.tZ)(_,{twoFactorSecret:t}),(0,i.tZ)(c.Z,{onSubmit:r,buttonText:(0,s.t)("enable")}),(0,i.tZ)(d.Z,{sx:{mt:2},onClick:n.back,children:(0,s.t)("GO_BACK")})]})})})})},S=n(55005),D=()=>(0,i.tZ)(N,{appContext:(0,S.useAppContext)()})},94167:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(52903),a=n(42541),i=n(2784),o=t=>(0,r.tZ)(a.Z,{variant:"mini",sx:{color:t=>t.colors.danger.A700},...t,children:t.children}),c=n(13413),l=n(91430),u=n(43643),s=n(58488),d=n(31708),Z=n(24991),p=n(44607);function h(t){let[e,n]=(0,i.useState)(!1),h=(0,i.useRef)(null),[f,w]=(0,i.useState)(!1),y=async()=>{n(!1),w(!0),await (0,c.Dc)(1e3)},T=async(e,r)=>{let{otp:a}=e,{setFieldError:i,resetForm:o}=r;try{n(!0),await t.onSubmit(a,y)}catch(e){o();for(let t=0;t<6;t++){var c;null===(c=h.current)||void 0===c||c.focusPrevInput()}let t=e instanceof Error?e.message:"";i("otp","".concat((0,Z.t)("UNKNOWN_ERROR")," ").concat(t))}n(!1)},m=(t,e)=>n=>{t(n),6===n.length&&e(n)};return(0,r.tZ)(d.J9,{initialValues:{otp:""},validateOnChange:!1,validateOnBlur:!1,onSubmit:T,children:n=>{let{values:i,errors:c,handleChange:d,handleSubmit:w,submitForm:y}=n;return(0,r.tZ)(l.wx,{children:(0,r.BX)("form",{noValidate:!0,onSubmit:w,children:[(0,r.tZ)(a.Z,{mb:2,variant:"small",color:"text.muted",children:(0,Z.t)("ENTER_TWO_FACTOR_OTP")}),(0,r.BX)(s.Z,{my:2,children:[(0,r.tZ)(p.Z,{ref:h,shouldAutoFocus:!0,value:i.otp,onChange:m(d("otp"),y),numInputs:6,separator:"-",isInputNum:!0,className:"otp-input"}),c.otp&&(0,r.tZ)(l.Tn,{sx:{mt:1},children:(0,r.tZ)(o,{children:(0,Z.t)("INCORRECT_CODE")})})]}),(0,r.tZ)(u.Z,{buttonText:t.buttonText,loading:e,success:f,disabled:i.otp.length<6})]})})}})}},92549:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(52903),a=n(40947),i=n(53819),o=n(35999),c=n(53091),l=n(24991),u=n(2784);function s(t){let{code:e,color:n,size:s}=t,[d,Z]=(0,u.useState)(!1);return(0,r.tZ)(o.Z,{arrow:!0,open:d,title:(0,l.t)("COPIED"),PopperProps:{sx:{zIndex:2e3}},children:(0,r.tZ)(c.Z,{onClick:()=>{navigator.clipboard.writeText(e),Z(!0),setTimeout(()=>Z(!1),1e3)},color:n,children:d?(0,r.tZ)(i.Z,{fontSize:null!=s?s:"small"}):(0,r.tZ)(a.Z,{fontSize:null!=s?s:"small"})})})}},93727:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var r=n(73235),a=n(52903),i=n(98996),o=n(31572);n(2784);var c=n(92549),l=n(91430),u=n(58488);function s(){let t=(0,r._)(["\n    position: relative;\n    background: ",";\n    border-radius: ","px;\n    min-height: 80px;\n"]);return s=function(){return t},t}function d(){let t=(0,r._)(["\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    margin-top: ",";\n"]);return d=function(){return t},t}function Z(){let t=(0,r._)(["\n    padding: 16px 36px 16px 16px;\n    border-radius: ","px;\n"]);return Z=function(){return t},t}let p=(0,o.ZP)(l.Tn)(s(),t=>{let{theme:e}=t;return e.colors.accent.A700},t=>{let{theme:e}=t;return e.shape.borderRadius}),h=(0,o.ZP)(u.Z)(d(),t=>{let{theme:e}=t;return e.spacing(1)}),f=(0,o.ZP)("div")(Z(),t=>{let{theme:e}=t;return e.shape.borderRadius});function w(){let t=(0,r._)(["\n    word-break: break-word;\n    min-width: 30%;\n    text-align: left;\n"]);return w=function(){return t},t}function y(t){let{code:e,...n}=t;return e?(0,a.BX)(p,{...n,children:[(0,a.tZ)(f,{children:(0,a.tZ)(T,{children:e})}),(0,a.tZ)(h,{children:(0,a.tZ)(c.Z,{code:e})})]}):(0,a.tZ)(p,{children:(0,a.tZ)(i.Z,{})})}let T=(0,o.ZP)("div")(w())},83446:function(t,e,n){"use strict";var r=n(52903),a=n(72595);n(2784),e.Z=t=>{let{children:e,sx:n,color:i,...o}=t;return(0,r.tZ)(a.Z,{component:"button",sx:{color:"text.base",textDecoration:"underline rgba(255, 255, 255, 0.4)",paddingBottom:.5,"&:hover":{color:"".concat(i,".main"),textDecoration:"underline ",textDecorationColor:"".concat(i,".main")},...n},...o,children:e})}},43643:function(t,e,n){"use strict";var r=n(52903),a=n(53819),i=n(10222),o=n(7706);n(2784),e.Z=t=>{let{loading:e,buttonText:n,disabled:c,success:l,sx:u,...s}=t;return(0,r.tZ)(i.Z,{size:"large",variant:"contained",color:"accent",type:"submit",disabled:c||e||l,sx:{my:4,...e?{"&.Mui-disabled":{backgroundColor:t=>t.colors.accent.A500,color:t=>t.colors.text.base}}:{},...u},...s,children:e?(0,r.tZ)(o.Z,{size:20}):l?(0,r.tZ)(a.Z,{sx:{fontSize:20}}):n})}},38045:function(t,e,n){"use strict";n.d(e,{CP:function(){return p},OT:function(){return h},PN:function(){return s},iv:function(){return d},uA:function(){return Z},yr:function(){return f}});var r=n(30433),a=n(22969),i=n(10934),o=n(25683),c=n(29650),l=n(50267),u=n(1799);async function s(t,e){let n=await (0,a.Lb)(),r=(0,o.Yu)(o.Pd.USER),i=null,{encryptedToken:c}=r;if(c&&c.length>0){let a=await n.decryptB64(t.encryptedSecretKey,t.secretKeyDecryptionNonce,e),l=await n.boxSealOpen(c,t.publicKey,a),u=await n.fromB64(l);i=await n.toB64URLSafe(u),await (0,o.CA)({...r,token:i,encryptedToken:null})}}async function d(t,e,n){let r=await (0,a.Lb)(),i=await r.generateSaltToDeriveKey(),c=await r.deriveInteractiveKey(t,i),l=await r.encryptToB64(n,c.key),u=Object.assign(e,{kekSalt:i,encryptedKey:l.encryptedData,keyDecryptionNonce:l.nonce,opsLimit:c.opsLimit,memLimit:c.memLimit});return(0,o.a_)(o.Pd.KEY_ATTRIBUTES,u),u}let Z=async t=>{let e=await (0,a.Lb)(),n=await e.generateSubKey(t,32,1,"loginctx"),r=await e.fromB64(n);return await e.toB64(r.slice(0,16))},p=async(t,e,n)=>{let r=await (0,a.Lb)(),i=await r.generateKeyAndEncryptToB64(e);(0,l.Dt)(t,i);let o=globalThis.electron;o&&!n&&t===l.Qm.ENCRYPTION_KEY&&o.saveMasterKeyB64(e)};async function h(t){let e=await (0,a.Lb)(),n=await f(),r=await e.fromHex(n);return await e.encryptToB64(t,r)}let f=async()=>{try{let t;let e=await (0,a.Lb)(),{recoveryKeyEncryptedWithMasterKey:n,recoveryKeyDecryptionNonce:r}=(0,o.Yu)(o.Pd.KEY_ATTRIBUTES),i=await (0,u.G)();return t=n?await e.decryptB64(n,r,i):await w(),t=await e.toHex(t)}catch(t){throw console.log(t),i.ZP.error("getRecoveryKey failed",t),t}};async function w(){let t=await (0,u.G)(),e=(0,o.Yu)(o.Pd.KEY_ATTRIBUTES),n=await (0,a.Lb)(),i=await n.generateEncryptionKey(),l=await n.encryptToB64(t,i),s=await n.encryptToB64(i,t),d={masterKeyEncryptedWithRecoveryKey:l.encryptedData,masterKeyDecryptionNonce:l.nonce,recoveryKeyEncryptedWithMasterKey:s.encryptedData,recoveryKeyDecryptionNonce:s.nonce};await (0,r.Jl)((0,c.LP)(),d);let Z=Object.assign(e,d);return(0,o.a_)(o.Pd.KEY_ATTRIBUTES,Z),i}}},function(t){t.O(0,[1708,5999,4647,2888,9774,179],function(){return t(t.s=84856)}),_N_E=t.O()}]);
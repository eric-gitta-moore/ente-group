(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6420],{7097:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/passkeys/finish",function(){return n(21231)}])},21231:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var s=n(52903),r=n(84836),o=n(10934),i=n(93275),a=n(91430),u=n(98996),c=n(25683),E=n(5632),f=n(2784),_=n(34360),p=n(12595),R=()=>{let e=(0,E.useRouter)();return(0,f.useEffect)(()=>{let t=new URLSearchParams(window.location.search),n=t.get("passkeySessionID"),s=t.get("response");n&&s&&l(n,s).then(t=>{e.push(t)})},[]),(0,s.tZ)(a.wx,{children:(0,s.tZ)(u.Z,{})})};let l=async(e,t)=>{var n;let s=(0,i.Y)(sessionStorage.getItem("inflightPasskeySessionID"));if(!s||e!=s)return o.ZP.info("Ignoring redirect for unexpected passkeySessionID ".concat(e)),"/";sessionStorage.removeItem("inflightPasskeySessionID");let{keyAttributes:a,encryptedToken:u,token:E,id:f}=JSON.parse(await (0,r.gz)(t));return await (0,c.CA)({...(0,c.Yu)(c.Pd.USER),token:E,encryptedToken:u,id:f}),(0,c.a_)(c.Pd.KEY_ATTRIBUTES,a),null!==(n=(0,p.pr)())&&void 0!==n?n:_.q.CREDENTIALS};var S=n(55005),w=()=>(0,s.tZ)(R,{appContext:(0,S.useAppContext)()})},34360:function(e,t,n){"use strict";var s,r;n.d(t,{q:function(){return s}}),(r=s||(s={})).ROOT="/",r.CHANGE_EMAIL="/change-email",r.CHANGE_PASSWORD="/change-password",r.CREDENTIALS="/credentials",r.GENERATE="/generate",r.LOGIN="/login",r.RECOVER="/recover",r.SIGNUP="/signup",r.TWO_FACTOR_SETUP="/two-factor/setup",r.TWO_FACTOR_VERIFY="/two-factor/verify",r.TWO_FACTOR_RECOVER="/two-factor/recover",r.VERIFY="/verify",r.SHARED_ALBUMS="/shared-albums"}},function(e){e.O(0,[2888,9774,179],function(){return e(e.s=7097)}),_N_E=e.O()}]);
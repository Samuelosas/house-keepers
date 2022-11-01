(this["webpackJsonphouser-keepers"]=this["webpackJsonphouser-keepers"]||[]).push([[0],{328:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"string","name":"_newAgencyName","type":"string"},{"internalType":"string","name":"_newAgency_info","type":"string"},{"internalType":"string","name":"_newAgency_image","type":"string"},{"internalType":"bool","name":"_sellable","type":"bool"}],"name":"buyAgency","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getAgencies","outputs":[{"components":[{"internalType":"address","name":"agency_address","type":"address"},{"internalType":"string","name":"agency_name","type":"string"},{"internalType":"string","name":"location","type":"string"},{"internalType":"string","name":"agency_info","type":"string"},{"internalType":"string","name":"agency_image","type":"string"},{"internalType":"uint256","name":"hire_fee","type":"uint256"},{"internalType":"bool","name":"sellable","type":"bool"},{"internalType":"uint256","name":"agency_worth","type":"uint256"},{"internalType":"uint256","name":"customers","type":"uint256"}],"internalType":"struct housekeepers.Agency[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserTransactions","outputs":[{"components":[{"internalType":"string","name":"agency_name","type":"string"},{"internalType":"uint256","name":"date_hired","type":"uint256"},{"internalType":"uint256","name":"hire_fee","type":"uint256"}],"internalType":"struct housekeepers.Transaction[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"hireAgency","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"_agency_name","type":"string"},{"internalType":"string","name":"_location","type":"string"},{"internalType":"string","name":"_agency_info","type":"string"},{"internalType":"string","name":"_agency_image","type":"string"},{"internalType":"bool","name":"_sellable","type":"bool"},{"internalType":"uint256","name":"_agency_worth","type":"uint256"},{"internalType":"uint256","name":"_hire_fee","type":"uint256"}],"name":"registerAgency","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},329:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},338:function(e,t,n){},353:function(e,t){},359:function(e,t){},376:function(e,t){},378:function(e,t){},394:function(e,t){},454:function(e,t){},456:function(e,t){},489:function(e,t){},491:function(e,t){},492:function(e,t){},498:function(e,t){},511:function(e,t){},523:function(e,t){},526:function(e,t){},530:function(e,t){},540:function(e,t){},596:function(e,t){},652:function(e,t){},704:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(44),c=n.n(r),s=n(21),i=n(41),o=n(13),u=(n(337),n(338),n(330)),l=n(709),p=n(710),b=n(325),y=n(1),d=function(e){var t=e.balance;return Object(y.jsxs)("div",{children:["cUSD Balance:"," ",Object(y.jsxs)("span",{className:"fw-bold h5 btn btn-secondary",children:[" ",t]})]})},j=n(183),m=n(89),h=n(711),f=function(e){var t=e.register,n=e.msg,r=e.action,c=e.show,l=e.setShow,p=Object(a.useState)(!1),b=Object(o.a)(p,2),d=b[0],f=b[1],g=Object(a.useState)(""),O=Object(o.a)(g,2),x=O[0],v=O[1],w=Object(a.useState)(""),T=Object(o.a)(w,2),A=T[0],S=T[1],_=Object(a.useState)(""),C=Object(o.a)(_,2),k=C[0],N=C[1],B=Object(a.useState)(""),E=Object(o.a)(B,2),I=E[0],F=E[1],D=Object(a.useState)(),G=Object(o.a)(D,2),M=G[0],U=G[1],L=Object(a.useState)(),q=Object(o.a)(L,2),H=q[0],W=q[1],P=Object(a.useState)(!1),R=Object(o.a)(P,2),J=R[0],Y=R[1],z=function(){var e=Object(i.a)(Object(s.a)().mark((function e(n){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,Y(!0),e.next=5,t(x,k,I,A,d,H,M);case 5:Y(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message),Y(!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)("div",{className:"my-3",children:[Object(y.jsx)(j.a,{variant:"success",onClick:function(){return l(!0)},children:"Register Agency +"}),Object(y.jsxs)(m.a,{show:c,onHide:function(){return l(!1)},children:[Object(y.jsx)(m.a.Header,{closeButton:!0,children:Object(y.jsx)(m.a.Title,{children:"Register Your Agency"})}),r&&Object(y.jsx)(u.a,{variant:"warning",children:n}),Object(y.jsx)(m.a.Body,{children:Object(y.jsxs)(h.a,{onSubmit:z,children:[Object(y.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicName",children:Object(y.jsx)(h.a.Control,{type:"text",placeholder:"Enter Agency Name",required:!0,value:x,onChange:function(e){return v(e.target.value)}})}),Object(y.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicPoster",children:Object(y.jsx)(h.a.Control,{type:"text",placeholder:"Enter Agency Cover Image URL.",required:!0,value:A,onChange:function(e){return S(e.target.value)}})}),Object(y.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicLocation",children:Object(y.jsx)(h.a.Control,{type:"text",placeholder:"Enter Location",required:!0,value:k,onChange:function(e){return N(e.target.value)}})}),Object(y.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicAbout",children:Object(y.jsx)(h.a.Control,{as:"textarea",rows:3,placeholder:"Enter What your agency will do.",required:!0,value:I,onChange:function(e){return F(e.target.value)}})}),Object(y.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicHire",children:Object(y.jsx)(h.a.Control,{type:"number",placeholder:"Enter Hire Fee",required:!0,value:M,onChange:function(e){return U(e.target.value)}})}),d&&Object(y.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicWorth",children:Object(y.jsx)(h.a.Control,{type:"number",placeholder:"Agency's Selling Price",value:H,onChange:function(e){return W(e.target.value)}})}),Object(y.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(y.jsx)(h.a.Check,{type:"checkbox",label:"Is this agency sellable?",value:d,onChange:function(){return f(!d)}})}),Object(y.jsx)(j.a,{variant:"primary",type:"submit",disabled:J,children:"Register"})]})}),Object(y.jsx)(m.a.Footer,{})]})]})},g=n(712),O=function(e){var t=e.name,n=e.about,r=e.imgUrl,c=e.worth,l=e.isSellable,p=e.buyAgency,b=e.index,d=Object(a.useState)(!1),f=Object(o.a)(d,2),g=f[0],O=f[1],x=Object(a.useState)(t),v=Object(o.a)(x,2),w=v[0],T=v[1],A=Object(a.useState)(r),S=Object(o.a)(A,2),_=S[0],C=S[1],k=Object(a.useState)(n),N=Object(o.a)(k,2),B=N[0],E=N[1],I=Object(a.useState)(l),F=Object(o.a)(I,2),D=F[0],G=F[1],M=Object(a.useState)(!1),U=Object(o.a)(M,2),L=U[0],q=U[1],H=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),q(!0),e.next=4,p(b,w,B,_,D);case 4:q(!1),O(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsx)(y.Fragment,{children:l&&Object(y.jsxs)("div",{children:[Object(y.jsxs)(j.a,{variant:"secondary",size:"sm",onClick:function(){return O(!0)},children:["Buy Agency ",c,"cUSD"]}),Object(y.jsxs)(m.a,{show:g,onHide:function(){return O(!1)},children:[Object(y.jsx)(m.a.Header,{closeButton:!0,children:Object(y.jsx)(m.a.Title,{children:"Buy this Agency"})}),Object(y.jsx)(m.a.Body,{children:Object(y.jsxs)(h.a,{onSubmit:H,children:[Object(y.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicName",children:[Object(y.jsx)(h.a.Label,{children:"Enter preferred Agency Name"}),Object(y.jsx)(h.a.Control,{type:"text",placeholder:"Enter preferred Agency Name",required:!0,value:w,onChange:function(e){return T(e.target.value)}})]}),Object(y.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicPoster",children:[Object(y.jsx)(h.a.Label,{children:"Enter preferred Agency Cover Image URL."}),Object(y.jsx)(h.a.Control,{type:"text",placeholder:"Enter Agency Cover Image URL.",required:!0,value:_,onChange:function(e){return C(e.target.value)}})]}),Object(y.jsxs)(h.a.Group,{className:"mb-3",controlId:"formBasicAbout",children:[Object(y.jsx)(h.a.Label,{children:"Enter what this agency will do."}),Object(y.jsx)(h.a.Control,{as:"textarea",rows:3,placeholder:"Enter What your agency will do.",required:!0,value:B,onChange:function(e){return E(e.target.value)}})]}),Object(y.jsx)(h.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(y.jsx)(h.a.Check,{type:"checkbox",label:"Do you want to make this agency sellable?",value:D,checked:D,onChange:function(){return G(!D)}})}),Object(y.jsxs)(j.a,{variant:"primary",type:"submit",disabled:L,children:["Buy Agency ",c,"cUSD"]}),L&&Object(y.jsx)(u.a,{variant:"warning",className:"mt-3",children:"Awaiting Payment... Please follow The on screen prompts."})]})}),Object(y.jsx)(m.a.Footer,{})]})]})})},x=function(e){var t=e.name,n=e.location,a=e.about,r=e.image,c=e.hire_amount,s=e.agency_worth,i=e.isSellable,o=e.hire,u=e.index,l=e.buyAgency,p=e.owner;return Object(y.jsxs)(g.a,{className:"border-0 agency my-2",children:[Object(y.jsx)(g.a.Img,{variant:"top",src:r,style:{width:"100%",height:"18rem"}}),Object(y.jsxs)(g.a.Body,{children:[Object(y.jsx)(g.a.Title,{className:"mb-3",children:t}),Object(y.jsxs)(g.a.Text,{children:[Object(y.jsx)("div",{children:Object(y.jsxs)("h6",{children:[Object(y.jsx)("span",{className:"fw-bold",children:"Location:"})," ",n]})}),Object(y.jsxs)("div",{children:[Object(y.jsx)("h6",{className:"my-0 fw-bold",children:"What we do."}),Object(y.jsx)("span",{children:a})]})]}),Object(y.jsx)("div",{className:"d-flex justify-content-between",children:p?Object(y.jsx)("h6",{className:"text-muted alert alert-secondary py-1 px-2",children:"You own this Agency!"}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(j.a,{variant:"success",size:"sm",onClick:function(){return o(u)},children:["Hire Agency ",c,"cUSD"]}),Object(y.jsx)(O,{name:t,about:a,imgUrl:r,worth:s,isSellable:i,buyAgency:l,index:u})]})})]})]})},v=n(181),w=n.n(v),T=n(22),A=n.n(T),S=n(327),_=n(328),C=n(329);var k=function(){var e="0x42e0C8cB22C581De0Fa7990EB8a1C0656f113f26",t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1],j=Object(a.useState)(),m=Object(o.a)(j,2),h=m[0],g=m[1],O=Object(a.useState)(),v=Object(o.a)(O,2),T=v[0],k=v[1],N=Object(a.useState)(),B=Object(o.a)(N,2),E=B[0],I=B[1],F=Object(a.useState)(!0),D=Object(o.a)(F,2),G=D[0],M=D[1],U=Object(a.useState)(0),L=Object(o.a)(U,2),q=L[0],H=L[1],W=Object(a.useState)(!1),P=Object(o.a)(W,2),R=P[0],J=P[1],Y=Object(a.useState)([]),z=Object(o.a)(Y,2),K=z[0],Q=z[1],V=Object(a.useState)(!1),X=Object(o.a)(V,2),Z=X[0],$=X[1],ee=function(){var t=Object(i.a)(Object(s.a)().mark((function t(){var n,a,r,c;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.celo){t.next=23;break}return I("\u26a0\ufe0f Please approve this DApp to use it."),t.prev=2,t.next=5,window.celo.enable();case 5:return M(!1),$(!0),n=new w.a(window.celo),a=Object(S.newKitFromWeb3)(n),t.next=11,a.web3.eth.getAccounts();case 11:r=t.sent,a.defaultAccount=r[0],c=new a.web3.eth.Contract(_,e),g(a),k(c),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),I("".concat(t.t0.message));case 21:t.next=24;break;case 23:I("\u26a0\ufe0f Please install the CeloExtensionWallet.");case 24:case"end":return t.stop()}}),t,null,[[2,18]])})));return function(){return t.apply(this,arguments)}}(),te=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t,n;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getTotalBalance(h.defaultAccount);case 2:t=e.sent,n=t.cUSD.shiftedBy(-18).toFixed(2),H(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t,n,a,r,i,o,u){var l,p;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=[t,n,a,r,i,new A.a(i?o:1).shiftedBy(18).toString(),new A.a(u).shiftedBy(18).toString()],J(!0),I("Registering Agency, ".concat(t,"...")),e.prev=3,e.next=6,(p=T.methods).registerAgency.apply(p,l).send({from:h.defaultAccount});case 6:return I("Successfully registered Agency, ".concat(t,"...")),e.next=9,ae();case 9:setTimeout((function(){return c(!1)}),1e3),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),I(e.t0.message),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,n,a,r,c,s,i){return e.apply(this,arguments)}}(),ae=function(){var e=Object(i.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.methods.getAgencies().call();case 3:t=e.sent,Q(t),console.log(new Array(t).reverse((function(e,t){return e+t}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var t=Object(i.a)(Object(s.a)().mark((function t(n){var a,r;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new h.web3.eth.Contract(C,"0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"),t.next=3,a.methods.approve(e,n).send({from:h.defaultAccount});case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ce=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),I("\u231b Waiting for payment approval..."),e.prev=2,e.next=5,re(new A.a(K[t].hire_fee));case 5:I('\u231b Awaiting payment for "'.concat(K[t].agency_name,'"...')),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),I("\u26a0\ufe0f ".concat(e.t0.message,"."));case 11:return e.prev=11,e.next=14,T.methods.hireAgency(t).send({from:h.defaultAccount});case 14:I('\ud83c\udf89 You successfully hired "'.concat(K[t].agency_name,'" for their services.')),te(),e.next=21;break;case 18:e.prev=18,e.t1=e.catch(11),I(e.t1.message);case 21:case"end":return e.stop()}}),e,null,[[2,8],[11,18]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(i.a)(Object(s.a)().mark((function e(t,n,a,r,c){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),I("\u231b Waiting for payment approval..."),e.prev=2,e.next=5,re(new A.a(K[t].agency_worth));case 5:I('\u231b Awaiting payment for "'.concat(K[t].agency_name,'"...')),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),I("\u26a0\ufe0f ".concat(e.t0.message,"."));case 11:return e.prev=11,e.next=14,T.methods.buyAgency(t,n,a,r,c).send({from:h.defaultAccount});case 14:I('\ud83c\udf89 You successfully bought the "'.concat(K[t].agency_name,'" agency.')),te(),ae(),e.next=22;break;case 19:e.prev=19,e.t1=e.catch(11),I(e.t1.message);case 22:case"end":return e.stop()}}),e,null,[[2,8],[11,19]])})));return function(t,n,a,r,c){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){ee()}),[]),Object(a.useEffect)((function(){h&&T&&(te(),ae())}),[h,T]),Object(y.jsxs)(l.a,{children:[Object(y.jsxs)("div",{className:"d-flex align-items-center justify-content-between my-3",children:[Object(y.jsx)("h3",{children:"House Keepers"}),Object(y.jsx)(d,{balance:q})]}),G&&Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"mt-3",children:Object(y.jsx)(u.a,{variant:"warning",children:E})})}),Z&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(f,{register:ne,msg:E,action:R,show:r,setShow:c}),Object(y.jsx)("div",{className:"my-4 agencies",children:Object(y.jsx)(p.a,{className:"justify-content-center",children:K.map((function(e,t){return Object(y.jsx)(b.a,{xs:10,md:{order:K.length-t,span:4},children:Object(y.jsx)(x,{name:e.agency_name,location:e.location,about:e.agency_info,hire_amount:new A.a(e.hire_fee).shiftedBy(-18).toString(),agency_worth:new A.a(e.agency_worth).shiftedBy(-18).toString(),isSellable:e.sellable,image:e.agency_image,hire:ce,index:t,buyAgency:se,owner:e.agency_address===h.defaultAccount})},t)}))})})]})]})};c.a.render(Object(y.jsx)(k,{}),document.getElementById("root"))}},[[704,1,2]]]);
//# sourceMappingURL=main.ed2aa26c.chunk.js.map
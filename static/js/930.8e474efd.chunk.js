"use strict";(self.webpackChunkarc_today=self.webpackChunkarc_today||[]).push([[930],{3702:function(e,t,n){n.d(t,{h:function(){return o},i:function(){return c}});var i=n(4165),s=n(5861),r=n(9439),a=n(1243),l=n(2791),c=function(e){var t=(0,l.useState)([]),n=(0,r.Z)(t,2),c=n[0],o=n[1];return(0,l.useEffect)((function(){var t=function(){var t=(0,s.Z)((0,i.Z)().mark((function t(){var n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get(e);case 3:n=t.sent,o(n.data),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),c},o=function(){var e=(0,l.useState)(null),t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,l.useEffect)((function(){!function e(){window.innerHeight>window.innerWidth?i(!0):i(!1),window.addEventListener("resize",e)}()}),[]),n}},8930:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var i=n(4165),s=n(5861),r=n(4942),a=n(1413),l=n(9439),c=n(2791),o=n(7689),u=n(1087),d=n(1243),p=n(3111),h=n(3702),f=(n(2336),n(9135));var x=n.p+"static/media/icon-closeButton.4fdbb5d5189ed8cf0137676c5ff87ff9.svg";var v=n.p+"static/media/museum-logo.44dd7ce61cef2cc51386d4503b920ab4.svg",m=n(7014),g=n(184),y=function(){var e,t,n,y,w=(0,o.UO)().id,j=parseInt(w),b=(0,h.i)("https://museumreview.onrender.com/museum/".concat(j)),k=b.reviews,Z=(0,c.useState)(!1),N=(0,l.Z)(Z,2),I=N[0],C=N[1],S=(0,c.useState)(null),z=(0,l.Z)(S,2),E=z[0],D=z[1],F=(0,h.h)(),U=(0,c.useState)(0),J=(0,l.Z)(U,2),M=J[0],Q=J[1],R=(0,c.useState)({user:"",rating:"",review:""}),B=(0,l.Z)(R,2),H=B[0],L=B[1],T=function(e){var t=e.target,n=t.name,i=t.value;L((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},n,i))}))},W=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,{},!(H.review&&H.user&&H.rating)){e.next=8;break}return t={user:H.user,review:H.review,rating:parseInt(H.rating)},e.next=6,d.Z.post("https://museumreview.onrender.com/museum/".concat(j,"/reviews"),t);case 6:e.sent,C(!I);case 8:if(!(H.rating&&!H.review&&!H.user||H.review&&H.user&&H.rating)){e.next=14;break}return n={rating:parseInt(H.rating)},e.next=12,d.Z.post("https://museumreview.onrender.com/museum/".concat(j,"/rate"),n);case 12:e.sent,C(!I);case 14:alert("Succesed"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),alert("server tidak merespon, coba lagi nanti");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){if(window.scrollTo(0,0),b.rate&&b.rate.length>0){var e=b.rate.reduce((function(e,t){return e+t}),0)/b.rate.length;Q(e)}}),[b]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.rU,{to:"/museum-list",children:(0,g.jsx)("img",{className:"logo-main-museum",src:"".concat(v),alt:"museum-logo",style:{height:F?"6vh":"10vh",width:"auto",position:"absolute",top:"1vh",left:"1vh"}})}),(0,g.jsxs)("div",{className:"reviews-content-container",style:{minHeight:"100vh",backgroundImage:"url(".concat(m.Z,")"),backgroundRepeat:"repeat",backgroundSize:"100px auto",display:"flex",flexDirection:"column",alignItems:"center",width:"100%",gap:"20px",padding:"0 0 20px 0"},children:[(0,g.jsxs)("div",{className:"reviews-container",style:{display:"flex"},children:[(0,g.jsx)("img",{src:b.logo,alt:b.name,className:"museum-pict",style:{borderRadius:"50%"}}),(0,g.jsxs)("div",{className:"desc-museum",style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,g.jsx)("h1",{style:{width:"fit-content"},children:b.name}),(0,g.jsx)("h2",{onClick:function(){return console.log(b.reviews.length)},children:b.location}),(0,g.jsx)("p",{children:b.description})]})]}),(0,g.jsxs)("div",{style:{width:"fit-content",display:"flex",padding:"15px 0",gap:"20px",alignItems:"center"},children:[(0,g.jsxs)("div",{style:{width:"fit-content",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)("div",{style:{display:"flex",gap:"5px",padding:"10px 0 5px 0"},children:[1,2,3,4,5].map((function(e,t){return(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"radio",name:"rating",value:e,checked:M,style:{height:"20%"}}),(0,g.jsx)(f.QJe,{size:23,className:"stars-user",color:M<=t?"#e4e5e9":"#ffc107"})]},e)}))}),(0,g.jsxs)("p",{className:"info-rating",children:[(0,g.jsxs)("b",{children:[" ",M.toFixed(1)]})," ",(null===(e=b.rate)||void 0===e?void 0:e.length)>=2?"(".concat(null===(t=b.rate)||void 0===t?void 0:t.length," ratings)"):"(".concat(null===(n=b.rate)||void 0===n?void 0:n.length," rating)")]})]}),(0,g.jsx)("div",{onClick:function(){return C(!I)},className:"review-button",style:{height:"fit-content",display:"flex",justifyContent:"center",padding:"15px 45px"},children:"REVIEW"})]}),(0,g.jsxs)("div",{className:"user-review",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsxs)("h2",{children:[null===(y=b.reviews)||void 0===y?void 0:y.length," Ulasan"]}),(0,g.jsx)("div",{className:"review-wrapper",children:void 0===k?console.log("wait"):k.map((function(e,t){return(0,g.jsxs)("div",{className:"review-container",children:[(0,g.jsx)("h2",{children:e.user}),(0,g.jsx)("p",{children:e.review}),(0,g.jsx)("div",{style:{display:"flex",gap:"5px",padding:"10px 0 5px 0"},children:[1,2,3,4,5].map((function(t,n){return(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"radio",name:"rating",value:t,checked:e.rating,style:{height:"20%"}}),(0,g.jsx)(f.QJe,{className:"stars-user",color:e.rating<=n?"#e4e5e9":"#ffc107"})]},t)}))})]},t)}))})]})]}),I&&(0,g.jsxs)(p.E.div,{className:"modal-review-overlay",style:{position:"fixed",top:"0",left:"0",zIndex:"15",width:"100%",height:"100vh",backgroundColor:"rgba(0, 0, 0, .8",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,g.jsx)("div",{className:"close",onClick:function(){return C(!I)},style:{width:"100%",height:"100vh",position:"absolute",top:"0",left:"0",zIndex:"15"}}),(0,g.jsxs)(p.E.div,{className:"modal-review",id:F?"mr-portrait":"mr-landscape",style:{zIndex:"16",position:"absolute",top:F?"15vh":""},initial:{scale:0},animate:{scale:1},children:[(0,g.jsx)("div",{onClick:function(){return C(!I)},style:{cursor:"pointer",width:"7%",height:"7%",position:"absolute",top:"-3.5%",right:"-3.5%",backgroundImage:"url(".concat(x,")"),backgroundSize:"100% 100%"}}),(0,g.jsxs)("form",{style:{display:"flex",flexDirection:"column",gap:"25px",padding:"3px"},children:[(0,g.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:(0,g.jsx)("h1",{style:{textAlign:"center",color:"#101626"},children:b.name})}),(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"10px"},children:[1,2,3,4,5].map((function(e,t){return(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"radio",name:"rating",value:e,checked:parseInt(H.rating)===e,onChange:T,style:{height:"20%"}}),(0,g.jsx)(f.QJe,{onMouseEnter:function(){return D(e)},onMouseLeave:function(){return D(null)},className:"stars",color:(E||H.rating)<=t?"#101626":"#ffc107"})]},e)}))}),(0,g.jsxs)("div",{style:{position:"relative",width:"100%",height:"60%",display:"flex",flexDirection:"column",gap:"5px"},children:[(0,g.jsx)("input",{className:"input",style:{fontFamily:"sans-serif",width:"50%",fontSize:"20px"},placeholder:"name",type:"text",name:"user",value:H.user,onChange:T}),(0,g.jsx)("textarea",{className:"text-area",style:{fontFamily:"sans-serif",fontSize:"20px",width:"calc(100% - 10px)",height:"70%"},placeholder:"write a review...",name:"review",value:H.review,onChange:T})]}),(0,g.jsx)("div",{style:{position:"relative",width:"100%",display:"flex",justifyContent:"flex-end",height:"30%",alignItems:"flex-end"},children:(0,g.jsx)("button",{className:"submit-button",style:{width:"35%",height:"65%"},type:"button",onClick:function(){return W()},children:"SUBMIT"})})]})]})]})]})}},2336:function(){},7014:function(e,t,n){n(2791);t.Z=n.p+"static/media/grid.4d909402d9dd233162231d744bea689c.svg"}}]);
//# sourceMappingURL=930.8e474efd.chunk.js.map
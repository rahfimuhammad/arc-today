"use strict";(self.webpackChunkarc_today=self.webpackChunkarc_today||[]).push([[930],{3702:function(e,t,n){n.d(t,{h:function(){return o},i:function(){return c}});var i=n(4165),s=n(5861),a=n(9439),r=n(1243),l=n(2791),c=function(e){var t=(0,l.useState)([]),n=(0,a.Z)(t,2),c=n[0],o=n[1];return(0,l.useEffect)((function(){var t=function(){var t=(0,s.Z)((0,i.Z)().mark((function t(){var n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.Z.get(e);case 3:n=t.sent,o(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),c},o=function(){var e=(0,l.useState)(null),t=(0,a.Z)(e,2),n=t[0],i=t[1];return(0,l.useEffect)((function(){!function e(){window.innerHeight>window.innerWidth?i(!0):i(!1),window.addEventListener("resize",e)}()}),[]),n}},8930:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(4165),s=n(5861),a=n(4942),r=n(1413),l=n(9439),c=n(2791),o=n(7689),d=n(1087),u=n(1243),h=n(3111),p=n(3702),x=(n(2336),n(9135));var f=n.p+"static/media/icon-closeButton.98588f058bfcda3b0d3a9d415723ee95.svg";var m=n.p+"static/media/museum-logo.44dd7ce61cef2cc51386d4503b920ab4.svg",v=n(7014),g=n(1884),y=n(184),w=function(){var e,t,n,w,j=(0,o.UO)().id,b=parseInt(j),k=(0,p.h)(),N=(0,p.i)("https://museumreview.onrender.com/museum/".concat(b)),I=N.reviews,Z=(0,c.useState)(!1),C=(0,l.Z)(Z,2),S=C[0],z=C[1],E=(0,c.useState)(null),D=(0,l.Z)(E,2),B=D[0],F=D[1],R=(0,c.useState)(0),U=(0,l.Z)(R,2),H=U[0],J=U[1],L=(0,c.useState)(!1),M=(0,l.Z)(L,2),Q=M[0],A=M[1],T=(0,c.useState)(!1),W=(0,l.Z)(T,2),_=W[0],O=W[1],V=(0,c.useState)(!1),q=(0,l.Z)(V,2),G=q[0],K=q[1],P=(0,c.useState)({user:"",rating:"",review:""}),X=(0,l.Z)(P,2),Y=X[0],$=X[1],ee=function(e){var t=e.target,n=t.name,i=t.value;$((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,i))}))},te=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,{},!(Y.review&&Y.user&&Y.rating)){e.next=10;break}return t={user:Y.user,review:Y.review,rating:parseInt(Y.rating)},e.next=6,u.Z.post("https://museumreview.onrender.com/museum/".concat(b,"/reviews"),t);case 6:e.sent,O(!0),K(!0),$({user:"",rating:"",review:""});case 10:if(!(Y.rating&&!Y.review&&!Y.user||Y.review&&Y.user&&Y.rating)){e.next=20;break}return n={rating:parseInt(Y.rating)},e.next=14,u.Z.post("https://museumreview.onrender.com/museum/".concat(b,"/rate"),n);case 14:e.sent,O(!0),K(!0),$({user:"",rating:"",review:""}),e.next=21;break;case 20:A(!0);case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),alert("server tidak merespon, coba lagi nanti");case 26:O(!1);case 27:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){z(!S),K(!1),A(!1)};return(0,c.useEffect)((function(){if(window.scrollTo(0,0),N.rate&&N.rate.length>0){var e=N.rate.reduce((function(e,t){return e+t}),0)/N.rate.length;J(e)}}),[N]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d.rU,{to:"/museum-list",children:(0,y.jsx)("img",{className:"logo-main-museum",src:"".concat(m),alt:"museum-logo",style:{height:k?"6vh":"10vh",width:"auto",position:"absolute",top:"1vh",left:"1vh"}})}),(0,y.jsxs)("div",{className:"reviews-content-container",style:{minHeight:"calc(100vh - 20px)",backgroundImage:"url(".concat(v.Z,")"),backgroundRepeat:"repeat",backgroundSize:"100px auto",display:"flex",flexDirection:"column",alignItems:"center",width:"100%",gap:"20px",padding:"0 0 20px 0"},children:[(0,y.jsxs)("div",{className:"reviews-container",style:{display:"flex"},children:[(0,y.jsx)("img",{src:N.logo,alt:N.name,className:"museum-pict",style:{borderRadius:"50%"}}),(0,y.jsxs)("div",{className:"desc-museum",style:{display:"flex",flexDirection:"column",gap:"2px"},children:[(0,y.jsx)("h1",{className:"h1",style:{width:"fit-content"},children:N.name}),(0,y.jsx)("h2",{className:"h2",children:N.location}),(0,y.jsx)("p",{className:"p",children:N.description})]})]}),(0,y.jsxs)("div",{style:{width:"fit-content",display:"flex",padding:"15px 0",gap:"20px",alignItems:"center"},children:[(0,y.jsxs)("div",{style:{width:"fit-content",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)("div",{style:{display:"flex",gap:"5px",padding:"10px 0 5px 0"},children:[1,2,3,4,5].map((function(e,t){return(0,y.jsxs)("label",{children:[(0,y.jsx)("input",{type:"radio",name:"rating",value:e,checked:H,style:{height:"20%"}}),(0,y.jsx)(x.QJe,{size:23,className:"stars-user",color:H<=t?"#e4e5e9":"#ffc107"})]},e)}))}),(0,y.jsxs)("p",{className:"info-rating",children:[(0,y.jsxs)("b",{children:[" ",H.toFixed(1)]})," ",(null===(e=N.rate)||void 0===e?void 0:e.length)>=2?"(".concat(null===(t=N.rate)||void 0===t?void 0:t.length," ratings)"):"(".concat(null===(n=N.rate)||void 0===n?void 0:n.length," rating)")]})]}),(0,y.jsx)("div",{onClick:function(){return z(!S)},className:"review-button",style:{height:"fit-content",display:"flex",justifyContent:"center"},children:"REVIEW"})]}),(0,y.jsxs)("div",{className:"user-review",style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)("h2",{className:"h2",style:{padding:"10px 0"},children:[null===(w=N.reviews)||void 0===w?void 0:w.length," Ulasan"]}),(0,y.jsx)("div",{className:"review-wrapper",children:void 0===I?console.log("wait"):I.map((function(e,t){return(0,y.jsxs)("div",{className:"review-container",children:[(0,y.jsx)("h2",{className:"h2",children:e.user}),(0,y.jsx)("p",{className:"p",children:e.review}),(0,y.jsx)("div",{style:{display:"flex",gap:"5px",padding:"10px 0 5px 0"},children:[1,2,3,4,5].map((function(t,n){return(0,y.jsxs)("label",{children:[(0,y.jsx)("input",{type:"radio",name:"rating",value:t,checked:e.rating,style:{height:"20%"}}),(0,y.jsx)(x.QJe,{className:"stars-user",color:e.rating<=n?"#e4e5e9":"#ffc107"})]},t)}))})]},t)}))})]})]}),S&&(0,y.jsxs)(h.E.div,{className:"modal-review-overlay",style:{position:"fixed",top:"0",left:"0",zIndex:"15",width:"100%",height:"100vh",backgroundColor:"rgba(0, 0, 0, .8",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,y.jsx)("div",{className:"close",onClick:function(){return ne()},style:{width:"100%",height:"100vh",position:"absolute",top:"0",left:"0",zIndex:"15"}}),(0,y.jsxs)(h.E.div,{className:"modal-review",id:k?"mr-portrait":"mr-landscape",style:{paddingBottom:"5px",zIndex:"16",position:"absolute",top:k?"15vh":""},initial:{scale:0},animate:{scale:1},children:[G&&(0,y.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"white",zIndex:"16",color:"#101626"},children:(0,y.jsx)("h1",{children:"BERHASIL!"})}),_&&!G&&(0,y.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"white",zIndex:"16"},children:(0,y.jsx)("div",{style:{width:"50%"},children:(0,y.jsx)(g.Z,{})})}),(0,y.jsx)("div",{onClick:function(){return ne()},style:{zIndex:"17",cursor:"pointer",width:"7%",height:"7%",position:"absolute",top:"-3.5%",right:"-3.5%",backgroundImage:"url(".concat(f,")"),backgroundSize:"100% 100%"}}),(0,y.jsxs)("form",{style:{display:"flex",flexDirection:"column",gap:"25px",padding:"3px"},children:[(0,y.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:(0,y.jsx)("h1",{className:"h1",style:{textAlign:"center",color:"#101626"},children:N.name})}),(0,y.jsx)("div",{style:{display:"flex",justifyContent:"center",gap:"10px"},children:[1,2,3,4,5].map((function(e,t){return(0,y.jsxs)("label",{children:[(0,y.jsx)("input",{type:"radio",name:"rating",value:e,checked:parseInt(Y.rating)===e,onChange:ee,style:{height:"20%"}}),(0,y.jsx)(x.QJe,{onMouseEnter:function(){return F(e)},onMouseLeave:function(){return F(null)},className:"stars",color:(B||Y.rating)<=t?"#101626":"#ffc107"})]},e)}))}),(0,y.jsxs)("div",{style:{position:"relative",width:"100%",height:"75%",display:"flex",flexDirection:"column",gap:"5px"},children:[(0,y.jsx)("input",{className:"input",style:{border:"1px solid black",fontFamily:"sans-serif",width:"50%",fontSize:"20px"},placeholder:"name",type:"text",name:"user",value:Y.user,onChange:ee}),(0,y.jsx)("textarea",{className:"text-area",style:{border:"1px solid black",fontFamily:"sans-serif",fontSize:"20px",width:"calc(100% - 18px)",height:"50%"},placeholder:"write a review...",name:"review",value:Y.review,onChange:ee})]}),(0,y.jsxs)("div",{style:{position:"relative",width:"100%",display:"flex",justifyContent:"space-between",height:"30%",alignItems:"flex-end"},children:[(0,y.jsx)("span",{style:{height:"65%",padding:"0 2px"},children:Q&&(0,y.jsx)("span",{children:"Input tidak valid"})}),(0,y.jsx)("button",{disabled:_,className:"submit-button",style:{width:"35%",height:"80%"},type:"button",onClick:function(){O(!0),te()},children:"SUBMIT"})]})]})]})]})]})}},2336:function(){},7014:function(e,t,n){n(2791);t.Z=n.p+"static/media/grid.4d909402d9dd233162231d744bea689c.svg"}}]);
//# sourceMappingURL=930.c106e3ee.chunk.js.map
"use strict";(self.webpackChunkarc_today=self.webpackChunkarc_today||[]).push([[320],{702:function(a,e,n){n.d(e,{h:function(){return d},i:function(){return c}});var t=n(165),r=n(861),s=n(439),i=n(243),o=n(791),c=function(a){var e=(0,o.useState)([]),n=(0,s.Z)(e,2),c=n[0],d=n[1];return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get(a);case 3:n=e.sent,d(n.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[a]),c},d=function(){var a=(0,o.useState)(null),e=(0,s.Z)(a,2),n=e[0],t=e[1];return(0,o.useEffect)((function(){!function a(){window.innerHeight>window.innerWidth?t(!0):t(!1),window.addEventListener("resize",a)}()}),[]),n}},320:function(a,e,n){n.r(e),n.d(e,{default:function(){return p}});var t=n(439),r=n(791),s=n(702),i=n(516);var o=n.p+"static/media/trb-Grid.44573756f759d27e31918bdd9c1ce2b6.svg";var c=n.p+"static/media/Glosarium.2a110c207a3e9351f70268e8c8c88d8f.svg",d=n(184),l=function(a){var e=a.data;return(0,d.jsx)("div",{style:{padding:"3vw",backgroundColor:"rgba(255, 255, 255, .8)"},className:"glosariumData",children:Object.entries(e).map((function(a){var e=(0,t.Z)(a,2),n=e[0],r=e[1];return(0,d.jsxs)("div",{children:[(0,d.jsxs)("strong",{children:[n,":"]})," ",r]},n)}))})},u=JSON.parse('{"Perahu Lesung":"Perahu lesung atau perahu tanpa lunas adalah jenis perahu yang dibuat dari satu batang kayu besar yang dikeruk bagian tengahnya hingga terbentuk dinding dan dasar perahu","Perahu dengan Lunas":"Perahu yang bagian dindingnya tersusun atas papan-papan yang disambung","Mast (Tiang Layar)":"Struktur vertikal besar yang mendukung layar atau layar-layar pada perahu layar. Mast bisa tunggal atau ganda tergantung pada jenis perahu.","Hull (Lambung)":"Lambung kapal merupakan bagian memanjang yang langsung bersinggungan dengan air. Lambung kapal berguna untuk memberi daya apung.","Sail (Layar)":"Permukaan kain yang menangkap angin untuk menggerakkan perahu. Layar dapat berbagai bentuk dan ukuran tergantung pada jenis perahu.","Sheet (Tali Layar)":"Tali yang digunakan untuk mengontrol sudut atau posisi layar. Sheets biasanya dihubungkan ke boom untuk mengendalikan bagian bawah dari layar.","Deck (Geladak)":"Area permukaan perahu tempat awak berdiri atau duduk. Geladak dapat menjadi terbuka atau tertutup tergantung pada jenis perahu."}'),p=function(){var a=(0,s.h)(),e=(0,s.i)("https://prehistoric.cyclic.app//traditionalBoats"),n=(0,r.useState)(0),p=(0,t.Z)(n,2),g=p[0],h=p[1],b=(0,r.useRef)(null),m=(0,r.useState)(!1),f=(0,t.Z)(m,2),v=f[0],x=f[1],y=(0,r.useState)(!1),j=(0,t.Z)(y,2),k=j[0],w=j[1],C=(0,r.useState)([]),N=(0,t.Z)(C,2),L=N[0],I=N[1],S=(0,r.useState)(0),Z=(0,t.Z)(S,2),P=Z[0],W=Z[1];(0,r.useEffect)((function(){b.current.addEventListener("scroll",(function(){var a=b.current.scrollLeft;return W(a)}))}),[]);var z=function(){var a=b.current.scrollLeft+b.current.offsetWidth;h(a),B(a)},B=function(a){b.current.scrollTo({left:a,behavior:"smooth"})};(0,r.useEffect)((function(){W(b.current.scrollLeft)}),[]);(0,r.useEffect)((function(){window.scrollTo(0,0)}),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"mainBoatsContainer",children:[(0,d.jsx)("div",{style:{position:"fixed",zIndex:"15"},children:(0,d.jsx)(i.Z,{})}),(0,d.jsx)("img",{onClick:function(){w(!k)},src:c,alt:"glosarium",className:P<window.innerHeight/2?"glosariumBefore":"glosariumAfter"}),k&&(0,d.jsx)("div",{onClick:function(){w(!k)},style:{position:"absolute",width:"100vw",height:"100vh",zIndex:"16",top:"0",left:"0",backgroundColor:"rgb(0, 0, 0, 0.8)"},children:(0,d.jsx)("div",{className:"glosariumContainer",children:(0,d.jsx)(l,{data:u})})}),(0,d.jsxs)("div",{className:"buttonContainer",style:{display:"flex",flexDirection:"row",justifyContent:"space-between",position:"absolute",zIndex:"12",bottom:"5vh",right:"5%",width:"30vw",height:"5vw"},children:[(0,d.jsx)("div",{onClick:function(){var a=b.current.scrollLeft-b.current.offsetWidth;h(a),B(a)},className:"prevButtonContainer",id:a||P<window.innerWidth?"buttonContainerFalse":"buttonContainerTrue",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"14vw",height:"100%",cursor:"pointer",border:"2px solid rgb(48, 67, 89)"},children:(0,d.jsx)("div",{className:"prevButton",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"12.5vw",height:"3.5vw",border:"1px solid #2c363b"},children:(0,d.jsx)("h3",{className:"boatsImageSourceLandscape",style:{position:"static",color:"#2c363b"},children:"prev"})})}),(0,d.jsx)("div",{onClick:z,type:"button",className:"nextButtonContainer",id:a||P<window.innerWidth?"buttonContainerFalse":"buttonContainerTrue",style:{display:g<0?"none":"flex",justifyContent:"center",alignItems:"center",width:"14vw",height:"100%",cursor:"pointer",border:"2px solid rgb(48, 67, 89)"},children:(0,d.jsx)("div",{className:"nextButton",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"12.5vw",height:"3.5vw",border:"1px solid #2c363b"},children:(0,d.jsx)("h3",{className:"boatsImageSourceLandscape",style:{position:"static",color:"#2c363b"},children:"next"})})})]}),(0,d.jsxs)("div",{className:"scroller snapsInline",style:{backgroundColor:"#2c363b",backgroundImage:"url(".concat(o,")"),backgroundRepeat:"repeat"},ref:b,children:[(0,d.jsx)("div",{className:"boatsContentContainer",children:(0,d.jsx)("div",{className:"coverWrapper",style:{width:"100vw",height:"100vh",zIndex:"14",position:"absolute"},children:(0,d.jsx)("div",{className:a?"enter":"enterLandscape",style:{border:"none",position:"absolute"},children:(0,d.jsxs)("div",{className:a?"introWrapper":"introWrapperLandscape",children:[(0,d.jsx)("h2",{id:a?"title":"titleLandscape",children:"Perahu Nusantara"}),(0,d.jsx)("div",{className:a?"introImage":"introImageLandscape",style:{position:"absolute",backgroundPosition:"center center",backgroundSize:"100% auto"}}),(0,d.jsx)("div",{onClick:z,className:a?"introButton":"introButtonLandscape",style:{cursor:"pointer"},children:(0,d.jsx)("h3",{id:a?"start":"startLandscape",style:{margin:"0",padding:"0"},children:"Enter"})})]})})})}),e.map((function(n,t){return(0,d.jsx)("div",{className:"boatsContentContainer",children:(0,d.jsxs)("div",{className:a?"boatsContentWrapperPortrait":"boatsContentWrapperLandscape",style:{width:"90%"},children:[(0,d.jsx)("div",{className:a?"boatsDescriptionPortrait":"boatsDescriptionLandscape",children:(0,d.jsxs)("div",{className:"descriptionWrapper",children:[(0,d.jsx)("div",{className:a?"boatsTitle":"boatsTitleLandscape",children:(0,d.jsx)("h2",{children:n.name})}),(0,d.jsx)("div",{className:"boatsLine",style:{padding:a?"0 3vw":"0 1vw"}}),(0,d.jsxs)("div",{className:a?"boatsSummary":"boatsSummaryLandscape",children:[(0,d.jsxs)("p",{style:{textAlign:"justify",display:a?"":"none"},children:[n.summary," ",(0,d.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return function(a){I(e[a]),x(!v)}(t)},children:(0,d.jsx)("b",{children:(0,d.jsx)("u",{children:"selengkapnya..."})})})]}),(0,d.jsx)("p",{style:{textAlign:"justify",display:a?"none":""},children:n.description})]})]})}),(0,d.jsxs)("div",{className:a?"boatsImagePortrait":"boatsImageLandscape",children:[(0,d.jsx)("h3",{className:a?"boatsImageSourcePortrait":"boatsImageSourceLandscape",children:n.source}),(0,d.jsx)("div",{className:a?"boatsImage":"boatsImageLand",style:{position:"absolute",backgroundColor:"#2c363b",backgroundSize:"120px 120px",backgroundRepeat:"repeat",backgroundImage:"url(".concat(o,")")}}),(0,d.jsx)("div",{className:a?"boatsImage":"boatsImageLand",style:{position:"absolute",backgroundSize:"100% auto",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(n.image,")")}})]})]})},t)}))]}),v&&(0,d.jsx)("div",{className:"boatsModalContainer",onClick:function(){I([]),x(!v)},style:{display:a?"flex":"none",position:"absolute",zIndex:"16",top:"0",left:"0",width:"100%",height:"100vh",backgroundColor:"rgb(0, 0, 0, 0.8)"},children:(0,d.jsx)("div",{className:"boatsModal",children:(0,d.jsx)("p",{style:{textAlign:"justify",padding:"3vw 3vw"},children:L.description})})})]})})}}}]);
//# sourceMappingURL=320.e9f5961e.chunk.js.map
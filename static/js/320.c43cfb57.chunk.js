"use strict";(self.webpackChunkarc_today=self.webpackChunkarc_today||[]).push([[320],{702:function(e,a,n){n.d(a,{h:function(){return d},i:function(){return c}});var t=n(165),r=n(861),s=n(439),i=n(243),o=n(791),c=function(e){var a=(0,o.useState)([]),n=(0,s.Z)(a,2),c=n[0],d=n[1];return(0,o.useEffect)((function(){var a=function(){var a=(0,r.Z)((0,t.Z)().mark((function a(){var n;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.Z.get(e);case 3:n=a.sent,d(n.data),a.next=9;break;case 7:a.prev=7,a.t0=a.catch(0);case 9:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}();a()}),[e]),c},d=function(){var e=(0,o.useState)(null),a=(0,s.Z)(e,2),n=a[0],t=a[1];return(0,o.useEffect)((function(){!function e(){window.innerHeight>window.innerWidth?t(!0):t(!1),window.addEventListener("resize",e)}()}),[]),n}},320:function(e,a,n){n.r(a),n.d(a,{default:function(){return p}});var t=n(439),r=n(791),s=n(702),i=n(516);var o=n.p+"static/media/trb-Grid.44573756f759d27e31918bdd9c1ce2b6.svg";var c=n.p+"static/media/Glosarium.2a110c207a3e9351f70268e8c8c88d8f.svg",d=n(184),l=function(e){var a=e.data;return(0,d.jsx)("div",{style:{padding:"0 3vw"},className:"glosariumData",children:Object.entries(a).map((function(e){var a=(0,t.Z)(e,2),n=a[0],r=a[1];return(0,d.jsxs)("div",{children:[(0,d.jsxs)("strong",{children:[n,":"]})," ",r]},n)}))})},u=JSON.parse('{"Buritan":"Bagian belakang perahu, umumnya menjadi tempat untuk meletakkan instrumen-instrumen pengendalian.","Geladak/Dek":"Area permukaan perahu tempat awak berdiri atau duduk. Geladak dapat menjadi terbuka atau tertutup tergantung pada jenis perahu.","Lunas":"Rangka perahu yang membentang di sepanjang dasar perahu","Lambung (Hull)":"Lambung merupakan bagian badan perahu, berguna untuk memberi daya apung.","Layar (Sail)":"Permukaan kain yang menangkap angin untuk menggerakkan perahu. Layar dapat berbagai bentuk dan ukuran tergantung pada jenis perahu.","Perahu dengan Lunas":"Perahu yang memilki lunas pada bagian dasarnya, bagian lambung dari perahu dengan lunas tersusun atas papan-papan yang disambung","Perahu Lesung":"Jenis perahu yang dibuat dari satu batang kayu besar yang dikeruk bagian tengahnya hingga membentuk dinding dan dasar perahu","Tali Layar":"Tali yang digunakan untuk mengontrol sudut atau posisi layar.","Tiang Layar (Mast)":"Struktur vertikal besar yang mendukung layar atau layar-layar pada perahu layar."}'),p=function(){var e=(0,s.h)(),a=(0,s.i)("https://prehistoric.cyclic.app//traditionalBoats"),n=(0,r.useState)(0),p=(0,t.Z)(n,2),g=p[0],h=p[1],b=(0,r.useRef)(null),m=(0,r.useState)(!1),v=(0,t.Z)(m,2),f=v[0],x=v[1],y=(0,r.useState)(!1),k=(0,t.Z)(y,2),j=k[0],w=k[1],C=(0,r.useState)([]),N=(0,t.Z)(C,2),L=N[0],I=N[1],S=(0,r.useState)(0),Z=(0,t.Z)(S,2),B=Z[0],P=Z[1];(0,r.useEffect)((function(){b.current.addEventListener("scroll",(function(){var e=b.current.scrollLeft;return P(e)}))}),[]);var W=function(){var e=b.current.scrollLeft+b.current.offsetWidth;h(e),z(e)},z=function(e){b.current.scrollTo({left:e,behavior:"smooth"})};(0,r.useEffect)((function(){P(b.current.scrollLeft)}),[]);(0,r.useEffect)((function(){window.scrollTo(0,0)}),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"mainBoatsContainer",children:[(0,d.jsx)("div",{style:{position:"fixed",zIndex:"15"},children:(0,d.jsx)(i.Z,{})}),(0,d.jsx)("img",{onClick:function(){w(!j)},src:c,alt:"glosarium",className:B<window.innerHeight/2?"glosariumBefore":"glosariumAfter"}),j&&(0,d.jsx)("div",{onClick:function(){w(!j)},style:{position:"absolute",width:"100vw",height:"100vh",zIndex:"16",top:"0",left:"0",backgroundColor:"rgb(0, 0, 0, 0.8)",overflow:"hidden"},children:(0,d.jsx)("div",{className:"glosariumContainer",style:{backgroundColor:"rgba(255, 255, 255, .8)",padding:"3vw 0",overflowY:"auto",height:"50vh",overflowX:"hidden"},children:(0,d.jsx)(l,{data:u})})}),(0,d.jsxs)("div",{className:"buttonContainer",style:{display:"flex",flexDirection:"row",justifyContent:"space-between",position:"absolute",zIndex:"12",bottom:"5vh",right:"5%",width:"30vw",height:"5vw"},children:[(0,d.jsx)("div",{onClick:function(){var e=b.current.scrollLeft-b.current.offsetWidth;h(e),z(e)},className:"prevButtonContainer",id:e||B<window.innerWidth?"buttonContainerFalse":"buttonContainerTrue",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"14vw",height:"100%",cursor:"pointer",border:"2px solid rgb(48, 67, 89)"},children:(0,d.jsx)("div",{className:"prevButton",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"12.5vw",height:"3.5vw",border:"1px solid #2c363b"},children:(0,d.jsx)("h3",{className:"boatsImageSourceLandscape",style:{position:"static",color:"#2c363b"},children:"prev"})})}),(0,d.jsx)("div",{onClick:W,type:"button",className:"nextButtonContainer",id:e||B<window.innerWidth?"buttonContainerFalse":"buttonContainerTrue",style:{display:g<0?"none":"flex",justifyContent:"center",alignItems:"center",width:"14vw",height:"100%",cursor:"pointer",border:"2px solid rgb(48, 67, 89)"},children:(0,d.jsx)("div",{className:"nextButton",style:{display:"flex",justifyContent:"center",alignItems:"center",width:"12.5vw",height:"3.5vw",border:"1px solid #2c363b"},children:(0,d.jsx)("h3",{className:"boatsImageSourceLandscape",style:{position:"static",color:"#2c363b"},children:"next"})})})]}),(0,d.jsxs)("div",{className:"scroller snapsInline",style:{backgroundColor:"#2c363b",backgroundImage:"url(".concat(o,")"),backgroundRepeat:"repeat"},ref:b,children:[(0,d.jsx)("div",{className:"boatsContentContainer",children:(0,d.jsx)("div",{className:"coverWrapper",style:{width:"100vw",height:"100vh",zIndex:"14",position:"absolute"},children:(0,d.jsx)("div",{className:e?"enter":"enterLandscape",style:{border:"none",position:"absolute"},children:(0,d.jsxs)("div",{className:e?"introWrapper":"introWrapperLandscape",children:[(0,d.jsx)("h2",{id:e?"title":"titleLandscape",children:"Perahu Nusantara"}),(0,d.jsx)("div",{className:e?"introImage":"introImageLandscape",style:{position:"absolute",backgroundPosition:"center center",backgroundSize:"100% auto"}}),(0,d.jsx)("div",{onClick:W,className:e?"introButton":"introButtonLandscape",style:{cursor:"pointer"},children:(0,d.jsx)("h3",{id:e?"start":"startLandscape",style:{margin:"0",padding:"0"},children:"Enter"})})]})})})}),a.map((function(n,t){return(0,d.jsx)("div",{className:"boatsContentContainer",children:(0,d.jsxs)("div",{className:e?"boatsContentWrapperPortrait":"boatsContentWrapperLandscape",style:{width:"90%"},children:[(0,d.jsx)("div",{className:e?"boatsDescriptionPortrait":"boatsDescriptionLandscape",children:(0,d.jsxs)("div",{className:"descriptionWrapper",children:[(0,d.jsx)("div",{className:e?"boatsTitle":"boatsTitleLandscape",children:(0,d.jsx)("h2",{children:n.name})}),(0,d.jsx)("div",{className:"boatsLine",style:{padding:e?"0 3vw":"0 1vw"}}),(0,d.jsxs)("div",{className:e?"boatsSummary":"boatsSummaryLandscape",children:[(0,d.jsxs)("p",{style:{textAlign:"justify",display:e?"":"none"},children:[n.summary," ",(0,d.jsx)("span",{style:{cursor:"pointer"},onClick:function(){return function(e){I(a[e]),x(!f)}(t)},children:(0,d.jsx)("b",{children:(0,d.jsx)("u",{children:"selengkapnya..."})})})]}),(0,d.jsx)("p",{style:{textAlign:"justify",display:e?"none":""},children:n.description})]})]})}),(0,d.jsxs)("div",{className:e?"boatsImagePortrait":"boatsImageLandscape",children:[(0,d.jsx)("h3",{className:e?"boatsImageSourcePortrait":"boatsImageSourceLandscape",children:n.source}),(0,d.jsx)("div",{className:e?"boatsImage":"boatsImageLand",style:{position:"absolute",backgroundColor:"#2c363b",backgroundSize:"120px 120px",backgroundRepeat:"repeat",backgroundImage:"url(".concat(o,")")}}),(0,d.jsx)("div",{className:e?"boatsImage":"boatsImageLand",style:{position:"absolute",backgroundSize:"100% auto",backgroundPosition:"center bottom",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(n.image,")")}})]})]})},t)}))]}),f&&(0,d.jsx)("div",{className:"boatsModalContainer",onClick:function(){I([]),x(!f)},style:{display:e?"flex":"none",position:"absolute",zIndex:"16",top:"0",left:"0",width:"100%",height:"100vh",backgroundColor:"rgb(0, 0, 0, 0.8)"},children:(0,d.jsx)("div",{className:"boatsModal",children:(0,d.jsx)("p",{style:{textAlign:"justify",padding:"3vw 3vw"},children:L.description})})})]})})}}}]);
//# sourceMappingURL=320.c43cfb57.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(85)}])},85:function(e,n,o){"use strict";o.r(n);var t=o(5893),l=o(7294),i=o(2729),r=o.n(i);let s=()=>{let[e,n]=(0,l.useState)(!1),[o,i]=(0,l.useState)([[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]]),[s,a]=(0,l.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[_,c]=(0,l.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),d=[[-1,-1],[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0]],u=()=>{let e=[..._];for(let n=0;n<s.length;n++)for(let o=0;o<s[n].length;o++)if(11===s[n][o])for(let[t,l]of d){let i=n+l,r=o+t;i>=0&&i<s.length&&r>=0&&r<s[n].length&&11!==s[i][r]&&e[i][r]++}c(e),console.log("↓BombCount↓"),console.table(_)},m=(e,n)=>{for(let o=0;o<e.length;o++)for(let t=0;t<e[o].length;t++)_[o][t]=e[o][t]+n[o][t];c(_),console.log("↓MergeMap↓"),console.table(_)},x=(n,o,t)=>{t.preventDefault(),2===t.button?g(n,o):!1===e&&v(n,o)},f=(e,n)=>{let o=[...s];for(let t=0;t<10;t++){let l=Math.floor(9*Math.random()),i=Math.floor(9*Math.random());if(l===e&&i===n||11===o[i][l]){t--;continue}o[i][l]=11}a(o),u(),m(s,_),console.log("↓bombMap↓"),console.table(s)},g=(e,n)=>{-1===o[n][e]?i(o=>{let t=[...o];return t[n][e]=10,t}):10===o[n][e]?i(o=>{let t=[...o];return t[n][e]=9,t}):9===o[n][e]&&i(o=>{let t=[...o];return t[n][e]=-1,t}),console.log("↓userInputs↓"),console.table(o)},v=(e,t)=>{if(o.every(e=>e.every(e=>-1===e))&&f(e,t),11===s[t][e]&&(console.log("gameover"),n(!0),document.getElementsByClassName(r().gameover)[0].innerHTML="ぼかーん!"),-1===o[t][e])console.log("open"),i(n=>{let o=[...n];return o[t][e]=0,o});else if(10===o[t][e])return};return(0,t.jsx)("div",{className:r().container,children:(0,t.jsxs)("div",{className:r().frame,children:[(0,t.jsxs)("div",{className:r().top,children:[(0,t.jsx)("div",{className:r().reset}),(0,t.jsx)("div",{className:r().gameover})]}),(0,t.jsx)("div",{className:r().board,children:_.map((e,n)=>e.map((e,l)=>(0,t.jsx)("div",{className:r().cell,style:{backgroundPosition:"".concat(-((e-1)*30),"px 0"),position:"relative"},onContextMenu:e=>x(l,n,e),children:(0,t.jsx)("div",{className:r().cover,style:0===o[n][l]?{visibility:"hidden"}:{visibility:"visible",backgroundPosition:"".concat(-((o[n][l]-1)*22),"px 0")},onClick:e=>x(l,n,e),onContextMenu:e=>x(l,n,e)})},"".concat(l,"-").concat(n))))})]})})};n.default=s},2729:function(e){e.exports={container:"index_container__gnN1f",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ",board:"index_board__2d6xe",cell:"index_cell__3W8ZQ",cover:"index_cover__Qwe_T",marks:"index_marks__yv_B7",frame:"index_frame__5MAjV",top:"index_top__uMqHF",reset:"index_reset__pnorU",gameover:"index_gameover__2nrQv"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
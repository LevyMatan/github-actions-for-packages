!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));class r{constructor(e,t){this.p1=e,this.p2=t,this.board=[[null,null,null],[null,null,null],[null,null,null]],this.player=Math.random()<.5?this.p1:this.p2,this.sym="X",this.move_count=0}turn(e,t){t=t||e,this.board[e][t]=this.sym,this.move_count=this.move_count+1}nextPlayer(){this.player=this.player===this.p1?this.p2:this.p1,this.sym="X"===this.sym?"O":"X"}hasWinner(){return this.rowWin()||this.colWin()||this.diagWin()}isTie(){return this.move_count>9}rowWin(){let e=!1;for(let t=0;t<3;t++){const n=this.board[t];null!==n[0]&&(e=e||n[0]===n[1]&&n[0]===n[2])}return e}colWin(){let e=!1;for(let t=0;t<3;t++){const n=this.board;null!==n[0][t]&&(e=e||n[0][t]===n[1][t]&&n[0][t]===n[2][t])}return e}diagWin(){const e=this.board;return null!==e[0][0]&&e[0][0]===e[1][1]&&e[0][0]===e[2][2]||null!==e[0][2]&&e[0][2]===e[1][1]&&e[0][2]===e[2][0]}}},function(e,t,n){n(2),e.exports=n(0)},function(e,t,n){"use strict";n.r(t);var r=n(0);let l,o;for(;!l;)l=window.prompt("Enter player 1 name:");for(;!o&&l!==o;)o=window.prompt(l===o?`Please enter a different name than ${l}.`:"Enter player 2 name:");window.onload=()=>{document.getElementById("p1Name").innerText=l,document.getElementById("p2Name").innerText=o;let e=0,t=0;!function n(l,o){document.getElementById("win").style.display="none",document.getElementById("turn").style.display="inline",document.getElementById("p1Score").innerText=e,document.getElementById("p2Score").innerText=t;const i=new r.default(l,o),u=document.getElementById("player");u.innerText=i.player,document.querySelectorAll("#tictactoe td").forEach(r=>{r.innerText="",r.onclick=c=>{r.onclick=void 0,c.target.innerText=i.sym,c.target.onclick=void 0;const[d,s]=c.target.classList;i.turn(d,s),i.hasWinner()?(document.getElementById("winner").innerText=i.player,document.getElementById("win").style.display="inline",document.getElementById("turn").style.display="none",i.player===l?document.getElementById("p1Score").innerText=++e:document.getElementById("p2Score").innerText=++t,document.getElementById("newGame").style.display="inline",document.getElementById("newGame").onclick=()=>n(l,o),document.querySelectorAll("td").forEach(e=>{e.onclick=void 0})):i.isTie()?(document.getElementById("newGame").style.display="inline",document.getElementById("newGame").onclick=()=>n(l,o)):(i.nextPlayer(),u.innerText=i.player)}})}(l,o)}}]);
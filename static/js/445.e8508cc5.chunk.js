"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[445],{445:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var i,r,o,c,a,s,d,l,u,x,p,v=t(439),f=t(168),h=t(686),m=t(87),g=h.Z.div(i||(i=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n"]))),Z=h.Z.div(r||(r=(0,f.Z)(["\n    display: flex;\n    gap: 20px;\n    border-bottom: 1px solid #000000;\n    padding-bottom: 15px;\n    margin-bottom: 15px;\n"]))),j=h.Z.div(o||(o=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n    padding-top: 25px;\n    gap:15px;\n"]))),b=h.Z.img(c||(c=(0,f.Z)(["\n    margin: 0px;\n    width: 250px;\n"]))),_=h.Z.h4(a||(a=(0,f.Z)(["\n    margin:0px;\n"]))),w=h.Z.h5(s||(s=(0,f.Z)(["\n    margin:0px;\n    font-size: 24px;\n"]))),k=h.Z.h6(d||(d=(0,f.Z)(["\n    margin:0px;\n    font-size:20px;\n"]))),y=h.Z.p(l||(l=(0,f.Z)(["\n    font-size: 18px;\n    margin:0;\n"]))),I=h.Z.button(u||(u=(0,f.Z)(["\n    margin: 5px;\n    width: 70px;\n"]))),U=h.Z.div(x||(x=(0,f.Z)(["\n    font-size:18px;\n    border-bottom: 1px solid #000000;\n    margin-bottom: 15px; \n"]))),z=(0,h.Z)(m.rU)(p||(p=(0,f.Z)(["\n    text-decoration: none;\n    color: #000000;\n    &:visited {\n        color:#000000;\n    };\n    &:active {\n        color:#000000;\n    };\n"]))),C=t(689),T=t(791),G=t(794),O=t(184),P=function(){var n,e,t=(0,C.TH)(),i=(0,T.useRef)(null!==(n=null===(e=t.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies"),r=(0,C.UO)().movieId,o=(0,T.useState)({}),c=(0,v.Z)(o,2),a=c[0],s=c[1];(0,T.useEffect)((function(){(0,G.TP)({movieId:r}).then((function(n){return s(n)}))}),[]);var d=a.title,l=a.vote_average,u=void 0===l?0:l,x=a.overview,p=a.genres,f=void 0===p?[]:p,h=a.poster_path,P="https://image.tmdb.org/t/p/original/".concat(h),R=f.map((function(n){return n.name})).join(" ");return(0,O.jsxs)(g,{children:[(0,O.jsx)(I,{children:(0,O.jsx)(z,{to:i.current,children:"Go Back"})}),(0,O.jsxs)(Z,{children:[h&&(0,O.jsx)(b,{src:P,alt:d}),(0,O.jsxs)(j,{children:[(0,O.jsx)(_,{children:d}),(0,O.jsxs)(y,{children:["User score: ",10*u.toFixed(1),"%"]}),(0,O.jsx)(w,{children:"Overview"}),(0,O.jsx)(y,{children:x}),(0,O.jsx)(k,{children:"Genres"}),(0,O.jsxs)(y,{children:[" ",R]})]})]}),(0,O.jsxs)(U,{children:["Additional Information",(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:(0,O.jsx)(m.rU,{to:"cast",children:"Cast"})}),(0,O.jsx)("li",{children:(0,O.jsx)(m.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,O.jsx)(T.Suspense,{fallback:(0,O.jsx)("div",{children:"loading..."}),children:(0,O.jsx)(C.j3,{})})]})}},794:function(n,e,t){t.d(e,{Df:function(){return c},M1:function(){return s},TP:function(){return a},tx:function(){return d}});var i=t(243),r="5ec89972fbd16ce191e81c5a975c5c1a",o="https://api.themoviedb.org/3/",c=function(){return i.Z.get("".concat(o,"trending/movie/day?api_key=").concat(r)).then((function(n){return n.data.results}))},a=function(n){var e=n.movieId;return i.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(r)).then((function(n){return n.data}))},s=function(n){var e=n.movieId;return i.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(r)).then((function(n){return n.data.cast}))},d=function(n){var e=n.movieId;return i.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(r)).then((function(n){return n.data.results}))}}}]);
//# sourceMappingURL=445.e8508cc5.chunk.js.map
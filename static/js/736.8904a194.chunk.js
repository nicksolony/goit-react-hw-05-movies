"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var c,r,i,a=e(439),o=e(791),u=e(689),d=e(794),f=e(168),s=e(686),h=s.Z.li(c||(c=(0,f.Z)(["\n    display:flex;\n    flex-direction: column;\n    padding: 15px;\n"]))),v=s.Z.img(r||(r=(0,f.Z)(["\n    width: 100px;\n"]))),l=s.Z.p(i||(i=(0,f.Z)(["\n    margin:0px;\n"]))),p=e(184),m=function(){var n=(0,o.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],r=(0,u.UO)().movieId;return(0,o.useEffect)((function(){(0,d.M1)({movieId:r}).then((function(n){return c(n)}))}),[]),(0,p.jsx)("div",{children:0!==e.length&&(0,p.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.name,c=n.character,r=n.profile_path,i="https://image.tmdb.org/t/p/original".concat(r);return(0,p.jsxs)(h,{children:[r&&(0,p.jsx)(v,{src:i,alt:e}),(0,p.jsx)(l,{children:e}),(0,p.jsxs)(l,{children:["Character: ",c]})]},t)}))})})}},794:function(n,t,e){e.d(t,{Df:function(){return a},M1:function(){return u},TP:function(){return o},tx:function(){return d}});var c=e(243),r="5ec89972fbd16ce191e81c5a975c5c1a",i="https://api.themoviedb.org/3/",a=function(){return c.Z.get("".concat(i,"trending/movie/day?api_key=").concat(r)).then((function(n){return n.data.results}))},o=function(n){var t=n.movieId;return c.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(r)).then((function(n){return n.data}))},u=function(n){var t=n.movieId;return c.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(r)).then((function(n){return n.data.cast}))},d=function(n){var t=n.movieId;return c.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(r)).then((function(n){return n.data.results}))}}}]);
//# sourceMappingURL=736.8904a194.chunk.js.map
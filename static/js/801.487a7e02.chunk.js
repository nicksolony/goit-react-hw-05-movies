"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[801],{146:function(n,t,e){e.d(t,{Z:function(){return l}});var r,c,o,i=e(168),a=e(686),u=e(87),s=a.Z.ul(r||(r=(0,i.Z)(["\n    font-size: 20px;\n"]))),f=a.Z.li(c||(c=(0,i.Z)(["\n"]))),v=(0,a.Z)(u.rU)(o||(o=(0,i.Z)(["\n    &:visited {\n        color:LinkText;\n    }\n"]))),d=e(184),l=function(n){var t=n.movies,e=n.location,r="/"===e.pathname?"movies/":"";return(0,d.jsx)(s,{children:t.map((function(n){var t=n.id,c=n.title;return(0,d.jsx)(f,{children:(0,d.jsx)(v,{to:"".concat(r).concat(t),state:{from:e},children:c})},t)}))})}},801:function(n,t,e){e.r(t),e.d(t,{default:function(){return _}});var r,c,o,i,a=e(439),u=e(87),s=e(168),f=e(686),v=f.Z.form(r||(r=(0,s.Z)(["\n  padding: 15px;\n  display; flex;\n"]))),d=f.Z.button(c||(c=(0,s.Z)(["\n  border-radius:5px;\n  margin-left: 5px;\n"]))),l=f.Z.span(o||(o=(0,s.Z)(["\nfont-size:18px;\n"]))),p=f.Z.input(i||(i=(0,s.Z)(["\n  font-size:18px;\n  width: 300px;\n"]))),m=e(184),h=function(){var n=(0,u.lr)(),t=(0,a.Z)(n,2),e=(t[0],t[1]),r=function(n){n.target.movie.value=""};return(0,m.jsxs)(v,{onSubmit:function(n){n.preventDefault();var t=n.target.movie.value;e({query:t}),r(n)},children:[(0,m.jsx)(p,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"movie"}),(0,m.jsx)(d,{type:"submit",children:(0,m.jsx)(l,{children:"Search"})})]})},Z=e(689),x=e(794),g=e(791),y=e(146),_=function(){var n=(0,u.lr)(),t=(0,a.Z)(n,1)[0],e=(0,g.useState)([]),r=(0,a.Z)(e,2),c=r[0],o=r[1],i=(0,Z.TH)(),s=t.get("query");return(0,g.useEffect)((function(){s&&(0,x.qF)({query:s}).then((function(n){return o(n)}))}),[s]),(0,m.jsxs)("div",{children:[(0,m.jsx)(h,{}),(0,m.jsx)(y.Z,{movies:c,location:i})]})}},794:function(n,t,e){e.d(t,{Df:function(){return i},M1:function(){return s},TP:function(){return a},qF:function(){return u},tx:function(){return f}});var r=e(243),c="5ec89972fbd16ce191e81c5a975c5c1a",o="https://api.themoviedb.org/3/",i=function(){return r.Z.get("".concat(o,"trending/movie/day?api_key=").concat(c)).then((function(n){return n.data.results}))},a=function(n){var t=n.movieId;return r.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(c)).then((function(n){return n.data}))},u=function(n){var t=n.query;return r.Z.get("".concat(o,"search/movie?query=").concat(t,"&api_key=").concat(c)).then((function(n){return n.data.results}))},s=function(n){var t=n.movieId;return r.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(c)).then((function(n){return n.data.cast}))},f=function(n){var t=n.movieId;return r.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(c)).then((function(n){return n.data.results}))}}}]);
//# sourceMappingURL=801.487a7e02.chunk.js.map
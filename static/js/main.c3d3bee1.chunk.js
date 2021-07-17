(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{59:function(e,t,a){},60:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(25),r=a.n(n),i=(a(59),a(60),a(61),a(14)),s=a(17),o=a(4),l=a(20),j=a.n(l),d=a(1);function b(){var e=Object(o.f)().id,t=Object(c.useState)({}),a=Object(i.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),b=l[0],h=l[1];Object(c.useEffect)((function(){O()}),[]);var O=function(){j.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=8662614f90f667110ba1c010f0da4d34&language=en-US")).then((function(e){r(e.data),h(e.data.genres[0].name),console.log(e.data)})).catch((function(e){console.log("error",e)}))};return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row mt-5",children:[Object(d.jsx)("div",{className:"col-3",children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+n.poster_path})}),Object(d.jsxs)("div",{className:"col-9",children:[Object(d.jsx)("h1",{}),Object(d.jsx)("h1",{children:n.original_title}),Object(d.jsxs)("h4",{children:["Genres: ",b]}),Object(d.jsx)("p",{children:n.overview})]})]})})}var h=a(18),O=a(33),u=a(53),v=a(15),p=a(29),x=a(96),f=a(31);function m(e){var t=Object(h.b)();return Object(d.jsx)("div",{className:"Movie",children:Object(d.jsx)("center",{children:Object(d.jsxs)(O.a,{style:{width:"20rem"},children:[Object(d.jsxs)("center",{children:[" ",Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+e.Poster,alt:"poster"})]}),Object(d.jsxs)(O.a.Body,{children:[Object(d.jsx)(O.a.Title,{children:Object(d.jsx)(s.b,{to:"/movies/".concat(e.id),children:e.Title})}),e.favMode?Object(d.jsx)("button",{className:"btn btn-danger",onClick:function(){return t({type:"REMOVEFAVORITE",payload:e.index})},children:"Unfavorite"}):Object(d.jsxs)(u.a,{variant:"warning",onClick:function(){return t({type:"FAVORITE",payload:e.Movie})},children:[" ",Object(d.jsx)(x.a,{i18nKey:"Favorite",children:"Favorite"})," "]})]})]})})})}function g(){var e=Object(h.c)((function(e){return e.favoriteList})),t=(Object(h.b)(),e.map((function(e,t){return Object(d.jsx)("div",{className:"col-3 mt-5",children:Object(d.jsx)(m,{Poster:e.poster_path,Title:e.original_title,Year:e.release_date,imdbID:"imdb ID: "+e.id,Type:e.original_language,Movie:e,id:e.id,index:t,favMode:!0},t)})})));return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"display-4",children:"FAVORITES PAGE "}),Object(d.jsx)("div",{className:"row",children:t})]})}f.a.use(v.e).use(p.a).init({resources:{en:{translation:{Favorite:"Favorite"}},ar:{translation:{Favorite:"\u0645\u0641\u0636\u0644\u0629"}}}});var y=a(95),_=a(93),N=a(94),S=a(36);function E(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){j.a.get("https://api.themoviedb.org/3/discover/movie?primary_release_year=2019&sort_by=vote_average.desc&api_key=8662614f90f667110ba1c010f0da4d34").then((function(e){n(e.data.results),console.log(e.data.results)})).catch((function(e){console.log("error",e)}))},s=a.map((function(e,t){return Object(d.jsx)(m,{Poster:e.poster_path,Title:e.original_title,Year:e.release_date,imdbID:"imdb ID: "+e.id,Type:e.original_language,Movie:e,id:e.id},t)})).map((function(e){return Object(d.jsxs)(_.a,{className:"mt-5",xs:"3",children:[e," "]})}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("center",{children:Object(d.jsx)("img",{className:"Header",src:"https://duetaz.org/wp-content/uploads/2018/07/Movie-Night.jpg"})}),Object(d.jsx)(S.a,{children:Object(d.jsx)(_.a,{children:Object(d.jsx)(N.a,{children:s})})})]})}function F(e){var t=Object(c.useState)([]),a=Object(i.a)(t,2),n=a[0],r=a[1];Object(c.useEffect)((function(){j.a.get("https://api.themoviedb.org/3/search/movie?api_key=8662614f90f667110ba1c010f0da4d34&query=".concat(e.target)).then((function(e){r(e.data.results)})).catch((function(e){console.error(e)}))}),[e.target]);var s=n.map((function(e,t){return Object(d.jsx)("div",{className:"col-3",children:Object(d.jsx)(m,{Poster:e.poster_path,Title:e.original_title,Year:e.release_date,imdbID:"imdb ID: "+e.id,Type:e.original_language,Movie:e,id:e.id},t)})}));return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("h1",{className:"display-4",children:["Search Results for: ",e.target]}),Object(d.jsx)("div",{className:"row",children:s})]})}function M(){var e=Object(y.a)().i18n,t={en:"English",ar:"Arabic"},a=Object(c.useState)(""),n=Object(i.a)(a,2),r=n[0],l=n[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsxs)(s.b,{className:"navbar-brand ms-5",to:"/",children:[Object.keys(t).map((function(a){return Object(d.jsx)("button",{style:{fontWeight:e.language===a?"bold":"normal"},onClick:function(){return e.changeLanguage(a)},children:t[a]})})),Object(d.jsx)(x.a,{i18nKey:" MovieApp",children:"MovieApp "})]}),Object(d.jsxs)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(s.b,{to:"/",className:"nav-link","aria-current":"page",children:Object(d.jsx)(x.a,{i18nKey:"AllMovies",children:"All Movies "})})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(s.b,{to:"/favorites",className:"nav-link",children:Object(d.jsx)(x.a,{i18nKey:"Favorites",children:"Favorites"})})})]}),Object(d.jsxs)("form",{class:"d-flex",children:[Object(d.jsx)("input",{class:"form-control me-3",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return l(e.target.value)}}),Object(d.jsx)(s.b,{className:"me-5",to:"/search",children:Object(d.jsxs)("button",{class:"btn btn-secondary",type:"submit",children:[Object(d.jsx)(x.a,{i18nKey:"Search",children:"Search"}),"                  "]})})]})]})]})}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(E,{})}}),Object(d.jsx)(o.a,{exact:!0,path:"/favorites",render:function(){return Object(d.jsx)(g,{})}}),Object(d.jsx)(o.a,{exact:!0,path:"/search",render:function(){return Object(d.jsx)(F,{target:r})}}),Object(d.jsx)(o.a,{exact:!0,path:"/movies/:id",render:function(){return Object(d.jsx)(b,{})}})]})]})})}f.a.use(v.e).use(p.a).init({resources:{en:{translation:{Search:"Search",Favorites:"Favorites",AllMovies:"All Movies",MovieApp:" MovieApp"}},ar:{translation:{Search:"\u0627\u0628\u062d\u062b",Favorites:"\u0627\u0644\u0645\u0641\u0636\u0644\u0629",AllMovies:"\u0643\u0644 \u0627\u0644\u0623\u0641\u0644\u0627\u0645",MovieApp:"\u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0623\u0641\u0644\u0627\u0645"}}}});var T=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(M,{})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,97)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))},w=a(32),I=a(40);var k=Object(w.a)({favoriteList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAVORITE":return[].concat(Object(I.a)(e),[t.payload]);case"REMOVEFAVORITE":return console.log("ITSSS: ",t.payload),e.splice(t.payload,1),Object(I.a)(e);default:return e}}}),D=Object(w.b)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(d.jsx)(h.a,{store:D,children:Object(d.jsx)(T,{})}),document.getElementById("root")),A()}},[[92,1,2]]]);
//# sourceMappingURL=main.c3d3bee1.chunk.js.map
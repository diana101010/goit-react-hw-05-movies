"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[285],{285:(e,a,s)=>{s.r(a),s.d(a,{default:()=>k});var t=s(406),i=s(43),n=s(216),l=s(475),r=s(315);const c="MovieDetails_movie__e4Hw7",d="MovieDetails_details__-8Cxp",o="MovieDetails_description__RMUTf",v="MovieDetails_backButton__0nbPy",u="MovieDetails_link__wv3O1",_="MovieDetails_active__TenDU",h="MovieDetails_nav__lOKDT",m="MovieDetails_title__-2Xvc",p="MovieDetails_userScore__UtUkE",x="MovieDetails_overviewTitle__mQyGF",g="MovieDetails_overview__D3vhU",j="MovieDetails_genresTitle__LnFeI",w="MovieDetails_genre__hpnsh";var f=s(579);const k=e=>{var a,s;let{id:k}=e;const[y,D]=(0,i.useState)(null),[M,b]=(0,i.useState)(null),[N,S]=(0,i.useState)(!1),{movieId:U}=(0,n.g)(),A=(0,n.zy)(),$=(0,n.Zp)();return(0,i.useEffect)((()=>{S(!0);(async()=>{try{S(!0);const e=await(0,r.BC)(U);D(e)}catch(M){b("Something went wrong...")}finally{S(!1)}})()}),[U]),(0,f.jsxs)(f.Fragment,{children:[M&&(0,f.jsx)("div",{children:M}),(0,f.jsx)("div",{className:c,children:(0,f.jsx)("button",{type:"text",onClick:()=>{var e,a;return $(null!==(e=null===A||void 0===A||null===(a=A.state)||void 0===a?void 0:a.from)&&void 0!==e?e:"/")},className:v,children:"Go back"})}),N&&(0,f.jsx)(t.A,{}),y&&(0,f.jsxs)("div",{className:d,children:[(0,f.jsx)("img",{src:`https://image.tmdb.org/t/p/w200/${y.poster_path}`,alt:null!==(a=y.title)&&void 0!==a?a:y.name}),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h2",{className:m,children:null!==(s=y.title)&&void 0!==s?s:y.name}),(0,f.jsxs)("p",{className:p,children:["User Score: ",Math.round(y.popularity)," %"," "]}),(0,f.jsx)("h3",{className:x,children:"Overview"}),(0,f.jsx)("p",{className:g,children:y.overview}),(0,f.jsx)("h3",{className:j,children:"Genres"}),y.genres.map((e=>{let{id:a,name:s}=e;return(0,f.jsx)("p",{className:w,children:s},a)}))]})]}),(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("h2",{children:"Additional Information"}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)(l.k2,{to:"cast",end:!0,className:`${u} ${A.pathname.includes("cast")?_:""}`,state:A.state,children:(0,f.jsx)("p",{children:"Cast"})}),(0,f.jsx)(l.k2,{to:"reviews",end:!0,className:`${u} ${A.pathname.includes("reviews")?_:""}`,state:A.state,children:(0,f.jsx)("p",{children:"Reviews"})})]}),(0,f.jsx)(i.Suspense,{fallback:(0,f.jsx)(t.A,{}),children:(0,f.jsx)(n.sv,{})})]})]})}},315:(e,a,s)=>{s.d(a,{BC:()=>l,g4:()=>c,ib:()=>r,k8:()=>i,kz:()=>n});var t=s(213);async function i(){return(await t.A.get("trending/movie/day")).data.results}async function n(e){return(await(0,t.A)(`search/movie?query=${e}&include_adult=false&language=en-US&page=1`)).data.results}async function l(e){return(await(0,t.A)(`movie/${e}?language=en-US`)).data}async function r(e){return(await(0,t.A)(`movie/${e}/credits?language=en-US`)).data.cast}async function c(e){return(await(0,t.A)(`movie/${e}/reviews?language=en-US&page=1`)).data.results}t.A.defaults.baseURL="https://api.themoviedb.org/3",t.A.defaults.params={api_key:"4b14d9ad7ca21f45278ad0b78c44423b"}}}]);
//# sourceMappingURL=285.8cf5341a.chunk.js.map
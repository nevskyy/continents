(this.webpackJsonpcontinents=this.webpackJsonpcontinents||[]).push([[0],{32:function(n,e,t){},33:function(n,e,t){},34:function(n,e,t){},35:function(n,e,t){},36:function(n,e,t){},38:function(n,e,t){},43:function(n,e,t){},44:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var c=t(0),a=t.n(c),i=t(11),s=t.n(i),o=(t(32),t(10)),r=t(59),u=function(n){return fetch("https://countries.trevorblades.com/",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:n})}).then((function(n){return n.json()})).then((function(n){return n.data}))},j=t(14),l=t(60),d=(t(33),t(34),t(35),t(36),t(2)),b=function(n){var e=n.name;return Object(d.jsx)("div",{className:"language",children:e})},O=(t(38),a.a.createContext()),h=function(n){var e=n.languages,t=Object(c.useContext)(O),a=t.setCountries,i=t.setFetchCountries;return Object(d.jsxs)("ul",{className:"languages",children:[e.map((function(n){return Object(d.jsx)("li",{children:Object(d.jsx)(b,Object(j.a)({},n))},n.name)})),Object(d.jsx)(l.a,{variant:"outlined",className:"languages__button",onClick:function(){a([]),i(!1)},children:"CLOSE"})]})},m=function(n){var e=n.code,t=n.name,a=(n.capital,n.languages),i=Object(c.useState)(!1),s=Object(o.a)(i,2),r=s[0],u=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"country",children:[Object(d.jsxs)("div",{className:"country__info",children:[Object(d.jsx)("img",{src:"https://www.countryflags.io/".concat(e,"/shiny/64.png"),alt:t,className:"country__logo"}),Object(d.jsx)("div",{className:"country__name",children:Object(d.jsx)("h2",{children:t})})]}),Object(d.jsx)(l.a,{variant:"outlined",className:"country__button",onClick:function(){return u(!r)},children:r?"Hide Language":"Show Language"})]}),r&&Object(d.jsx)(h,{languages:a})]})},f=function(n){var e=n.countries;return Object(d.jsx)("ul",{className:"countries",children:e.map((function(n){return Object(d.jsx)("li",{children:Object(d.jsx)(m,Object(j.a)({},n))},n.code)}))})},g=[t.p+"static/media/Africa.a0666c91.png",t.p+"static/media/Antarctica.aa24b969.png",t.p+"static/media/Asia.ad9edd43.png",t.p+"static/media/Europe.2bac3ad1.png",t.p+"static/media/NorthAmerica.770912f7.png",t.p+"static/media/Oceania.8d66b02b.png",t.p+"static/media/SouthAmerica.7e41e296.png"],p={AF:g[0],AN:g[1],AS:g[2],EU:g[3],NA:g[4],OC:g[5],SA:g[6]},x=function(n){var e=n.name,t=n.code,a=Object(c.useState)([]),i=Object(o.a)(a,2),s=i[0],r=i[1],j=Object(c.useState)(!1),b=Object(o.a)(j,2),h=b[0],m=b[1];return Object(c.useEffect)((function(){if(h){var n='{\n        continents (filter: { code: { eq: "'.concat(t,'" } }) {\n          countries {\n            name\n            code\n            capital\n            languages {\n              name\n            }\n          }\n        }\n      }');u(n).then((function(n){r(n.continents[0].countries)}))}else r([])}),[h,t]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"continent",children:[Object(d.jsxs)("div",{className:"continent__info",children:[Object(d.jsx)("img",{src:p[t],alt:e,className:"continent__logo"}),Object(d.jsx)("h2",{className:"continent__name",children:e})]}),Object(d.jsx)(l.a,{variant:"outlined",className:"continent__button",onClick:function(){return m(!h)},children:s.length?"Hide Countries":"Show Countries"})]}),!!s.length&&Object(d.jsx)(O.Provider,{value:{setCountries:r,setFetchCountries:m},children:Object(d.jsx)(f,{countries:s})})]})},v=(t(43),function(n){var e=n.continents;return Object(d.jsx)("ul",{className:"continents",children:e.map((function(n){return Object(d.jsx)("li",{children:Object(d.jsx)(x,Object(j.a)({},n))},n.code)}))})});t(44);var N=function(){var n=Object(c.useState)([]),e=Object(o.a)(n,2),t=e[0],a=e[1];return Object(c.useEffect)((function(){u("{\n  continents {\n    name\n    code\n  }\n}").then((function(n){return a(n.continents)}))}),[]),Object(d.jsx)("div",{className:"App",children:t.length?Object(d.jsx)(v,{continents:t}):Object(d.jsx)(r.a,{})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.6a3d94ba.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(158),l=a(156);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{to:"/docs/components/navbar"},"navbar"))}},155:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},156:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(33),i=a.n(o);a.d(t,"a",function(){return i.a});a(155);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(14),l=function(e){var t=e.open,a=void 0!==t&&t;return r.a.createElement("i",{className:"fas fa-caret-left margin-left-1",style:{transition:"transform 50ms",transform:a?"rotate(-90deg)":"",float:"right"}})},o=function(e){var t=e.title,a=e.children,c=Object(n.useState)(!1),o=c[0],i=c[1];return r.a.createElement("li",{className:"margin-bottom-1"},r.a.createElement("div",{onClick:function(){i(!o)},className:"cursor-pointer padding-left-1 padding-right-1",style:{background:"rgba(0,0,0,0.2)"}},t," ",r.a.createElement(l,{open:o})),o&&r.a.createElement("p",null,a))},i=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{className:"no-style"},r.a.createElement(o,{title:"Getting started"},"ici"),r.a.createElement(o,{title:"Good practices"},"ici"),r.a.createElement(o,{title:"Components"},r.a.createElement("ul",{className:"no-style"},r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/docs/components/navbar"},"Navbar")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/docs/components/hero"},"Hero")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/docs/components/progress"},"Progress")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/docs/components/notification"},"Notification")))),r.a.createElement(o,{title:" Variables"},"ici")))};t.a=function(e){var t=e.children;e.style,e.className;return r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column background-primary",style:{width:400,flex:"none",height:"100vh",overflowY:"auto"}},r.a.createElement("div",{className:"padding-1"},r.a.createElement(i,null))),r.a.createElement("div",{className:"column",style:{height:"100vh",overflowY:"auto"}},r.a.createElement("div",{className:"padding-1"},t)))}}}]);
//# sourceMappingURL=component---src-pages-docs-components-js-50ff207c4046cdba5c71.js.map
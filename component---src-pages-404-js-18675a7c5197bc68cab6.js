(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(162),s=a(163);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},156:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},157:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(156);var l=r.a.createContext({}),m=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),c=a(55),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Kitoko - The typography based CSS framework"}}}}},162:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),s=a(4),c=a.n(s),o=a(157),l=function(){return i.a.createElement("header",null,i.a.createElement("nav",{className:"navbar background-primary"},i.a.createElement("div",{className:"navbar-container"},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(o.a,{to:"/"},i.a.createElement("div",{className:"item"},i.a.createElement("small",null,i.a.createElement("i",{className:"fas fa-flag"})," "," ","Home"))),i.a.createElement(o.a,{to:"/docs"},i.a.createElement("div",{className:"item"},i.a.createElement("small",null,i.a.createElement("i",{className:"fas fa-book"})," "," ","Docs")))),i.a.createElement("div",{className:"navbar-end"},i.a.createElement("a",{href:"https://github.com/tonyjahim/kitokocss",rel:"noopener noreferrer",target:"_blank"},i.a.createElement("div",{className:"item"},i.a.createElement("i",{className:"fab fa-github fa-2x"})))))))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var m=l,u=(a(165),function(e){var t=e.children,a=e.className;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:a},i.a.createElement("main",null,t),i.a.createElement("footer",{className:"text-center"},i.a.createElement("small",null,"Built with ",i.a.createElement("i",{className:"fas fa-heart"})," by ",i.a.createElement("a",{href:"https://anthony.jeamme.fr"},"Anthony JEAMME")))))},data:n})});u.propTypes={children:c.a.node.isRequired};t.a=u},163:function(e,t,a){"use strict";var n=a(164),r=a(0),i=a.n(r),s=a(4),c=a.n(s),o=a(166),l=a.n(o);function m(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,c=e.title,o=n.data.site,m=t||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Kitoko - The typography based CSS framework",description:"Kitoko - The typography based CSS framework"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-18675a7c5197bc68cab6.js.map
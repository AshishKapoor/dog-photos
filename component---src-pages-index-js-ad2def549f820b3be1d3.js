(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=n(142),c=n(148),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).getDogData=function(){n.setState({loading:!0}),fetch("https://dog.ceo/api/breeds/image/random").then(function(e){return e.json()}).then(function(e){n.setState({dogData:e,loading:!1})}).catch(function(e){return n.setState({error:e})})},n.state={loading:!1,dogData:{},error:null},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.getDogData()},n.render=function(){var e=this.state,t=e.error,n=e.loading,a=e.dogData;return o.a.createElement(c.a,null,o.a.createElement("h1",null,"Your ",o.a.createElement("button",{onClick:this.getDogData},"random")," dog photo of the day"),o.a.createElement("div",null,t&&t),o.a.createElement("div",null,n?"loading...":o.a.createElement("img",{alt:"dog photos",src:a&&a.message})),o.a.createElement("p",null,o.a.createElement(u.Link,{to:"/breeds-list/"},"Breeds list")))},t}(o.a.Component);t.default=l},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(141),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(143),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,n){var a;e.exports=(a=n(145))&&a.default||a},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Random Dog Photo"}}}}},145:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(48),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},146:function(e,t,n){},148:function(e,t,n){"use strict";var a=n(144),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(149),l=n.n(c),s=n(142),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},m=(n(146),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});m.propTypes={children:u.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-ad2def549f820b3be1d3.js.map
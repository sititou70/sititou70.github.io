(self.webpackChunksititou70_blog=self.webpackChunksititou70_blog||[]).push([[351],{523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!o(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],a[l[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},527:function(e,t,n){"use strict";var r=(0,n(9970).Z)({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});t.Z=r},8898:function(e,t,n){"use strict";var r=(0,n(9970).Z)({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});t.Z=r},9970:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function a(e){var t=function(t){var n=t.bgStyle,a=t.borderRadius,s=t.iconFillColor,c=t.round,l=t.size,u=o(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return r.createElement("svg",i({viewBox:"0 0 64 64",width:l,height:l},u),c?r.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):r.createElement("rect",{width:"64",height:"64",rx:a,ry:a,fill:e.color,style:n}),r.createElement("path",{d:e.path,fill:s}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}},6124:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(d,"canUseDOM",s),d}}},3723:function(e,t,n){"use strict";n.d(t,{G:function(){return I},L:function(){return y},M:function(){return x},P:function(){return T},_:function(){return s},a:function(){return a},b:function(){return u},c:function(){return l},g:function(){return d},h:function(){return c}});var r=n(7294),i=(n(2369),n(5697)),o=n.n(i);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(i[n]=e[n]);return i}var c=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var l=function(e){var t;return function(e){var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,n,r,i){return void 0===i&&(i={}),a({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:a({},i,{opacity:t?1:0})})}function d(e,t,n,r,i,o,s,c){var l={};o&&(l.backgroundColor=o,"fixed"===n?(l.width=r,l.height=i,l.backgroundColor=o,l.position="relative"):("constrained"===n||"fullWidth"===n)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);var u=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}var p,f=["children"],g=function(e){var t=e.layout,n=e.width,i=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},y=function(e){var t=e.children,n=s(e,f);return r.createElement(r.Fragment,null,r.createElement(g,a({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],m=["fallback","sources","shouldLoad"],b=function(e){var t=e.src,n=e.srcSet,i=e.loading,o=e.alt,c=void 0===o?"":o,l=e.shouldLoad,u=s(e,h);return r.createElement("img",a({},u,{decoding:"async",loading:i,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:c}))},v=function(e){var t=e.fallback,n=e.sources,i=void 0===n?[]:n,o=e.shouldLoad,c=void 0===o||o,l=s(e,m),u=l.sizes||(null==t?void 0:t.sizes),d=r.createElement(b,a({},l,t,{sizes:u,shouldLoad:c}));return i.length?r.createElement("picture",null,i.map((function(e){var t=e.media,n=e.srcSet,i=e.type;return r.createElement("source",{key:t+"-"+i+"-"+n,type:i,media:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,sizes:u})})),d):d};b.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},v.displayName="Picture",v.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};var w=["fallback"],T=function(e){var t=e.fallback,n=s(e,w);return t?r.createElement(v,a({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",a({},n))};T.displayName="Placeholder",T.propTypes={fallback:i.string,sources:null==(p=v.propTypes)?void 0:p.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var x=function(e){return r.createElement(r.Fragment,null,r.createElement(v,a({},e)),r.createElement("noscript",null,r.createElement(v,a({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=v.propTypes;var k,C,O=function(e,t,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(i)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},S={image:o().object.isRequired,alt:O},E=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],L=new Set,j=function(e){var t=e.as,i=void 0===t?"div":t,o=e.image,l=e.style,u=e.backgroundColor,d=e.className,p=e.class,f=e.onStartLoad,g=e.onLoad,y=e.onError,h=s(e,E),m=o.width,b=o.height,v=o.layout,w=function(e,t,n){var r={},i="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}(m,b,v),T=w.style,x=w.className,O=s(w,A),S=(0,r.useRef)(),j=(0,r.useMemo)((function(){return JSON.stringify(o.images)}),[o.images]);p&&(d=p);var I=function(e,t,n){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,m,b);return(0,r.useEffect)((function(){k||(k=Promise.all([n.e(774),n.e(217)]).then(n.bind(n,9217)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return C=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,r=S.current.querySelector("[data-gatsby-image-ssr]");return r&&c()?(r.complete?(null==f||f({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(j)):C&&L.has(j)?void 0:(k.then((function(n){var r=n.renderImageToString,i=n.swapPlaceholderImage;S.current&&(S.current.innerHTML=r(a({isLoading:!0,isLoaded:L.has(j),image:o},h)),L.has(j)||(e=requestAnimationFrame((function(){S.current&&(t=i(S.current,j,L,l,f,g,y))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[o]),(0,r.useLayoutEffect)((function(){L.has(j)&&C&&(S.current.innerHTML=C(a({isLoading:L.has(j),isLoaded:L.has(j),image:o},h)),null==f||f({wasCached:!0}),null==g||g({wasCached:!0}))}),[o]),(0,r.createElement)(i,a({},O,{style:a({},T,l,{backgroundColor:u}),className:x+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));I.propTypes=S,I.displayName="GatsbyImage";var P,N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],M=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},G=new Set(["fixed","fullWidth","constrained"]),_={src:o().string.isRequired,alt:O,width:M,height:M,sizes:o().string,layout:function(e){if(void 0!==e.layout&&!G.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(P=I,function(e){var t=e.src,n=e.__imageData,i=e.__error,o=s(e,N);return i&&console.warn(i),n?r.createElement(P,a({image:n},o)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=_},2369:function(e){"use strict";var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,r=!1,i=0;i<e.length;i++){var o=e[i];t&&/[a-zA-Z]/.test(o)&&o.toUpperCase()===o?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,r=n,n=!0,i++):n&&r&&/[a-zA-Z]/.test(o)&&o.toLowerCase()===o?(e=e.slice(0,i-1)+"-"+e.slice(i-1),r=n,n=!1,t=!0):(t=o.toLowerCase()===o&&o.toUpperCase()!==o,r=n,n=o.toUpperCase()===o&&o.toLowerCase()!==o)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},3160:function(e,t,n){"use strict";n.d(t,{A:function(){return y}});var r=n(6298),i=n(2298),o=n(8367),a=n(1942),s=n(1597),c=n(3723),l=n(8898),u=n(527),d=n(5470),p=function(){var e,t,n,i=(0,s.useStaticQuery)("1530353647"),o=(0,d.l)(null===(e=i.site)||void 0===e?void 0:e.siteMetadata);return(0,r.tZ)("footer",{css:f},(0,r.tZ)("h2",null,"書いた人"),(0,r.tZ)("div",{className:"bio"},(0,r.tZ)(c.G,{className:"author_icon",image:(0,c.c)((0,d.l)(i.avatar)),alt:(0,d.l)(o.author)}),(0,r.tZ)("div",null,(0,r.tZ)("strong",null,(0,d.l)(o.author)),(0,r.tZ)("p",null,(0,d.l)(o.author_introduction)))),(0,r.tZ)("div",{className:"social_icons"},(0,r.tZ)("a",{href:"https://twitter.com/"+(0,d.l)(null===(t=o.social)||void 0===t?void 0:t.twitter),"aria-label":"sititou70's Twitter account link",target:"_blank",rel:"noopener"},(0,r.tZ)(l.Z,null)),(0,r.tZ)("a",{href:"https://www.facebook.com/profile.php?id="+(0,d.l)(null===(n=o.social)||void 0===n?void 0:n.facebook),"aria-label":"sititou70's Facebook account link",target:"_blank",rel:"noopener"},(0,r.tZ)(u.Z,null))))},f=(0,r.iv)("padding:",(0,a.eC)(3)," ",(0,a.eC)()," ",(0,a.eC)(),';h2{font-size:1rem;font-weight:normal;text-align:center;&::before{content:"-";}&::after{content:"-";}}.bio{display:flex;justify-content:center;align-items:center;gap:',(0,a.eC)(.5),";width:100%;.author_icon{min-width:50px;border-radius:50%;}div p{margin:0;}}.social_icons{display:flex;justify-content:center;align-items:center;gap:",(0,a.eC)(.5),";margin-top:",(0,a.eC)(.5),";a{display:inline-block;width:",(0,a.eC)(),";height:",(0,a.eC)(),";box-shadow:",(0,a.AF)(2),";border-radius:50%;overflow:hidden;transition:box-shadow 0.3s ease,filter 0.3s ease;&:hover,&:focus-within{box-shadow:",(0,a.AF)(4),";filter:brightness(70%);}svg{width:",(0,a.eC)(),";height:",(0,a.eC)(),";}}}","","",""),g=btoa('<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg\n   xmlns:dc="http://purl.org/dc/elements/1.1/"\n   xmlns:cc="http://creativecommons.org/ns#"\n   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n   xmlns:svg="http://www.w3.org/2000/svg"\n   xmlns="http://www.w3.org/2000/svg"\n   xmlns:xlink="http://www.w3.org/1999/xlink"\n   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"\n   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n   id="bg"\n   data-name="bg"\n   viewBox="0 0 1000 10000"\n   version="1.1"\n   sodipodi:docname="bg.svg"\n   inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)"\n   width="1000"\n   height="10000">\n  <metadata\n     id="metadata69">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about="">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n        <dc:title>bg</dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <sodipodi:namedview\n     borderopacity="1"\n     objecttolerance="10"\n     gridtolerance="10"\n     guidetolerance="10"\n     inkscape:pageopacity="0"\n     inkscape:pageshadow="2"\n     inkscape:window-width="1920"\n     inkscape:window-height="1043"\n     id="namedview67"\n     showgrid="true"\n     showguides="false"\n     inkscape:zoom="0.16571506"\n     inkscape:cx="1197.4113"\n     inkscape:cy="3254.7604"\n     inkscape:window-x="1600"\n     inkscape:window-y="0"\n     inkscape:window-maximized="1"\n     inkscape:current-layer="bg"\n     inkscape:snap-bbox="false">\n    <inkscape:grid\n       type="xygrid"\n       id="grid88"\n       enabled="true"\n       spacingx="10"\n       spacingy="10" />\n    <inkscape:grid\n       type="axonomgrid"\n       id="grid90"\n       units="mm"\n       empspacing="5"\n       enabled="false"\n       gridanglex="30"\n       spacingy="11.338583" />\n  </sodipodi:namedview>\n  <defs\n     id="defs52">\n    <linearGradient\n       inkscape:collect="always"\n       id="linearGradient1004">\n      <stop\n         style="stop-color:#0042ab;stop-opacity:0.66666669"\n         offset="0"\n         id="stop1000" />\n      <stop\n         style="stop-color:#bb0068;stop-opacity:0"\n         offset="1"\n         id="stop1002" />\n    </linearGradient>\n    <linearGradient\n       id="g5"\n       inkscape:collect="always">\n      <stop\n         id="stop976"\n         offset="0"\n         style="stop-color:#0042ab;stop-opacity:0.66666669" />\n      <stop\n         id="stop978"\n         offset="1"\n         style="stop-color:#9d00bb;stop-opacity:0" />\n    </linearGradient>\n    <linearGradient\n       inkscape:collect="always"\n       id="g4">\n      <stop\n         style="stop-color:#f2f703;stop-opacity:0.66666669"\n         offset="0"\n         id="stop924" />\n      <stop\n         style="stop-color:#0200ff;stop-opacity:0"\n         offset="1"\n         id="stop926" />\n    </linearGradient>\n    <linearGradient\n       id="g2"\n       inkscape:collect="always">\n      <stop\n         id="stop880"\n         offset="0"\n         style="stop-color:#0069ab;stop-opacity:0.66666669" />\n      <stop\n         id="stop882"\n         offset="1"\n         style="stop-color:#828400;stop-opacity:0" />\n    </linearGradient>\n    <linearGradient\n       inkscape:collect="always"\n       id="g1">\n      <stop\n         style="stop-color:#ab0084;stop-opacity:0.66666669"\n         offset="0"\n         id="stop5481" />\n      <stop\n         style="stop-color:#0072bb;stop-opacity:0"\n         offset="1"\n         id="stop5483" />\n    </linearGradient>\n    <linearGradient\n       inkscape:collect="always"\n       id="g3">\n      <stop\n         style="stop-color:#b8008d;stop-opacity:0.66666669"\n         offset="0"\n         id="stop4905" />\n      <stop\n         style="stop-color:#008007;stop-opacity:0"\n         offset="1"\n         id="stop4907" />\n    </linearGradient>\n    <style\n       id="style50">\n      .cls-1 {\n        fill: #1d3e53;\n      }\n      .cls-2 {\n        fill: #476d7c;\n      }\n      .cls-3 {\n        fill: #77abb7;\n      }\n      .cls-4 {\n        fill: #254b62;\n      }\n    </style>\n    <linearGradient\n       inkscape:collect="always"\n       xlink:href="#g2"\n       id="linearGradient4911"\n       x1="289.20645"\n       y1="301.5192"\n       x2="-39.367596"\n       y2="813.64032"\n       gradientUnits="userSpaceOnUse"\n       gradientTransform="matrix(1.3905673,0,0,1.3905673,742.25747,1390.4019)" />\n    <linearGradient\n       inkscape:collect="always"\n       xlink:href="#g3"\n       id="linearGradient5477"\n       x1="1631.371"\n       y1="565.68555"\n       x2="1242.4622"\n       y2="-247.48726"\n       gradientUnits="userSpaceOnUse"\n       gradientTransform="translate(1629.1752,2694.8605)" />\n    <linearGradient\n       inkscape:collect="always"\n       xlink:href="#g1"\n       id="linearGradient5487"\n       x1="636.39618"\n       y1="708.57874"\n       x2="106.06609"\n       y2="178.24861"\n       gradientUnits="userSpaceOnUse"\n       gradientTransform="translate(-78.562368,-135.04268)" />\n    <linearGradient\n       inkscape:collect="always"\n       xlink:href="#g5"\n       id="linearGradient994"\n       gradientUnits="userSpaceOnUse"\n       gradientTransform="translate(367.69794,367.69794)"\n       x1="5374.0117"\n       y1="5374.0117"\n       x2="6045.7603"\n       y2="6045.7603" />\n    <linearGradient\n       inkscape:collect="always"\n       xlink:href="#linearGradient1004"\n       id="linearGradient998"\n       gradientUnits="userSpaceOnUse"\n       gradientTransform="translate(367.69794,367.69794)"\n       x1="5374.0093"\n       y1="5374.0093"\n       x2="6788.2227"\n       y2="5939.6943" />\n    <linearGradient\n       inkscape:collect="always"\n       xlink:href="#g4"\n       id="linearGradient924"\n       gradientUnits="userSpaceOnUse"\n       x1="-369.48633"\n       y1="6359.3896"\n       x2="-791.29779"\n       y2="5955.1753" />\n  </defs>\n  <title\n     id="title54">bg</title>\n  <circle\n     id="path395"\n     cx="777.02161"\n     cy="2189.978"\n     r="382.40601"\n     style="fill:url(#linearGradient4911);fill-opacity:1;stroke-width:1.3905673" />\n  <rect\n     style="fill:url(#linearGradient5477);fill-opacity:1;stroke-width:0.97876388"\n     id="rect5469"\n     width="500.00003"\n     height="1050"\n     x="2760.5557"\n     y="2351.9692"\n     transform="rotate(45)" />\n  <rect\n     style="fill:url(#linearGradient5487);fill-opacity:1"\n     id="rect5479"\n     width="1000"\n     height="850"\n     x="-230.03476"\n     y="-347.17566"\n     transform="rotate(-45)" />\n  <g\n     id="g1079"\n     transform="matrix(2.8423679,0.12108268,-0.12108268,2.8423679,3320.228,-10830.986)"\n     style="fill:url(#linearGradient924);fill-opacity:1">\n    <path\n       id="path1041-7-5"\n       d="m -800,5850 c 0,138.0712 111.9288,250 250,250 138.07119,0 250,-111.9288 250,-250 0,-138.0712 111.92881,-250 250,-250 138.07119,0 250,111.9288 250,250 0,132.6082 -52.67842,259.7852 -146.44661,353.5534 C -40.2148,6297.3216 -167.39176,6350 -300,6350 -432.60824,6350 -559.7852,6297.3216 -653.5534,6203.5534 -747.3216,6109.7852 -800,5982.6082 -800,5850"\n       style="fill:url(#linearGradient924);fill-opacity:1;stroke-width:1.05409253"\n       inkscape:connector-curvature="0"\n       sodipodi:nodetypes="cscscsssc" />\n  </g>\n  <rect\n     style="fill:url(#linearGradient994);fill-opacity:1;stroke-width:1.04880881"\n     id="rect902"\n     width="1100"\n     height="300"\n     x="5741.707"\n     y="5741.707"\n     transform="rotate(45)" />\n  <rect\n     style="fill:url(#linearGradient998);fill-opacity:1.0;stroke-width:0.83665997"\n     id="rect902-5"\n     width="699.99988"\n     height="300"\n     x="6491.7056"\n     y="6041.707"\n     transform="rotate(45)" />\n</svg>\n'),y=function(e){var t=e.bg,n=void 0!==t&&t,a=e.className,s=e.children;return(0,r.tZ)("div",{className:a,css:h},(0,r.tZ)(r.xB,{styles:(0,r.iv)("body{background-color:var(--color-bg);",n&&(0,r.iv)("background-image:url(data:image/svg+xml;base64,",g,");background-repeat:no-repeat;background-size:100%;","","",""),";}","","","")}),(0,r.tZ)(r.xB,{styles:i.ZP}),(0,r.tZ)(r.xB,{styles:o.G}),(0,r.tZ)("main",null,s),(0,r.tZ)(p,null))},h=(0,r.iv)("margin:0 auto;main{padding:0 ",(0,a.eC)(),";}","","","")},719:function(e,t,n){"use strict";n.d(t,{H:function(){return ve}});var r,i,o,a,s=n(5785),c=n(1597),l=n(5697),u=n.n(l),d=n(6124),p=n.n(d),f=n(523),g=n.n(f),y=n(7294),h=n(4756),m=n.n(h),b="bodyAttributes",v="htmlAttributes",w="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(T).map((function(e){return T[e]})),"charset"),k="cssText",C="href",O="http-equiv",S="innerHTML",E="itemprop",A="name",L="property",j="rel",I="src",P="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",G="defer",_="encodeSpecialCharacters",R="onChangeClientState",z="titleTemplate",Z=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),U=[T.NOSCRIPT,T.SCRIPT,T.STYLE],q="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=ee(e,T.TITLE),n=ee(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,M);return t||r||void 0},X=function(e){return ee(e,R)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],c=s.toLowerCase();-1===t.indexOf(c)||n===j&&"canonical"===e[n].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==S&&s!==k&&s!==E||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],c=m()({},r[s],i[s]);r[s]=c}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,ie="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,se=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,i),le(d,p);var f={baseTag:de(T.BASE,n),linkTags:de(T.LINK,o),metaTags:de(T.META,a),noscriptTags:de(T.NOSCRIPT,s),scriptTags:de(T.SCRIPT,l),styleTags:de(T.STYLE,u)},g={},y={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(g[e]=n),r.length&&(y[e]=f[e].oldTags)})),t&&t(),c(e,g,y)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var c=a[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===i.indexOf(c)&&i.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);i.length===o.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},de=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===k)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(q,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},ge=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,i=fe(n,r),[y.createElement(T.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=pe(n),o=ce(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+V(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===S||n===k){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),y.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===S||e===k)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},ye=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:ge(T.BASE,t,r),bodyAttributes:ge(b,n,r),htmlAttributes:ge(v,i,r),link:ge(T.LINK,o,r),meta:ge(T.META,a,r),noscript:ge(T.NOSCRIPT,s,r),script:ge(T.SCRIPT,c,r),style:ge(T.STYLE,l,r),title:ge(T.TITLE,{title:d,titleAttributes:p},r)}},he=p()((function(e){return{baseTag:Q([C,P],e),bodyAttributes:$(b,e),defer:ee(e,G),encode:ee(e,_),htmlAttributes:$(v,e),linkTags:J(T.LINK,[j,C],e),metaTags:J(T.META,[A,x,O,L,E],e),noscriptTags:J(T.NOSCRIPT,[S],e),onChangeClientState:X(e),scriptTags:J(T.SCRIPT,[I,S],e),styleTags:J(T.STYLE,[k],e),title:K(e),titleAttributes:$(w,e)}}),(function(e){ae&&ie(ae),e.defer?ae=re((function(){se(e,(function(){ae=null}))})):(se(e),ae=null)}),ye)((function(){return null})),me=(i=he,a=o=function(e){function t(){return F(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!g()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return B({},r,((t={})[n.type]=[].concat(r[n.type]||[],[B({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return B({},i,((t={})[r.type]=a,t.titleAttributes=B({},o),t));case T.BODY:return B({},i,{bodyAttributes:B({},o)});case T.HTML:return B({},i,{htmlAttributes:B({},o)})}return B({},i,((n={})[r.type]=B({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=B({},t);return Object.keys(e).forEach((function(t){var r;n=B({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return y.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[Z[n]||n]=e[n],t}),t)}(W(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=W(e,["children"]),r=B({},n);return t&&(r=this.mapChildrenToProps(t,r)),y.createElement(i,r)},H(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(y.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=ye({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var be=n(6298),ve=function(e){var t=e.title,n=e.url,r=e.description,i=e.image_url,o=e.lang,a=void 0===o?"ja":o,l=e.meta,u=void 0===l?[]:l,d=(0,c.useStaticQuery)("63159454").site,p=r||d.siteMetadata.description;return(0,be.tZ)(me,{htmlAttributes:{lang:a},title:t,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:p},{property:"og:title",content:t},{property:"og:url",content:n},{property:"og:description",content:p},i?{property:"og:image",content:i}:null,{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:t},{name:"twitter:description",content:p},{name:"google-site-verification",content:"neaaOfsSNMi3PQqrNiSHC81BZmqMDlfXRCTcDe340mU"}].concat((0,s.Z)(u)).filter((function(e){return null!==e}))})}},8367:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var r=n(6298),i=n(1942),o=(0,r.iv)("html{font-size:",(0,i.eC)(.5),";}body{color:var(--color-text);line-height:",i.vz,";font-family:serif;letter-spacing:0.1em;}*{box-sizing:border-box;word-break:break-word;}",[1,2,3,4,5,6].map((function(e){return(0,r.iv)("h",e,"{font-size:",1+(6-e)/5,"rem;line-height:",i.vz,";}","","","")}))," a{color:var(--color-link);text-decoration:underline;vertical-align:bottom;&:hover{text-decoration:none;}&:visited{color:var(--color-link-visited);}}","","","")},2298:function(e,t,n){"use strict";n.d(t,{IO:function(){return r},Xw:function(){return i}});var r=36,i=r/2,o={name:"1ndhzwe",styles:"body{--light-mode:1;--color-key:#1d3e53;--color-text:#223;--color-link:var(--color-key);--color-link-visited:#531d46;--color-bg:#eeebeb;--color-shadow:rgba(0, 0, 0, 0.1);--color-border:#ccc;--color-code-text:#dde;--color-code-bg:#012;--color-code-bg-light:#234;--px-index-width:1100px;--px-postpage-width:800px;--px-border-radius:4px;}body.dark{--light-mode:0;--color-text:#dde;--color-link:#2c9ee8;--color-link-visited:#d515a6;--color-bg:#10151c;--color-shadow:rgba(0, 0, 0, 1);--color-border:#444;--color-code-bg:#001;--color-code-bg-light:#123;}"};t.ZP=o},1942:function(e,t,n){"use strict";n.d(t,{AF:function(){return a},S1:function(){return s},Xi:function(){return l},eC:function(){return i},vz:function(){return o}});var r=n(2298),i=function(e){return void 0===e&&(e=1),r.IO*e+"px"},o="calc(1em + "+r.Xw+"px)",a=function(e){return"0 "+e+"px "+4*e+"px rgba(0, 0, 0, 0.2)"+", "+("0 "+e+"px "+2*e+"px rgba(0, 0, 0, 0.2)")},s=function(e,t,n){return"calc(("+t+") * var("+e+") + ("+n+") * (1 - var("+e+")))"},c=function(e){var t=function(e){return parseInt(e,16)};return{red:t(e.slice(1,3)),green:t(e.slice(3,5)),blue:t(e.slice(5,7))}},l=function(e,t,n){var r=c(t),i=c(n);return"rgb("+s(e,""+r.red,""+i.red)+", "+s(e,""+r.green,""+i.green)+", "+s(e,""+r.blue,""+i.blue)+")"}},5470:function(e,t,n){"use strict";n.d(t,{l:function(){return r}});var r=function(e){if(void 0===e)throw"unexpected undefined value";if(null===e)throw"unexpected null value";return e}}}]);
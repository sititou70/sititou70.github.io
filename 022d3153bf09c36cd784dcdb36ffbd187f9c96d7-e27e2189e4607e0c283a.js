"use strict";(self.webpackChunksititou70_blog=self.webpackChunksititou70_blog||[]).push([[790],{6527:function(t,e,i){i.d(e,{y:function(){return c}});var n=i(3723),r=i(6298),a=i(1942),o=i(5470),l=i(1597),s=function(){return(0,l.useStaticQuery)("2576926420")},c=function(t){var e,i,a,l,c,h=t.id,u=t.simple,g=void 0!==u&&u,m=t.className,v=(0,o.l)(function(t){return s().allMarkdownRemark.nodes.find((function(e){return e.id===t}))}(h)),p=function(t,e){return s()[e?"smallImages":"normalImages"].nodes.find((function(e){var i;return(null===(i=e.parent)||void 0===i?void 0:i.id)===t}))}(h,g);return(0,r.tZ)("a",{href:(0,o.l)(null===(e=v.fields)||void 0===e?void 0:e.slug),className:m,css:(0,r.iv)(d,g&&f,"","","","")},p&&(0,r.tZ)("div",{className:"image_container"},(0,r.tZ)(n.G,{className:"catch_image",image:(0,o.l)((0,n.c)((0,o.l)(null===(i=p.imageFile)||void 0===i?void 0:i.childImageSharp))),alt:(0,o.l)(null===(a=v.frontmatter)||void 0===a?void 0:a.title)})),(0,r.tZ)("h2",null,(0,o.l)(null===(l=v.frontmatter)||void 0===l?void 0:l.title)),(0,r.tZ)("span",null,(0,o.l)(null===(c=v.frontmatter)||void 0===c?void 0:c.date)))},d=(0,r.iv)("display:block;text-decoration:none;border:none;overflow:hidden;.image_container{display:block;overflow:hidden;.catch_image{width:100%;height:",(0,a.eC)(5),";max-height:30vh;margin:0;object-fit:cover;vertical-align:bottom;transform:scale(1.05);transition:transform 0.3s ease;}}&:hover,&:focus-within{.image_container{.catch_image{transform:scale(1);}}}h2{margin:",(0,a.eC)(.25)," 0 0;font-size:1.2rem;}span{display:inline-block;width:100%;margin:0;font-size:0.9rem;}&:hover,&:focus-within{h2{text-decoration:underline;}}","","",""),f=(0,r.iv)(".image_container{width:",(0,a.eC)(3),";.catch_image{height:",(0,a.eC)(3),";}}h2{font-size:1rem;}span{display:none;}","","","")},9472:function(t,e,i){i.d(e,{P:function(){return a}});var n=i(1942),r=i(6298),a=function(t){var e=t.size,i=t.className,n=2.25*e,a=e,l="\n    M 0 0\n    v "+a+"\n    h "+n+"\n    v "+-a+"\n  ",s="\n    M "+.2*n+" "+.4*a+"\n    L "+.3*n+" "+.4*a+"\n    C "+.35*n+" "+0*a+", "+.55*n+" "+0*a+", "+.6*n+" "+.4*a+"\n    L "+.6*n+" "+.4*a+"\n    C "+.8*n+" "+.4*a+", "+.8*n+" "+a+", "+.6*n+" "+a+"\n    L "+.2*n+" "+a+"\n    C "+0*n+" "+a+", "+0*n+" "+.4*a+", "+.2*n+" "+.4*a+"\n  ";return(0,r.tZ)("button",{className:"theme-toggle-button "+i,role:"switch","aria-label":"ダークテーマを有効にする",css:o(n,a),onClick:function(){__setPreferredTheme("light"===__theme?"dark":"light")}},(0,r.tZ)("svg",{className:"light",width:n,height:a},(0,r.tZ)("path",{d:l,fill:"#68c6fd"}),(0,r.tZ)("g",{transform:"translate("+.475*n+", "+.2*a+") scale(0.2)"},(0,r.tZ)("path",{d:s,fill:"#fff"})),(0,r.tZ)("g",{transform:"translate("+.6*n+", "+.45*a+") scale(0.3)"},(0,r.tZ)("path",{d:s,fill:"#fff"}))),(0,r.tZ)("svg",{className:"dark",width:n,height:a},(0,r.tZ)("path",{d:l,fill:"#0f1441"}),(0,r.tZ)("circle",{cx:.2*n,cy:.65*a,r:.04*a,fill:"#fff"}),(0,r.tZ)("circle",{cx:.3*n,cy:.25*a,r:.03*a,fill:"#fff"}),(0,r.tZ)("circle",{cx:.45*n,cy:.5*a,r:.02*a,fill:"#fff"})),(0,r.tZ)("script",{dangerouslySetInnerHTML:{__html:"("+function(){var t=document.querySelector(".theme-toggle-button");if(null!==t){var e=function(){return t.setAttribute("aria-checked","light"===__theme?"false":"true")};null==t||t.addEventListener("click",(function(){__setPreferredTheme("light"===__theme?"dark":"light"),e()})),e()}}.toString()+")()"}}))},o=function(t,e){return(0,r.iv)("position:relative;width:",t,"px;height:",e,"px;margin:0;padding:0;background:none;border:none;border-radius:",e/2,"px;transition:filter 0.3s ease;svg{position:absolute;top:0;left:0;border:1px solid var(--color-border);border-radius:",e/2,"px;overflow:hidden;transition:opacity 0.3s ease,filter 0.3s ease;&.light{opacity:",(0,n.S1)("--light-mode","1","0"),";}&.dark{opacity:",(0,n.S1)("--light-mode","0","1"),';}}&::after{content:"";position:absolute;top:50%;left:',(0,n.S1)("--light-mode",.2*e+"px",t-.9*e+"px"),";display:block;width:",.7*e,"px;height:",.7*e,"px;background:",(0,n.Xi)("--light-mode","#ffef22","#dcf4f6"),";border-radius:",.7*e/2,"px;box-shadow:",(0,n.AF)(2),";transform:translateY(-53%);transition:left 0.3s ease,background-color 0.3s ease;}&:hover{svg{&.light{filter:brightness(70%);}&.dark{filter:brightness(200%);}}&::after{box-shadow:",(0,n.AF)(4),";}}&:focus-within{outline:",(0,n.eC)(.06)," var(--color-border) dashed;}","","","")}}}]);
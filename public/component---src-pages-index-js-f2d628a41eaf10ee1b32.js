(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4qxs":function(e,t){},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),l=r(a("VbXa")),s=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,A=b&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+d+l+s+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,l=e.ariaHidden,s=d.default.createElement(O,(0,o.default)({ref:t,src:a},n,{ariaHidden:l}));return r.length>1?d.default.createElement("picture",null,i(r),s):s})),O=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,l=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:l,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&A&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,l.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,l=e.imgStyle,s=void 0===l?{}:l,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,A=e.Tag,v=e.itemProp,S=e.loading,x=e.draggable,z=g||h;if(!z)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:C?1:0,transition:I?"opacity "+b+"ms":"none"},s),j="boolean"==typeof E?"lightgray":E,P={transitionDelay:b+"ms"},k=(0,o.default)({opacity:this.state.imgLoaded?0:1},I&&P,s,f),H={title:t,alt:this.state.isVisible?"":a,style:k,className:m,itemProp:v},T=this.state.isHydrated?p(z):z[0];if(g)return d.default.createElement(A,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(A,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),j&&d.default.createElement(A,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&P)}),T.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:z,generateSources:N}),T.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:z,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,y(z),d.default.createElement(O,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:S},T,{imageVariants:z}))}}));if(h){var W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(A,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},j&&d.default.createElement(A,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:j,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},I&&P)}),T.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:H,imageVariants:z,generateSources:N}),T.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:H,imageVariants:z,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,y(z),d.default.createElement(O,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,o.default)({alt:a,title:t,loading:S},T,{imageVariants:z}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function j(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}C.propTypes={resolutions:I,sizes:V,fixed:j(c.default.oneOfType([I,c.default.arrayOf(I)])),fluid:j(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=C;t.default=P},KWQJ:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCR0XLBDOiOCAAAADBElEQVRo3uWYS0hUYRiG3/9oms4izOgiUlBEpWWRtCm6WQhuAokio10t2lRCF4qCbBPtotpJRBC1KlxE0KY20U2KTJEsijIqU3Q0RdO8PC1GTc2ZOefMzPmh3u3wfs/7zfnPN/980v8uE/0jclWkRQqpXx36ojoz5L4sM7RGecpVhvrUrAYT9pSKPM7wihEmqof7VJAR1xtiPw/oneQd5iWnmO8OPpvL9BNNrRzEierN4ixdUb39XCQnHr6MFuLpOUum9W7lY1zvV0pj4Y8zHLcEQDub//JWMujKO0RlNPxpVwUi+smmSd5zHrxwcjp8+ZRDF0+dFI57D3tywgg7puKXxjg80dTITEmimF+evZ2TzhGGWs8lAM5LZPPOl/cJf2YQu3yVgH7yOebTC+Vj+HSafBe5RqtvbyNpkQA7fZdIVOWSI6nC1YhMhXZLhpBaFbIUoE9zHZVaw0vZKnG02hpeklY7KrAaoNB2gJWGLs2yGKDTMKh0iwEGHfVaxEs9jjqsBgg7emM1wBtH9VYD1Dt6ZTVAnSFXbXISr+RLw5rnmA7VWuv/melwJN2yFuCmZCTm6IsyLeB/Kt+EHcm064aV/q+b8Oi/Y5apUWkB44e0wryPXMlk3upa4P1Xm/fS+H6A+WoK9FexU8tNm6SxCWC+62ig/VdG8BOE4W5g1/GaP9wJKxpy9EKLA+i+WWujrGwoJJzy7rsoihGOLfSlFN/LxjjfD5voTiF+m4tHxIYUPYh21rs8JRTwOen4Tyz3cFDJoz6p+AbyPb4rzOZx0vAP8TNlCXEvKfjbkV2SnwjpXE0Yf4lELnwYLiQAH+FEAvDxEEdc7k+naoA9ScBLEvt8bAK7Y26FPUfY7nE+fmNNEvGSxDraXOMbWZhkvCSxgmZX+KfMSQFekljA67j4GrJShJckcngUE38lobfeVYRM7kSBj1CVYvhohDSqp8EPciAQvCRhqJqC76EsMPxoiEMT5mMLxQHjJYm9DADwgaUW8JJECT+oZa4lvCSximyL+H9CvwE30LN435nsjQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wOS0yOVQyMzo0NDoxNiswMDowMEn6UPQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDktMjlUMjM6NDQ6MTYrMDA6MDA4p+hIAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return h}));var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),l=a("vrFN"),s=a("9eSz"),o=a.n(s),d=a("Wbzz"),c=function(){var e=Object(d.useStaticQuery)("2816885206").allContentfulPizzas.edges;return i.a.createElement("div",null,i.a.createElement("ul",{className:"menu-items-grid"},e.map((function(e){var t=e.node;return i.a.createElement("li",{key:t.id,className:"menu-item"},i.a.createElement("h3",null,t.name,i.a.createElement("span",{className:"price",style:{marginLeft:"20px"}},t.price||12,"€")),i.a.createElement("p",null,t.description.description))}))))},u=function(){var e=Object(d.useStaticQuery)("849287457").allContentfulDesserts.edges;return i.a.createElement("div",null,i.a.createElement("ul",{className:"menu-items-grid"},e.map((function(e){var t=e.node;return i.a.createElement("li",{key:t.id,className:"menu-item"},i.a.createElement("h3",null,t.name,i.a.createElement("span",{className:"price",style:{marginLeft:"20px"}},t.price||6,"€")),i.a.createElement("p",null,t.description.description))}))))},f=(a("4qxs"),a("nXbZ"),function(){var e,t=Object(r.useState)("pizzas"),a=t[0],n=t[1];return e="pizzas"===a?c:"desserts"===a?u:c,i.a.createElement("section",{className:"menu"},i.a.createElement("h2",null,"La carte"),i.a.createElement("ul",{className:"menu-headers"},i.a.createElement("li",{className:"menu-header  "+("pizzas"===a?"active":""),onClick:function(){return n("pizzas")}},"Pizzas"),i.a.createElement("li",{className:"menu-header "+("desserts"===a?"active":""),onClick:function(){return n("desserts")}},"Desserts")),i.a.createElement(e,null))}),m=function(){var e=Object(d.useStaticQuery)("2658282500").allInstaNode.edges;return i.a.createElement("div",{className:"insta"},i.a.createElement("h2",null,"Suivez notre flux Instagram"," ",i.a.createElement("a",{href:"https://www.instagram.com/"+e[0].node.username+"/",target:"_blank",rel:"noreferrer"},"@",i.a.createElement("span",{className:"cool-link"},e[0].node.username))),i.a.createElement("ul",{className:"insta-posts"},e.map((function(e){var t=e.node;return i.a.createElement("li",{key:t.id,className:"insta-post"},i.a.createElement(o.a,{fixed:t.localFile.childImageSharp.fixed}),i.a.createElement("a",{href:"https://www.instagram.com/p/"+t.id+"/"},i.a.createElement("div",{className:"overlay"},t.likes?i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{className:"icon",src:a("KWQJ"),alt:"like icon"}),i.a.createElement("p",{className:"text"},t.likes)):i.a.createElement("p",{className:"text",style:{textAlign:"center"}},"Soyez la première personne à aimer ça"))))}))))},p=a("dI71"),g=function(e){function t(){return e.apply(this,arguments)||this}return Object(p.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{width:"100%",minHeight:"50vh",maxHeight:"600px",height:"75vh"}},i.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.038693951099!2d2.634908715663806!3d48.55871267925927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f26a042f02c4c38!2sPizza%20Artisanale!5e1!3m2!1sfr!2sfr!4v1603262897757!5m2!1sfr!2sfr",title:"googlemap",style:{border:"0",width:"100%",height:"100%"}}))},t}(i.a.Component),h="1311124682";t.default=function(e){var t=e.data,r=t.contentfulRestaurant.isClosed,s=[[[0,0],[18.25,21]],[[11,14.5],[18.25,21]]],d=function(){if(!r){var e=new Date,t=e.getDay(),a=e.getHours(),i=e.getMinutes(),n=parseFloat(a+i/60*10);return 0===t?s[0].some((function(e){return e[0]<=n&&n<=e[1]})):s[1].some((function(e){return e[0]<=n&&n<=e[1]}))}};return i.a.createElement(n.a,null,i.a.createElement(l.a,null),i.a.createElement("section",{className:"hero"},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:a("wEa+"),alt:"logo de pizza artisanale"}),i.a.createElement("div",{className:"open"},i.a.createElement("p",null,i.a.createElement("span",{className:"pulse-button "+(d()?"green":"red")}),d()?"ouvert":"fermé"),i.a.createElement("p",null,i.a.createElement("a",{href:"tel:0782178257"},"07 82 17 82 57")))),i.a.createElement(o.a,{fluid:t.pizzaHero.childImageSharp.fluid,className:"hero-image"}),i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,"Pizzas artisanales 100% maison, ",i.a.createElement("br",null),"les meilleures de la région Melun - Vert Saint Denis"))),i.a.createElement("section",{className:"container"},i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"about-text"},i.a.createElement("h2",null,"Le mot du chef"),i.a.createElement("p",null,"Pâtes fraîches à fermentation lente. Sauce tomate maison retravaillée avec de l'ail du basilic sel poivre..... Patate poivrons poulet tout est cuit et cuisiné sur place et retravaillé.",i.a.createElement("br",null),"AUCUN PRODUIT CONGELÉ")),i.a.createElement("div",{className:"about-image"},i.a.createElement(o.a,{title:"le chef au travail",alt:"le chef au travail",fluid:t.photo1.childImageSharp.fluid})))),i.a.createElement("div",{className:"advertising"},i.a.createElement("p",null,"du lundi au samedi"),i.a.createElement("p",null,"11H00 - 14h30 / 18h15 - 21h30"),i.a.createElement("p",null,i.a.createElement("a",{href:"tel:0782178257"},"07 82 17 82 57"))),i.a.createElement("section",{className:"container"},i.a.createElement(f,null),i.a.createElement(m,null)),"undefined"!=typeof window&&i.a.createElement(g,null))}},nXbZ:function(e,t){},"wEa+":function(e,t,a){e.exports=a.p+"static/logo-beb7cb574949cf78dccf1c84957370a7.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-f2d628a41eaf10ee1b32.js.map
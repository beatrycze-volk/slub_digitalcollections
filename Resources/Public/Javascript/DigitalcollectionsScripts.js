function enterFullscreen(){setTimeout(function(){window.dispatchEvent(new Event("resize"))},220),$("body").addClass("fullscreen"),$("a.fullscreen").addClass("active"),Cookies.set("tx-dlf-pageview-zoomFullscreen","true")}function exitFullscreen(){setTimeout(function(){window.dispatchEvent(new Event("resize"))},220),$("body").removeClass("fullscreen"),$("a.fullscreen").removeClass("active"),Cookies.remove("tx-dlf-pageview-zoomFullscreen")}!function(s,f,p){function m(e,t){return typeof e===t}function g(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function h(e){return"function"!=typeof f.createElement?f.createElement(e):b?f.createElementNS.call(f,"http://www.w3.org/2000/svg",e):f.createElement.apply(f,arguments)}function a(e,t,n,o){var a,l,s,i,r,c="modernizr",d=h("div"),u=((r=f.body)||((r=h(b?"svg":"body")).fake=!0),r);if(parseInt(n,10))for(;n--;)(s=h("div")).id=o?o[n]:c+(n+1),d.appendChild(s);return(a=h("style")).type="text/css",a.id="s"+c,(u.fake?u:d).appendChild(a),u.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(f.createTextNode(e)),d.id=c,u.fake&&(u.style.background="",u.style.overflow="hidden",i=x.style.overflow,x.style.overflow="hidden",x.appendChild(u)),l=t(d,e),u.fake?(u.parentNode.removeChild(u),x.style.overflow=i,x.offsetHeight):d.parentNode.removeChild(d),!!l}function i(e,t){return function(){return e.apply(t,arguments)}}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(e,t){var n=e.length;if("CSS"in s&&"supports"in s.CSS){for(;n--;)if(s.CSS.supports(l(e[n]),t))return!0;return!1}if("CSSSupportsRule"in s){for(var o=[];n--;)o.push("("+l(e[n])+":"+t+")");return a("@supports ("+(o=o.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==function(e,t,n){var o;if("getComputedStyle"in s){o=getComputedStyle.call(s,e,t);var a=s.console;if(null!==o)n&&(o=o.getPropertyValue(n));else if(a){a[a.error?"error":"log"].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&e.currentStyle&&e.currentStyle[n];return o}(e,null,"position")})}return p}function r(e,t,n,o){function a(){s&&(delete z.style,delete z.modElem)}if(o=!m(o,"undefined")&&o,!m(n,"undefined")){var l=v(e,n);if(!m(l,"undefined"))return l}for(var s,i,r,c,d,u=["modernizr","tspan","samp"];!z.style&&u.length;)s=!0,z.modElem=h(u.shift()),z.style=z.modElem.style;for(r=e.length,i=0;i<r;i++)if(c=e[i],d=z.style[c],~(""+c).indexOf("-")&&(c=g(c)),z.style[c]!==p){if(o||m(n,"undefined"))return a(),"pfx"!=t||c;try{z.style[c]=n}catch(e){}if(z.style[c]!=d)return a(),"pfx"!=t||c}return a(),!1}function o(e,t,n,o,a){var l=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+S.join(l+" ")+l).split(" ");return m(t,"string")||m(t,"undefined")?r(s,t,o,a):function(e,t,n){var o;for(var a in e)if(e[a]in t)return!1===n?e[a]:m(o=t[e[a]],"function")?i(o,n||t):o;return!1}(s=(e+" "+y.join(l+" ")+l).split(" "),t,n)}function c(e,t,n){return o(e,p,p,t,n)}var d=[],u=[],e={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){u.push({name:e,fn:t,options:n})},addAsyncTest:function(e){u.push({name:null,fn:e})}},$=function(){};$.prototype=e,$=new $;var C=e._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];e._prefixes=C;var x=f.documentElement,b="svg"===x.nodeName.toLowerCase(),t="Moz O ms Webkit",y=e._config.usePrefixes?t.toLowerCase().split(" "):[];e._domPrefixes=y;var n="CSS"in s&&"supports"in s.CSS,w="supportsCSS"in s;$.addTest("supports",n||w);var S=e._config.usePrefixes?t.split(" "):[];e._cssomPrefixes=S;function k(e){var t,n=C.length,o=s.CSSRule;if(void 0===o)return p;if(!e)return!1;if((t=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in o)return"@"+e;for(var a=0;a<n;a++){var l=C[a];if(l.toUpperCase()+"_"+t in o)return"@-"+l.toLowerCase()+"-"+e}return!1}e.atRule=k;var T=e.testStyles=a;$.addTest("touchevents",function(){var t;if("ontouchstart"in s||s.DocumentTouch&&f instanceof DocumentTouch)t=!0;else{var e=["@media (",C.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(e,function(e){t=9===e.offsetTop})}return t});var M={elem:h("modernizr")};$._q.push(function(){delete M.elem});var z={style:M.elem.style};$._q.unshift(function(){delete z.style}),e.testProp=function(e,t,n){return r([e],p,t,n)},e.testAllProps=o;var E=e.prefixed=function(e,t,n){return 0===e.indexOf("@")?k(e):(-1!=e.indexOf("-")&&(e=g(e)),t?o(e,t,n):o(e,"pfx"))};e.testAllProps=c,$.addTest("csstransforms3d",function(){var t=!!c("perspective","1px",!0),e=$._config.usePrefixes;if(t&&(!e||"webkitPerspective"in x.style)){var n;$.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",e&&(n+=",(-webkit-transform-3d)")),T("#modernizr{width:0;height:0}"+(n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),function(e){t=7===e.offsetWidth&&18===e.offsetHeight})}return t}),$.addTest("csstransitions",c("transition","all",!0)),$.addTest("objectfit",!!E("objectFit"),{aliases:["object-fit"]}),function(){var e,t,n,o,a,l;for(var s in u)if(u.hasOwnProperty(s)){if(e=[],(t=u[s]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=m(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)1===(l=e[a].split(".")).length?$[l[0]]=o:(!$[l[0]]||$[l[0]]instanceof Boolean||($[l[0]]=new Boolean($[l[0]])),$[l[0]][l[1]]=o),d.push((o?"":"no-")+l.join("-"))}}(),function(e){var t=x.className,n=$._config.classPrefix||"";if(b&&(t=t.baseVal),$._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}$._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?x.className.baseVal=t:x.className=t)}(d),delete e.addTest,delete e.addAsyncTest;for(var P=0;P<$._q.length;P++)$._q[P]();s.Modernizr=$}(window,document),function(e){var t;if("function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),!t){var n=window.Cookies,o=window.Cookies=e();o.noConflict=function(){return window.Cookies=n,o}}}(function(){function i(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function c(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function e(r){function s(){}function n(e,t,n){if("undefined"!=typeof document){"number"==typeof(n=i({path:"/"},s.defaults,n)).expires&&(n.expires=new Date(+new Date+864e5*n.expires)),n.expires=n.expires?n.expires.toUTCString():"";try{var o=JSON.stringify(t);/^[\{\[]/.test(o)&&(t=o)}catch(e){}t=r.write?r.write(t,e):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var l in n)n[l]&&(a+="; "+l,!0!==n[l]&&(a+="="+n[l].split(";")[0]));return document.cookie=e+"="+t+a}}function t(e,t){if("undefined"!=typeof document){for(var n={},o=document.cookie?document.cookie.split("; "):[],a=0;a<o.length;a++){var l=o[a].split("="),s=l.slice(1).join("=");t||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var i=c(l[0]);if(s=(r.read||r)(s,i)||c(s),t)try{s=JSON.parse(s)}catch(e){}if(n[i]=s,e===i)break}catch(e){}}return e?n[e]:n}}return s.set=n,s.get=function(e){return t(e,!1)},s.getJSON=function(e){return t(e,!0)},s.remove=function(e,t){n(e,"",i(t,{expires:-1}))},s.defaults={},s.withConverter=e,s}(function(){})}),$(function(){$("html").removeClass("no-js"),$(".offcanvas-toggle").on("click",function(e){$(this).parent().toggleClass("open")}),$("li.submenu > a").on("click",function(e){$("li.submenu.open a").not(this).parent().removeClass("open"),$(this).parent().toggleClass("open")}),$("nav .nav-toggle").on("click",function(e){$(this).toggleClass("active"),$("nav .secondary-nav").toggleClass("open")}),$(".calendar-view div.issues h4").on("click",function(e){var t=$(this).parents("div.issues").find("div ul li a");1==t.length?window.open(t[0].href,"_self"):($(".calendar-view table td.open").not($(this).parents("td")).removeClass("open"),$(this).parents("td").toggleClass("open"))}),$(".tx-dlf-calendar, .tx-dlf-calendar-years").parents("body").addClass("calendar"),$(".tx-dlf-pagegrid-list").parents("body").addClass("gridview"),$(".tx-dlf-calendar .calendar-list-selection a.select-calendar-view").hasClass("active")&&$(".tx-dlf-calendar .calendar-list-selection a.select-calendar-view").removeClass("active"),$(".tx-dlf-calendar .calendar-list-selection a.select-calendar-view, .tx-dlf-calendar .calendar-view").addClass("active"),$(".tx-dlf-calendar .calendar-list-selection a").on("click",function(e){if(!$(this).hasClass("active")){var t="."+$(this).attr("class").replace("select-","");$(".tx-dlf-calendar .active").removeClass("active"),$(this).addClass("active"),$(t).addClass("active")}}),0<$(".provider img").length?$(".provider img").each(function(){(void 0!==this.naturalWidth&&0==this.naturalWidth||"uninitialized"==this.readyState)&&$(this).parents(".document-functions").addClass("missing-provider-image")}):$(".provider").parents(".document-functions").addClass("missing-provider-image"),$(".pages select option[selected]")[0]&&$("dl.mobile-meta").append('<dt class="mobile-page-number">No.</dt><dd class="mobile-page-number">'+$(".pages select option[selected]").text()+"</dd>"),$(".provider").append('<div class="mobile-controls" />'),$(".view-functions .pages form, .view-functions .zoom a.fullscreen, .fulltext-search-toggle").clone().appendTo(".provider .mobile-controls"),shortenMobileMetaElement=$(".provider dl.mobile-meta dd.tx-dlf-title a"),shortenMobileMetaTitle=shortenMobileMetaElement.text(),140<shortenMobileMetaTitle.length&&(shortenMobileMetaTitle=shortenMobileMetaTitle.substr(0,140)+"...",shortenMobileMetaElement.text(shortenMobileMetaTitle)),$(".submenu.downloads ul li")[0]||$(".submenu.downloads>a").replaceWith(function(){return $('<span title="'+$(this).attr("title")+'" class="'+$(this).attr("class")+'" id="'+$(this).attr("id")+'">'+$(this).html()+"</span>")}),1<$(".tx-dlf-metadata dl.tx-dlf-metadata-titledata").length&&(metadataToggleLabelMore=$('html[lang^="de"]')[0]?"mehr Metadaten":"more Metadata",metadataToggleLabelLess=$('html[lang^="de"]')[0]?"weniger Metadaten":"less Metadata",$(".control-bar .metadata-wrapper").append('<div class="metadata-toggle">'+metadataToggleLabelMore+"</div>"),$(".metadata-toggle").on("click",function(){$(".control-bar").hasClass("all-metadata")?(Cookies.remove("tx-dlf-allmetadata"),$(this).text(metadataToggleLabelMore)):(Cookies.set("tx-dlf-allmetadata","true"),$(this).text(metadataToggleLabelLess)),$(".control-bar").toggleClass("all-metadata").find("dl:nth-child(n+3)").slideToggle()})),$("a.fullscreen").on("click",function(){($("body.fullscreen")[0]?exitFullscreen:enterFullscreen)()}),Cookies.get("tx-dlf-pageview-zoomFullscreen")&&($("body").addClass("fullscreen static"),$(".zoom .fullscreen").addClass("active")),$("ul.toc ul li.current")[0]&&(tocPlaceholderLabel=$('html[lang^="de"]')[0]?"Einige Einträge sind ausgeblendet":"Some entires are hidden",tocPlaceholderTitle=$('html[lang^="de"]')[0]?"Hier klicken um alle Einträge zu ziegen":"Click to show all entries",$("ul.toc ul li.current").first().prevAll(":eq(4)").prevUntil(":nth-child(2)").hide(),$("ul.toc ul li:nth-child(2)").after('<li class="placeholder" title="'+tocPlaceholderTitle+'">'+tocPlaceholderLabel+"</li>"),$("ul.toc ul li.placeholder").on("click",function(){$(this).remove(),$("ul.toc ul li").slideDown()})),$(".tx-dlf-toolsFulltextsearch form")[0]?$(".fulltext-search-toggle").on("click",function(){$("body").toggleClass("search-indocument-active"),$(".tx-dlf-toolsFulltextsearch").css({top:$(this).offset().top-60+"px"}),$("body.search-indocument-active #tx-dlf-search-in-document-query").trigger("focus")}):$(".fulltext-search-toggle").addClass("disabled"),Modernizr.touchevents?($(".fwds, .backs").on("touchstart",function(){$(this).addClass("over"),triggeredElement=$(this),setTimeout(function(){triggeredElement.addClass("enable-touchevent")},250)}).on("touchend",function(){localStorage.txDlfFromPage=$(this).attr("class").split(" ")[0]}),$("body").on("touchstart",function(e){target=$(e.target),target.closest(".page-control")[0]||($(".fwds, .backs").removeClass("over enable-touchevent"),localStorage.clear())}),localStorage.txDlfFromPage&&($("."+localStorage.txDlfFromPage).addClass("no-transition over enable-touchevent"),localStorage.clear())):($(".fwds, .backs").on("mouseenter",function(){$(this).addClass("over")}).on("mouseleave",function(){$(this).removeClass("over")}).on("click",function(){localStorage.txDlfFromPage=$(this).attr("class").split(" ")[0]}),localStorage.txDlfFromPage&&($("."+localStorage.txDlfFromPage).addClass("no-transition over"),localStorage.clear())),$(".tx-dlf-pageview").children()[0]||(emptyMessage=$('html[lang^="de"]')[0]?"Kein Band ausgew&auml;hlt. Klicken Sie hier um zum ersten Band dieses Werks zu gelangen.":"No volume selected. Click to jump to the first available volume.",$(".tx-dlf-pageview").append('<div class="tx-dlf-empty"><a class="tx-dlf-emptyToFirstVol" href="'+$(".tx-dlf-toc ul li ul li:first-child a").attr("href")+'"><span class="error-arrow">&larr;</span>'+emptyMessage+"</a></div>")),$("dl.tx-dlf-metadata-titledata").find("dt:contains(mmlung), dt:contains(llection)").nextUntil("dt","dd").addClass("tx-dlf-metadata-collection"),$("body").removeClass("hidden"),setTimeout(function(){localStorage.clear(),$(".fwds, .backs").removeClass("no-transition"),$("body").removeClass("static")},1e3)}),$(document).keyup(function(e){if("Escape"===e.key){if($("body.fullscreen")[0])return exitFullscreen();$(".document-functions .search.open")[0]&&$(".document-functions .search").removeClass("open")}if("f"===e.key&&!$("#tx-dlf-search-in-document-query").is(":focus"))return enterFullscreen()});
//
// vein
//

!function(e,t){"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vein",t):this.vein=t()}(0,function(){var e=function(){},t=function(e,t,n){var s,r,l=[],i=[],u=t[document.all?"rules":"cssRules"],o=e.replace(/\s/g,"");for(s=0,r=u.length;s<r;s++)(u[s].selectorText===e||4===u[s].type&&u[s].cssText.replace(/\s/g,"").substring(0,o.length)==o)&&(null===n?i.push(s):l.push(u[s]));for(s=0,r=i.length;s<r;s++)t.deleteRule(i[s]);return l},n=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+": "+e[n]+";");return t.join("")};e.getStylesheet=function(){return this.element&&document.getElementById("vein")||(this.element=document.createElement("style"),this.element.setAttribute("type","text/css"),this.element.setAttribute("id","vein"),document.getElementsByTagName("head")[0].appendChild(this.element),this.stylesheet=this.element.sheet),this.stylesheet};var s=function(e){return e[document.all?"rules":"cssRules"]},r=function(e,t,n){var r=s(n);n.insertRule?n.insertRule(e+"{"+t+"}",r.length):n.addRule(e,t,r.length)};return e.inject=function(e,l,i){var u,o,h,f,c,a,y,d,g,p,m=(i=function(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e}({},i)).stylesheet||this.getStylesheet();s(m);for("string"==typeof e&&(e=[e]),u=0,o=e.length;u<o;u++)if("object"==typeof e[u]&&m.insertRule)for(h in e[u])if(0===(f=t(h,m,l)).length)for(c=n(l),g=0,p=e[u][h].length;g<p;g++)r(h,e[u][h][g]+"{"+c+"}",m);else for(y=0,d=f.length;y<d;y++)this.inject(e[u][h],l,{stylesheet:f[y]});else{if(f=t(e[u],m,l),null===l)return;if(0===f.length)c=n(l),r(e[u],c,m);else for(y=0,d=f.length;y<d;y++)for(a in l)l.hasOwnProperty(a)&&(f[y].style.setProperty?f[y].style.setProperty(a,l[a],""):f[y].style.setAttribute(a,l[a],""))}return this},e});


/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};
stacks.jQuery = jQuery.noConflict(true);
stacks.com_bigwhiteduck_stacks_menulab_chroma = {};
stacks.com_bigwhiteduck_stacks_menulab_chroma = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];}
if(!window.requestAnimationFrame)
window.requestAnimationFrame=function(callback){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};if(!window.cancelAnimationFrame)
window.cancelAnimationFrame=function(id){clearTimeout(id);};}());

return stack;})(stacks.com_bigwhiteduck_stacks_menulab_chroma);
stacks.com_bigwhiteduck_stacks_headerpro = {};
stacks.com_bigwhiteduck_stacks_headerpro = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; var elements=document.getElementsByClassName('hp-slice');while(elements.length>0){elements[0].parentNode.removeChild(elements[0]);}

return stack;})(stacks.com_bigwhiteduck_stacks_headerpro);
stacks.ws_foundation_styles = {};
stacks.ws_foundation_styles = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.ws_foundation_styles);
stacks.ws_foundation_form = {};
stacks.ws_foundation_form = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
const urlParams=new URLSearchParams(window.location.search);const entries=Array.from(urlParams.entries());for(const entry of entries){const fieldName=entry[0];const fieldValue=entry[1];const inputs=Array.from(document.getElementsByName(fieldName));if(inputs.length>0){for(const input of inputs){if(input.classList.contains("switch-input")||input.type==="radio"||input.type==="checkbox"){input.checked=(fieldValue.split(",").indexOf(input.value)!==-1);continue;}
input.value=fieldValue;}
continue;}
const checkboxes=Array.from(document.getElementsByName(`${fieldName}[]`));if(checkboxes.length>0){for(const checkbox of checkboxes){checkbox.checked=(fieldValue.split(",").indexOf(checkbox.value)!==-1);}}}
if("undefined"==typeof stacks.forms)stacks.forms={};$.fn.serializeAndEncodeForm=function(){return $.map(this.serializeArray(),function(val){return[val.name,encodeURIComponent(val.value)].join("=");}).join("&");};$(document).on("invalid.zf.abide",function(e,el){console.warn(`Field name"${el[0].name}"is invalid`);}).on("valid.zf.abide",function(e,el){console.log(`Field name"${el[0].name}"is valid`);}).on("submit",function(e){if(e.target.classList.contains("ajax-form")){e.preventDefault();console.log(`Submit for form id"${e.target.id}"intercepted`);}}).on("forminvalid.zf.abide",function(e,form){console.warn(`Form id"${form[0].id}"is invalid`);}).on("formvalid.zf.abide",function(e,form){console.log(`Form id"${form[0].id}"is valid`);});$("select").on("change",function(){const id=$(this).attr("id");const hidden=$(`#${id}-label`);if(hidden.length>0){const text=$("option:selected",this).map(function(){return $(this).text();}).get().join(", ");hidden.val(text);}});

return stack;})(stacks.ws_foundation_form);
stacks.com_joeworkman_stacks_jack4 = {};
stacks.com_joeworkman_stacks_jack4 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; jQuery.fn.exists=function(){return jQuery(this).length>0;}
jQuery.debug=function(msg,obj){if(window.debug===true&&window.console&&console.log){console.log('[jwstacks] '+msg);if(obj)console.log(obj);}};jQuery.isMobile=function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch;};var triggerWindowResize=function(){$(window).trigger('resize')};if(typeof(orientationEvent)==undefined){var orientationEvent=0;}
$(window).bind(orientationEvent,triggerWindowResize).load(triggerWindowResize);jQuery.clearBrowserCache=function(){$(window).bind("pageshow",function(event){if(event.originalEvent.persisted){window.location.reload()}});};jQuery.preloadImages=function(){for(var i=0;i<arguments.length;i++){$("<img />").attr("src",arguments[i]);}};
!function(a,b){"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(a,b):this[a]=b()}("vein",function(){var a=function(){},b=function(a){a=a||{};for(var b=1;b<arguments.length;b++)if(arguments[b])for(var c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a},c=function(a,b,c){var d,e,f=[],g=b[document.all?"rules":"cssRules"],h=a.replace(/\s/g,"");for(d=0,e=g.length;e>d;d++)(g[d].selectorText===a||4===g[d].type&&g[d].cssText.replace(/\s/g,"").substring(0,h.length)==h)&&(null===c?b.deleteRule(d):f.push(g[d]));return f},d=function(a){cssArray=[];for(property in a)a.hasOwnProperty(property)&&cssArray.push(property+": "+a[property]+";");return cssText=cssArray.join(""),cssText};a.getStylesheet=function(){var a,b=this;if(!b.element)for(b.element=document.createElement("style"),b.element.setAttribute("type","text/css"),b.element.setAttribute("id","vein"),document.getElementsByTagName("head")[0].appendChild(b.element),a=document.styleSheets.length-1;a>=0;a--)if(document.styleSheets[a].ownerNode===b.element){b.stylesheet=document.styleSheets[a];break}return b.stylesheet};var e=function(a){return a[document.all?"rules":"cssRules"]},f=function(a,b,c){var d=e(c);if(c.insertRule)try{c.insertRule(a+"{"+b+"}",d.length)}catch(f){"IndexSizeError"===f.message&&c.insertRule(a+"{"+b+"}",0)}else c.addRule(a,b,d.length)};return a.inject=function(a,g,h){h=b({},h);{var i,j,k,l,m,n,o,p,q,r,s=this,t=h.stylesheet||s.getStylesheet();e(t)}for("string"==typeof a&&(a=[a]),i=0,j=a.length;j>i;i++)if("object"==typeof a[i]&&t.insertRule)for(k in a[i])if(l=c(k,t,g),0===l.length)for(m=d(g),q=0,r=a[i][k].length;r>q;q++)f(k,a[i][k][q]+"{"+m+"}",t);else for(o=0,p=l.length;p>o;o++)s.inject(a[i][k],g,{stylesheet:l[o]});else{if(l=c(a[i],t,g),null===g)return;if(0===l.length)m=d(g),f(a[i],m,t);else for(o=0,p=l.length;p>o;o++)for(n in g)g.hasOwnProperty(n)&&l[o].style.setProperty(n,g[n],"")}return s},a}),!function(a,b){var c=function(a){for(var c=[];a&&a.tagName!==b;a=a.parentNode){if(a.className){var d=a.className.split(" ");for(var e in d)d.hasOwnProperty(e)&&d[e]&&(c.unshift(d[e]),c.unshift("."))}a.id&&!/\s/.test(a.id)&&(c.unshift(a.id),c.unshift("#")),c.unshift(a.tagName),c.unshift(" > ")}return c.slice(1).join("")};a.fn.getSelector=function(b){return!0===b?c(this[0]):a.map(this,function(a){return c(a)})}}(jQuery),function(a){"use strict";var b=function(a){var b=a.replace(/\s/g,"").match(/^rgb\((\d+)\,(\d+)\,(\d+)\)/);if(b)return{r:parseInt(b[1]),g:parseInt(b[2]),b:parseInt(b[3])};var c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d});var d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return d?{r:parseInt(d[1],16),g:parseInt(d[2],16),b:parseInt(d[3],16)}:null},c=function(a,b,c){return c="undefined"!=typeof c?c:0,b="undefined"!=typeof b?b:1,b=b>1?b/100:b,"rgba("+(a.r+c)+","+(a.g+c)+","+(a.b+c)+","+b+")"},d=function(a,b,c,d){var e=a.selector,f={};return f[c]=d,e||(e=b.getSelector(),a.hover&&(e+=":hover")),vein.inject(e,f)},e=function(a,b){for(var c=[],d=0;d<a.length;d++){var e=b[d]===parseInt(b[d],10)?a[d]+" "+b[d]+"%":a[d];c.push(e)}return c.join(",")},f=function(a,b){var f,g,h,i=[],j=0;if(0===a.stops.length)for(j=0;j<a.colors.length;j++)f=a.offsets[j]||0,g=a.opacity[j]||a.opacity[a.opacity.length-1],i.push(c(h[j],g,f));else for(j=0;j<a.stops.length;j++)f=a.offsets[j]||0,g=a.opacity[j]||a.opacity[a.opacity.length-1],h=a.colors[j]||a.colors[a.colors.length-1],i.push(c(h,g,f));var k=e(i,a.stops),l="linear-gradient(to "+a.linear+","+k+")";"radial-circle"===a.gradient?l="radial-gradient(circle at "+a.radial.x+"% "+a.radial.y+"%,"+k+")":"radial-ellipse"===a.gradient&&(l="radial-gradient(ellipse at "+a.radial.x+"% "+a.radial.y+"%,"+k+")"),d(a,b,"background",l)};a.glass=function(c){for(var d=a.extend(!0,{},a.fn.glass.defaults,c||{}),e=0;e<d.colors.length;e++)d.colors[e]=b(d.colors[e]);if(d.selector){var f=a.fn.glass[d.preset];if("function"==typeof f)return f(d,a(d.selector))}return!1},a.fn.glass=function(c){for(var d=a.extend(!0,{},a.fn.glass.defaults,c||{}),e=0;e<d.colors.length;e++)d.colors[e]=b(d.colors[e]);return this.each(function(){var b=a(this),c=a.fn.glass[d.preset];"function"==typeof c&&c(d,b)})},a.fn.glass.border=function(a,b){var e=c(a.colors[0],a.opacity[0]);d(a,b,"border-color",e)},a.fn.glass.solid=function(a,b){var e=c(a.colors[0],a.opacity[0]);d(a,b,"background",e)},a.fn.glass.custom=function(a,b){return f(a,b)},a.fn.glass.faded=function(a,b){return 0===a.stops.length&&(a.stops=[0,95]),2!==a.opacity.length&&(a.opacity=[100,80]),a.colors=a.colors.slice(0,1),f(a,b)},a.fn.glass.twocolor=function(a,b){return 0===a.stops.length&&(a.stops=[20,100]),a.colors=a.colors.slice(0,2),a.opacity=a.opacity.slice(0,1),f(a,b)},a.fn.glass.twotone=function(a,b){return 0===a.stops.length&&(a.stops=[0,45,50,50,100]),0===a.offsets.length&&(a.offsets=[20,10,5,0,-10]),a.offsets[3]=0,a.colors=a.colors.slice(0,1),a.opacity=a.opacity.slice(0,1),f(a,b)},a.fn.glass.onecolor=function(a,b){return 0===a.stops.length&&(a.stops=[0,85]),0===a.offsets.length&&(a.offsets=[40,0]),a.colors=a.colors.slice(0,1),a.opacity=a.opacity.slice(0,1),f(a,b)},a.fn.glass.defaults={preset:"solid",gradient:"linear",linear:"bottom",radial:{x:50,y:50},colors:["#ffffff","#777777"],offsets:[],stops:[],opacity:[100,80],selector:!1,hover:!1}}(jQuery);
;(function($){"use strict";var version='20150224.1300',adjustSizeForProportion=function(container){var $this=$(container),proportion=$this.data('proportion'),width=$this.attr('width')||$this.data('width'),actualWidth=$this.width();if(!proportion){var height=$this.attr('height')||$this.data('height');proportion=height/width;$this.data('proportion',proportion);}
if(actualWidth!=width){$this.height(Math.round(actualWidth*proportion));}},adjustFlexSize=function(container,opts){var $this=$(container),compareTo=opts.compareTo,flex=$this.attr('height')||$this.data('height'),height=Math.round($(compareTo).height()*(flex/100));if(opts.minHeight===true){$this.css('min-height',height);}
else{$this.height(height);}};$.fn.proportional=function(options){var opts=$.extend(true,{},$.fn.proportional.defaults,options||{});return this.each(function(){var adjust,container=$(this);if(opts.type==='flexible'){adjust=function(){adjustFlexSize(container,opts)};}
else if(opts.type==='proportional'){adjust=function(){adjustSizeForProportion(container)};}
adjust();$(window).load(adjust).resize(adjust);});};$.fn.proportional.defaults={type:'proportional',compareTo:false,minHeight:false};})(jQuery);

$(document).ready(function(){$('.com_joeworkman_stacks_jack4_stack .proportional:not(.height-flexible)').proportional();if($.isMobile())$('.com_joeworkman_stacks_jack4_stack .jack').addClass('touch-device');});

return stack;})(stacks.com_joeworkman_stacks_jack4);
stacks.com_joeworkman_stacks_target = {};
stacks.com_joeworkman_stacks_target = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;/*!
 * jQuery afterresize event plugin
 * http://github.com/roxeteer/jquery-afterresize
 *
 * Copyright (c) 2010 Visa Kopu, visa@visakopu.net
 *
 * Licensed under the BSD license.
 * http://github.com/roxeteer/jquery-afterresize/wiki/License
 */
!function(a){var b=function(b){var c=a(this);c.data("resizetimer")&&window.clearTimeout(c.data("resizetimer")),c.data("resizetimer",window.setTimeout(function(){c.trigger("afterresize")},300))};a.event.special.afterresize={add:function(c){a(this).bind("resize",b);var d=c.handler;c.handler=function(a){return d.apply(this,arguments)}},remove:function(c){a(this).unbind("resize",b)}},a.fn.extend({afterresize:function(b){return a.isFunction(b)?a(this).bind("afterresize",b):a(this).trigger("afterresize"),this}})}(jQuery);

return stack;})(stacks.com_joeworkman_stacks_target);
stacks.stacks_in_878 = {};
stacks.stacks_in_878 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;// -- Start Bellboy Each js Template -- //

(function($) {
    $.bellboy = function(element, options) {

        var defaults = {
            duration: undefined,
            mainAudio: false,
            endAudio: false,
            preloadAudio: true,
            loopAudio: true,
            startCallback: null,
            endCallback: null
        };

        var plugin = this;
        plugin.settings = {}

        var $element = $(element),
             element = element;

        plugin.init = function() {


	        // Bind to element click event, if need be.
	        body = document.body;
	
	        var defaults = {
	            duration: undefined,
	            mainAudio: false,
	            endAudio: false,
	            preloadAudio: true,
	            loopAudio: true,
	            startCallback: null,
	            endCallback: null
	        };
	
	        
	        plugin.settings = $.extend({}, defaults, options);
	
	        if( plugin.settings.element ) {
	            bindElevateToElement( plugin.settings.element );
	        }
	
	        // Take the stairs instead
	        if( !browserMeetsRequirements() ) {
	            return;
	        }
	
	        if( plugin.settings.duration ) {
	            customDuration = true;
	            duration = plugin.settings.duration;
	        }
	
	        if( plugin.settings.targetElement ) {
	            targetElement = plugin.settings.targetElement;
	        }
	
	        if( plugin.settings.verticalPadding ) {
	            verticalPadding = plugin.settings.verticalPadding;
	        }
	
	        window.addEventListener('blur', onWindowBlur, false);
	
	        if( plugin.settings.mainAudio ) {
	            mainAudio = new Audio( plugin.settings.mainAudio );
	            mainAudio.setAttribute( 'preload', plugin.settings.preloadAudio );
	            mainAudio.setAttribute( 'loop', plugin.settings.loopAudio );
	        }
	
	        if( plugin.settings.endAudio ) {
	            endAudio = new Audio( plugin.settings.endAudio );
	            endAudio.setAttribute( 'preload', 'true' );
	        }
	
	        if( plugin.settings.endCallback ) {
	            endCallback = plugin.settings.endCallback;
	        }
	
	        if( plugin.settings.startCallback ) {
	            startCallback = plugin.settings.startCallback;
	        }

        }

	    'use strict';
	
	    // Elements
	    var body = null;
	
	    // Scroll vars
	    var animation = null;
	    var duration = null; // ms
	    var customDuration = false;
	    var startTime = null;
	    var startPosition = null;
	    var endPosition = 0;
	    var targetElement = null;
	    var verticalPadding = null;
	    var elevating = false;
	
	    var startCallback;
	    var mainAudio;
	    var endAudio;
	    var endCallback;
	
	    var that = this;
	
	    function easeInOutQuad( t, b, c, d ) {
	        t /= d / 2;
	        if ( t < 1 ) return c / 2 * t * t + b;
	        t--;
	        return -c / 2 * ( t * ( t -2 ) - 1 ) + b;
	    }
	
	    function extendParameters(options, defaults){
	        for( var option in defaults ){
	            var t = options[option] === undefined && typeof option !== "function";
	            if(t){
	                options[option] = defaults[option];
	            }
	        }
	        return options;
	    }
	
	    function getVerticalOffset(element) {
	        var verticalOffset = 0;
	        while( element ){
	            verticalOffset += element.offsetTop || 0;
	            element = element.offsetParent;
	        }
	
	        if ( verticalPadding ) {
	          verticalOffset = verticalOffset - verticalPadding;
	        }
	        return verticalOffset;
	    }
	
	    /**
	     * Main
	     */
	
	    // Time is passed through requestAnimationFrame, what a world!
	    function animateLoop( time ) {
	        if ( !startTime ) {
	            startTime = time;
	        }
	
	        var timeSoFar = time - startTime;
	        var easedPosition = easeInOutQuad(timeSoFar, startPosition, endPosition - startPosition, duration);
	
	        window.scrollTo(0, easedPosition);
	
	        if( timeSoFar < duration ) {
	            animation = requestAnimationFrame(animateLoop);
	        } else {
	            animationFinished();
	        }
	    }
	
	    this.elevate = function() {
	
	        if( elevating ) {
	            return;
	        }
	
	        elevating = true;
	        startPosition = (document.documentElement.scrollTop || body.scrollTop);
	        updateEndPosition();
	
	        // No custom duration set, so we travel at pixels per millisecond. (0.75px per ms)
	        if( !customDuration ) {
	            duration = ( Math.abs(endPosition - startPosition) * 1.5);
	        }
	
	        requestAnimationFrame( animateLoop );
	
	        // Start music!
	        if( mainAudio ) {
	            mainAudio.play();
	        }
	
	        if( startCallback ) {
	            startCallback();
	        }
	    };
	
	    function browserMeetsRequirements() {
	        return window.requestAnimationFrame && window.Audio && window.addEventListener;
	    }
	
	    function resetPositions() {
	        startTime = null;
	        startPosition = null;
	        elevating = false;
	    }
	
	    function updateEndPosition() {
	        if(targetElement){
	            endPosition = getVerticalOffset(targetElement);
	        }
	    }
	
	    function animationFinished() {
	
	        resetPositions();
	
	        // Stop music!
	        if( mainAudio ) {
	            mainAudio.pause();
	            mainAudio.currentTime = 0;
	        }
	
	        if( endAudio ) {
	            endAudio.play();
	        }
	
	        if( endCallback ) {
	            endCallback();
	        }
	    }
	
	    function onWindowBlur() {
	
	        // If animating, go straight to the top. And play no more music.
	        if( elevating ) {
	
	            cancelAnimationFrame( animation );
	            resetPositions();
	
	            if( mainAudio ) {
	                mainAudio.pause();
	                mainAudio.currentTime = 0;
	            }
	
	            updateEndPosition();
	            window.scrollTo(0, endPosition);
	        }
	    }
	
	    function bindElevateToElement( element ) {
	        if( element.addEventListener ) {
	            element.addEventListener('click', that.elevate, false);
	        } else {
	            // Older browsers
	            element.attachEvent('onclick', function() {
	                updateEndPosition();
	                document.documentElement.scrollTop = endPosition;
	                document.body.scrollTop = endPosition;
	                window.scroll(0, endPosition);
	            });
	        }
	    }

        plugin.init();

    }

    $.fn.bellboy = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('bellboy')) {
                var plugin = new $.bellboy(this, options);
                $(this).data('bellboy', plugin);
            }
        });
    }
})(jQuery);




$(document).ready(function() {

if("botright" == "botright"){
	var h = $("body").height();
	var topquarter = h / 4;

	$(".stacks_in_878bellboywrapper").addClass("bellboybutton").prependTo("body");
	
	$(".stacks_in_878bellboywrapper").css({
	"display":"none",
	"position":"fixed",
	"bottom":"20px",
	"right":"30px",
	"z-index":"99999"
	});
	
	$(window).scroll(function() {
		if($("#stacks_in_878").parent().css("display") ==  "block"){
		    if ($(this).scrollTop() > topquarter) {
		        $(".stacks_in_878bellboywrapper").fadeIn();
		    }
		    else {
		        $(".stacks_in_878bellboywrapper").fadeOut();
		    }
		} // end if larger screen
	});
	
	
	$(window).resize(function() {
		if($("#stacks_in_878").parent().css("display") ==  "block"){
		    if ($(this).scrollTop() > topquarter) {
		        $(".stacks_in_878bellboywrapper").fadeIn();
		    }
		}
		else{
			$(".stacks_in_878bellboywrapper").fadeOut();
		} // end if larger screen
	});
}else{
	$(".stacks_in_878bellboywrapper").css({
	"display":"block"
	});
}


var stacks_in_878traveltime = (1 * 1000);


if("false" == "true"){
	if("true" == "true"){
		if("false" == "true"){
			$(window).load(function() {
				$(".stacks_in_878bellboywrapper").bellboy({
					element: document.querySelector('.stacks_in_878bellboywrapper'),
				    mainAudio: '',
				    endAudio: 'files/bellboyAssets/ding.mp3',
				    duration: stacks_in_878traveltime
				});
			});	
		}else{
			$(window).load(function() {
				$(".stacks_in_878bellboywrapper").bellboy({
					element: document.querySelector('.stacks_in_878bellboywrapper'),
				    mainAudio: 'files/bellboyAssets/elevator.mp3',
				    endAudio: 'files/bellboyAssets/ding.mp3',
				    duration: stacks_in_878traveltime
				});
			});	
		}	
	}else{
		if("false" == "true"){
			$(window).load(function() {
				$(".stacks_in_878bellboywrapper").bellboy({
					element: document.querySelector('.stacks_in_878bellboywrapper'),
				    mainAudio: '',
				    duration: stacks_in_878traveltime
				});
			});
		}else{
			$(window).load(function() {
				$(".stacks_in_878bellboywrapper").bellboy({
					element: document.querySelector('.stacks_in_878bellboywrapper'),
				    mainAudio: 'files/bellboyAssets/elevator.mp3',
				    duration: stacks_in_878traveltime
				});
			});	
		}
	}
}else{
	$(window).load(function() {
		$(".stacks_in_878bellboywrapper").bellboy({
			element: document.querySelector('.stacks_in_878bellboywrapper'),
			duration: stacks_in_878traveltime
		});
	});
}




}); // end doc ready


// -- End Bellboy Each js Template -- //
return stack;})(stacks.stacks_in_878);
stacks.stacks_in_1146_70 = {};
stacks.stacks_in_1146_70 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1146_70);
stacks.stacks_in_1146_11 = {};
stacks.stacks_in_1146_11 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){var slideUp={cssHeadSlide:function(hide){if(!isHeadSlide||slideHeadSuspend)return false;var headDirection=relTop?'-':'',slideHeight=$('#stacks_in_1146_11>.chroma-scroll>.slide-head').outerHeight();if(hide){stack.css({'-webkit-transform':'translate(0,'+headDirection+slideHeight+'px)','-moz-transform':'translate(0,'+headDirection+slideHeight+'px)','-ms-transform':'translate(0,'+headDirection+slideHeight+'px)','-o-transform':'translate(0,'+headDirection+slideHeight+'px)','transform':'translate(0,'+headDirection+slideHeight+'px)'});}else{stack.css({'-webkit-transform':'translate(0,0)','-moz-transform':'translate(0,0)','-ms-transform':'translate(0,0)','-o-transform':'translate(0,0)','transform':'translate(0,0)'});}},closePopDrops:function(){try{popTarget.popDrop('hide');}
catch(err){if($.bwd_debug)console.log('Chroma: Found PopDrop Null Marker on',popTarget);}},closeBPDrops:function(){$(window).trigger('close-bp-drops');},slideHeadRespond:function(){var win=$(window).width();if(win<slideBP){slideUp.cssHeadSlide(false)
slideUp.slideAnimation(false);slideHeadSuspend=true;}else{slideHeadSuspend=false;slideUp.slideAnimation(true);}},slideAnimation:function(activate){if(activate){stack.addClass('animate');}else{stack.removeClass('animate').removeClass(upClass).removeClass(downClass);}}};var markerScroll={findMarker:function(){return $('body').find('.chroma-marker[data-chroma-style='+'fix_now'+']').first();},isActive:function(marker){if(typeof marker==="undefined")return false;if(!marker.length)return false;try{if(marker.offset().top-$(window).scrollTop()<=0)return true;}
catch(err){return false}
return false;},updateScrollClasses:function(marker){if(markerScroll.isActive(marker)){stack.addClass('is-scrolled');wrapper.addClass('is-scrolled');}else{stack.removeClass('is-scrolled');wrapper.removeClass('is-scrolled');}}};var utils={toggleSpacer:function(fix){if(fix==true){spacer.css('height',stack.height());}else
{spacer.css('height',0);}},resizeElement:function(){if(isStatic)return false;if(fullWidth){if(fullWidth&&fixToParentSize){if($(window).width()>parentSizeBP){stack.css('width',wrapper.outerWidth(true));}else{stack.css('width',spacer.outerWidth(true));}}else{stack.css('width',spacer.outerWidth(true));}}
if(isHeadSlide)slideUp.slideHeadRespond();},isTouchDevice:function(){return true==("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)},prepFacetBar:function(){if(facetBar.hasClass('toggle-button')&&facetBar.hasClass('oc-right')){stack.addClass('content-right');}},updateTopBarState:function(){if($('.toggle-topbar',stack).is(':visible')){stack.addClass('tb-mob');}else{stack.removeClass('tb-mob');}}};var init=function(){if(isHeadSlide){stack.addClass('ani-slide');}
if(!isHeadSlide)slideHead.remove();if(isSlide){stack.addClass('animate');if(touchScreen){stack.addClass('ani-slide');}else{stack.addClass('ani-slide')}}utils.toggleSpacer(true);stack.addClass('is-fixed');wrapper.addClass('is-fixed');stack.addClass('fix-top');wrapper.addClass('fix-top');$('body').addClass('is-fixed');spacer.prependTo('body');};var postInit=function(){utils.resizeElement();if(isSticky){scrollUp.calcOffset(breakpoint,true);spacer.css('height','0px');}
utils.updateTopBarState();facetBar=stack.find('.oc-toggle.facet-mb'),hasFacetBar=facetBar.length>0?true:false,utils.prepFacetBar();popDrop=stack.find('[data-pop-drop]').length>0?true:false;popTarget=$('[data-pop-drop]',stack);bpDropdown=stack.find('.bp-dropdown').length>0?true:false;dropdowns=$('.bp-dropdown');if(isHeadSlide){if(!relTop){slideHead.detach().insertAfter(suContent)};slideHead.addClass('');}};if(!document.getElementById("stacks_in_1146_11")){console.log("Choma removed by 3rd party script");return false;}
var lastRequestAnimationFrame=null,stack=$('#stacks_in_1146_11>.chroma-scroll'),wrapper=$('#stacks_in_1146_11'),spacer=$('.spacer-stacks_in_1146_11'),slideHead=$('.slide-head',stack),slideHeadSuspend=false,suContent=$('.su-content',stack),slideBP=''!=''?645:0,relTop='True'=='True',slideTime=600,initDelay=430>=430?430:430,isStatic='posFixed'=='posStatic'?true:false,isSticky='posFixed'=='posSticky'?true:false,didScroll,lastPosition=-999,lastPos=0,spacerSize=0,downTolerance=300,upTolerance=100,topOffset=0,offsetUnits='px',smallOffsetUnits=false===true?'px':'px',breakpoint=645,smallTopOffset=false===true?0:0,smallTopOffset=false===true?-9999:smallTopOffset,triggerTop=stack.offset().top-topOffset,fixToParentSize='mob-full-width'!='fix-full-width'?true:false,parentSizeBP='mob-full-width'=='mob-full-width'?breakpoint:0,fullWidth="width-scale"=="width-contain"&&"posFixed"=="posFixed"?false:true,slideType='scrollAnimate',isSlide=''!==''?true:false,isHeadSlide='ani-slide'=='header-slide'&&isSlide?true:false,markerSlide=false,upClass='slide-up',downClass='slide-down',facetBar={},hasFacetBar,popDrop=false,bpDropdown=false,popTarget=stack,dropdowns=stack,touchScreen=utils.isTouchDevice(),cancel_above_below=''=='below-bp'?1:''=='above-bp'?-1:0,cancel_breakpoint=cancel_above_below!==0?breakpoint:cancel_above_below;var resizeTimer;$(window).on('resize',function(e){clearTimeout(resizeTimer);resizeTimer=setTimeout(function(){utils.resizeElement();utils.updateTopBarState();utils.toggleSpacer(true);},10);});$(window).on('scroll',function(){markerScroll.updateScrollClasses(markerScroll.findMarker());didScroll=true});setInterval(function(){if(didScroll){didScroll=false;}},10);$(window).on('load',function(){if(!isStatic){init();}else{stack.addClass('is-static');}
postInit();setTimeout(function(){stack.removeClass('pre-load');$('.chroma-scroll').removeClass('slide-fresh');},slideTime);setTimeout(function(){stack.removeClass('pre-load');$('.chroma-scroll').removeClass('slide-fresh');},initDelay);utils.toggleSpacer(true);setTimeout(function(){utils.toggleSpacer(true);},200);});});

return stack;})(stacks.stacks_in_1146_11);
stacks.stacks_in_69 = {};
stacks.stacks_in_69 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){$(window).on('load',function(){$('#stacks_in_69>.s-pro:not(.vault-height)>.shear-wrapper').removeClass('preload-wrapper');$('#stacks_in_69>.s-pro:not(.vault-height) .content').removeClass('preload-content');});});

return stack;})(stacks.stacks_in_69);
stacks.stacks_in_1657 = {};
stacks.stacks_in_1657 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){var win=$(window),stack=$('#stacks_in_1657'),spacer=$('.spacer_stacks_in_1657'),positionClass='section-bottom',sideClass='section-left',sectionWrapperId='#'+stack.closest('.shear-wrapper').attr('id'),sectionContent=stack.closest('.content-wrapper');stack.unwrap();stack.addClass('section-absolute').addClass(positionClass).addClass(sideClass).addClass('').appendTo(sectionWrapperId);if(positionClass=='section-bottom'){spacer.appendTo(sectionContent);}else{spacer.prependTo(sectionContent);}var resizeSpacer=function(){var targetHeight=stack.outerHeight();spacer.css('height',targetHeight);}
win.on("resize",resizeSpacer);resizeSpacer();$(window).load(function(){$('.section-fix',stack).removeClass('pre-load');resizeSpacer();});});

return stack;})(stacks.stacks_in_1657);
stacks.stacks_in_1541 = {};
stacks.stacks_in_1541 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;jQuery.noConflict();

// BEGIN JQUERY
(function($){

	// BEGIN DOMREADY
	$(document).ready(function(){

		// Set Slidetastic Variables
		var $slidetastic_stacks_in_1541 = $('#slidetastic-stacks_in_1541 .slidetastic-slider'),
		slidetastic_object_stacks_in_1541 = {
			numPerPage: null,
			numPerJump: null,
			interval: null,
			showDots: !Boolean(""),
			centerMode: Boolean(""),
			adaptiveHeight: Boolean("True"),
			showArrows: !Boolean(""),
			loop: ("True" === "True"),
			autoplay: ("False" === "True"),
			pauseOnHover: ("True" === "True"),
			numSlides: $slidetastic_stacks_in_1541.children().length
		};

		if(slidetastic_object_stacks_in_1541.loop || slidetastic_object_stacks_in_1541.autoplay){

			if(!slidetastic_object_stacks_in_1541.centerMode){
				if($(window).width() > 768){
					slidetastic_object_stacks_in_1541.numPerPage = slidetastic_object_stacks_in_1541.numSlides-1;
					slidetastic_object_stacks_in_1541.numPerJump = 1;
				}
				if($(window).width() <= 768 && $(window).width() > 480){
					slidetastic_object_stacks_in_1541.numPerPage = slidetastic_object_stacks_in_1541.numSlides-1;
					slidetastic_object_stacks_in_1541.numPerJump = 1;
				}
				if($(window).width() <= 480){
					slidetastic_object_stacks_in_1541.numPerPage = slidetastic_object_stacks_in_1541.numSlides-1;
					slidetastic_object_stacks_in_1541.numPerJump = 1;
				}			
			}else{
				slidetastic_object_stacks_in_1541.numPerPage = slidetastic_object_stacks_in_1541.numSlides-1;
				slidetastic_object_stacks_in_1541.numPerJump = 1;
			}
		}

		$slidetastic_stacks_in_1541.slick({
			infinite: false,
			autoplay: false,
			centerMode: slidetastic_object_stacks_in_1541.centerMode,
			adaptiveHeight: slidetastic_object_stacks_in_1541.adaptiveHeight,

			dots: slidetastic_object_stacks_in_1541.showDots,
			appendDots: '#slidetastic-stacks_in_1541 .slidetastic-dots',

			arrows: slidetastic_object_stacks_in_1541.showArrows,
			appendArrows: '#slidetastic-stacks_in_1541 .slidetastic-nav',
			prevArrow: '<div class="slidetastic-nav-btn slidetastic-nav-btn-prev disabled"><a class="slidetastic-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></a><div>',
			nextArrow: '<div class="slidetastic-nav-btn slidetastic-nav-btn-next"><a class="slidetastic-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></i></a></div>',

			slidesToShow: 1,
			slidesToScroll: 1,

			responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
		});

		if(slidetastic_object_stacks_in_1541.autoplay){

			function intervalTrigger(numPerPage, numPerJump){
				return window.slidetastic_stacks_in_1541_autoplayInterval = setInterval(function(){
					if(slidetastic_object_stacks_in_1541.loop && $slidetastic_stacks_in_1541.slick('slickCurrentSlide') >= slidetastic_object_stacks_in_1541.numPerPage){
						$slidetastic_stacks_in_1541.slick('slickGoTo', 0)
					}else{
						$slidetastic_stacks_in_1541.slick('slickGoTo', $slidetastic_stacks_in_1541.slick('slickCurrentSlide')+slidetastic_object_stacks_in_1541.numPerJump)
					}
				}, 3000)
			}

			slidetastic_object_stacks_in_1541.interval = intervalTrigger(slidetastic_object_stacks_in_1541.numPerPage, slidetastic_object_stacks_in_1541.numPerJump);

			if(slidetastic_object_stacks_in_1541.pauseOnHover){
				$('#slidetastic-stacks_in_1541').hover(
					function(){
						clearInterval(slidetastic_object_stacks_in_1541.interval)
					},
					function(){
						slidetastic_object_stacks_in_1541.interval = intervalTrigger(slidetastic_object_stacks_in_1541.numPerPage, slidetastic_object_stacks_in_1541.numPerJump);
					}
				);
			}

		}


		if(slidetastic_object_stacks_in_1541.loop){

			$('#slidetastic-stacks_in_1541 .slidetastic-nav-btn-next').on('click',function(){
				if($slidetastic_stacks_in_1541.slick('slickCurrentSlide') >= slidetastic_object_stacks_in_1541.numPerPage){
					$slidetastic_stacks_in_1541.slick('slickGoTo', 0);
				}
			})

			$('#slidetastic-stacks_in_1541 .slidetastic-nav-btn-prev').on('click',function(){
				if($slidetastic_stacks_in_1541.slick('slickCurrentSlide') == 0){
					$slidetastic_stacks_in_1541.slick('slickGoTo', slidetastic_object_stacks_in_1541.numSlides);
				}
			})

			$slidetastic_stacks_in_1541.on('edge', function(event, slick, direction){
			  if($slidetastic_stacks_in_1541.slick('slickCurrentSlide') == slidetastic_object_stacks_in_1541.numPerPage){
					$slidetastic_stacks_in_1541.slick('slickGoTo', 0);
			  }
			  if($slidetastic_stacks_in_1541.slick('slickCurrentSlide') == 0){
					$slidetastic_stacks_in_1541.slick('slickGoTo', slidetastic_object_stacks_in_1541.numSlides);
			  }
			});


			$slidetastic_stacks_in_1541.on('breakpoint', function(event, slick, breakpoint){
					clearInterval(slidetastic_object_stacks_in_1541.interval)
					
					if(breakpoint == null){
						slidetastic_object_stacks_in_1541.numPerJump = 1;
						slidetastic_object_stacks_in_1541.numPerPage = slidetastic_object_stacks_in_1541.centerMode ? slidetastic_object_stacks_in_1541.numSlides-1 : slidetastic_object_stacks_in_1541.numSlides-1
					}
					if(breakpoint == 768){
						slidetastic_object_stacks_in_1541.numPerJump = 1;
						slidetastic_object_stacks_in_1541.numPerPage = slidetastic_object_stacks_in_1541.centerMode ? slidetastic_object_stacks_in_1541.numSlides-1 : slidetastic_object_stacks_in_1541.numSlides-1
					}
					if(breakpoint == 480){
						slidetastic_object_stacks_in_1541.numPerJump = 1;
						slidetastic_object_stacks_in_1541.numPerPage = slidetastic_object_stacks_in_1541.centerMode ? slidetastic_object_stacks_in_1541.numSlides-1 : slidetastic_object_stacks_in_1541.numSlides-1
					}

					$('#slidetastic-stacks_in_1541 .slidetastic-nav-btn-next').on('click',function(){
						if($slidetastic_stacks_in_1541.slick('slickCurrentSlide') >= slidetastic_object_stacks_in_1541.numPerPage){
							$slidetastic_stacks_in_1541.slick('slickGoTo', 0);
						}
					})
					$('#slidetastic-stacks_in_1541 .slidetastic-nav-btn-prev').on('click',function(){
						if($slidetastic_stacks_in_1541.slick('slickCurrentSlide') == 0){
							$slidetastic_stacks_in_1541.slick('slickGoTo', slidetastic_object_stacks_in_1541.numSlides);
						}
					})
					$slidetastic_stacks_in_1541.on('edge', function(event, slick, direction){
					  if($slidetastic_stacks_in_1541.slick('slickCurrentSlide') >= slidetastic_object_stacks_in_1541.numSlides-1){
							$slidetastic_stacks_in_1541.slick('slickGoTo', 0);
					  }
					  if($slidetastic_stacks_in_1541.slick('slickCurrentSlide') == 0){
							$slidetastic_stacks_in_1541.slick('slickGoTo', slidetastic_object_stacks_in_1541.numSlides);
					  }
					});

					if(slidetastic_object_stacks_in_1541.autoplay){
						slidetastic_object_stacks_in_1541.interval = intervalTrigger(slidetastic_object_stacks_in_1541.numPerPage, slidetastic_object_stacks_in_1541.numPerJump);
					}

			});
		}
	// END DOCUMENT READY
	});
	// END JQUERY
})(jQuery);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

return stack;})(stacks.stacks_in_1541);
stacks.stacks_in_1364 = {};
stacks.stacks_in_1364 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){
	if((navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/Blackberry/i))||(navigator.userAgent.match(/Samsung/i))||(navigator.userAgent.match(/Operamini/i))||(navigator.userAgent.match(/Iemobile/i)) ) {
		$("#hoverBoxWrapperstacks_in_1364").addClass('touchDeviceDetected');
	} else {
		$("#hoverBoxWrapperstacks_in_1364").addClass('noTouchDeviceDetected');
	}
});





return stack;})(stacks.stacks_in_1364);
stacks.stacks_in_1366 = {};
stacks.stacks_in_1366 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1366);
stacks.stacks_in_1380 = {};
stacks.stacks_in_1380 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1380);
stacks.stacks_in_1371 = {};
stacks.stacks_in_1371 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1371);
stacks.stacks_in_1373 = {};
stacks.stacks_in_1373 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){var position="absolute",position_class="target_stack target_stacks_in_1373 disable-small width-fill height-auto position-absolute vcenter left_px ",condition="disable-small",testHeight=condition==="target-height"?true:false,target=$("#stacks_in_1373").parent();if(testHeight){var targetHeight=function(){var windowHeight=$(window).height(),documentHeight=$(".stacks_top").first().height();if(windowHeight>documentHeight){target.addClass(position_class);}
else{target.removeClass(position_class);}};targetHeight();$(window).afterresize(targetHeight);}
else{target.addClass(position_class);}
if(position=="custom"){var custom_element=$("#custom_id");target.appendTo(custom_element);}
if(position=="body"){target.appendTo("body");}});

return stack;})(stacks.stacks_in_1373);
stacks.stacks_in_1382 = {};
stacks.stacks_in_1382 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;// Iconz Stack by http://www.doobox.co.uk
// Copyright@2014 Mr JG Simpson, trading as Doobox.
// all rights reserved.

$(document).ready(function() {

if("none" == "none"){

var $stacks_in_1382this = $("#stacks_in_1382 i.fa");
var stacks_in_1382getfontsize = $stacks_in_1382this.css("font-size");
var stacks_in_1382fontsize = parseFloat(stacks_in_1382getfontsize, 10);
var stacks_in_1382orgfontsize = stacks_in_1382fontsize;
var stacks_in_1382lastwindowwidth = $(window).width();

var stacks_in_1382lastelementwidth;

    var stacks_in_1382resizerBigger = function () {
	    if(stacks_in_1382fontsize < stacks_in_1382orgfontsize){
		    if ($stacks_in_1382this.width() <= $("#stacks_in_1382").width()){
			    while($stacks_in_1382this.width() <= $("#stacks_in_1382").width()){
			  	stacks_in_1382fontsize = stacks_in_1382fontsize + 2;
			    $stacks_in_1382this.css({
			    "font-size": stacks_in_1382fontsize + "px"
			    });
			    }
			    if ($stacks_in_1382this.width() >= $("#stacks_in_1382").width()){
			    stacks_in_1382fontsize = stacks_in_1382fontsize - 2
			    $stacks_in_1382this.css("font-size", stacks_in_1382fontsize + "px");
			    }
		    }else{
		    	stacks_in_1382resizerSmaller();
		    }
		    if(stacks_in_1382fontsize > stacks_in_1382orgfontsize){
			    stacks_in_1382fontsize = stacks_in_1382orgfontsize;
			    $stacks_in_1382this.css("font-size", stacks_in_1382fontsize + "px");
		    }
	    }
	    else if($stacks_in_1382this.width() >= $("#stacks_in_1382").width()){
		    stacks_in_1382resizerSmaller();
	    }
    }
  
  
    var stacks_in_1382resizerSmaller = function () {
    if ($stacks_in_1382this.width() >= $("#stacks_in_1382").width()){
    while($stacks_in_1382this.width() >= $("#stacks_in_1382").width()){
  	stacks_in_1382fontsize = stacks_in_1382fontsize - 2;
    $stacks_in_1382this.css({"font-size": stacks_in_1382fontsize + "px"});
    }
    }else if(stacks_in_1382fontsize > stacks_in_1382orgfontsize){
    stacks_in_1382fontsize = stacks_in_1382orgfontsize;
    $stacks_in_1382this.css("font-size", stacks_in_1382fontsize + "px");
    }
    else{
	    stacks_in_1382resizerBigger();
    }
  }
  
  
  
  if ($stacks_in_1382this.is(":visible")){
  var stacks_in_1382lastcontainerwidth = $("#stacks_in_1382").width();
  }
  
  
  var stacks_in_1382delay = (function(){
  var stacks_in_1382timer = 0;
  return function(callback, ms){
    clearTimeout (stacks_in_1382timer);
    stacks_in_1382timer = setTimeout(callback, ms);
  };
  })();
  
  
    $(window).resize(function() {
    stacks_in_1382delay(function(){
	    if ($stacks_in_1382this.is(":visible")){
	     if (stacks_in_1382lastcontainerwidth != $("#stacks_in_1382").width()){
	       stacks_in_1382lastcontainerwidth = $("#stacks_in_1382").width();
	       windowwidth = $(window).width();
	       if (windowwidth < stacks_in_1382lastwindowwidth){
	         stacks_in_1382resizerSmaller();
	       }else{
	         stacks_in_1382resizerBigger();
	       }
	       stacks_in_1382lastwindowwidth = windowwidth
	    }
	    }
    }, 10);
   });
  
 
  
  function stacks_in_1382resizeMe(){
    stacks_in_1382delay(function(){
    	if(stacks_in_1382fontsize < stacks_in_1382orgfontsize){
		    while($stacks_in_1382this.width() <= $("#stacks_in_1382").width()){
		   	 stacks_in_1382fontsize = stacks_in_1382fontsize + 2;
		   	 $stacks_in_1382this.css("font-size", stacks_in_1382fontsize + "px");
		    }
	    }
	    while($stacks_in_1382this.width() >= $("#stacks_in_1382").width()){
	      stacks_in_1382fontsize = stacks_in_1382fontsize - 2;
	   	  $stacks_in_1382this.css("font-size", stacks_in_1382fontsize + "px");
	    }
	     stacks_in_1382lastelementwidth = $stacks_in_1382this.width();
	      //stacks_in_1382keepCheckingSize();
    }, 10);
  }
  

if ($stacks_in_1382this.is(":visible")){
stacks_in_1382resizeMe();
}else{
// do something here
}

}

}); // end doc ready
// End Iconz stack js


return stack;})(stacks.stacks_in_1382);
stacks.stacks_in_1384 = {};
stacks.stacks_in_1384 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright ???? 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright ???? 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

 $(document).ready(function() {

	
		$('.cpsl_myID1').hide();
	

	$('#stacks_in_1384 .trigger_myID1').click(function() {


		if ($('.trigger_myID1').hasClass('current')) {
					$('.cpsl_myID1').stop().slideUp({
						duration: 600,
						easing: "easeInOutQuint"
					});

					$('.trigger_myID1').removeClass('toggle_open').addClass('toggle_closed').removeClass('current');
					

		} else if ($('.trigger_myID1').hasClass('toggle_closed')) {

					
					//
					// Reset things so all Capsule Contents are collapsed
					//

					$('.trigger_content').slideUp({
						duration: 600,
						easing: "easeInOutQuint"
					});

					$('.elixir_trigger').removeClass('toggle_open').removeClass('current').addClass('toggle_closed');

					


					

					$('.cpsl_myID1').stop().slideDown({
						duration: 600,
						easing: "easeInOutQuint"
					});

 					$('.trigger_myID1').removeClass('toggle_closed').addClass('toggle_open').addClass('current');
					

		}


	});

});

return stack;})(stacks.stacks_in_1384);
stacks.stacks_in_1433 = {};
stacks.stacks_in_1433 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){
	if((navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/Blackberry/i))||(navigator.userAgent.match(/Samsung/i))||(navigator.userAgent.match(/Operamini/i))||(navigator.userAgent.match(/Iemobile/i)) ) {
		$("#hoverBoxWrapperstacks_in_1433").addClass('touchDeviceDetected');
	} else {
		$("#hoverBoxWrapperstacks_in_1433").addClass('noTouchDeviceDetected');
	}
});





return stack;})(stacks.stacks_in_1433);
stacks.stacks_in_1435 = {};
stacks.stacks_in_1435 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1435);
stacks.stacks_in_1438 = {};
stacks.stacks_in_1438 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1438);
stacks.stacks_in_1440 = {};
stacks.stacks_in_1440 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1440);
stacks.stacks_in_1442 = {};
stacks.stacks_in_1442 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){var position="absolute",position_class="target_stack target_stacks_in_1442 disable-small width-fill height-auto position-absolute vcenter left_px ",condition="disable-small",testHeight=condition==="target-height"?true:false,target=$("#stacks_in_1442").parent();if(testHeight){var targetHeight=function(){var windowHeight=$(window).height(),documentHeight=$(".stacks_top").first().height();if(windowHeight>documentHeight){target.addClass(position_class);}
else{target.removeClass(position_class);}};targetHeight();$(window).afterresize(targetHeight);}
else{target.addClass(position_class);}
if(position=="custom"){var custom_element=$("#custom_id");target.appendTo(custom_element);}
if(position=="body"){target.appendTo("body");}});

return stack;})(stacks.stacks_in_1442);
stacks.stacks_in_1444 = {};
stacks.stacks_in_1444 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;// Iconz Stack by http://www.doobox.co.uk
// Copyright@2014 Mr JG Simpson, trading as Doobox.
// all rights reserved.

$(document).ready(function() {

if("none" == "none"){

var $stacks_in_1444this = $("#stacks_in_1444 i.fa");
var stacks_in_1444getfontsize = $stacks_in_1444this.css("font-size");
var stacks_in_1444fontsize = parseFloat(stacks_in_1444getfontsize, 10);
var stacks_in_1444orgfontsize = stacks_in_1444fontsize;
var stacks_in_1444lastwindowwidth = $(window).width();

var stacks_in_1444lastelementwidth;

    var stacks_in_1444resizerBigger = function () {
	    if(stacks_in_1444fontsize < stacks_in_1444orgfontsize){
		    if ($stacks_in_1444this.width() <= $("#stacks_in_1444").width()){
			    while($stacks_in_1444this.width() <= $("#stacks_in_1444").width()){
			  	stacks_in_1444fontsize = stacks_in_1444fontsize + 2;
			    $stacks_in_1444this.css({
			    "font-size": stacks_in_1444fontsize + "px"
			    });
			    }
			    if ($stacks_in_1444this.width() >= $("#stacks_in_1444").width()){
			    stacks_in_1444fontsize = stacks_in_1444fontsize - 2
			    $stacks_in_1444this.css("font-size", stacks_in_1444fontsize + "px");
			    }
		    }else{
		    	stacks_in_1444resizerSmaller();
		    }
		    if(stacks_in_1444fontsize > stacks_in_1444orgfontsize){
			    stacks_in_1444fontsize = stacks_in_1444orgfontsize;
			    $stacks_in_1444this.css("font-size", stacks_in_1444fontsize + "px");
		    }
	    }
	    else if($stacks_in_1444this.width() >= $("#stacks_in_1444").width()){
		    stacks_in_1444resizerSmaller();
	    }
    }
  
  
    var stacks_in_1444resizerSmaller = function () {
    if ($stacks_in_1444this.width() >= $("#stacks_in_1444").width()){
    while($stacks_in_1444this.width() >= $("#stacks_in_1444").width()){
  	stacks_in_1444fontsize = stacks_in_1444fontsize - 2;
    $stacks_in_1444this.css({"font-size": stacks_in_1444fontsize + "px"});
    }
    }else if(stacks_in_1444fontsize > stacks_in_1444orgfontsize){
    stacks_in_1444fontsize = stacks_in_1444orgfontsize;
    $stacks_in_1444this.css("font-size", stacks_in_1444fontsize + "px");
    }
    else{
	    stacks_in_1444resizerBigger();
    }
  }
  
  
  
  if ($stacks_in_1444this.is(":visible")){
  var stacks_in_1444lastcontainerwidth = $("#stacks_in_1444").width();
  }
  
  
  var stacks_in_1444delay = (function(){
  var stacks_in_1444timer = 0;
  return function(callback, ms){
    clearTimeout (stacks_in_1444timer);
    stacks_in_1444timer = setTimeout(callback, ms);
  };
  })();
  
  
    $(window).resize(function() {
    stacks_in_1444delay(function(){
	    if ($stacks_in_1444this.is(":visible")){
	     if (stacks_in_1444lastcontainerwidth != $("#stacks_in_1444").width()){
	       stacks_in_1444lastcontainerwidth = $("#stacks_in_1444").width();
	       windowwidth = $(window).width();
	       if (windowwidth < stacks_in_1444lastwindowwidth){
	         stacks_in_1444resizerSmaller();
	       }else{
	         stacks_in_1444resizerBigger();
	       }
	       stacks_in_1444lastwindowwidth = windowwidth
	    }
	    }
    }, 10);
   });
  
 
  
  function stacks_in_1444resizeMe(){
    stacks_in_1444delay(function(){
    	if(stacks_in_1444fontsize < stacks_in_1444orgfontsize){
		    while($stacks_in_1444this.width() <= $("#stacks_in_1444").width()){
		   	 stacks_in_1444fontsize = stacks_in_1444fontsize + 2;
		   	 $stacks_in_1444this.css("font-size", stacks_in_1444fontsize + "px");
		    }
	    }
	    while($stacks_in_1444this.width() >= $("#stacks_in_1444").width()){
	      stacks_in_1444fontsize = stacks_in_1444fontsize - 2;
	   	  $stacks_in_1444this.css("font-size", stacks_in_1444fontsize + "px");
	    }
	     stacks_in_1444lastelementwidth = $stacks_in_1444this.width();
	      //stacks_in_1444keepCheckingSize();
    }, 10);
  }
  

if ($stacks_in_1444this.is(":visible")){
stacks_in_1444resizeMe();
}else{
// do something here
}

}

}); // end doc ready
// End Iconz stack js


return stack;})(stacks.stacks_in_1444);
stacks.stacks_in_1396 = {};
stacks.stacks_in_1396 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright ???? 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright ???? 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

 $(document).ready(function() {

	
		$('.cpsl_myID3').hide();
	

	$('#stacks_in_1396 .trigger_myID3').click(function() {


		if ($('.trigger_myID3').hasClass('current')) {
					$('.cpsl_myID3').stop().slideUp({
						duration: 600,
						easing: "easeInOutQuint"
					});

					$('.trigger_myID3').removeClass('toggle_open').addClass('toggle_closed').removeClass('current');
					

		} else if ($('.trigger_myID3').hasClass('toggle_closed')) {

					
					//
					// Reset things so all Capsule Contents are collapsed
					//

					$('.trigger_content').slideUp({
						duration: 600,
						easing: "easeInOutQuint"
					});

					$('.elixir_trigger').removeClass('toggle_open').removeClass('current').addClass('toggle_closed');

					


					

					$('.cpsl_myID3').stop().slideDown({
						duration: 600,
						easing: "easeInOutQuint"
					});

 					$('.trigger_myID3').removeClass('toggle_closed').addClass('toggle_open').addClass('current');
					

		}


	});

});

return stack;})(stacks.stacks_in_1396);
stacks.stacks_in_1445 = {};
stacks.stacks_in_1445 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){
	if((navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/Blackberry/i))||(navigator.userAgent.match(/Samsung/i))||(navigator.userAgent.match(/Operamini/i))||(navigator.userAgent.match(/Iemobile/i)) ) {
		$("#hoverBoxWrapperstacks_in_1445").addClass('touchDeviceDetected');
	} else {
		$("#hoverBoxWrapperstacks_in_1445").addClass('noTouchDeviceDetected');
	}
});





return stack;})(stacks.stacks_in_1445);
stacks.stacks_in_1447 = {};
stacks.stacks_in_1447 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1447);
stacks.stacks_in_1450 = {};
stacks.stacks_in_1450 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1450);
stacks.stacks_in_1452 = {};
stacks.stacks_in_1452 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1452);
stacks.stacks_in_1454 = {};
stacks.stacks_in_1454 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){var position="absolute",position_class="target_stack target_stacks_in_1454 disable-small width-fill height-auto position-absolute vcenter left_px ",condition="disable-small",testHeight=condition==="target-height"?true:false,target=$("#stacks_in_1454").parent();if(testHeight){var targetHeight=function(){var windowHeight=$(window).height(),documentHeight=$(".stacks_top").first().height();if(windowHeight>documentHeight){target.addClass(position_class);}
else{target.removeClass(position_class);}};targetHeight();$(window).afterresize(targetHeight);}
else{target.addClass(position_class);}
if(position=="custom"){var custom_element=$("#custom_id");target.appendTo(custom_element);}
if(position=="body"){target.appendTo("body");}});

return stack;})(stacks.stacks_in_1454);
stacks.stacks_in_1456 = {};
stacks.stacks_in_1456 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;// Iconz Stack by http://www.doobox.co.uk
// Copyright@2014 Mr JG Simpson, trading as Doobox.
// all rights reserved.

$(document).ready(function() {

if("none" == "none"){

var $stacks_in_1456this = $("#stacks_in_1456 i.fa");
var stacks_in_1456getfontsize = $stacks_in_1456this.css("font-size");
var stacks_in_1456fontsize = parseFloat(stacks_in_1456getfontsize, 10);
var stacks_in_1456orgfontsize = stacks_in_1456fontsize;
var stacks_in_1456lastwindowwidth = $(window).width();

var stacks_in_1456lastelementwidth;

    var stacks_in_1456resizerBigger = function () {
	    if(stacks_in_1456fontsize < stacks_in_1456orgfontsize){
		    if ($stacks_in_1456this.width() <= $("#stacks_in_1456").width()){
			    while($stacks_in_1456this.width() <= $("#stacks_in_1456").width()){
			  	stacks_in_1456fontsize = stacks_in_1456fontsize + 2;
			    $stacks_in_1456this.css({
			    "font-size": stacks_in_1456fontsize + "px"
			    });
			    }
			    if ($stacks_in_1456this.width() >= $("#stacks_in_1456").width()){
			    stacks_in_1456fontsize = stacks_in_1456fontsize - 2
			    $stacks_in_1456this.css("font-size", stacks_in_1456fontsize + "px");
			    }
		    }else{
		    	stacks_in_1456resizerSmaller();
		    }
		    if(stacks_in_1456fontsize > stacks_in_1456orgfontsize){
			    stacks_in_1456fontsize = stacks_in_1456orgfontsize;
			    $stacks_in_1456this.css("font-size", stacks_in_1456fontsize + "px");
		    }
	    }
	    else if($stacks_in_1456this.width() >= $("#stacks_in_1456").width()){
		    stacks_in_1456resizerSmaller();
	    }
    }
  
  
    var stacks_in_1456resizerSmaller = function () {
    if ($stacks_in_1456this.width() >= $("#stacks_in_1456").width()){
    while($stacks_in_1456this.width() >= $("#stacks_in_1456").width()){
  	stacks_in_1456fontsize = stacks_in_1456fontsize - 2;
    $stacks_in_1456this.css({"font-size": stacks_in_1456fontsize + "px"});
    }
    }else if(stacks_in_1456fontsize > stacks_in_1456orgfontsize){
    stacks_in_1456fontsize = stacks_in_1456orgfontsize;
    $stacks_in_1456this.css("font-size", stacks_in_1456fontsize + "px");
    }
    else{
	    stacks_in_1456resizerBigger();
    }
  }
  
  
  
  if ($stacks_in_1456this.is(":visible")){
  var stacks_in_1456lastcontainerwidth = $("#stacks_in_1456").width();
  }
  
  
  var stacks_in_1456delay = (function(){
  var stacks_in_1456timer = 0;
  return function(callback, ms){
    clearTimeout (stacks_in_1456timer);
    stacks_in_1456timer = setTimeout(callback, ms);
  };
  })();
  
  
    $(window).resize(function() {
    stacks_in_1456delay(function(){
	    if ($stacks_in_1456this.is(":visible")){
	     if (stacks_in_1456lastcontainerwidth != $("#stacks_in_1456").width()){
	       stacks_in_1456lastcontainerwidth = $("#stacks_in_1456").width();
	       windowwidth = $(window).width();
	       if (windowwidth < stacks_in_1456lastwindowwidth){
	         stacks_in_1456resizerSmaller();
	       }else{
	         stacks_in_1456resizerBigger();
	       }
	       stacks_in_1456lastwindowwidth = windowwidth
	    }
	    }
    }, 10);
   });
  
 
  
  function stacks_in_1456resizeMe(){
    stacks_in_1456delay(function(){
    	if(stacks_in_1456fontsize < stacks_in_1456orgfontsize){
		    while($stacks_in_1456this.width() <= $("#stacks_in_1456").width()){
		   	 stacks_in_1456fontsize = stacks_in_1456fontsize + 2;
		   	 $stacks_in_1456this.css("font-size", stacks_in_1456fontsize + "px");
		    }
	    }
	    while($stacks_in_1456this.width() >= $("#stacks_in_1456").width()){
	      stacks_in_1456fontsize = stacks_in_1456fontsize - 2;
	   	  $stacks_in_1456this.css("font-size", stacks_in_1456fontsize + "px");
	    }
	     stacks_in_1456lastelementwidth = $stacks_in_1456this.width();
	      //stacks_in_1456keepCheckingSize();
    }, 10);
  }
  

if ($stacks_in_1456this.is(":visible")){
stacks_in_1456resizeMe();
}else{
// do something here
}

}

}); // end doc ready
// End Iconz stack js


return stack;})(stacks.stacks_in_1456);
stacks.stacks_in_1402 = {};
stacks.stacks_in_1402 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright ???? 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright ???? 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

 $(document).ready(function() {

	
		$('.cpsl_myID4').hide();
	

	$('#stacks_in_1402 .trigger_myID4').click(function() {


		if ($('.trigger_myID4').hasClass('current')) {
					$('.cpsl_myID4').stop().slideUp({
						duration: 600,
						easing: "easeInOutQuint"
					});

					$('.trigger_myID4').removeClass('toggle_open').addClass('toggle_closed').removeClass('current');
					

		} else if ($('.trigger_myID4').hasClass('toggle_closed')) {

					
					//
					// Reset things so all Capsule Contents are collapsed
					//

					$('.trigger_content').slideUp({
						duration: 600,
						easing: "easeInOutQuint"
					});

					$('.elixir_trigger').removeClass('toggle_open').removeClass('current').addClass('toggle_closed');

					


					

					$('.cpsl_myID4').stop().slideDown({
						duration: 600,
						easing: "easeInOutQuint"
					});

 					$('.trigger_myID4').removeClass('toggle_closed').addClass('toggle_open').addClass('current');
					

		}


	});

});

return stack;})(stacks.stacks_in_1402);
stacks.stacks_in_1458 = {};
stacks.stacks_in_1458 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){
	if((navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPad/i))||(navigator.userAgent.match(/Android/i))||(navigator.userAgent.match(/Blackberry/i))||(navigator.userAgent.match(/Samsung/i))||(navigator.userAgent.match(/Operamini/i))||(navigator.userAgent.match(/Iemobile/i)) ) {
		$("#hoverBoxWrapperstacks_in_1458").addClass('touchDeviceDetected');
	} else {
		$("#hoverBoxWrapperstacks_in_1458").addClass('noTouchDeviceDetected');
	}
});





return stack;})(stacks.stacks_in_1458);
stacks.stacks_in_1460 = {};
stacks.stacks_in_1460 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1460);
stacks.stacks_in_1463 = {};
stacks.stacks_in_1463 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1463);
stacks.stacks_in_1465 = {};
stacks.stacks_in_1465 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1465);
stacks.stacks_in_1467 = {};
stacks.stacks_in_1467 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){var position="absolute",position_class="target_stack target_stacks_in_1467 disable-small width-fill height-auto position-absolute vcenter left_px ",condition="disable-small",testHeight=condition==="target-height"?true:false,target=$("#stacks_in_1467").parent();if(testHeight){var targetHeight=function(){var windowHeight=$(window).height(),documentHeight=$(".stacks_top").first().height();if(windowHeight>documentHeight){target.addClass(position_class);}
else{target.removeClass(position_class);}};targetHeight();$(window).afterresize(targetHeight);}
else{target.addClass(position_class);}
if(position=="custom"){var custom_element=$("#custom_id");target.appendTo(custom_element);}
if(position=="body"){target.appendTo("body");}});

return stack;})(stacks.stacks_in_1467);
stacks.stacks_in_1469 = {};
stacks.stacks_in_1469 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;// Iconz Stack by http://www.doobox.co.uk
// Copyright@2014 Mr JG Simpson, trading as Doobox.
// all rights reserved.

$(document).ready(function() {

if("none" == "none"){

var $stacks_in_1469this = $("#stacks_in_1469 i.fa");
var stacks_in_1469getfontsize = $stacks_in_1469this.css("font-size");
var stacks_in_1469fontsize = parseFloat(stacks_in_1469getfontsize, 10);
var stacks_in_1469orgfontsize = stacks_in_1469fontsize;
var stacks_in_1469lastwindowwidth = $(window).width();

var stacks_in_1469lastelementwidth;

    var stacks_in_1469resizerBigger = function () {
	    if(stacks_in_1469fontsize < stacks_in_1469orgfontsize){
		    if ($stacks_in_1469this.width() <= $("#stacks_in_1469").width()){
			    while($stacks_in_1469this.width() <= $("#stacks_in_1469").width()){
			  	stacks_in_1469fontsize = stacks_in_1469fontsize + 2;
			    $stacks_in_1469this.css({
			    "font-size": stacks_in_1469fontsize + "px"
			    });
			    }
			    if ($stacks_in_1469this.width() >= $("#stacks_in_1469").width()){
			    stacks_in_1469fontsize = stacks_in_1469fontsize - 2
			    $stacks_in_1469this.css("font-size", stacks_in_1469fontsize + "px");
			    }
		    }else{
		    	stacks_in_1469resizerSmaller();
		    }
		    if(stacks_in_1469fontsize > stacks_in_1469orgfontsize){
			    stacks_in_1469fontsize = stacks_in_1469orgfontsize;
			    $stacks_in_1469this.css("font-size", stacks_in_1469fontsize + "px");
		    }
	    }
	    else if($stacks_in_1469this.width() >= $("#stacks_in_1469").width()){
		    stacks_in_1469resizerSmaller();
	    }
    }
  
  
    var stacks_in_1469resizerSmaller = function () {
    if ($stacks_in_1469this.width() >= $("#stacks_in_1469").width()){
    while($stacks_in_1469this.width() >= $("#stacks_in_1469").width()){
  	stacks_in_1469fontsize = stacks_in_1469fontsize - 2;
    $stacks_in_1469this.css({"font-size": stacks_in_1469fontsize + "px"});
    }
    }else if(stacks_in_1469fontsize > stacks_in_1469orgfontsize){
    stacks_in_1469fontsize = stacks_in_1469orgfontsize;
    $stacks_in_1469this.css("font-size", stacks_in_1469fontsize + "px");
    }
    else{
	    stacks_in_1469resizerBigger();
    }
  }
  
  
  
  if ($stacks_in_1469this.is(":visible")){
  var stacks_in_1469lastcontainerwidth = $("#stacks_in_1469").width();
  }
  
  
  var stacks_in_1469delay = (function(){
  var stacks_in_1469timer = 0;
  return function(callback, ms){
    clearTimeout (stacks_in_1469timer);
    stacks_in_1469timer = setTimeout(callback, ms);
  };
  })();
  
  
    $(window).resize(function() {
    stacks_in_1469delay(function(){
	    if ($stacks_in_1469this.is(":visible")){
	     if (stacks_in_1469lastcontainerwidth != $("#stacks_in_1469").width()){
	       stacks_in_1469lastcontainerwidth = $("#stacks_in_1469").width();
	       windowwidth = $(window).width();
	       if (windowwidth < stacks_in_1469lastwindowwidth){
	         stacks_in_1469resizerSmaller();
	       }else{
	         stacks_in_1469resizerBigger();
	       }
	       stacks_in_1469lastwindowwidth = windowwidth
	    }
	    }
    }, 10);
   });
  
 
  
  function stacks_in_1469resizeMe(){
    stacks_in_1469delay(function(){
    	if(stacks_in_1469fontsize < stacks_in_1469orgfontsize){
		    while($stacks_in_1469this.width() <= $("#stacks_in_1469").width()){
		   	 stacks_in_1469fontsize = stacks_in_1469fontsize + 2;
		   	 $stacks_in_1469this.css("font-size", stacks_in_1469fontsize + "px");
		    }
	    }
	    while($stacks_in_1469this.width() >= $("#stacks_in_1469").width()){
	      stacks_in_1469fontsize = stacks_in_1469fontsize - 2;
	   	  $stacks_in_1469this.css("font-size", stacks_in_1469fontsize + "px");
	    }
	     stacks_in_1469lastelementwidth = $stacks_in_1469this.width();
	      //stacks_in_1469keepCheckingSize();
    }, 10);
  }
  

if ($stacks_in_1469this.is(":visible")){
stacks_in_1469resizeMe();
}else{
// do something here
}

}

}); // end doc ready
// End Iconz stack js


return stack;})(stacks.stacks_in_1469);
stacks.stacks_in_1408 = {};
stacks.stacks_in_1408 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright ???? 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright ???? 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

 $(document).ready(function() {

	
		$('.cpsl_myID5').hide();
	

	$('#stacks_in_1408 .trigger_myID5').click(function() {


		if ($('.trigger_myID5').hasClass('current')) {
					$('.cpsl_myID5').stop().slideUp({
						duration: 600,
						easing: "easeInOutQuint"
					});

					$('.trigger_myID5').removeClass('toggle_open').addClass('toggle_closed').removeClass('current');
					

		} else if ($('.trigger_myID5').hasClass('toggle_closed')) {

					
					//
					// Reset things so all Capsule Contents are collapsed
					//

					$('.trigger_content').slideUp({
						duration: 600,
						easing: "easeInOutQuint"
					});

					$('.elixir_trigger').removeClass('toggle_open').removeClass('current').addClass('toggle_closed');

					


					

					$('.cpsl_myID5').stop().slideDown({
						duration: 600,
						easing: "easeInOutQuint"
					});

 					$('.trigger_myID5').removeClass('toggle_closed').addClass('toggle_open').addClass('current');
					

		}


	});

});

return stack;})(stacks.stacks_in_1408);
stacks.stacks_in_1473 = {};
stacks.stacks_in_1473 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1473);
stacks.stacks_in_1414 = {};
stacks.stacks_in_1414 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright ???? 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright ???? 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

 $(document).ready(function() {

	
		$('.cpsl_myID6').hide();
	

	$('#stacks_in_1414 .trigger_myID6').click(function() {


		if ($('.trigger_myID6').hasClass('current')) {
					$('.cpsl_myID6').stop().slideUp({
						duration: 600,
						easing: "easeInOutQuint"
					});

					$('.trigger_myID6').removeClass('toggle_open').addClass('toggle_closed').removeClass('current');
					

		} else if ($('.trigger_myID6').hasClass('toggle_closed')) {

					
					//
					// Reset things so all Capsule Contents are collapsed
					//

					$('.trigger_content').slideUp({
						duration: 600,
						easing: "easeInOutQuint"
					});

					$('.elixir_trigger').removeClass('toggle_open').removeClass('current').addClass('toggle_closed');

					


					

					$('.cpsl_myID6').stop().slideDown({
						duration: 600,
						easing: "easeInOutQuint"
					});

 					$('.trigger_myID6').removeClass('toggle_closed').addClass('toggle_open').addClass('current');
					

		}


	});

});

return stack;})(stacks.stacks_in_1414);
stacks.stacks_in_1632 = {};
stacks.stacks_in_1632 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1632);
stacks.stacks_in_1634 = {};
stacks.stacks_in_1634 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){var position="absolute",position_class="target_stack target_stacks_in_1634  width-fill height-auto position-absolute vcenter left_px ",condition="",testHeight=condition==="target-height"?true:false,target=$("#stacks_in_1634").parent();if(testHeight){var targetHeight=function(){var windowHeight=$(window).height(),documentHeight=$(".stacks_top").first().height();if(windowHeight>documentHeight){target.addClass(position_class);}
else{target.removeClass(position_class);}};targetHeight();$(window).afterresize(targetHeight);}
else{target.addClass(position_class);}
if(position=="custom"){var custom_element=$("#custom_id");target.appendTo(custom_element);}
if(position=="body"){target.appendTo("body");}});

return stack;})(stacks.stacks_in_1634);
stacks.stacks_in_1639 = {};
stacks.stacks_in_1639 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.stacks_in_1639);
stacks.stacks_in_1641 = {};
stacks.stacks_in_1641 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(document).ready(function(){var position="absolute",position_class="target_stack target_stacks_in_1641  width-fill height-auto position-absolute vcenter left_px ",condition="",testHeight=condition==="target-height"?true:false,target=$("#stacks_in_1641").parent();if(testHeight){var targetHeight=function(){var windowHeight=$(window).height(),documentHeight=$(".stacks_top").first().height();if(windowHeight>documentHeight){target.addClass(position_class);}
else{target.removeClass(position_class);}};targetHeight();$(window).afterresize(targetHeight);}
else{target.addClass(position_class);}
if(position=="custom"){var custom_element=$("#custom_id");target.appendTo(custom_element);}
if(position=="body"){target.appendTo("body");}});

return stack;})(stacks.stacks_in_1641);
stacks.stacks_in_1662_11 = {};
stacks.stacks_in_1662_11 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){$(window).on('load',function(){$('#stacks_in_1662_11>.s-pro:not(.vault-height)>.shear-wrapper').removeClass('preload-wrapper');$('#stacks_in_1662_11>.s-pro:not(.vault-height) .content').removeClass('preload-content');});});

return stack;})(stacks.stacks_in_1662_11);
stacks.stacks_in_1662_9 = {};
stacks.stacks_in_1662_9 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){var win=$(window),stack=$('#stacks_in_1662_9'),spacer=$('.spacer_stacks_in_1662_9'),positionClass='section-bottom',sideClass='section-full-width',sectionWrapperId='#'+stack.closest('.shear-wrapper').attr('id'),sectionContent=stack.closest('.content-wrapper');stack.unwrap();stack.addClass('section-absolute').addClass(positionClass).addClass(sideClass).addClass('').appendTo(sectionWrapperId);if(positionClass=='section-bottom'){spacer.appendTo(sectionContent);}else{spacer.prependTo(sectionContent);}var resizeSpacer=function(){var targetHeight=stack.outerHeight();spacer.css('height',targetHeight);}
win.on("resize",resizeSpacer);resizeSpacer();$(window).load(function(){$('.section-fix',stack).removeClass('pre-load');resizeSpacer();});});

return stack;})(stacks.stacks_in_1662_9);
stacks.stacks_in_1662_37 = {};
stacks.stacks_in_1662_37 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; const form=$("#stacks_in_1662_37");if(form.hasClass("auto-submit-on-select-change")){$("select",form).change(()=>form.submit());}
const autosubmit=form.data("autosubmit");if(autosubmit){for(const name of autosubmit.split(",")){$(`[name="${name.trim()}"]`,form).change(()=>form.submit());}}
const form_processing=(callback)=>{form.removeClass("success error").addClass("processing");if(typeof callback==="function"){callback();}};const form_success=(data,status,jqxhr)=>{setTimeout(()=>{$(form).trigger("foundation.form.success",data);form[0].reset();form.removeClass("processing").addClass("success");},1000);};const form_error=(jqxhr,status,msg)=>{setTimeout(()=>{$(form).trigger("foundation.form.error",jqxhr);form.removeClass("processing").addClass("error");console.error("Foundation Post Error: ",jqxhr);},1000);};const form_submit=(postUrl,postType="POST",jsonData=false)=>{form_processing(()=>{let formdata=new FormData(form[0]);const timeout=30*1000;const async=true;if(jsonData===true){const data={};formdata.forEach((value,key)=>(data[key]=value));formdata=JSON.stringify(data);}
$.ajax({type:postType,url:postUrl,data:formdata,async:async,contentType:false,processData:false,success:form_success,error:form_error,timeout:timeout});});};const form_recaptcha=(callback)=>{if(typeof grecaptcha==="undefined")return;$(".g-recaptcha iframe",form).removeClass("error");const stackid=grecaptcha.stackid;const formdata=new FormData(form[0]);if(grecaptcha.version=="v3"){formdata.append("g-recaptcha-response",grecaptcha.token);}
$.ajax({type:"POST",url:"files/"+stackid+"_recaptcha.php",data:formdata,cache:false,async:false,contentType:false,processData:false,success:(data)=>{if(typeof callback==="function"){callback();}},error:(data)=>{console.error("Error checking reCAPTCHA");console.error(data);$(".g-recaptcha iframe",form).addClass("error");form_error();},complete:()=>{grecaptcha.reset();}});};stacks.forms.stacks_in_1662_37={};stacks.forms.stacks_in_1662_37.ajax_submit=(postUrl,postType="POST",jsonData=false)=>{if(typeof grecaptcha!=="undefined"){form_recaptcha(function(){form_submit(postUrl,postType,jsonData);});}else if($(".topyenoh input").length>0){if($(".topyenoh input").val().length==0){form_submit(postUrl,postType,jsonData);}else{console.warn("Failed honeypot. Release the honey badgers!");}}else{form_submit(postUrl,postType,jsonData);}};

return stack;})(stacks.stacks_in_1662_37);
stacks.stacks_in_1662_72 = {};
stacks.stacks_in_1662_72 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; const element=document.getElementById("f6-action-stacks_in_1662_72");if(element==null)return;$(document).on("formvalid.zf.abide",function(e,form){if(element.parentNode.id==form[0].id){console.log(`Triggering Email Action for form id"${form[0].id}"`);stacks.forms[element.parentNode.id].ajax_submit("files/stacks_in_1662_72_mailer.php");}});

return stack;})(stacks.stacks_in_1662_72);
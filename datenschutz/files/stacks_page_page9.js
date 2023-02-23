//
// vein
//

!function(e,t){"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vein",t):this.vein=t()}(0,function(){var e=function(){},t=function(e,t,n){var s,r,l=[],i=[],u=t[document.all?"rules":"cssRules"],o=e.replace(/\s/g,"");for(s=0,r=u.length;s<r;s++)(u[s].selectorText===e||4===u[s].type&&u[s].cssText.replace(/\s/g,"").substring(0,o.length)==o)&&(null===n?i.push(s):l.push(u[s]));for(s=0,r=i.length;s<r;s++)t.deleteRule(i[s]);return l},n=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+": "+e[n]+";");return t.join("")};e.getStylesheet=function(){return this.element&&document.getElementById("vein")||(this.element=document.createElement("style"),this.element.setAttribute("type","text/css"),this.element.setAttribute("id","vein"),document.getElementsByTagName("head")[0].appendChild(this.element),this.stylesheet=this.element.sheet),this.stylesheet};var s=function(e){return e[document.all?"rules":"cssRules"]},r=function(e,t,n){var r=s(n);n.insertRule?n.insertRule(e+"{"+t+"}",r.length):n.addRule(e,t,r.length)};return e.inject=function(e,l,i){var u,o,h,f,c,a,y,d,g,p,m=(i=function(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e}({},i)).stylesheet||this.getStylesheet();s(m);for("string"==typeof e&&(e=[e]),u=0,o=e.length;u<o;u++)if("object"==typeof e[u]&&m.insertRule)for(h in e[u])if(0===(f=t(h,m,l)).length)for(c=n(l),g=0,p=e[u][h].length;g<p;g++)r(h,e[u][h][g]+"{"+c+"}",m);else for(y=0,d=f.length;y<d;y++)this.inject(e[u][h],l,{stylesheet:f[y]});else{if(f=t(e[u],m,l),null===l)return;if(0===f.length)c=n(l),r(e[u],c,m);else for(y=0,d=f.length;y<d;y++)for(a in l)l.hasOwnProperty(a)&&(f[y].style.setProperty?f[y].style.setProperty(a,l[a],""):f[y].style.setAttribute(a,l[a],""))}return this},e});


/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};
stacks.jQuery = jQuery.noConflict(true);
stacks.com_bigwhiteduck_stacks_headerpro = {};
stacks.com_bigwhiteduck_stacks_headerpro = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; var elements=document.getElementsByClassName('hp-slice');while(elements.length>0){elements[0].parentNode.removeChild(elements[0]);}

return stack;})(stacks.com_bigwhiteduck_stacks_headerpro);
stacks.ws_foundation_styles = {};
stacks.ws_foundation_styles = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.ws_foundation_styles);
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
stacks.ws_foundation_form = {};
stacks.ws_foundation_form = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
const urlParams=new URLSearchParams(window.location.search);const entries=Array.from(urlParams.entries());for(const entry of entries){const fieldName=entry[0];const fieldValue=entry[1];const inputs=Array.from(document.getElementsByName(fieldName));if(inputs.length>0){for(const input of inputs){if(input.classList.contains("switch-input")||input.type==="radio"||input.type==="checkbox"){input.checked=(fieldValue.split(",").indexOf(input.value)!==-1);continue;}
input.value=fieldValue;}
continue;}
const checkboxes=Array.from(document.getElementsByName(`${fieldName}[]`));if(checkboxes.length>0){for(const checkbox of checkboxes){checkbox.checked=(fieldValue.split(",").indexOf(checkbox.value)!==-1);}}}
if("undefined"==typeof stacks.forms)stacks.forms={};$.fn.serializeAndEncodeForm=function(){return $.map(this.serializeArray(),function(val){return[val.name,encodeURIComponent(val.value)].join("=");}).join("&");};$(document).on("invalid.zf.abide",function(e,el){console.warn(`Field name"${el[0].name}"is invalid`);}).on("valid.zf.abide",function(e,el){console.log(`Field name"${el[0].name}"is valid`);}).on("submit",function(e){if(e.target.classList.contains("ajax-form")){e.preventDefault();console.log(`Submit for form id"${e.target.id}"intercepted`);}}).on("forminvalid.zf.abide",function(e,form){console.warn(`Form id"${form[0].id}"is invalid`);}).on("formvalid.zf.abide",function(e,form){console.log(`Form id"${form[0].id}"is valid`);});$("select").on("change",function(){const id=$(this).attr("id");const hidden=$(`#${id}-label`);if(hidden.length>0){const text=$("option:selected",this).map(function(){return $(this).text();}).get().join(", ");hidden.val(text);}});

return stack;})(stacks.ws_foundation_form);
stacks.com_bigwhiteduck_stacks_menulab_chroma = {};
stacks.com_bigwhiteduck_stacks_menulab_chroma = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;(function(){var lastTime=0;var vendors=['ms','moz','webkit','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame'];}
if(!window.requestAnimationFrame)
window.requestAnimationFrame=function(callback){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall);},timeToCall);lastTime=currTime+timeToCall;return id;};if(!window.cancelAnimationFrame)
window.cancelAnimationFrame=function(id){clearTimeout(id);};}());

return stack;})(stacks.com_bigwhiteduck_stacks_menulab_chroma);
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
stacks.stacks_in_1169 = {};
stacks.stacks_in_1169 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){var win=$(window),stack=$('#stacks_in_1169'),spacer=$('.spacer_stacks_in_1169'),positionClass='section-bottom',sideClass='section-left',sectionWrapperId='#'+stack.closest('.shear-wrapper').attr('id'),sectionContent=stack.closest('.content-wrapper');stack.unwrap();stack.addClass('section-absolute').addClass(positionClass).addClass(sideClass).addClass('').appendTo(sectionWrapperId);if(positionClass=='section-bottom'){spacer.appendTo(sectionContent);}else{spacer.prependTo(sectionContent);}var resizeSpacer=function(){var targetHeight=stack.outerHeight();spacer.css('height',targetHeight);}
win.on("resize",resizeSpacer);resizeSpacer();$(window).load(function(){$('.section-fix',stack).removeClass('pre-load');resizeSpacer();});});

return stack;})(stacks.stacks_in_1169);
stacks.stacks_in_1174_11 = {};
stacks.stacks_in_1174_11 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){$(window).on('load',function(){$('#stacks_in_1174_11>.s-pro:not(.vault-height)>.shear-wrapper').removeClass('preload-wrapper');$('#stacks_in_1174_11>.s-pro:not(.vault-height) .content').removeClass('preload-content');});});

return stack;})(stacks.stacks_in_1174_11);
stacks.stacks_in_1174_9 = {};
stacks.stacks_in_1174_9 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){var win=$(window),stack=$('#stacks_in_1174_9'),spacer=$('.spacer_stacks_in_1174_9'),positionClass='section-bottom',sideClass='section-full-width',sectionWrapperId='#'+stack.closest('.shear-wrapper').attr('id'),sectionContent=stack.closest('.content-wrapper');stack.unwrap();stack.addClass('section-absolute').addClass(positionClass).addClass(sideClass).addClass('').appendTo(sectionWrapperId);if(positionClass=='section-bottom'){spacer.appendTo(sectionContent);}else{spacer.prependTo(sectionContent);}var resizeSpacer=function(){var targetHeight=stack.outerHeight();spacer.css('height',targetHeight);}
win.on("resize",resizeSpacer);resizeSpacer();$(window).load(function(){$('.section-fix',stack).removeClass('pre-load');resizeSpacer();});});

return stack;})(stacks.stacks_in_1174_9);
stacks.stacks_in_1174_37 = {};
stacks.stacks_in_1174_37 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; const form=$("#stacks_in_1174_37");if(form.hasClass("auto-submit-on-select-change")){$("select",form).change(()=>form.submit());}
const autosubmit=form.data("autosubmit");if(autosubmit){for(const name of autosubmit.split(",")){$(`[name="${name.trim()}"]`,form).change(()=>form.submit());}}
const form_processing=(callback)=>{form.removeClass("success error").addClass("processing");if(typeof callback==="function"){callback();}};const form_success=(data,status,jqxhr)=>{setTimeout(()=>{$(form).trigger("foundation.form.success",data);form[0].reset();form.removeClass("processing").addClass("success");},1000);};const form_error=(jqxhr,status,msg)=>{setTimeout(()=>{$(form).trigger("foundation.form.error",jqxhr);form.removeClass("processing").addClass("error");console.error("Foundation Post Error: ",jqxhr);},1000);};const form_submit=(postUrl,postType="POST",jsonData=false)=>{form_processing(()=>{let formdata=new FormData(form[0]);const timeout=30*1000;const async=true;if(jsonData===true){const data={};formdata.forEach((value,key)=>(data[key]=value));formdata=JSON.stringify(data);}
$.ajax({type:postType,url:postUrl,data:formdata,async:async,contentType:false,processData:false,success:form_success,error:form_error,timeout:timeout});});};const form_recaptcha=(callback)=>{if(typeof grecaptcha==="undefined")return;$(".g-recaptcha iframe",form).removeClass("error");const stackid=grecaptcha.stackid;const formdata=new FormData(form[0]);if(grecaptcha.version=="v3"){formdata.append("g-recaptcha-response",grecaptcha.token);}
$.ajax({type:"POST",url:"files/"+stackid+"_recaptcha.php",data:formdata,cache:false,async:false,contentType:false,processData:false,success:(data)=>{if(typeof callback==="function"){callback();}},error:(data)=>{console.error("Error checking reCAPTCHA");console.error(data);$(".g-recaptcha iframe",form).addClass("error");form_error();},complete:()=>{grecaptcha.reset();}});};stacks.forms.stacks_in_1174_37={};stacks.forms.stacks_in_1174_37.ajax_submit=(postUrl,postType="POST",jsonData=false)=>{if(typeof grecaptcha!=="undefined"){form_recaptcha(function(){form_submit(postUrl,postType,jsonData);});}else if($(".topyenoh input").length>0){if($(".topyenoh input").val().length==0){form_submit(postUrl,postType,jsonData);}else{console.warn("Failed honeypot. Release the honey badgers!");}}else{form_submit(postUrl,postType,jsonData);}};

return stack;})(stacks.stacks_in_1174_37);
stacks.stacks_in_1174_72 = {};
stacks.stacks_in_1174_72 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; const element=document.getElementById("f6-action-stacks_in_1174_72");if(element==null)return;$(document).on("formvalid.zf.abide",function(e,form){if(element.parentNode.id==form[0].id){console.log(`Triggering Email Action for form id"${form[0].id}"`);stacks.forms[element.parentNode.id].ajax_submit("files/stacks_in_1174_72_mailer.php");}});

return stack;})(stacks.stacks_in_1174_72);
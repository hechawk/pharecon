//
// vein
//

!function(e,t){"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vein",t):this.vein=t()}(0,function(){var e=function(){},t=function(e,t,n){var s,r,l=[],i=[],u=t[document.all?"rules":"cssRules"],o=e.replace(/\s/g,"");for(s=0,r=u.length;s<r;s++)(u[s].selectorText===e||4===u[s].type&&u[s].cssText.replace(/\s/g,"").substring(0,o.length)==o)&&(null===n?i.push(s):l.push(u[s]));for(s=0,r=i.length;s<r;s++)t.deleteRule(i[s]);return l},n=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+": "+e[n]+";");return t.join("")};e.getStylesheet=function(){return this.element&&document.getElementById("vein")||(this.element=document.createElement("style"),this.element.setAttribute("type","text/css"),this.element.setAttribute("id","vein"),document.getElementsByTagName("head")[0].appendChild(this.element),this.stylesheet=this.element.sheet),this.stylesheet};var s=function(e){return e[document.all?"rules":"cssRules"]},r=function(e,t,n){var r=s(n);n.insertRule?n.insertRule(e+"{"+t+"}",r.length):n.addRule(e,t,r.length)};return e.inject=function(e,l,i){var u,o,h,f,c,a,y,d,g,p,m=(i=function(e){e=e||{};for(var t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e}({},i)).stylesheet||this.getStylesheet();s(m);for("string"==typeof e&&(e=[e]),u=0,o=e.length;u<o;u++)if("object"==typeof e[u]&&m.insertRule)for(h in e[u])if(0===(f=t(h,m,l)).length)for(c=n(l),g=0,p=e[u][h].length;g<p;g++)r(h,e[u][h][g]+"{"+c+"}",m);else for(y=0,d=f.length;y<d;y++)this.inject(e[u][h],l,{stylesheet:f[y]});else{if(f=t(e[u],m,l),null===l)return;if(0===f.length)c=n(l),r(e[u],c,m);else for(y=0,d=f.length;y<d;y++)for(a in l)l.hasOwnProperty(a)&&(f[y].style.setProperty?f[y].style.setProperty(a,l[a],""):f[y].style.setAttribute(a,l[a],""))}return this},e});


//
// jwlib-utils
//

(function($){"use strict";jQuery.fn.exists=function(){return jQuery(this).length>0;};jQuery.getParameterByName=function(name,url){if(!url)url=window.location.href;name=name.replace(/[[\]]/g,"\\$&");var regex=new RegExp("[?&]"+name+"(=([^&#]*)|&|#|$)"),results=regex.exec(url);if(!results)return null;if(!results[2])return"";return decodeURIComponent(results[2].replace(/\+/g," "));};jQuery.debug=function(){if(window.debug===true)window.debug=1;var maxlevel=parseInt($.getParameterByName("debug")||window.debug)||0;if(maxlevel===0)return;var args=Array.prototype.slice.call(arguments),group="debug",loglevel=1;if(args.length>1&&typeof(args[args.length-1])==="number"){loglevel=args.pop();}
if(loglevel>maxlevel)return;if(args.length>1&&typeof(args[0])==="string"){group=args.shift();}
var debugGroup=$.getParameterByName("debugGroup")||window.debugGroup;if(debugGroup&&!group.match(debugGroup))return;console.group(group);args.forEach(function(arg){if(Array.isArray(arg)&&typeof arg[0]!=="object"){console.table(arg);}
else{console.log(arg);}});console.groupEnd();};jQuery.isMobile=jQuery.isTouch=function(){return"ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||false;};if(jQuery.isTouch())document.documentElement.classList.add("touch");jQuery.clearBrowserCache=function(){$(window).on("pageshow",function(event){if(event.originalEvent.persisted){window.location.reload();}});};jQuery.preloadImages=function(){for(var i=0;i<arguments.length;i++){$("<img />").attr("src",arguments[i]);}};var triggerWindowResize=function(){$(window).trigger("resize");};if(typeof(orientationEvent)==undefined){var orientationEvent=0;}
$(window).on(orientationEvent,triggerWindowResize).on("load",triggerWindowResize);})(jQuery);


/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
var stacks = {};
stacks.jQuery = jQuery.noConflict(true);
stacks.ws_foundation_styles = {};
stacks.ws_foundation_styles = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

return stack;})(stacks.ws_foundation_styles);
stacks.com_joeworkman_stacks_totalcms_admin_styles = {};
stacks.com_joeworkman_stacks_totalcms_admin_styles = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;

$(function(){var focusedElement=false;$("body").on("focusin","textarea.format-selection,input.format-selection",function(){focusedElement=$(this);}).on("focusout","textarea.format-selection,input.format-selection",function(){setTimeout(function(){if(focusedElement!==false&&!focusedElement.is(':focus'))focusedElement=false;},500);});$(".totaltip").each(function(){if($("#totaltip").exists()){$(this).remove();}
else{$(this).appendTo('body').hide().attr('id','totaltip');}});if($("#totaltip").exists()){stacks.totalMousePos={x:-9999,y:-100};$("body").on("mousemove","textarea.format-selection",function(event){stacks.totalMousePos.x=event.pageX-window.scrollX;stacks.totalMousePos.y=event.pageY-window.scrollY;});$("textarea.format-selection").afterselect(function(){var totaltip=$("#totaltip");totaltip.hide().css({top:stacks.totalMousePos.y+15,left:stacks.totalMousePos.x-15}).fadeIn('fast');$("textarea,input").one("mousedown keydown scroll",function(event){totaltip.removeAttr('style');});$(document).one("scroll",function(event){totaltip.removeAttr('style');});});}
$('.totaltip a,.totalbar button').click(function(){if(focusedElement!==false)focusedElement.closest('form.text-form').addClass('unsaved');});$('.totalbar').first().clone().hide().appendTo('body');$("textarea").keydown(function(e){var keyCode=e.keyCode||e.which;if(keyCode==9){e.preventDefault();var selected=focusedElement.textrange();focusedElement.closest('form.text-form').addClass('unsaved');focusedElement.textrange('replace',"\t").trigger('updateInfo').focus();focusedElement.textrange('setcursor',selected.end+1);}});$('.totalbar-bold').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange(),boldRegex=/^\s*\*\*(.+)\*\*.*/,markdown;if(selected.text===''){markdown="**** ";focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();focusedElement.textrange('setcursor',selected.end+2);}
else if(selected.text.match(boldRegex)){markdown=selected.text.replace(boldRegex,'$1');focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}
else{markdown="**"+selected.text+"**";focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}}});$('.totalbar-italic').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange(),italicRegex=/^\s*_(.+)_.*/,markdown;if(selected.text===''){markdown="__ ";focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();focusedElement.textrange('setcursor',selected.end+1);}
else if(selected.text.match(italicRegex)){markdown=selected.text.replace(italicRegex,'$1');focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}
else{markdown="_"+selected.text+"_";focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}}});$('.totalbar-header').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange(),alltext=focusedElement.val(),start=alltext.substr(selected.start-1,1),end=alltext.substr(selected.end,1),h3regex=/^#{3}\s*(.*)/,markdown;if(selected.text===''){markdown="### ";var setcursor=selected.end+4;if(start!=='#'&&start!=="\n"&&selected.start!==0){markdown="\n\n"+markdown;setcursor=setcursor+2;}
focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();focusedElement.textrange('setcursor',setcursor);}
else if(selected.text.match(h3regex)){markdown=selected.text.replace(h3regex,'$1');focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}
else{var newstart=false,newend=false;markdown="### "+selected.text;if(start!=="\n"&&selected.start!==0){markdown="\n\n"+markdown;newstart=true;}
if(end!=="\n"){markdown=markdown+"\n\n";newend=true;}
focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();var redo=focusedElement.textrange(),redoStart=redo.start,redoLength=redo.length;if(newstart){redoStart=redoStart+2;redoLength=redoLength-2;}
if(newend){redoLength=redoLength-2;}
focusedElement.textrange('set',redoStart,redoLength);}}});$('.totalbar-link').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange(),question=$(this).data('ask')||"Please enter url or email address",answer=$(this).data('answer')||"http://",markdown=false,url;if(selected.text===''){url=prompt(question,answer);if(url!==null&&url!=='')markdown="<"+url+">";}
else if(!selected.text.match(/^\s*<\S+>/)&&!selected.text.match(/^\[.+\]\(\S+\)/)){url=prompt(question,answer);if(url!==null&&url!==''){if(url.match(/@/))url='mailto:'+url;markdown="["+selected.text+"]("+url+")";}}
if(markdown!==false)
focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}});$('.totalbar-list').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange(),alltext=focusedElement.val(),start=alltext.substr(selected.start-1,1),end=alltext.substr(selected.end,1),startpos=selected.end,newstart=false,newend=false,listRegex=/^\*\s+(.*)/,markdown;if(selected.text===''){markdown="* ";var setcursor=selected.end+2;if(!end.match(/\S/)){markdown=markdown+"\n";}
focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();focusedElement.textrange('setcursor',setcursor);}
else if(selected.text.match(listRegex)){markdown=selected.text.split(/\n/).map(function(line){return line.replace(listRegex,'$1');}).filter(function(line){return line!=='';}).join("\n");focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}
else{markdown=selected.text.split(/\n/).map(function(line){if(line==='')return'';return line.match(/^\*/)?line:"* "+line;}).join("\n");if(!start.match(/\n/)&&selected.start!==0){markdown="\n\n"+markdown;newstart=true;}
if(!end.match(/\n\n/)){markdown=markdown+"\n";newend=true;}
focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}}});$('.totalbar-numlist').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange(),alltext=focusedElement.val(),start=alltext.substr(selected.start-1,1),end=alltext.substr(selected.end,1),startpos=selected.end,newstart=false,newend=false,listRegex=/^\d+\.\s+(.*)/,markdown;if(selected.text===''){markdown="1. ";var setcursor=selected.end+2;if(!end.match(/\S/)){markdown=markdown+"\n";}
focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();focusedElement.textrange('setcursor',setcursor);}
else if(selected.text.match(listRegex)){markdown=selected.text.split(/\n/).map(function(line){return line.replace(listRegex,'$1');}).filter(function(line){return line!=='';}).join("\n");focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}
else{var index=1;markdown=selected.text.split(/\n/).map(function(line){var newline=line.match(/^\d\./)?line:index+". "+line;index=index+1;return newline;}).join("\n");if(!start.match(/\n/)&&selected.start!==0){markdown="\n\n"+markdown;newstart=true;}
if(!end.match(/\n\n/)){markdown=markdown+"\n";newend=true;}
focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}}});$('.totalbar-indent').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange();if(selected.text===''){var alltext=focusedElement.val(),end=alltext.substr(selected.end,1);if(end.match(/[\d\*]/)){markdown="\t";focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}}
else{markdown=selected.text.split(/\n/).map(function(line){return"\t"+line;}).join("\n");focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}}});$('.totalbar-dedent').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange();if(selected.text===''){var alltext=focusedElement.val(),start=alltext.substr(selected.start-1,1),end=alltext.substr(selected.end,1);if(selected.start!==0&&start==="\t"){alltext=alltext.slice(0,selected.start-1)+alltext.slice(selected.start);focusedElement.val(alltext).trigger('updateInfo').focus();focusedElement.textrange('setcursor',selected.start-1);}
else if(end==="\t"){alltext=alltext.slice(0,selected.start)+alltext.slice(selected.start+1);focusedElement.val(alltext).trigger('updateInfo').focus();focusedElement.textrange('setcursor',selected.start);}}
else{markdown=selected.text.split(/\n/).map(function(line){return line.replace(/^\t/,'');}).join("\n");focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}}});$('.totalbar-image').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange(),question=$(this).data('ask')||"Please enter an image url",answer=$(this).data('answer')||"http://",imgRegex=/^\!\[.*\]\(.+\)/;if(!selected.text.match(imgRegex)){var alt=selected.text;var url=prompt(question,answer);if(url!==null&&url!==''){markdown=url.match(imgRegex)?url+' ':"!["+selected.text+"]("+url+") ";focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}}}});$('.totalbar-blockquote').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange();if(selected.text===''){markdown="\n> ";focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();focusedElement.textrange('setcursor',selected.start+1);}
else{markdown=selected.text.split(/\n/).map(function(line){var bqRegex=/^\>\s*/;return line.match(bqRegex)?line.replace(bqRegex,''):"> "+line;}).join("\n");focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}}});$('.totalbar-code').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange(),codeStrRegex=/^\s*\`(.+)\`/,markdown;if(selected.text===''){markdown="`` ";focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();focusedElement.textrange('setcursor',selected.end+1);}
else if(selected.text.match(/\n/)){if(selected.text.match(/\n\t/)){markdown=selected.text.split(/\n/).map(function(line){return line.replace(/^\t(.*)/,'$1');}).filter(function(line){return line!=='';}).join("\n");focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}
else{markdown=selected.text.split(/\n/).map(function(line){return"\t"+line;}).join("\n");focusedElement.textrange('replace',"\n"+markdown).trigger('updateInfo').focus();}}
else if(selected.text.match(codeStrRegex)){markdown=selected.text.replace(codeStrRegex,'$1');focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}
else{markdown="`"+selected.text+"`";focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();}}});$('.totalbar-rule').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange(),markdown="\n---\n\n";focusedElement.textrange('replace',markdown).trigger('updateInfo').focus();focusedElement.textrange('setcursor',selected.end+6);}});$('.totalbar-erase').click(function(){if(focusedElement!==false){var selected=focusedElement.textrange();var plaintext=selected.text.split(/\n/).map(function(line){line=line.replace(/^#+\s*(.+)/,'$1');line=line.replace(/\*\*(.+?)\*\*/g,'$1');line=line.replace(/\s_(.+?)_\s/g,' $1 ');line=line.replace(/^_(.+?)_$/g,'$1');line=line.replace(/^\t+(.+)/,'$1');line=line.replace(/^\*\s+(.+)/,'$1');line=line.replace(/^\d+\.\s+(.+)/,'$1');line=line.replace(/^\>+\s*(.+)/,'$1');return line;}).join("\n").replace(/\n{3}/g,"\n");focusedElement.textrange('replace',plaintext).trigger('updateInfo').focus();}});$('.totalbar-rewind').click(function(){if(focusedElement!==false){var form=focusedElement.closest('form.total-form'),slug=$('input[name=slug]',form).val(),type=$('input[name=type]',form).val(),get_url=stacks.totalcms.totalapi+'?'+$.param({'slug':slug,'type':type});$.ajax({url:get_url,cache:false,success:function(data){focusedElement.val(data.data);form.removeClass('unsaved');}});}});});
if(Cookies.get('total-interim')){$.ajax({type:'GET',url:"https://passport.weavers.space/total-cms/"+window.location.hostname+"/jsonCallback",async:true,jsonpCallback:'jsonCallback',contentType:"application/json",dataType:'jsonp',success:function(data){data.type='passport';$.debug('Interim Passport Check',data);$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:data,});},error:function(e){console.error('Interim Passport Check Error',e.message);}});}

return stack;})(stacks.com_joeworkman_stacks_totalcms_admin_styles);
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
stacks.com_joeworkman_stacks_pagesafe = {};
stacks.com_joeworkman_stacks_pagesafe = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; window.onpageshow=function(event){if(event.persisted)window.location.reload();};

return stack;})(stacks.com_joeworkman_stacks_pagesafe);
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
stacks.stacks_in_1346 = {};
stacks.stacks_in_1346 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;const cookie="pagesafe".replace(" ","");const cookieReload=`${cookie}-reload`;const loggedIn=()=>{return Cookies.get(cookie);};const clearCookies=()=>{Cookies.remove(cookie);Cookies.remove(cookieReload);};const logout=()=>{if(!loggedIn())return;clearCookies();$.ajax({cache:false,url:"files/stacks_in_1346_logout.php"}).done(function(data){location.reload(true);});};const logoutParam=new URLSearchParams(window.location.search).get("logout");if(logoutParam!==null)logout();document.addEventListener("DOMContentLoaded",function(){const buttons=".pagesafe-logout-wrapper a, .pagesafe-logout-wrapper button, .pagesafe-logout";document.querySelectorAll(buttons).forEach(button=>{button.addEventListener("click",e=>{e.preventDefault();logout();});});});

return stack;})(stacks.stacks_in_1346);
stacks.stacks_in_1321 = {};
stacks.stacks_in_1321 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery; $.fn.serializeObject=function(){var obj={};$.each(this.serializeArray(),function(i,o){var n=o.name,v=o.value;obj[n]=obj[n]===undefined?v:$.isArray(obj[n])?obj[n].concat(v):[obj[n],v];});return obj;};$.fn.serializeAndEncode=function(){var base64_fields=['text','content','summary','extra','feed','datastore'];return $.map(this.serializeArray(),function(val){var value=val.value;if(base64_fields.indexOf(val.name)!==-1){value=$.base64.btoa(value,true);}
return[val.name,encodeURIComponent(value)].join('=');}).join('&');};$(function(){['#feed-edit-hipwig-template','#imagebar-image-template','#altbox-template','#imagebar-link-template','#feed-edit-template','#feed-rss-template','#datastore-template','#blog-links-template'].forEach(function(name){$('body').append($($(name).html()));});$('.datastore-admin').on('click','.bulk-edit',function(e){e.stopPropagation();e.preventDefault();var dsadmin=$(this).closest('.datastore-admin'),slug=dsadmin.data('slug'),bulkedit=$('#datastore-bulk-edit');$('input[name=slug]',bulkedit).val(slug);$.ajax({url:stacks.totalcms.totalapi,data:{'slug':slug,'type':'datastore'},success:function(json){$.debug('Datastore Contents:',json.data);$('textarea[name=datastore]',bulkedit).val(json.data);}});openRevealLightbox(bulkedit);});$('.total-feed-admin-list').on('click','.feedbar-edit',function(e){e.stopPropagation();e.preventDefault();var post=$(this).closest('li.post'),feed=$(this).closest('.total-feed-admin-list'),slug=feed.data('slug'),form=$('form.feed-form[data-slug='+slug+']'),post_obj=post.data('post'),settings=form.data('settings'),type='feed';var feededit=$('.hipwig',form).exists()?$('#feed-edit-hipwig'):$('#feed-edit');$('form.feed-form',feededit).addClass(settings.hideimage);$('textarea[name=feed]',feededit).val(post_obj.content).addClass(settings.format).attr('rows',settings.rows);$('textarea.hipwig',feededit).froalaEditor('html.set',post_obj.content);$('textarea[name=feed]',feededit).val(post_obj.content);$('input[name=timestamp]',feededit).val(post_obj.timestamp);$('input[name=alt]',feededit).val(post_obj.alt);$('input[name=slug]',feededit).val(slug);$('input[name=type]',feededit).val(type);$('input[name=strip]',feededit).val(settings.strip);$('input[name=resize]',feededit).val(settings.resize);$('input[name=quality]',feededit).val(settings.quality);$('input[name=scale]',feededit).val(settings.scale);$('input[name=scale_th]',feededit).val(settings.scale_th);$('input[name=scale_sq]',feededit).val(settings.scale_sq);$('input[name=feed_title]',feededit).val(settings.feed_title);$('input[name=feed_description]',feededit).val(settings.feed_description);$('input[name=feed_link]',feededit).val(settings.feed_link);$('input[name=feed_baseurl]',feededit).val(settings.feed_baseurl);feededit.data('rules',form.data('rules'));if(post_obj.img!==undefined){var image_preview=$('.dz-preview',feededit);$('img',image_preview).remove();$('<img id="feed-edit-image" src="'+stacks.totalcms.baseurl+post_obj.img+'"/>').appendTo(image_preview);image_preview.removeClass('empty');}
openRevealLightbox(feededit);});$('.total-feed-admin-list').on('click','.feedbar-rss',function(e){e.stopPropagation();e.preventDefault();var feed=$(this).closest('.total-feed-admin-list'),slug=feed.data('slug'),rss_path=stacks.totalcms.baseurl+'cms-data/feed/'+slug+'/'+slug+'.rss',reveal=$('#feed-rss');$('input[name=rss]',reveal).val(rss_path);$("input",reveal).click(function(){$(this).select();});openRevealLightbox(reveal);});$('.total-preview').on('click','.imagebar-image',function(e){e.stopPropagation();e.preventDefault();var form=$(this).closest('form.total-form'),preview=$(this).closest('.dz-preview'),filename=preview.data('filename'),type=$('input[name=type]',form).val(),ext=$('input[name=ext]',form).val(),slug=$('input[name=slug]',form).val(),cms_dir='cms-data/'+type,image_path,thumb_path,square_path;if(type==='blog'){var permalink=$('input[name=permalink]',form).val();if($(this).closest(".image-box").length>0){cms_dir='cms-data/blog/'+slug;ext=$(this).closest(".image-box").data("rules").ext;image_path=stacks.totalcms.baseurl+cms_dir+'/'+permalink+'/image/'+permalink+'.'+ext;thumb_path=stacks.totalcms.baseurl+cms_dir+'/'+permalink+'/image/'+permalink+'-th.'+ext;square_path=stacks.totalcms.baseurl+cms_dir+'/'+permalink+'/image/'+permalink+'-sq.'+ext;}else{cms_dir='cms-data/gallery/blog/'+slug;ext='jpg';image_path=stacks.totalcms.baseurl+cms_dir+'/'+permalink+'/'+filename+'.'+ext;thumb_path=stacks.totalcms.baseurl+cms_dir+'/'+permalink+'/'+filename+'-th.'+ext;square_path=stacks.totalcms.baseurl+cms_dir+'/'+permalink+'/'+filename+'-sq.'+ext;}}
else if(type==='image'){image_path=stacks.totalcms.baseurl+cms_dir+'/'+slug+'.'+ext;thumb_path=stacks.totalcms.baseurl+cms_dir+'/'+slug+'-th.'+ext;square_path=stacks.totalcms.baseurl+cms_dir+'/'+slug+'-sq.'+ext;}
else if(type==='gallery'){image_path=stacks.totalcms.baseurl+cms_dir+'/'+slug+'/'+filename+'.'+ext;thumb_path=stacks.totalcms.baseurl+cms_dir+'/'+slug+'/'+filename+'-th.'+ext;square_path=stacks.totalcms.baseurl+cms_dir+'/'+slug+'/'+filename+'-sq.'+ext;}
var reveal=$('#imagebar-image');$('img',reveal).attr('src',image_path);$('a.image',reveal).attr('href',image_path);$('input[name=image]',reveal).val(image_path);$('a.thumb',reveal).attr('href',thumb_path);$('input[name=thumb]',reveal).val(thumb_path);$('a.square',reveal).attr('href',square_path);$('input[name=square]',reveal).val(square_path);$("input",reveal).click(function(){$(this).select();});openRevealLightbox(reveal);});$('.total-blog-list').on('click','.blogbar-links',function(e){e.stopPropagation();e.preventDefault();var post=$(this).closest('li.post'),list=$(this).closest('.total-blog-list'),reveal=$('#blogbar-links'),slug=list.data('slug'),permalink=post.data('permalink'),rss=stacks.totalcms.baseurl+'cms-data/blog/'+slug+'/'+slug+'.rss',sitemap=stacks.totalcms.baseurl+'cms-data/blog/'+slug+'/'+slug+'-sitemap.xml',urlFile=stacks.totalcms.baseurl+'cms-data/blog/'+slug+'/'+slug+'.posturl',url;$.ajax({url:urlFile}).done(function(data){var contentUrl=data.trim();if(contentUrl.match(/^http/)){if(contentUrl.match(/permalink=$/)){url=new URI(contentUrl+permalink).normalizePathname();}else{url=new URI(contentUrl+'/'+permalink).normalizePathname();}}
else{contentUrl=window.location.protocol+'//'+window.location.host+'/'+window.location.pathname+'/'+contentUrl;url=new URI(contentUrl).addSearch("permalink",permalink).normalizePathname();}
$('a.permalink',reveal).attr('href',url.toString());$('input[name=permalink]',reveal).val(url.toString());});$('a.rss',reveal).attr('href',rss);$('input[name=rss]',reveal).val(rss);$('a.sitemap',reveal).attr('href',sitemap);$('input[name=sitemap]',reveal).val(sitemap);$("input",reveal).click(function(){$(this).select();});openRevealLightbox(reveal);});$('.total-preview').on('click','.filebar-link',function(e){e.stopPropagation();e.preventDefault();var form=$(this).closest('form.total-form'),preview=$(this).closest('.dz-preview'),slug=$('input[name=slug]',form).val(),type=$('input[name=type]',form).val(),filename=$('.filename',preview).html(),cms_dir='cms-data/'+type;if(form.hasClass('depot-form')){cms_dir=cms_dir+'/'+slug;}
file=stacks.totalcms.baseurl+cms_dir+'/'+filename;var reveal=$('#imagebar-link');$('input[name=file]',reveal).val(file);openRevealLightbox(reveal);});$('.total-preview').on('click','.filebar-trash',function(e){e.stopPropagation();e.preventDefault();var form=$(this).closest('form.total-form'),preview=$(this).closest('.dz-preview'),slug=$('input[name=slug]',form).val(),type=$('input[name=type]',form).val(),ext=$('input[name=ext]',form).val(),filename=$('.filename',preview).html(),data={'slug':slug,'type':type,'_METHOD':'DELETE'};if(ext){data.ext=ext;}
if(form.hasClass('depot-form')){data.filename=filename;}
if(confirm("Are you sure that you want to delete this file?")){$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:data,success:function(data){if(form.hasClass('depot-form')){preview.fadeOut();}
console.log("CMS DELETE Successful: "+data.message);},error:function(jqxhr,status,msg){console.error(jqxhr);var response=JSON.parse(jqxhr.responseText);console.error("CMS DELETE Error");console.error(response);preview.addClass("dz-error");}});}});$('.total-preview').on('click','.imagebar-trash',function(e){e.stopPropagation();e.preventDefault();var form=$(this).closest('form.total-form'),preview=$(this).closest('.dz-preview'),filename=preview.data('filename'),type=$('input[name=type]',form).val(),ext=$('input[name=ext]',form).val(),slug=$('input[name=slug]',form).val(),permalink=form.data('permalink'),isGallery=($(this).closest('.gallery-box').length>0);data={'slug':slug,'type':type,'isGallery':isGallery,'filename':filename,'ext':ext,'permalink':permalink,'_METHOD':'DELETE'};$.debug('Image Delete: '+filename,data);if(confirm("Are you sure that you want to delete this file?")){$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:data,success:function(data){if($('img',preview).exists())preview.fadeOut();console.log("CMS DELETE Successful: "+data.message);},error:function(jqxhr,status,msg){console.error(jqxhr);var response=JSON.parse(jqxhr.responseText);console.error("CMS DELETE Error");console.error(response);preview.addClass("dz-error");}});}});$('.total-feed-admin-list').on('click','.feedbar-trash',function(e){e.stopPropagation();e.preventDefault();var post=$(this).closest('li.post'),post_obj=post.data('post'),slug=$(this).closest('.total-feed-admin-list').data('slug');form=$('form.feed-form[data-slug='+slug+']'),data=form.serializeObject();data.timestamp=post_obj.timestamp;data._METHOD='DELETE';console.log(data);if(confirm("Are you sure that you want to delete this post?")){$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:data,success:function(data){post.fadeOut();console.log("CMS DELETE Successful: "+data.message);},error:function(jqxhr,status,msg){console.error(jqxhr);var response=JSON.parse(jqxhr.responseText);console.error("CMS DELETE Error");console.error(response);preview.addClass("dz-error");}});}});$('.total-blog-list').on('click','.blogbar-trash',function(e){e.stopPropagation();e.preventDefault();var post=$(this).closest('li.post'),slug=$(this).closest('.total-blog-list').data('slug'),permalink=post.data('permalink'),type='blog';if(confirm("Are you sure that you want to delete this post?")){$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:{'slug':slug,'type':type,'permalink':permalink,'_METHOD':'DELETE'},success:function(data){post.fadeOut();console.log("CMS DELETE Successful: "+data.message);},error:function(jqxhr,status,msg){console.error(jqxhr);var response=JSON.parse(jqxhr.responseText);console.error("CMS DELETE Error");console.error(response);}});}});$('.total-blog-list').on('click','.blogbar-featured',function(e){e.stopPropagation();e.preventDefault();var post=$(this).closest('li.post'),slug=$(this).closest('.total-blog-list').data('slug'),permalink=post.data('permalink'),type='blog';$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:{'slug':slug,'type':type,'permalink':permalink,'featured':true,'_METHOD':'PUT'},success:function(data){post.toggleClass('featured');console.log("Post Featured Success: "+data.message);},error:function(jqxhr,status,msg){console.error(jqxhr);var response=JSON.parse(jqxhr.responseText);console.error("CMS Error marking as featured");console.error(response);}});});$('.total-blog-list').on('click','.blogbar-draft',function(e){e.stopPropagation();e.preventDefault();var post=$(this).closest('li.post'),slug=$(this).closest('.total-blog-list').data('slug'),permalink=post.data('permalink'),type='blog';$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:{'slug':slug,'type':type,'permalink':permalink,'draft':true,'_METHOD':'PUT'},success:function(data){post.toggleClass('draft');console.log("Post Draft Success: "+data.message);},error:function(jqxhr,status,msg){console.error(jqxhr);var response=JSON.parse(jqxhr.responseText);console.error("CMS Error marking as draft");console.error(response);}});});var altbox=$('#altbox'),openAltBox=function(options){$('form',altbox).removeClass('error success saving unsaved');$('img',altbox).attr('src',options.path);$('input[name=slug]',altbox).val(options.slug);$('input[name=type]',altbox).val(options.type);$('input[name=ext]',altbox).val(options.ext);$('input[name=filename]',altbox).val(options.filename);$('input[name=timestamp]',altbox).val(options.timestamp);$('input[name=permalink]',altbox).val(options.permalink);$('input[name=isGallery]',altbox).val(options.isGallery)||"false";$('textarea',altbox).val('');$.ajax({dataType:"json",url:stacks.totalcms.totalapi,cache:false,data:options,success:function(json){$.debug("Alt text",json);var alt;if(json.data.posts){alt=json.data.posts[0].alt;}
else if(json.data.image&&!options.isGallery){alt=json.data.image.alt;}
else if(json.data.gallery&&options.isGallery){var i=0;for(i=0;i<json.data.gallery.length;i++){if(json.data.gallery[i].filename===options.filename){alt=json.data.gallery[i].alt;break;}}}
else{alt=json.data.images[0].alt;}
$('textarea[name="alt"]',altbox).first().val(alt).delay(300).focus();}});openRevealLightbox(altbox);};$('.image-form .total-preview,.gallery-form .total-preview,.blog-form .total-preview').on('click','.imagebar-tag',function(e){e.stopPropagation();e.preventDefault();var form=$(this).closest('form.total-form'),preview=$(this).closest('.dz-preview'),path=$('img',preview).attr('src');slug=$('input[name=slug]',form).val(),type=$('input[name=type]',form).val(),permalink=$('input[name=permalink]',form).val(),ext=$('input[name=ext]',form).val(),filename=preview.data('filename');isGallery=($(this).closest('.gallery-box').length>0);openAltBox({'slug':slug,'type':type,'ext':ext,'path':path,'filename':filename,'permalink':permalink,'isGallery':isGallery});});$('.total-feed-admin-list').on('click','.feedbar-tag',function(e){e.stopPropagation();e.preventDefault();var post=$(this).closest('li.post'),post_obj=post.data('post'),slug=$(this).closest('.total-feed-admin-list').data('slug'),form=$('form.feed-form[data-slug='+slug+']'),data=form.serializeObject();data.timestamp=post_obj.timestamp;openAltBox(data);});$('#altbox form').submit(function(){var form=$(this);form.removeClass('success error').addClass('saving');$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:form.serializeAndEncode(),success:function(data){console.log("CMS Put Successful: "+data.message);form.removeClass('saving unsaved').addClass('success');setTimeout(function(){closeRevealLightbox($('#altbox'));},500);},error:function(jqxhr,status,msg){console.error(jqxhr);var response=JSON.parse(jqxhr.responseText);console.error("CMS Put Error: "+response.message);form.removeClass('saving').addClass('error');}});return false;});$('.gallery-form,.blog-form').on('click','.imagebar-featured',function(e){e.stopPropagation();e.preventDefault();var form=$(this).closest('form.total-form'),preview=$(this).closest('.dz-preview'),slug=$('input[name=slug]',form).val(),permalink=$('input[name=permalink]',form).val(),type=$('input[name=type]',form).val(),filename=preview.data('filename'),featured=!preview.hasClass('featured');$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:{'slug':slug,'type':type,'filename':filename,'permalink':permalink,'featured':featured,'_METHOD':'PUT'},success:function(data){preview.toggleClass('featured');console.log("Image Featured Success: "+data.message);},error:function(jqxhr,status,msg){console.error(jqxhr);var response=JSON.parse(jqxhr.responseText);console.error("CMS Error marking image as featured");console.error(response);}});});});
 $(function(){var toolbar=['bold','italic','underline','insertLink','|','fullscreen',],quickinsert=['image','video','embedly','table','ul','ol','hr'],fileParams={slug:'hipwig',type:'hipdepot',fileMaxSize:1024*1024*1024},videoParams={slug:'hipwig',type:'hipdepot',fileMaxSize:1024*1024*1024},imageParams={slug:'hipwig',type:'hipgallery',ext:'jpg',resize:'auto',quality:'85',scale:'1200',scale_th:'200',scale_sq:'200'},imageStyles={'fr-rounded':'Rounded','fr-bordered':'Bordered','fr-shadow':'Shadow','fr-full-width':'Full Width'};$.FroalaEditor.DEFAULTS.key='zA4B4H3D3B9A5eF5C4C3E3E2C2B3D6D4F2xJCJWECHICe1JOZWJ==';$.FroalaEditor.SHORTCUTS_MAP={69:{cmd:'show'},66:{cmd:'bold'},73:{cmd:'italic'},85:{cmd:'underline'},221:{cmd:'indent'},219:{cmd:'outdent'},90:{cmd:'undo'},'-90':{cmd:'redo'}};$('.hipwig').dblclick(function(){$('textarea',this).froalaEditor('toolbar.showInline',null,true);});$('.hipwig textarea').each(function(){$(this).froalaEditor({keepFormatOnDelete:true,charCounterCount:false,charCounterMax:$(this).data('maxcount'),colorsText:['#61BD6D', '#1ABC9C', '#54ACD2', '#2C82C9', '#9365B8', '#475577', '#CCCCCC', '#41A85F', '#00A885', '#3D8EB9', '#2969B0', '#553982', '#28324E', '#000000', '#F7DA64', '#FBA026', '#EB6B56', '#E25041', '#A38F84', '#EFEFEF', '#FFFFFF', '#FAC51C', '#F37934', '#D14841', '#B8312F', '#7C706B', '#D1D5D8', 'REMOVE'],colorsBackground:['#61BD6D', '#1ABC9C', '#54ACD2', '#2C82C9', '#9365B8', '#475577', '#CCCCCC', '#41A85F', '#00A885', '#3D8EB9', '#2969B0', '#553982', '#28324E', '#000000', '#F7DA64', '#FBA026', '#EB6B56', '#E25041', '#A38F84', '#EFEFEF', '#FFFFFF', '#FAC51C', '#F37934', '#D14841', '#B8312F', '#7C706B', '#D1D5D8', 'REMOVE'],language:stacks.totalcms.locale,toolbarInline:false,codeMirror:true,tooltips:true,shortcutsHint:false,fileUploadURL:stacks.totalcms.totalapi,fileUploadParams:fileParams,fileMaxSize:1024*1024*1024,videoUploadURL:stacks.totalcms.totalapi,videoUploadParams:videoParams,videoMaxSize:1024*1024*1024,videoEditButtons:['videoReplace','videoRemove','|','videoDisplay','videoAlign'],fontSize:['8', '9', '10', '11', '12', '14', '18', '24', '30', '36', '48', '60', '72', '96'],imageUploadURL:stacks.totalcms.totalapi,imageUploadParams:imageParams,imageManagerLoadURL:stacks.totalcms.totalapi+'?'+$.param(imageParams),imageManagerDeleteURL:stacks.totalcms.totalapi,imageDefaultWidth:0,embedlyScriptPath:"",imageResizeWithPercent:true,imageRoundPercent:true,imageStyles:imageStyles,codeMirrorOptions:{indentWithTabs:true,lineNumbers:true,lineWrapping:true,readOnly:false,mode:'text/html',tabMode:'indent',tabSize:2},alwaysVisible:false,saveInterval:9000000,pastePlain:true,placeholderText:$(this).prop('placeholder'),requestHeaders:stacks.totalcms.requestheaders,toolbarButtons:toolbar,toolbarButtonsMD:toolbar,toolbarButtonsSM:toolbar,toolbarButtonsXS:toolbar,toolbarSticky:false,quickInsertButtons:quickinsert,quickInsertTags:['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'pre', 'blockquote'],paragraphFormat:{N: 'Normal', H1: 'Heading 1', H2: 'Heading 2', H3: 'Heading 3', H4: 'Heading 4', PRE: 'Code'},enter:$.FroalaEditor.ENTER_P,htmlRemoveTags:['script','style'],heightMax:1000,height:$(this).data('height')}).on('froalaEditor.save.before',function(e,editor){var form=$(this).closest('form.total-form');form.submit();}).on('froalaEditor.commands.after',function(e,editor){var hipwig=$(this).closest('fieldset.text-box');hipwig.addClass('unsaved');}).on('froalaEditor.image.inserted',function(e,editor,$img,response){var hipwig=$(this).closest('fieldset.text-box');hipwig.addClass('unsaved');}).on('froalaEditor.keydown',function(e,editor,key){var hipwig=$(this).closest('fieldset.text-box');hipwig.addClass('unsaved');}).on('froalaEditor.charCounter.exceeded',function(e,editor){$(this).closest('.text-box').find('.fr-counter').addClass('exceeded');});});});
 if(typeof(stacks.totalcms)!=='object')stacks.totalcms={};stacks.totalcms.requestheaders={'Total-Key':$.trim('6876b067a4663c90a3efcaee9ec3337a')};stacks.totalcms.baseurl='https://www.pharecon.de//'.replace(/\/\/$/,'/');stacks.totalcms.totalapi=stacks.totalcms.baseurl+'rw_common/plugins/stacks/total-cms/totalapi.php';stacks.totalcms.totalapi=stacks.totalcms.totalapi.replace('https:','').replace('http:','');stacks.totalcms.locale='en';stacks.totalcms.banneralert=false;stacks.totalcms.moment2php_format=function(date_string){if(!date_string)return false;return date_string.toUpperCase().replace('YYYY','Y').replace('YY','y').replace('MM','m').replace('M','n').replace('DD','d').replace('D','j').replace('HH','h').replace('ii','i').replace('II','i');};stacks.totalcms.localizeStrings={imgLandscape:"Image is not lanscape.",imgPortrait:"Image is not portrait.",imgSquare:"Image is not square.",imgMaxSize:"Image is above max allowed size.",imgMinWidth:"Image is below min allowed width.",imgMaxWidth:"Image is above max allowed width.",imgMinHeight:"Image is below min allowed height.",imgMaxHeight:"Image is above max allowed height.",unknownError:"Unknown Server Error"};var openRevealLightbox=function(el){try{el.foundation("reveal","open");}
catch(error){el.foundation();el.foundation("open");}};var closeRevealLightbox=function(el){try{el.foundation("reveal","close");}
catch(error){el.foundation();el.foundation("close");}};$(function(){$("form form").remove();$('.blog-form .dateinput').each(function(){var dateformat=$(this).data('date-format'),timestamp=$(this).parent().find('input[name=timestamp]');$(this).val(moment().format(dateformat)).fdatepicker({language:stacks.totalcms.locale,pickTime:$(this).data('pick-time'),format:dateformat.replace('mm','ii').toLowerCase()}).on('change changeDate',function(el){var time=moment($(this).val(),dateformat).unix();$.debug('Blog Date changed to '+time);timestamp.val(time);});});$('.date-form .dateinput').each(function(){var dateformat=$(this).data('date-format'),timestamp=$(this).closest('form').find('input[name=timestamp]');$(this).fdatepicker({initialDate:'',format:dateformat.replace('mm','ii').toLowerCase(),language:stacks.totalcms.locale,pickTime:$(this).data('pick-time'),startView:$(this).data('start-view')}).on('change changeDate',function(el){var time=moment($(this).val(),dateformat).unix();$.debug('Date changed to '+time);timestamp.val(time);}).on('input change',function(){$(this).closest('fieldset').addClass('unsaved').removeClass('error success saving');$(this).closest('form.total-form').addClass('unsaved').removeClass('error success saving');});});});document.addEventListener("DOMContentLoaded",function(){var project_domain=stacks.totalcms.baseurl.split('/')[2],domain_match=function(d1,d2){d1=d1.toLowerCase();d2=d2.toLowerCase();return(d1===d2);};if(!domain_match(project_domain,window.location.hostname)){var domain_error='<p style="color:red;text-align:center;">The Web Address configured in your RapidWeaver project ('+stacks.totalcms.baseurl+') does not match the published domain in your browser ('+window.location.hostname+'). <br/>The CMS may not function properly until this is fixed. <a href="https://community.weavers.space/faqs/post/www-vs-no-www-SHedaiJnHaW1zb4" target="_blank" style="text-decoration:underline">See this FAQ</a>.</p>';$('.stacks_top').prepend(domain_error);}var hipwig=$('textarea.hipwig').exists();wideArea();$("form.toggle-form fieldset.switch").each(function(){var form=$(this).closest('form.total-form'),slug=$('input[name=slug]',form).val(),type=$('input[name=type]',form).val();$.ajax({dataType:"json",url:stacks.totalcms.totalapi,data:form.serializeAndEncode(),cache:false,success:function(data){if(data.data===true){$('input[name='+type+']',form).prop('checked',true);}
else{$('input[name='+type+']',form).prop('checked',false);}},error:function(data){console.error("Error retrieving Toggle data for "+slug);console.error(data);}});$('input[name='+type+']',form).click(function(){$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:{slug:slug,type:type,state:$(this).prop('checked')},cache:false,success:function(data){console.log("CMS Post Successful: "+data.message);},error:function(data){console.error("Error submitting toggle "+slug);console.error(data);}});});});$('.ratings-admin-list').each(function(){var admin=$(this),slug=admin.data('slug'),max=admin.data('max'),icon=admin.data('icon');$.ajax({dataType:"json",url:stacks.totalcms.totalapi,cache:false,data:{slug:slug,type:'ratings',max:max},success:function(json){$.debug("Ratings JSON for "+slug,json);if(json.data===null)return;$.each(json.data.ratings,function(index,rating){var score=index+1,raty=$('<div>').raty({readOnly:true,hints:[score,score,score,score,score,score,score,score,score,score],starOff:'empty fa fa-fw '+stacks.ratings_template[icon].empty,starHalf:'half fa fa-fw '+stacks.ratings_template[icon].half,starOn:'full fa fa-fw '+stacks.ratings_template[icon].full,space:false,score:score,number:max,});raty.append($('<span>'+rating+'</span>'));admin.prepend(raty);});}}).fail(function(data){console.error("Error getting ratings json for "+slug);console.error(data);});});$('.ratings-admin-manual').each(function(){var admin=$(this),slug=admin.data('slug'),max=admin.data('max'),icon=admin.data('icon');$.ajax({dataType:"json",url:stacks.totalcms.totalapi,cache:false,data:{slug:slug,type:'ratings',max:max},success:function(json){$.debug("Ratings JSON for "+slug,json);var score=json.data?json.data.score:0;admin.raty({hints:[false,false,false,false,false,false,false,false,false,false],starOff:'empty fa fa-fw '+stacks.ratings_template[icon].empty,starHalf:'half fa fa-fw '+stacks.ratings_template[icon].half,starOn:'full fa fa-fw '+stacks.ratings_template[icon].full,half:true,space:false,score:score,number:max,click:function(score,event){console.log("Manual Score:"+score);stacks.totalcms_submit_rating({'slug':slug,'type':'ratings','score':score,'max':max,'icon':icon,'manual':true,});}});}}).fail(function(data){console.error("Error getting ratings json for "+slug);console.error(data);});});$("fieldset.text-box, fieldset.select-box").each(function(){var form=$(this).closest('form.total-form'),slug=$('input[name=slug]',form).val(),type=$('input[name=type]',form).val();if(slug.length===0)return;if(type==='feed'||type==='blog')return;$('.password-preview',form).click(function(){var input=$('input[name=text]',form);if(input.attr('type')==='password'){$(this).addClass('fa-eye-slash').removeClass('fa-eye');input.attr('type','text');}
else{$(this).addClass('fa-eye').removeClass('fa-eye-slash');input.attr('type','password');}});$('[name='+type+']',form).val('');$.ajax({dataType:"json",url:stacks.totalcms.totalapi,data:form.serializeAndEncode(),cache:false,success:function(data){var contents=data.data;if(contents){if(type==='date'){var input=$('input[name=date]',form),format=input.data('date-format').toUpperCase().replace(':MM',':mm');contents=moment(contents,'X').format(format);}
$('textarea[name='+type+'],input[name='+type+'],select[name='+type+']',form).val(contents);$("select option",form).filter(function(){return $(this).val().trim()===contents.trim();}).prop('selected',true);if(hipwig)$('textarea.hipwig',form).froalaEditor('html.set',contents);$.debug("CMS Preload: "+contents);}},error:function(data){console.warn('Error getting CMS data for '+type+'/'+slug,data);$('textarea[name='+type+'],input[name='+type+'],select[name='+type+']',form).val('');if(hipwig)$('textarea.hipwig',form).froalaEditor('html.set','');}});});jQuery.fn.total_banner_alert=function(){var alert=$(this);alert.addClass('show');window.setTimeout(function(){alert.addClass('fadeOut');},2000);window.setTimeout(function(){alert.hide().removeClass('show fadeOut');},3500);window.setTimeout(function(){alert.show();},4000);};jQuery.fn.total_success=function(response,successCallback){var form=$(this);if(typeof(response)==='object'){console.log("CMS Post Successful: "+response.message);form.removeClass('saving').addClass('success');if(stacks.totalcms.banneralert)$('#cms-alertbox-success').total_banner_alert();if(successCallback&&typeof(successCallback)==="function")successCallback();}
else{form.total_error(response,false,false);}};jQuery.fn.total_error=function(jqxhr,status,msg,errorCallback){var form=$(this);console.error(jqxhr);if(jqxhr.responseText){var response=JSON.parse(jqxhr.responseText);console.error("CMS Post Error: "+response.message);}
else{console.error("CMS Post Error: Unable to locate error message ("+status+" "+msg+")");}
form.removeClass('saving').addClass('error unsaved');if(stacks.totalcms.banneralert)$('#cms-alertbox-error').total_banner_alert();if(errorCallback&&typeof(errorCallback)==="function")errorCallback();};jQuery.fn.total_form_submit=function(successCallback,errorCallback){if(stacks.totalcmsdemo===true){console.log('Total CMS Demo mode. Submit disabled.');return false;}
var form=$(this);form.removeClass('success error unsaved');form.find('fieldset').removeClass('success error unsaved');$('input:required,textarea:required',form).each(function(){var input=$(this);if(!input.val().trim()){form.addClass('error unsaved');input.closest('fieldset').addClass('error');var name=input.attr('name');console.error('The '+name+' field is required. You must enter a value.');}});if(form.hasClass('error'))return false;var data=form.serializeAndEncode();form.addClass('saving');$.debug("CMS Post: "+stacks.totalcms.totalapi,data);$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:data,success:function(response){form.total_success(response,successCallback);},error:function(jqxhr,status,msg){form.total_error(jqxhr,status,msg,errorCallback);}});};$("form.text-form").submit(function(event){event.preventDefault();$(this).total_form_submit();return false;});$("#datastore-bulk-edit form.datastore-form").submit(function(event){event.preventDefault();$(this).total_form_submit();return false;});$("form.date-form").submit(function(event){event.preventDefault();$(this).total_form_submit();return false;});var dz_thumbnail=function(file,dataUrl){$.debug('dz_thumbnail',file);var thumbnailElement,i,len,ref;file.previewElement.classList.remove("dz-file-preview");ref=file.previewElement.querySelectorAll("[data-dz-thumbnail]");for(i=0,len=ref.length;i<len;i++){thumbnailElement=ref[i];thumbnailElement.alt=file.name;thumbnailElement.src=dataUrl;$(thumbnailElement).height('auto').width('auto');}
var msg='',width=file.width,height=file.height,size=file.size/1024,rules=$(file.previewElement).closest('.total-form').data('rules');if(rules){if(rules.orientation){if(rules.orientation==='landscape'&&width<=height){msg=stacks.totalcms.localizeStrings.imgLandscape;}
else if(rules.orientation==='portrait'&&width>=height){msg=stacks.totalcms.localizeStrings.imgPortrait;}
else if(rules.orientation==='square'&&width!==height){msg=stacks.totalcms.localizeStrings.imgSquare;}}
if(rules.maxsize&&size>rules.maxsize){msg=stacks.totalcms.localizeStrings.imgMaxSize;}
if(rules.minheight&&height<rules.minheight){msg=stacks.totalcms.localizeStrings.imgMinHeight;}
if(rules.maxheight&&height>rules.maxheight){msg=stacks.totalcms.localizeStrings.imgMaxHeight;}
if(rules.minwidth&&width<rules.minwidth){msg=stacks.totalcms.localizeStrings.imgMinWidth;}
if(rules.maxwidth&&width>rules.maxwidth){msg=stacks.totalcms.localizeStrings.imgMaxWidth;}}
if(msg===''){file.acceptDimensions();}
else{console.error(msg);file.rejectDimensions(msg);}
return setTimeout(((function(_this){return function(){return file.previewElement.classList.add("dz-image-preview");};})(this)),1);},dz_uploadprogress=function(file,progress,bytesSent){$.debug('dz_uploadprogress');var node,i,len,ref,results;if(file.previewElement){ref=file.previewElement.querySelectorAll("[data-dz-uploadprogress]");results=[];for(i=0,len=ref.length;i<len;i++){node=ref[i];if(node.nodeName==='PROGRESS'){results.push(node.value=progress);}
else if(node.classList.contains("dz-upload-progress-label")){if(progress==100){results.push(node.innerHTML="Processing...");}
else{results.push(node.innerHTML=""+Math.round(progress)+"%");}}
else{results.push(node.style.width=""+progress+"%");}}
return results;}},dz_dragenter=function(e){$.debug('dz_dragenter',this.element);$('.dz-preview',this.element).removeClass('dz-processing dz-success dz-complete');return this.element.classList.add("dz-drag-hover");},dz_dragleave=function(e){$.debug('dz_dragleave');return this.element.classList.remove("dz-drag-hover");},dz_error=function(file,message){if(typeof(message)==='object')message=message.message;$.debug('dz_error event',message);file.previewElement.classList.remove("saving");file.previewElement.classList.add("error");file.previewElement.classList.add("dz-error");$(file.previewElement).find('.has-tip').attr('title',message);},basename=function(str){var base=str.substring(str.lastIndexOf('/')+1);if(base.lastIndexOf(".")!=-1)base=base.substring(0,base.lastIndexOf("."));return base;},dz_success=function(file,response){$.debug('dz_success',response);if(typeof(response)==='object'){this.element.classList.remove("saving");this.element.classList.add("success");if(file.previewElement){if(typeof(response.data)==='string'){$(file.previewElement).data('filename',basename(response.data));}
$(file.previewElement).removeClass('dz-processing').addClass("dz-success");}}
else{dz_error(file,stacks.totalcms.localizeStrings.unknownError+" : "+response);}},dz_accept=function(file,done){$.debug('dz_accept');file.acceptDimensions=done;file.rejectDimensions=function(msg){done(msg);};};$("form.feed-form").each(function(){var form=$(this),dropzone,edit_form=$('input[name=timestamp]',form).exists(),reset_form=function(){if(edit_form){var timestamp=$('input[name=timestamp]',form).val();$('li[data-timestamp="'+timestamp+'"]').fadeOut().remove();}
setTimeout(function(){form.removeClass('success');$('.dz-preview',form).removeClass('dz-processing dz-success dz-complete');if(edit_form){if($('#feed-edit').is(':visible'))closeRevealLightbox$('#feed-edit');}
else{var defaultText=$('.feed-template',form).exists()?$('.feed-template',form).html():'';$('textarea',form).val(defaultText);if(hipwig)$('textarea.hipwig',form).froalaEditor('html.set',defaultText);$('.dz-preview',form).slideUp().html('').addClass('empty');$('.placeholder',form).show();}
$(".total-feed-admin-list").trigger('refresh-feed');},1200);};reset_form();form.dropzone({url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,parallelUploads:1,autoProcessQueue:false,thumbnailWidth:null,thumbnailHeight:null,previewsContainer:'#'+form.attr('id')+' .total-preview',previewTemplate:$('#feed-preview-template').html(),clickable:$.isMobile()?'#'+form.attr('id')+' .total-preview':'#'+form.attr('id')+' .dz-overlay',forceFallback:false,acceptedFiles:'image/jpeg,image/png,image/gif',addedfile:function(file){dropzone=this;file.previewElement=window.Dropzone.createElement(this.options.previewTemplate.trim());file.previewTemplate=file.previewElement;var img_height=$('img',this.previewsContainer).height();$(this.previewsContainer).find('.dz-preview').remove();$(this.previewsContainer).append($(file.previewElement));$('img',this.previewsContainer).height(img_height).width('100%');$('.empty',form).removeClass('empty');$('.placeholder',form).hide();},thumbnail:dz_thumbnail,uploadprogress:dz_uploadprogress,drop:dz_dragleave,dragenter:dz_dragenter,dragleave:dz_dragleave,error:dz_error,accept:dz_accept,sending:function(file,xhr,formData){var feed_text=$('textarea[name=feed]',form);feed_text.val($.base64.btoa(feed_text.val(),true));},success:function(file){this.element.classList.remove("saving");this.element.classList.add("success");if(file.previewElement){$(file.previewElement).addClass("dz-success").removeClass('dz-processing');}
reset_form();return;}});form.submit(function(event){if(stacks.totalcmsdemo===true){console.log('Total CMS Demo mode. Submit disabled.');return false;}
event.preventDefault();var form=$(this);if($('textarea[name=feed]',form).val().length>0){form.removeClass('success error unsaved').addClass('saving');if($('.empty',form).exists()||$('#feed-edit-image',form).exists()){$(this).total_form_submit(function(){reset_form();});}
else{dropzone.processQueue();}}
return false;});});$(".total-feed-admin-list").each(function(){var list=$(this),type='feed',slug=list.data('slug'),dateformat=list.data('dateformat'),get_feed_json=function(onSuccess){var form=$('form.feed-form[data-slug='+slug+']');if(form.exists()){var settings=form.data('settings');$.ajax({dataType:"json",url:stacks.totalcms.totalapi,cache:false,data:settings,success:function(json){$.debug("Feed JSON for "+slug,json);if(onSuccess&&typeof(onSuccess)==="function"){$.each(json.data.posts,onSuccess);}
list.removeAttr('style');if(list.height()>list.data('maxheight'))list.addClass('overflow');}}).fail(function(data){console.error("Error getting feed json for "+slug);console.error(data);});}},new_feed_item=function(post){var template=$($('#feed-list-template').html()).data('post',post).attr('data-timestamp',post.timestamp);$('.post-text',template).html(post.content);var postdate;if(dateformat==='relative'){postdate=moment(post.date).locale(stacks.totalcms.locale).fromNow();}
else{postdate=moment(post.date).locale(stacks.totalcms.locale).format(dateformat);}
$('.post-date',template).attr('datetime',post.date).html(postdate);var image=post.img?$('<img>').attr('src',stacks.totalcms.baseurl+post.thumb.sq+"?cache="+Math.random()).attr('alt',post.alt):$('<i class="fa fa-newspaper-o fa-4x"></i>');$('.post-image',template).append(image);return template;};get_feed_json(function(index,post){list.append(new_feed_item(post));});list.on('refresh-feed',function(callback){get_feed_json(function(index,post){if(!$('li[data-timestamp="'+post.timestamp+'"]',list).exists()){list.prepend(new_feed_item(post));}});if(callback&&typeof(callback)==="function")callback();});});$(".admin.total-blog-list").each(function(){var list=$(this),filterform=list.parent().find('form.blog-filter').first(),type='blog',slug=list.data('slug'),dateformat=list.data('dateformat'),list_template=$('#blog-list-template').html(),filter=list.data('filter');if(filter.author||filter.genre||filter.category||filter.tag||filter.label||filter.date!=='all'||filter.draft==='only'||filter.archived==='only'||filter.featured==='only'||filter.draft==='hide'||filter.archived==='hide'||filter.featured==='hide'){delete filter.all;}
var compare_permalink=function(a,b){if(a.permalink<b.permalink)
return-1;if(a.permalink>b.permalink)
return 1;return 0;},get_blog_json=function(onSuccess){$.debug("Blog List Filter for "+slug,filter);$.ajax({dataType:"json",url:stacks.totalcms.totalapi,cache:false,data:{slug:slug,type:type,filter:filter},success:function(json){$.debug("Blog JSON for "+slug,json);if(list.hasClass('sort-alpha')){json.data.sort(compare_permalink);}
if(onSuccess&&typeof(onSuccess)==="function"){$.each(json.data,onSuccess);}
$('.total > .count',filterform).html(json.data.length).parent().fadeIn();if(list.height()>list.data('maxheight'))list.addClass('overflow');}}).fail(function(data){console.error("Error getting blog json for "+slug);console.error(data);});},new_blog_item=function(post){var template=$(list_template);if(typeof(post.labels)==='object'){post.labels=$.map(post.labels,function(value,index){return[value];});}else{post.labels=[];}
if(typeof(post.tags)==='object'){post.tags=$.map(post.tags,function(value,index){return[value];});}
if(typeof(post.categories)==='object'){post.categories=$.map(post.categories,function(value,index){return[value];});}
template.data('author',post.author.toLowerCase());template.data('genre',post.genre.toLowerCase());template.data('title',post.title.toLowerCase());template.data('tag',post.tags.join().toLowerCase());template.data('category',post.categories.join().toLowerCase());template.data('permalink',post.permalink.toString().toLowerCase());template.data('label',post.labels.join().toLowerCase());if(post.featured)template.addClass('featured');if(post.draft)template.addClass('draft');if(post.archived)template.addClass('archived');$('.post-action',template).addClass('default');var postdate;if(dateformat==='relative'){postdate=moment(post.timestamp*1000).locale(stacks.totalcms.locale).fromNow();}
else{postdate=moment(post.timestamp*1000).locale(stacks.totalcms.locale).format(dateformat);}
$('.post-date',template).attr('datetime',post.timestamp).html(postdate);$('.post-title .author',template).html(post.author);var editUrl=list.data('editurl')+"?permalink="+post.permalink.toString().toLowerCase();$('.post-title a',template).html(post.title||post.permalink).attr('href',editUrl);$('.post-tags',template).append($('<kbd class="genre"></kbd>').html(post.genre));$.each(post.categories,function(index){$('.post-tags',template).append($('<kbd class="category label"></kbd>').html(post.categories[index]));});$.each(post.tags,function(index){$('.post-tags',template).append($('<kbd class="tag"></kbd>').html(post.tags[index]));});$.each(post.labels,function(index){$('.post-tags',template).append($('<kbd class="labels label"></kbd>').html(post.labels[index]));});return template;};get_blog_json(function(index,post){list.append(new_blog_item(post));});filterform.submit(function(event){event.preventDefault();var select=$('select',this).val(),search=$('input',this).val().toLowerCase();if(search){$('li.post',list).each(function(){var post=$(this);if(select==="all"){var searchAll=function(search){var found=false;$.each(["permalink","title","category","tag","author","genre","label"],function(index,field){if(post.data(field).toLowerCase().indexOf(search)!=-1){found=true;return false;}});return found;};if(!searchAll(search)){post.addClass('hide').fadeOut();return true;}}
else{if(post.data(select).toLowerCase().indexOf(search)==-1){post.addClass('hide').fadeOut();return true;}}
post.removeClass('hide').fadeIn();});$('.total > .count',filterform).html($('.post:not(.hide)',list).length);}
else{$('.total > .count',filterform).html($('.post',list).length);$('.post',list).removeClass('hide').fadeIn();}
return false;});});$("form.blog-form").each(function(){var form=$(this),permalink=form.data('permalink'),slug=form.data('slug'),type='blog',galleryzone,imagezone,dateInput=$('input[name=date]',form),authorInput=$('input[name=author][type!=hidden]',form),genreInput=$('input[name=genre][type!=hidden]',form),tagsInput=$('input[name=tags][type!=hidden]',form),labelsInput=$('input[name=labels][type!=hidden]',form),categoriesInput=$('input[name=categories][type!=hidden]',form),tagsSelect=$('select[name=tags]',form),labelsSelect=$('select[name=labels]',form),categoriesSelect=$('select[name=categories]',form),authorSelect=$('select[name=author]',form),genreSelect=$('select[name=genre]',form),reset_form=function(){setTimeout(function(){form.removeClass('success');$('.dz-preview',form).removeClass('dz-processing dz-success dz-complete');$('.image-box .dz-preview',form).addClass('empty');var contentTemplate=$('.blog-content .blog-template',form),summaryTemplate=$('.blog-summary .blog-template',form),extraTemplate=$('.blog-extra .blog-template',form),extra2Template=$('.blog-extra2 .blog-template',form),mediaTemplate=$('.blog-media .blog-template',form),defaultContent=contentTemplate.exists()?contentTemplate.html():'',defaultSummary=summaryTemplate.exists()?summaryTemplate.html():'';defaultExtra=extraTemplate.exists()?extraTemplate.html():'';defaultExtra2=extra2Template.exists()?extra2Template.html():'';defaultMedia=mediaTemplate.exists()?mediaTemplate.html():'';$('.blog-content textarea',form).val(defaultContent);$('.blog-summary textarea',form).val(defaultSummary);$('.blog-extra textarea',form).val(defaultExtra);$('.blog-extra2 textarea',form).val(defaultExtra2);$('.blog-media textarea',form).val(defaultMedia);$('.blog-content textarea.hipwig',form).froalaEditor('html.set',defaultContent);$('.blog-summary textarea.hipwig',form).froalaEditor('html.set',defaultSummary);$('.blog-extra textarea.hipwig',form).froalaEditor('html.set',defaultExtra);$('.blog-extra2 textarea.hipwig',form).froalaEditor('html.set',defaultExtra2);$('.blog-media textarea.hipwig',form).froalaEditor('html.set',defaultMedia);if(typeof grecaptcha!=='undefined')grecaptcha.reset();},1200);},populate_form=function(permalink){$.ajax({dataType:"json",url:stacks.totalcms.totalapi,cache:false,data:{slug:slug,type:type,permalink:permalink},success:function(json){$.debug("Blog JSON for "+slug+"/"+permalink,json);$('textarea[name=content]',form).val(json.data.content);$('.blog-content textarea.hipwig',form).froalaEditor('html.set',json.data.content);$('textarea[name=extra],input[name=extra]',form).val(json.data.extra);$('textarea[name=extra2],input[name=extra2]',form).val(json.data.extra2);$('textarea[name=media],input[name=media]',form).val(json.data.media);$('.blog-extra textarea.hipwig',form).froalaEditor('html.set',json.data.extra);$('.blog-extra2 textarea.hipwig',form).froalaEditor('html.set',json.data.extra2);$('.blog-media textarea.hipwig',form).froalaEditor('html.set',json.data.media);$('textarea[name=summary]',form).val(json.data.summary);$('.blog-summary textarea.hipwig',form).froalaEditor('html.set',json.data.summary);$('input[name=permalink]',form).val(json.data.permalink);$('input[name=title]',form).val(json.data.title);$('input[name=draft]',form).val(json.data.draft.toString()).prop('checked',json.data.draft);if("undefined"==typeof json.data.archived)json.data.archived=false;$('input[name=archived]',form).val(json.data.archived.toString()).prop('checked',json.data.archived);$('input[name=featured]',form).val(json.data.featured.toString()).prop('checked',json.data.featured);$('input[name=timestamp]',form).val(json.data.timestamp);if(typeof json.data.categories==='object'){json.data.categories=$.map(json.data.categories,function(value,index){return[value];});}
if(typeof json.data.tags==='object'){json.data.tags=$.map(json.data.tags,function(value,index){return[value];});}
if(typeof json.data.labels==='object'){json.data.labels=$.map(json.data.labels,function(value,index){return[value];});$('[name=labels]',form).val(json.data.labels.join());$("select[name=labels] option",form).filter(function(){return $(this).val().trim()===json.data.labels.join();}).prop('selected',true);}
$('[name=categories]',form).val(json.data.categories.join());$('[name=tags]',form).val(json.data.tags.join());$('[name=author]',form).val(json.data.author);$('[name=genre]',form).val(json.data.genre);$("select[name=author] option",form).filter(function(){return $(this).val().trim()===json.data.author;}).prop('selected',true);$("select[name=genre] option",form).filter(function(){return $(this).val().trim()===json.data.genre;}).prop('selected',true);$("select[name=categories] option",form).filter(function(){return $(this).val().trim()===json.data.categories.join();}).prop('selected',true);$("select[name=tags] option",form).filter(function(){return $(this).val().trim()===json.data.tags.join();}).prop('selected',true);if(dateInput.exists()){var dateformat=dateInput.data('date-format');dateInput.val(moment(json.data.timestamp*1000).format(dateformat));}
if(typeof json.data.image==='object'&&json.data.image!=null){const image=json.data.image;$('.image-box .dz-preview',form).removeClass('empty');$('.image-box .dz-preview',form).data('filename',permalink);$('.image-box img',form).attr('src',stacks.totalcms.baseurl+image.img+"?cache="+Math.random()).attr('alt',image.alt).attr('title',image.alt).error(function(){$(this).addClass('notfound');$('.image-box .dz-preview',form).addClass('empty');});}
$.each(json.data.gallery,function(i,image){var template=$($('#image-preview-template').html()).data('filename',image.filename);$('img',template).attr('src',stacks.totalcms.baseurl+image.thumb.sq).attr('alt',image.alt).attr('title',image.alt).error(function(){$(this).attr('src','../rw_common/plugins/stacks/total-cms/missing.jpg');});if(image.featured)template.addClass('featured');$('.actionbar',template).addClass('fill');$('.gallery-box .total-preview',form).append(template);});}}).fail(function(data){console.error("Error getting blog json "+slug+"/"+permalink);console.error(data);});},backHistory=function(){if(window.history.length>1){setTimeout(function(){document.location=document.referrer;},2500);}},urlifyTitle=function(title){return title.replace(/\s+/g,'-').replace(/[^a-zA-Z0-9\u00C0-\u017F-]/ig,'').toLowerCase();},checkPermalink=function(permalink){var textbox=permalink.closest('.text-box'),form=permalink.closest('form'),cleanTitle=urlifyTitle(permalink.val()),exists=false;if(cleanTitle.length===0){textbox.removeClass('saving success').addClass('error');console.error('Permalink cannot be empty');return true;}
if(permalink.data('suffix')&&!form.hasClass('saving')){cleanTitle=cleanTitle+'-'+permalink.data('suffix');}
permalink.val(cleanTitle);permalink.trigger("pi-changed");$.ajax({type:"GET",async:false,cache:false,url:stacks.totalcms.totalapi+'?'+$.param({'slug':slug,'type':type,'permalink':cleanTitle}),success:function(obj){exists=typeof(obj.data)==='object'?true:false;if(exists){textbox.removeClass('saving success').addClass('error');console.error('Permalink already exists in the blog.');}
else{textbox.removeClass('saving error').addClass('success');}},error:function(jqxhr,status,msg){console.error(jqxhr);var response=JSON.parse(jqxhr.responseText);console.error("Permalink Check Error");console.error(response);}});return exists;};$.ajax({dataType:"json",url:stacks.totalcms.totalapi,cache:false,data:{slug:slug,type:type},success:function(json){$.debug("Blog JSON for "+slug,json);var authors=[],categories=[],tags=[],genres=[],labels=[],onlyUnique=function(value,index,self){if(value)return self.indexOf(value)===index;return false;},inputFilter=function(text,input){return Awesomplete.FILTER_CONTAINS(text,input.match(/[^,]*$/)[0]);},inputReplace=function(text){var before=this.input.value.match(/^.+,\s*|/)[0];this.input.value=before+text+", ";};if(authorInput.exists())authors=authorInput.data('prefill').split(',');if(genreInput.exists())genres=genreInput.data('prefill').split(',');if(categoriesInput.exists())categories=categoriesInput.data('prefill').split(',');if(tagsInput.exists())tags=tagsInput.data('prefill').split(',');if(labelsInput.exists())labels=labelsInput.data('prefill').split(',');if(authorSelect.exists())authors=authorSelect.data('prefill').split(',');if(genreSelect.exists())genres=genreSelect.data('prefill').split(',');if(categoriesSelect.exists())categories=categoriesSelect.data('prefill').split(',');if(tagsSelect.exists())tags=tagsSelect.data('prefill').split(',');if(labelsSelect.exists())labels=labelsSelect.data('prefill').split(',');$.each(json.data,function(index,post){authors.push(post.author);genres.push(post.genre);categories=categories.concat(post.categories);tags=tags.concat(post.tags);if(post.labels){labels=labels.concat(post.labels);}});authors=authors.map(Function.prototype.call,String.prototype.trim).filter(onlyUnique);genres=genres.map(Function.prototype.call,String.prototype.trim).filter(onlyUnique);categories=categories.map(Function.prototype.call,String.prototype.trim).filter(onlyUnique);tags=tags.map(Function.prototype.call,String.prototype.trim).filter(onlyUnique);labels=labels.map(Function.prototype.call,String.prototype.trim).filter(onlyUnique);var enableplete=function(awesomplete){if(awesomplete.ul.childNodes.length===0){awesomplete.evaluate();}
else if(awesomplete.ul.hasAttribute('hidden')){awesomplete.open();}
else{awesomplete.close();}};if(labelsSelect.exists()){labels.forEach(function(label){labelsSelect.append($('<option>'+label+'</option>'));});}
if(tagsSelect.exists()){tags.forEach(function(tag){tagsSelect.append($('<option>'+tag+'</option>'));});}
if(categoriesSelect.exists()){categories.forEach(function(category){categoriesSelect.append($('<option>'+category+'</option>'));});}
if(genreSelect.exists()){genres.forEach(function(genre){genreSelect.append($('<option>'+genre+'</option>'));});}
if(authorSelect.exists()){authors.forEach(function(author){authorSelect.append($('<option>'+author+'</option>'));});}
if(authorInput.exists()&&authorInput.hasClass('autocomplete')){var authorplete=new Awesomplete(authorInput[0],{list:authors,minChars:0,maxItems:15});authorInput.dblclick(function(){enableplete(authorplete);form.addClass('unsaved');authorInput.closest('fieldset').addClass('unsaved');});}
if(genreInput.exists()&&genreInput.hasClass('autocomplete')){var genreplete=new Awesomplete(genreInput[0],{list:genres,minChars:0,maxItems:15});genreInput.dblclick(function(){enableplete(genreplete);form.addClass('unsaved');genreInput.closest('fieldset').addClass('unsaved');});}
if(categoriesInput.exists()&&categoriesInput.hasClass('autocomplete')){var categoryplete=new Awesomplete(categoriesInput[0],{list:categories,minChars:0,maxItems:15,filter:inputFilter,replace:inputReplace});categoriesInput.dblclick(function(){enableplete(categoryplete);form.addClass('unsaved');categoriesInput.closest('fieldset').addClass('unsaved');});}
if(tagsInput.exists()&&tagsInput.hasClass('autocomplete')){var tagsplete=new Awesomplete(tagsInput[0],{list:tags,minChars:0,maxItems:15,filter:inputFilter,replace:inputReplace});tagsInput.dblclick(function(){enableplete(tagsplete);form.addClass('unsaved');tagsInput.closest('fieldset').addClass('unsaved');});}
if(labelsInput.exists()&&labelsInput.hasClass('autocomplete')){var labelsplete=new Awesomplete(labelsInput[0],{list:labels,minChars:0,maxItems:15,filter:inputFilter,replace:inputReplace});labelsInput.dblclick(function(){enableplete(labelsplete);form.addClass('unsaved');labelsInput.closest('fieldset').addClass('unsaved');});}
if(permalink){populate_form(permalink.toString().toLowerCase());}}}).fail(function(data){console.error("Error getting blog db json for "+slug);console.error(data);});$("input[name=title]",form).change(function(){var permalink=$('input[name=permalink]',form),cleanTitle=urlifyTitle($(this).val());if(!permalink.hasClass('locked')){permalink.val(cleanTitle);checkPermalink(permalink);}});$("input[name=permalink]",form).change(function(){var permalink=$(this);permalink.addClass('locked');checkPermalink(permalink);});if(permalink){form.addClass('edit-blog').removeClass('new-blog');$('.cms-delete').show().find('a,button').click(function(e){e.stopPropagation();e.preventDefault();if(confirm("Are you sure that you want to delete this post?")){$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:{'slug':slug,'type':type,'permalink':permalink,'_METHOD':'DELETE'},success:function(data){reset_form();if(stacks.totalcms.banneralert)$('#cms-alertbox-success').total_banner_alert();backHistory();console.log("CMS DELETE Successful: "+data.message);},error:function(jqxhr,status,msg){console.error(jqxhr);var response=JSON.parse(jqxhr.responseText);console.error("CMS DELETE Error");console.error(response);}});}});}
else{reset_form();}
$('.datepicker').click(function(){form.addClass('unsaved');if(form.hasClass('edit-blog')){$('.text-box.date',form).addClass('unsaved');}});$('.switch input',form).click(function(){form.addClass('unsaved');$(this).val($(this).prop('checked').toString());});var blogFormData=function(dropzone){const formData=form.serializeObject();const deleteFields=["summary","content","extra","extra2","media","title"];for(const field of deleteFields){delete formData[field];}
dropzone.options.params=formData;};if($('.image-box',form).exists()){$('.image-box',form).dropzone({url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,paramName:"image",parallelUploads:1,autoProcessQueue:form.hasClass("edit-blog"),thumbnailWidth:null,thumbnailHeight:null,previewsContainer:'#'+form.attr('id')+' .image-box .total-preview',previewTemplate:$('#image-preview-template').html(),clickable:'#'+form.attr('id')+' .image-box .dz-overlay',forceFallback:false,acceptedFiles:'image/jpeg,image/png,image/gif',addedfile:function(file){imagezone=this;file.previewElement=window.Dropzone.createElement(this.options.previewTemplate.trim());file.previewTemplate=file.previewElement;var img_height=$('img',this.previewsContainer).height();this.previewsContainer.innerHTML='';this.previewsContainer.appendChild(file.previewElement);$('img',this.previewsContainer).height(img_height).width('100%');blogFormData(this);},thumbnail:dz_thumbnail,uploadprogress:dz_uploadprogress,drop:dz_dragleave,dragenter:dz_dragenter,dragleave:dz_dragleave,error:dz_error,accept:dz_accept,success:dz_success});}
if($('.gallery-box',form).exists()){new Dropzone($('.gallery-box',form)[0],{url:stacks.totalcms.totalapi,method:"post",headers:stacks.totalcms.requestheaders,paramName:"gallery",parallelUploads:1,autoProcessQueue:form.hasClass("edit-blog"),thumbnailWidth:null,thumbnailHeight:null,previewsContainer:'#'+form.attr('id')+' .gallery-box .total-preview',previewTemplate:$('#image-preview-template').html(),clickable:'#'+form.attr('id')+' .gallery-box .dz-preview:first-child',forceFallback:false,acceptedFiles:'image/jpeg,image/png,image/gif',addedfile:function(file){galleryzone=this;file.previewElement=window.Dropzone.createElement(this.options.previewTemplate.trim());file.previewTemplate=file.previewElement;$(file.previewElement).find('.actionbar').addClass('fill');$('.dz-preview',this.previewsContainer).first().after(file.previewElement);form.addClass("unsaved");blogFormData(this);},thumbnail:dz_thumbnail,uploadprogress:dz_uploadprogress,drop:dz_dragleave,dragenter:dz_dragenter,dragleave:dz_dragleave,error:dz_error,accept:dz_accept,success:dz_success});}
form.submit(function(event){if(stacks.totalcmsdemo===true){console.log('Total CMS Demo mode. Submit disabled.');return false;}
event.preventDefault();var form=$(this),permalink=$('input[name=permalink]',form);form.addClass('saving');var afterSumbitAction=function(){$.debug('Running afterSumbitAction');if(form.find('.error').length>0)return false;if(window.debug!==true){if((form.hasClass('edit-blog')&&form.hasClass('edit-redirect-back'))||(form.hasClass('new-blog')&&form.hasClass('new-redirect-back'))){setTimeout(function(){backHistory();},window.blogtimeout??3500);}
if(form.hasClass('edit-blog')&&form.hasClass('edit-redirect')){setTimeout(function(){document.location=form.data('editurl');},window.blogtimeout??3500);}
if(form.hasClass('new-blog')&&form.hasClass('new-redirect')){setTimeout(function(){document.location=form.data('newurl');},window.blogtimeout??3500);}}
form.addClass('edit-blog').removeClass('new-blog');form.append(permalink.clone().attr('type','hidden'));permalink.addClass('locked').prop('disabled',true);if(stacks.totalcms.banneralert)$('#cms-alertbox-success').total_banner_alert();$('input.btoa,textarea.btoa',form).each(function(){$(this).val($(this).data('content')).removeClass('btoa');});},uploadBlogImages=()=>{if(galleryzone&&imagezone){imagezone.on("queuecomplete",function name(params){galleryzone.processQueue();});imagezone.processQueue();}
else{if(imagezone){imagezone.on("queuecomplete",afterSumbitAction);imagezone.processQueue();}
if(galleryzone){galleryzone.processQueue();}}},blogSubmit=function(successCallback,errorCallback){form.removeClass('success error unsaved');var autoSummary=$('.auto-summary',form);if(autoSummary.exists()){var content=$("<div/>").html($('textarea[name=content]',form).val()).text(),charCount=autoSummary.data('charcount');var summary=content.substr(0,charCount);summary=summary.substr(0,Math.min(summary.length,summary.lastIndexOf(" ")));autoSummary.val("<p>"+summary+"</p>");}
$('input:required,textarea:required',form).each(function(){var input=$(this);if(!input.val().trim()){form.addClass('unsaved');input.closest('fieldset').addClass('error');var name=input.attr('name');console.error('The '+name+' field is required. You must enter a value.');}});if(form.find('.error').exists())return false;var data=form.serializeAndEncode();$.debug("CMS Blog Posting: "+stacks.totalcms.totalapi,data);$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:data,success:function(data){console.log("CMS Post Successful: "+data.message);uploadBlogImages();form.removeClass('saving').addClass('success');if(successCallback&&typeof(successCallback)==="function")successCallback();},error:function(jqxhr,status,msg){console.error(jqxhr);if(jqxhr.responseText){var response=JSON.parse(jqxhr.responseText);console.error("CMS Post Error: "+response.message);}
else{console.error("CMS Post Error: Unable to locate error message ("+status+" "+msg+")");}
form.removeClass('saving').addClass('error unsaved');if(stacks.totalcms.banneralert)$('#cms-alertbox-error').total_banner_alert();if(errorCallback&&typeof(errorCallback)==="function")errorCallback();}});};if(permalink.closest('.text-box').hasClass('error'))return false;if(form.hasClass('new-blog')&&checkPermalink(permalink)===true)return false;if(typeof grecaptcha!=='undefined'){$('.g-recaptcha iframe',form).removeClass('error');var stackid=$('.g-recaptcha',form).data('stack');$.ajax({type:"POST",url:"files/"+stackid+"_recaptcha.php",headers:stacks.totalcms.requestheaders,data:form.serializeAndEncode(),cache:false,success:function(data){$.debug('reCAPTCHA WORKS!',data);blogSubmit(function(){if(!galleryzone&&!imagezone)afterSumbitAction();});},error:function(data){console.error("Error checking reCAPTCHA");console.error(data);$('.g-recaptcha iframe',form).addClass('error');},complete:function(){grecaptcha.reset();}});}
else{blogSubmit(function(){if(!galleryzone&&!imagezone)afterSumbitAction();});}
if(galleryzone){galleryzone.on("queuecomplete",afterSumbitAction);galleryzone.on("processing",function(){this.options.autoProcessQueue=true;});}
if(imagezone){imagezone.on("processing",function(){this.options.autoProcessQueue=true;});}
return false;});});$("form.image-form").each(function(){var form=$(this),form_id=form.attr('id');form.dropzone({url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,parallelUploads:1,autoProcessQueue:true,thumbnailWidth:null,thumbnailHeight:null,previewsContainer:'#'+form_id+' .total-preview',previewTemplate:$('#image-preview-template').html(),clickable:['#'+form_id+' .dz-overlay','#'+form_id+' img'],forceFallback:false,acceptedFiles:'image/jpeg,image/png,image/gif',addedfile:function(file){$.debug('dz_addedfile');file.previewElement=window.Dropzone.createElement(this.options.previewTemplate.trim());file.previewTemplate=file.previewElement;var img_height=$('img',this.previewsContainer).height();this.previewsContainer.innerHTML='';this.previewsContainer.appendChild(file.previewElement);$('img',this.previewsContainer).height(img_height).width('100%');},thumbnail:dz_thumbnail,uploadprogress:dz_uploadprogress,drop:dz_dragleave,dragenter:dz_dragenter,dragleave:dz_dragleave,error:dz_error,success:dz_success,accept:dz_accept});});$("form.gallery-form").each(function(){var form=$(this),form_id=form.attr('id'),preview=$('.total-preview',form),slug=$('input[name=slug]',form).val(),type=$('input[name=type]',form).val();$.ajax({dataType:"json",url:stacks.totalcms.totalapi,cache:false,data:{slug:slug,type:type},success:function(json){$.debug("Gallery JSON for "+slug,json);$.each(json.data.images,function(i,image){var template=$($('#image-preview-template').html()).data('filename',image.filename);$('img',template).attr('src',stacks.totalcms.baseurl+image.thumb.sq).attr('alt',image.alt).attr('title',image.alt).error(function(){$(this).attr('src','../rw_common/plugins/stacks/total-cms/missing.jpg');});if(image.featured)template.addClass('featured');$('.actionbar',template).addClass('fill');preview.append(template);});if(preview.height()>preview.data('maxheight'))preview.addClass('overflow');}}).fail(function(data){console.error("Error getting gallery json "+slug);console.error(data);});form.dropzone({url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,parallelUploads:1,autoProcessQueue:true,thumbnailWidth:null,thumbnailHeight:null,previewsContainer:'#'+form_id+' .total-preview',previewTemplate:$('#image-preview-template').html(),clickable:'#'+form.attr('id')+' .dz-preview:first-child',forceFallback:false,acceptedFiles:'image/jpeg,image/png,image/gif',addedfile:function(file){$.debug('dz_addedfile');file.previewElement=window.Dropzone.createElement(this.options.previewTemplate.trim());file.previewTemplate=file.previewElement;$(file.previewElement).find('.actionbar').addClass('fill');$('.dz-preview',this.previewsContainer).first().after(file.previewElement);},thumbnail:dz_thumbnail,uploadprogress:dz_uploadprogress,drop:dz_dragleave,dragenter:dz_dragenter,dragleave:dz_dragleave,error:dz_error,success:dz_success,accept:dz_accept});});$('.gallery-box .total-preview').each(function(){var form=$(this).closest('form.total-form');Sortable.create(this,{handle:".imagebar-move",clickable:".dz-clickable",draggable:".dz-preview",animation:500,onEnd:function(event){$(event.item).removeClass('dz-success');$.debug('drag end',event);var oldIndex=event.oldIndex-1,newIndex=event.newIndex===0?event.newIndex:event.newIndex-1,data=form.serialize()+"&oldIndex="+oldIndex+"&newIndex="+newIndex;$.ajax({type:"POST",url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,data:data,cache:false,success:function(data){console.log("Image Reorder Successful: "+data.message);},error:function(data){console.error("Error reordering image "+slug);console.error(data);}});}});});var mime_type={'zip':{mime:'application/zip',fa:'fa-file-archive-o'},'pdf':{mime:'application/pdf',fa:'fa-file-pdf-o'},'rtf':{mime:'application/rtf',fa:'fa-file-text-o'},'eps':{mime:'application/postscript',fa:'fa-file-image-o'},'psd':{mime:'application/octet-stream',fa:'fa-file-image-o'},'doc':{mime:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',fa:'fa-file-word-o'},'xls':{mime:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',fa:'fa-file-excel-o'},'ppt':{mime:'application/vnd.openxmlformats-officedocument.presentationml.presentation',fa:'fa-file-powerpoint-o'},'docx':{mime:'application/vnd.openxmlformats-officedocument.wordprocessingml.document',fa:'fa-file-word-o'},'xlsx':{mime:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',fa:'fa-file-excel-o'},'pptx':{mime:'application/vnd.openxmlformats-officedocument.presentationml.presentation',fa:'fa-file-powerpoint-o'},'doc':{mime:'application/msword',fa:'fa-file-word-o'},'xls':{mime:'application/excel',fa:'fa-file-excel-o'},'ppt':{mime:'application/powerpoint',fa:'fa-file-powerpoint-o'},'mp3':{mime:'audio/mpeg',fa:'fa-file-audio-o'},'mp4':{mime:'video/mp4',fa:'fa-file-video-o'},'ogg':{mime:'audio/ogg',fa:'fa-file-audio-o'},'ogv':{mime:'video/ogg',fa:'fa-file-video-o'},'webm':{mime:'video/webm',fa:'fa-file-video-o'},'txt':{mime:'text/plain',fa:'fa-file-text-o'},'csv':{mime:'text/csv',fa:'fa-file-text-o'},'html':{mime:'text/html',fa:'fa-file-code-o'},'css':{mime:'text/css',fa:'fa-file-code-o'},'js':{mime:'text/javascript',fa:'fa-file-code-o'},'jpg':{mime:'image/jpeg',fa:'fa-file-image-o'},'png':{mime:'image/png',fa:'fa-file-image-o'},'gif':{mime:'image/gif',fa:'fa-file-image-o'},'apng':{mime:'image/apng',fa:'fa-file-image-o'},'webp':{mime:'image/webp',fa:'fa-file-image-o'},'avif':{mime:'image/avif',fa:'fa-file-image-o'},'svg':{mime:'image/svg+xml',fa:'fa-file-image-o'},'swf':{mime:'application/x-shockwave-flash',fa:'fa-file-o'}};$("form.file-form").each(function(){var form=$(this),form_id=form.attr('id'),slug=$('input[name=slug]',form).val(),type=$('input[name=type]',form).val(),ext=$('input[name=ext]',form).val();if(mime_type[ext]){$('.file-icon',form).removeClass('fa-file-o').addClass(mime_type[ext].fa);}
form.dropzone({url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,parallelUploads:1,maxFilesize:1024,autoProcessQueue:true,thumbnailWidth:null,thumbnailHeight:null,previewsContainer:'#'+form_id+' .total-preview',clickable:$.isMobile()?'#'+form.attr('id')+' .total-preview':'#'+form.attr('id')+' .file-icon',forceFallback:false,acceptedFiles:mime_type[ext]?mime_type[ext].mime:`.${ext}`,addedfile:function(file){file.previewElement=document.querySelectorAll(this.options.previewsContainer+' .dz-preview')[0];file.previewTemplate=file.previewElement;},uploadprogress:dz_uploadprogress,drop:dz_dragleave,dragenter:dz_dragenter,dragleave:dz_dragleave,error:dz_error,success:dz_success});});$("form.depot-form").each(function(){var form=$(this),form_id=form.attr('id'),preview=$('.total-preview',form),slug=$('input[name=slug]',form).val(),type=$('input[name=type]',form).val(),ext=$('input[name=ext]',form).val();$.ajax({dataType:"json",url:stacks.totalcms.totalapi,cache:false,data:{slug:slug,type:type},success:function(json){$.debug("Depot JSON for "+slug,json);if(json.data.files){$.each(json.data.files.reverse(),function(i,filename){var template=$($('#file-preview-template').html()),ext=filename.split('.').pop();if(mime_type[ext]){$('.file-icon',template).removeClass('fa-file-o').addClass(mime_type[ext].fa);}
$('.filename',template).html(filename);$('.actionbar',template).addClass('fill');$('.dz-preview',preview).first().after(template);});if(preview.height()>preview.data('maxheight'))preview.addClass('overflow');}}}).fail(function(data){console.error("Error getting depot json "+slug);console.error(data);});form.dropzone({url:stacks.totalcms.totalapi,headers:stacks.totalcms.requestheaders,parallelUploads:1,maxFilesize:1024,autoProcessQueue:true,thumbnailWidth:null,thumbnailHeight:null,previewsContainer:'#'+form_id+' .total-preview',previewTemplate:$('#file-preview-template').html(),clickable:'#'+form.attr('id')+' .dz-preview:first-child',forceFallback:false,addedfile:function(file){file.previewElement=window.Dropzone.createElement(this.options.previewTemplate.trim());file.previewTemplate=file.previewElement;$(file.previewElement).find('.actionbar').addClass('fill');$('.dz-preview',this.previewsContainer).first().after(file.previewElement);},acceptedFiles:mime_type[ext]?mime_type[ext].mime:null,uploadprogress:dz_uploadprogress,drop:dz_dragleave,dragenter:dz_dragenter,dragleave:dz_dragleave,error:dz_error,success:function(file){if(file.previewElement){var ext=file.name.split('.').pop(),name=file.name.replace('.'+ext,'').replace(/\W+/g,'-'),full=(name+'.'+ext),preview=$(file.previewElement);if(mime_type[ext]){$('.file-icon',preview).removeClass('fa-file-o').addClass(mime_type[ext].fa);}
$('.filename',preview).html(full);$(file.previewElement).addClass("dz-success").removeClass('dz-processing');}}});});});document.addEventListener("DOMContentLoaded",function(){$('.cms-save a,.cms-save button,a.cms-save,button.cms-save').click(function(event){event.preventDefault();var form=$(this)[0].form;if(form){$(form).submit();}else{$('form.total-form.unsaved').submit();}
return false;});$('.hipwig textarea').on('froalaEditor.save.before',function(e,editor){$(this).closest('form.total-form').submit();}).on('froalaEditor.contentChanged',function(e,editor){$(this).closest('form.total-form').addClass('unsaved');});$('fieldset.text-box,fieldset.select-box').append('<i class="fa fa-fw fa-check-circle"></i><i class="fa fa-fw fa-times-circle"></i><i class="fa fa-fw fa-circle-o-notch fa-spin"></i>');$('.text-box input,.text-box textarea,.fr-view,.select-box select').on('input',function(event){$(this).closest('fieldset').addClass('unsaved').closest('form.total-form').addClass('unsaved').removeClass('error success saving');});$('.select-box select').on('input',function(event){$(this).closest('fieldset').addClass('unsaved').closest('form.total-form').addClass('unsaved').removeClass('error success saving');});if(window.navigator.userAgent.indexOf("MSIE")>0||window.navigator.userAgent.indexOf("Edge")>0){console.log("IE HACK");$('.select-box select').on('click',function(){$(this).closest('fieldset').addClass('unsaved').closest('form.total-form').addClass('unsaved').removeClass('error success saving');});}
$('.text-box a.fullscreen').on('click',function(){$(this).closest('.text-box').addClass('unsaved');$(this).closest('form.total-form').addClass('unsaved').removeClass('error success saving');});$(document).keydown(function(event){if(event.which==83){if(window.navigator.platform==='MacIntel'&&!event.metaKey)return;if(window.navigator.platform!=='MacIntel'&&!event.ctrlKey)return;if(!$('.widearea-overlayLayer').exists()){$('form.total-form.unsaved, form.blog-form').submit();event.preventDefault();return false;}}
if(event.which=='13'){if(!event.target.closest('form.blog-filter').exists()||!event.target.closest('form.blog-filter-form').exists()){event.preventDefault();return false;}}});if($.isMobile())$('input:read-only').prop('readonly',false);setTimeout(function(){$('input,textarea').each(function(){if($(this).val()!=="")$(this).attr("placeholder","");});},2000);});


return stack;})(stacks.stacks_in_1321);
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
stacks.stacks_in_1341 = {};
stacks.stacks_in_1341 = (function(stack) {
var jQuery = stacks.jQuery;var $ = jQuery;
$(function(){var win=$(window),stack=$('#stacks_in_1341'),spacer=$('.spacer_stacks_in_1341'),positionClass='section-bottom',sideClass='section-left',sectionWrapperId='#'+stack.closest('.shear-wrapper').attr('id'),sectionContent=stack.closest('.content-wrapper');stack.unwrap();stack.addClass('section-absolute').addClass(positionClass).addClass(sideClass).addClass('').appendTo(sectionWrapperId);if(positionClass=='section-bottom'){spacer.appendTo(sectionContent);}else{spacer.prependTo(sectionContent);}var resizeSpacer=function(){var targetHeight=stack.outerHeight();spacer.css('height',targetHeight);}
win.on("resize",resizeSpacer);resizeSpacer();$(window).load(function(){$('.section-fix',stack).removeClass('pre-load');resizeSpacer();});});

return stack;})(stacks.stacks_in_1341);
;(function($){$.fn.onImpression=function(options){var settings=$.extend({offset:0,callback:null,attribute:"",alwayscallback:false,scrollable:""},options)
var $window=$(window),$scrollable=$(settings.scrollable),onImpressionElements=this,loaded;this.one("onImpression",function(){if(typeof settings.callback==="function")settings.callback.call(this,this.getAttribute(settings.attribute));});this.on("alwaysOnImpression",function(){if(typeof settings.callback==="function")settings.callback.call(this,this.getAttribute(settings.attribute));});function onImpression(){var inview=onImpressionElements.filter(function(){var $e=$(this);if($e.is(":hidden"))return;var wt=$window.scrollTop(),wb=wt+$window.height(),et=$e.offset().top,eb=et+$e.height();var inScrollable=false;if($scrollable.length){var scrollTop=$scrollable.scrollTop(),scrollBottom=scrollTop+$scrollable.height();inScrollable=(eb>=scrollTop-settings.offset&&et<=scrollBottom+settings.offset);}
return(eb>=wt-settings.offset&&et<=wb+settings.offset)||inScrollable;});if(settings.alwayscallback){loaded=inview.trigger("alwaysOnImpression");}
else{loaded=inview.trigger("onImpression");onImpressionElements=onImpressionElements.not(loaded);}}
if(typeof settings.callback==="function"){if($scrollable.length){$scrollable.on("scroll.onImpression resize.onImpression lookup.onImpression",onImpression);}else{$window.on("scroll.onImpression resize.onImpression lookup.onImpression",onImpression);}
onImpression();}
return this;};})(jQuery);

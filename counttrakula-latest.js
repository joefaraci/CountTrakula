//COUNT TRAKULA 1.4 MIN
$(function(){$(document).on("mousedown",'a[target="_blank"], area[target="_blank"]',function(){_gaq.push(["_trackEvent","External Link",$(this).attr("href"),document.title,0,!0])});$(document).on("mousedown",'a[target!="_blank"], area[target="!_blank"]',function(){_gaq.push(["_trackEvent","Internal Link",$(this).attr("href"),document.title,0,!0])});$(document).on("mousedown",'a[onclick*="window.location"],a[onclick*="document.location"],img[onclick*="window.location"],img[onclick*="document.location"]', function(){_gaq.push(["_trackEvent","JS.Location",$(this).attr("onclick"),document.title,0,!0])});$(document).on("mousedown",'select[onchange*="window.location"]',function(){_gaq.push(["_trackEvent","OnChange Window.Location",$(this).value+":"+$(this).attr("onchange"),document.title,0,!0])});$(document).on("mousedown",'a[onclick*="window.open"]',function(){_gaq.push(["_trackEvent","Window.Open",$(this).attr("onclick"),document.title,0,!0])});$(document).on("mousedown",'*[onclick*="submit"]',function(){_gaq.push(["_trackEvent", "Element Submit","Elem: "+$(this).attr("id")+", Class: "+$(this).attr("class")+", onclick: "+$(this).attr("onclick"),document.title,0,!0])});$("form").submit(function(a){var b=this;a.preventDefault();_gaq.push(["_trackEvent","Form Submit","Form Name: "+$(this).attr("name")+", Form ID: "+$(this).attr("id")+", Form Method: "+$(this).attr("method")+", Form Action: "+$(this).attr("action"),document.title,0,!0]);setTimeout(function(){b.submit()},250);return!1});"undefined"!==typeof cTrakulaCongif&&(!0== cTrakulaCongif.trackmobile&&"onhashchange"in window)&&(window.onhashchange=function(){_gaq.push(["_trackPageview",location.pathname+location.search+location.hash])})});
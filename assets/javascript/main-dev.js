(function($){$.fn.jCarouselLite=function(o){o=$.extend({btnPrev:null,btnNext:null,btnGo:null,mouseWheel:false,auto:null,speed:200,easing:null,vertical:false,circular:true,visible:3,start:0,scroll:1,beforeStart:null,afterEnd:null},o||{});return this.each(function(){var b=false,animCss=o.vertical?"top":"left",sizeCss=o.vertical?"height":"width";var c=$(this),ul=$("ul",c),tLi=$("li",ul),tl=tLi.size(),v=o.visible;if(o.circular){ul.prepend(tLi.slice(tl-v-1+1).clone()).append(tLi.slice(0,v).clone());o.start+=v}var f=$("li",ul),itemLength=f.size(),curr=o.start;c.css("visibility","visible");f.css({overflow:"hidden",float:o.vertical?"none":"left"});ul.css({margin:"0",padding:"0",position:"relative","list-style-type":"none","z-index":"1"});c.css({overflow:"hidden",position:"relative","z-index":"2",left:"0px"});var g=o.vertical?height(f):width(f);var h=g*itemLength;var j=g*v;f.css({width:f.width(),height:f.height()});ul.css(sizeCss,h+"px").css(animCss,-(curr*g));c.css(sizeCss,j+"px");if(o.btnPrev)$(o.btnPrev).click(function(){return go(curr-o.scroll)});if(o.btnNext)$(o.btnNext).click(function(){return go(curr+o.scroll)});if(o.btnGo)$.each(o.btnGo,function(i,a){$(a).click(function(){return go(o.circular?o.visible+i:i)})});if(o.mouseWheel&&c.mousewheel)c.mousewheel(function(e,d){return d>0?go(curr-o.scroll):go(curr+o.scroll)});if(o.auto)setInterval(function(){go(curr+o.scroll)},o.auto+o.speed);function vis(){return f.slice(curr).slice(0,v)};function go(a){if(!b){if(o.beforeStart)o.beforeStart.call(this,vis());if(o.circular){if(a<=o.start-v-1){ul.css(animCss,-((itemLength-(v*2))*g)+"px");curr=a==o.start-v-1?itemLength-(v*2)-1:itemLength-(v*2)-o.scroll}else if(a>=itemLength-v+1){ul.css(animCss,-((v)*g)+"px");curr=a==itemLength-v+1?v+1:v+o.scroll}else curr=a}else{if(a<0||a>itemLength-v)return;else curr=a}b=true;ul.animate(animCss=="left"?{left:-(curr*g)}:{top:-(curr*g)},o.speed,o.easing,function(){if(o.afterEnd)o.afterEnd.call(this,vis());b=false});if(!o.circular){$(o.btnPrev+","+o.btnNext).removeClass("disabled");$((curr-o.scroll<0&&o.btnPrev)||(curr+o.scroll>itemLength-v&&o.btnNext)||[]).addClass("disabled")}}return false}})};function css(a,b){return parseInt($.css(a[0],b))||0};function width(a){return a[0].offsetWidth+css(a,'marginLeft')+css(a,'marginRight')};function height(a){return a[0].offsetHeight+css(a,'marginTop')+css(a,'marginBottom')}})(jQuery);
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 *
 * Version: 1.3.1 (05/03/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function(b){var m,u,x,g,D,i,z,A,B,p=0,e={},q=[],n=0,c={},j=[],E=null,s=new Image,G=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,S=/[^\.]\.(swf)\s*$/i,H,I=1,k,l,h=false,y=b.extend(b("<div/>")[0],{prop:0}),v=0,O=!b.support.opacity&&!window.XMLHttpRequest,J=function(){u.hide();s.onerror=s.onload=null;E&&E.abort();m.empty()},P=function(){b.fancybox('<p id="fancybox_error">The requested content cannot be loaded.<br />Please try again later.</p>',{scrolling:"no",padding:20,transitionIn:"none",transitionOut:"none"})},
K=function(){return[b(window).width(),b(window).height(),b(document).scrollLeft(),b(document).scrollTop()]},T=function(){var a=K(),d={},f=c.margin,o=c.autoScale,t=(20+f)*2,w=(20+f)*2,r=c.padding*2;if(c.width.toString().indexOf("%")>-1){d.width=a[0]*parseFloat(c.width)/100-40;o=false}else d.width=c.width+r;if(c.height.toString().indexOf("%")>-1){d.height=a[1]*parseFloat(c.height)/100-40;o=false}else d.height=c.height+r;if(o&&(d.width>a[0]-t||d.height>a[1]-w))if(e.type=="image"||e.type=="swf"){t+=r;
w+=r;o=Math.min(Math.min(a[0]-t,c.width)/c.width,Math.min(a[1]-w,c.height)/c.height);d.width=Math.round(o*(d.width-r))+r;d.height=Math.round(o*(d.height-r))+r}else{d.width=Math.min(d.width,a[0]-t);d.height=Math.min(d.height,a[1]-w)}d.top=a[3]+(a[1]-(d.height+40))*0.5;d.left=a[2]+(a[0]-(d.width+40))*0.5;if(c.autoScale===false){d.top=Math.max(a[3]+f,d.top);d.left=Math.max(a[2]+f,d.left)}return d},U=function(a){if(a&&a.length)switch(c.titlePosition){case "inside":return a;case "over":return'<span id="fancybox-title-over">'+
a+"</span>";default:return'<span id="fancybox-title-wrap"><span id="fancybox-title-left"></span><span id="fancybox-title-main">'+a+'</span><span id="fancybox-title-right"></span></span>'}return false},V=function(){var a=c.title,d=l.width-c.padding*2,f="fancybox-title-"+c.titlePosition;b("#fancybox-title").remove();v=0;if(c.titleShow!==false){a=b.isFunction(c.titleFormat)?c.titleFormat(a,j,n,c):U(a);if(!(!a||a==="")){b('<div id="fancybox-title" class="'+f+'" />').css({width:d,paddingLeft:c.padding,
paddingRight:c.padding}).html(a).appendTo("body");switch(c.titlePosition){case "inside":v=b("#fancybox-title").outerHeight(true)-c.padding;l.height+=v;break;case "over":b("#fancybox-title").css("bottom",c.padding);break;default:b("#fancybox-title").css("bottom",b("#fancybox-title").outerHeight(true)*-1);break}b("#fancybox-title").appendTo(D).hide()}}},W=function(){b(document).unbind("keydown.fb").bind("keydown.fb",function(a){if(a.keyCode==27&&c.enableEscapeButton){a.preventDefault();b.fancybox.close()}else if(a.keyCode==
37){a.preventDefault();b.fancybox.prev()}else if(a.keyCode==39){a.preventDefault();b.fancybox.next()}});if(b.fn.mousewheel){g.unbind("mousewheel.fb");j.length>1&&g.bind("mousewheel.fb",function(a,d){a.preventDefault();h||d===0||(d>0?b.fancybox.prev():b.fancybox.next())})}if(c.showNavArrows){if(c.cyclic&&j.length>1||n!==0)A.show();if(c.cyclic&&j.length>1||n!=j.length-1)B.show()}},X=function(){var a,d;if(j.length-1>n){a=j[n+1].href;if(typeof a!=="undefined"&&a.match(G)){d=new Image;d.src=a}}if(n>0){a=
j[n-1].href;if(typeof a!=="undefined"&&a.match(G)){d=new Image;d.src=a}}},L=function(){i.css("overflow",c.scrolling=="auto"?c.type=="image"||c.type=="iframe"||c.type=="swf"?"hidden":"auto":c.scrolling=="yes"?"auto":"visible");if(!b.support.opacity){i.get(0).style.removeAttribute("filter");g.get(0).style.removeAttribute("filter")}b("#fancybox-title").show();c.hideOnContentClick&&i.one("click",b.fancybox.close);c.hideOnOverlayClick&&x.one("click",b.fancybox.close);c.showCloseButton&&z.show();W();b(window).bind("resize.fb",
b.fancybox.center);c.centerOnScroll?b(window).bind("scroll.fb",b.fancybox.center):b(window).unbind("scroll.fb");b.isFunction(c.onComplete)&&c.onComplete(j,n,c);h=false;X()},M=function(a){var d=Math.round(k.width+(l.width-k.width)*a),f=Math.round(k.height+(l.height-k.height)*a),o=Math.round(k.top+(l.top-k.top)*a),t=Math.round(k.left+(l.left-k.left)*a);g.css({width:d+"px",height:f+"px",top:o+"px",left:t+"px"});d=Math.max(d-c.padding*2,0);f=Math.max(f-(c.padding*2+v*a),0);i.css({width:d+"px",height:f+
"px"});if(typeof l.opacity!=="undefined")g.css("opacity",a<0.5?0.5:a)},Y=function(a){var d=a.offset();d.top+=parseFloat(a.css("paddingTop"))||0;d.left+=parseFloat(a.css("paddingLeft"))||0;d.top+=parseFloat(a.css("border-top-width"))||0;d.left+=parseFloat(a.css("border-left-width"))||0;d.width=a.width();d.height=a.height();return d},Q=function(){var a=e.orig?b(e.orig):false,d={};if(a&&a.length){a=Y(a);d={width:a.width+c.padding*2,height:a.height+c.padding*2,top:a.top-c.padding-20,left:a.left-c.padding-
20}}else{a=K();d={width:1,height:1,top:a[3]+a[1]*0.5,left:a[2]+a[0]*0.5}}return d},N=function(){u.hide();if(g.is(":visible")&&b.isFunction(c.onCleanup))if(c.onCleanup(j,n,c)===false){b.event.trigger("fancybox-cancel");h=false;return}j=q;n=p;c=e;i.get(0).scrollTop=0;i.get(0).scrollLeft=0;if(c.overlayShow){O&&b("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});
x.css({"background-color":c.overlayColor,opacity:c.overlayOpacity}).unbind().show()}l=T();V();if(g.is(":visible")){b(z.add(A).add(B)).hide();var a=g.position(),d;k={top:a.top,left:a.left,width:g.width(),height:g.height()};d=k.width==l.width&&k.height==l.height;i.fadeOut(c.changeFade,function(){var f=function(){i.html(m.contents()).fadeIn(c.changeFade,L)};b.event.trigger("fancybox-change");i.empty().css("overflow","hidden");if(d){i.css({top:c.padding,left:c.padding,width:Math.max(l.width-c.padding*
2,1),height:Math.max(l.height-c.padding*2-v,1)});f()}else{i.css({top:c.padding,left:c.padding,width:Math.max(k.width-c.padding*2,1),height:Math.max(k.height-c.padding*2,1)});y.prop=0;b(y).animate({prop:1},{duration:c.changeSpeed,easing:c.easingChange,step:M,complete:f})}})}else{g.css("opacity",1);if(c.transitionIn=="elastic"){k=Q();i.css({top:c.padding,left:c.padding,width:Math.max(k.width-c.padding*2,1),height:Math.max(k.height-c.padding*2,1)}).html(m.contents());g.css(k).show();if(c.opacity)l.opacity=
0;y.prop=0;b(y).animate({prop:1},{duration:c.speedIn,easing:c.easingIn,step:M,complete:L})}else{i.css({top:c.padding,left:c.padding,width:Math.max(l.width-c.padding*2,1),height:Math.max(l.height-c.padding*2-v,1)}).html(m.contents());g.css(l).fadeIn(c.transitionIn=="none"?0:c.speedIn,L)}}},F=function(){m.width(e.width);m.height(e.height);if(e.width=="auto")e.width=m.width();if(e.height=="auto")e.height=m.height();N()},Z=function(){h=true;e.width=s.width;e.height=s.height;b("<img />").attr({id:"fancybox-img",
src:s.src,alt:e.title}).appendTo(m);N()},C=function(){J();var a=q[p],d,f,o,t,w;e=b.extend({},b.fn.fancybox.defaults,typeof b(a).data("fancybox")=="undefined"?e:b(a).data("fancybox"));o=a.title||b(a).title||e.title||"";if(a.nodeName&&!e.orig)e.orig=b(a).children("img:first").length?b(a).children("img:first"):b(a);if(o===""&&e.orig)o=e.orig.attr("alt");d=a.nodeName&&/^(?:javascript|#)/i.test(a.href)?e.href||null:e.href||a.href||null;if(e.type){f=e.type;if(!d)d=e.content}else if(e.content)f="html";else if(d)if(d.match(G))f=
"image";else if(d.match(S))f="swf";else if(b(a).hasClass("iframe"))f="iframe";else if(d.match(/#/)){a=d.substr(d.indexOf("#"));f=b(a).length>0?"inline":"ajax"}else f="ajax";else f="inline";e.type=f;e.href=d;e.title=o;if(e.autoDimensions&&e.type!=="iframe"&&e.type!=="swf"){e.width="auto";e.height="auto"}if(e.modal){e.overlayShow=true;e.hideOnOverlayClick=false;e.hideOnContentClick=false;e.enableEscapeButton=false;e.showCloseButton=false}if(b.isFunction(e.onStart))if(e.onStart(q,p,e)===false){h=false;
return}m.css("padding",20+e.padding+e.margin);b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){b(this).replaceWith(i.children())});switch(f){case "html":m.html(e.content);F();break;case "inline":b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",function(){b(this).replaceWith(i.children())}).bind("fancybox-cancel",function(){b(this).replaceWith(m.children())});b(a).appendTo(m);F();break;case "image":h=false;b.fancybox.showActivity();
s=new Image;s.onerror=function(){P()};s.onload=function(){s.onerror=null;s.onload=null;Z()};s.src=d;break;case "swf":t='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+d+'"></param>';w="";b.each(e.swf,function(r,R){t+='<param name="'+r+'" value="'+R+'"></param>';w+=" "+r+'="'+R+'"'});t+='<embed src="'+d+'" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"'+w+"></embed></object>";m.html(t);
F();break;case "ajax":a=d.split("#",2);f=e.ajax.data||{};if(a.length>1){d=a[0];if(typeof f=="string")f+="&selector="+a[1];else f.selector=a[1]}h=false;b.fancybox.showActivity();E=b.ajax(b.extend(e.ajax,{url:d,data:f,error:P,success:function(r){if(E.status==200){m.html(r);F()}}}));break;case "iframe":b('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" scrolling="'+e.scrolling+'" src="'+e.href+'"></iframe>').appendTo(m);N();break}},$=function(){if(u.is(":visible")){b("div",
u).css("top",I*-40+"px");I=(I+1)%12}else clearInterval(H)},aa=function(){if(!b("#fancybox-wrap").length){b("body").append(m=b('<div id="fancybox-tmp"></div>'),u=b('<div id="fancybox-loading"><div></div></div>'),x=b('<div id="fancybox-overlay"></div>'),g=b('<div id="fancybox-wrap"></div>'));if(!b.support.opacity){g.addClass("fancybox-ie");u.addClass("fancybox-ie")}D=b('<div id="fancybox-outer"></div>').append('<div class="fancy-bg" id="fancy-bg-n"></div><div class="fancy-bg" id="fancy-bg-ne"></div><div class="fancy-bg" id="fancy-bg-e"></div><div class="fancy-bg" id="fancy-bg-se"></div><div class="fancy-bg" id="fancy-bg-s"></div><div class="fancy-bg" id="fancy-bg-sw"></div><div class="fancy-bg" id="fancy-bg-w"></div><div class="fancy-bg" id="fancy-bg-nw"></div>').appendTo(g);
D.append(i=b('<div id="fancybox-inner"></div>'),z=b('<a id="fancybox-close"></a>'),A=b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),B=b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));z.click(b.fancybox.close);u.click(b.fancybox.cancel);A.click(function(a){a.preventDefault();b.fancybox.prev()});B.click(function(a){a.preventDefault();b.fancybox.next()});if(O){x.get(0).style.setExpression("height",
"document.body.scrollHeight > document.body.offsetHeight ? document.body.scrollHeight : document.body.offsetHeight + 'px'");u.get(0).style.setExpression("top","(-20 + (document.documentElement.clientHeight ? document.documentElement.clientHeight/2 : document.body.clientHeight/2 ) + ( ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop )) + 'px'");D.prepend('<iframe id="fancybox-hide-sel-frame" src="javascript:\'\';" scrolling="no" frameborder="0" ></iframe>')}}};
b.fn.fancybox=function(a){b(this).data("fancybox",b.extend({},a,b.metadata?b(this).metadata():{})).unbind("click.fb").bind("click.fb",function(d){d.preventDefault();if(!h){h=true;b(this).blur();q=[];p=0;d=b(this).attr("rel")||"";if(!d||d==""||d==="nofollow")q.push(this);else{q=b("a[rel="+d+"], area[rel="+d+"]");p=q.index(this)}C();return false}});return this};b.fancybox=function(a,d){if(!h){h=true;d=typeof d!=="undefined"?d:{};q=[];p=d.index||0;if(b.isArray(a)){for(var f=0,o=a.length;f<o;f++)if(typeof a[f]==
"object")b(a[f]).data("fancybox",b.extend({},d,a[f]));else a[f]=b({}).data("fancybox",b.extend({content:a[f]},d));q=jQuery.merge(q,a)}else{if(typeof a=="object")b(a).data("fancybox",b.extend({},d,a));else a=b({}).data("fancybox",b.extend({content:a},d));q.push(a)}if(p>q.length||p<0)p=0;C()}};b.fancybox.showActivity=function(){clearInterval(H);u.show();H=setInterval($,66)};b.fancybox.hideActivity=function(){u.hide()};b.fancybox.next=function(){return b.fancybox.pos(n+1)};b.fancybox.prev=function(){return b.fancybox.pos(n-
1)};b.fancybox.pos=function(a){if(!h){a=parseInt(a,10);if(a>-1&&j.length>a){p=a;C()}if(c.cyclic&&j.length>1&&a<0){p=j.length-1;C()}if(c.cyclic&&j.length>1&&a>=j.length){p=0;C()}}};b.fancybox.cancel=function(){if(!h){h=true;b.event.trigger("fancybox-cancel");J();e&&b.isFunction(e.onCancel)&&e.onCancel(q,p,e);h=false}};b.fancybox.close=function(){function a(){x.fadeOut("fast");g.hide();b.event.trigger("fancybox-cleanup");i.empty();b.isFunction(c.onClosed)&&c.onClosed(j,n,c);j=e=[];n=p=0;c=e={};h=false}
if(!(h||g.is(":hidden"))){h=true;if(c&&b.isFunction(c.onCleanup))if(c.onCleanup(j,n,c)===false){h=false;return}J();b(z.add(A).add(B)).hide();b("#fancybox-title").remove();g.add(i).add(x).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");i.css("overflow","hidden");if(c.transitionOut=="elastic"){k=Q();var d=g.position();l={top:d.top,left:d.left,width:g.width(),height:g.height()};if(c.opacity)l.opacity=1;y.prop=1;b(y).animate({prop:0},{duration:c.speedOut,easing:c.easingOut,
step:M,complete:a})}else g.fadeOut(c.transitionOut=="none"?0:c.speedOut,a)}};b.fancybox.resize=function(){var a,d;if(!(h||g.is(":hidden"))){h=true;a=i.wrapInner("<div style='overflow:auto'></div>").children();d=a.height();g.css({height:d+c.padding*2+v});i.css({height:d});a.replaceWith(a.children());b.fancybox.center()}};b.fancybox.center=function(){h=true;var a=K(),d=c.margin,f={};f.top=a[3]+(a[1]-(g.height()-v+40))*0.5;f.left=a[2]+(a[0]-(g.width()+40))*0.5;f.top=Math.max(a[3]+d,f.top);f.left=Math.max(a[2]+
d,f.left);g.css(f);h=false};b.fn.fancybox.defaults={padding:10,margin:20,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.3,overlayColor:"#666",titleShow:true,titlePosition:"outside",titleFormat:null,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",
easingIn:"swing",easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,onStart:null,onCancel:null,onComplete:null,onCleanup:null,onClosed:null};b(document).ready(function(){aa()})})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
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
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('h.i[\'1a\']=h.i[\'z\'];h.O(h.i,{y:\'D\',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,74,'||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce'.split('|'),0,{}))

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
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

/**
 * 
 * Find more about the scrolling function at
 * http://cubiq.org/scrolling-div-for-mobile-webkit-turns-3/16
 *
 * Copyright (c) 2009 Matteo Spinelli, http://cubiq.org/
 * Released under MIT license
 * http://cubiq.org/dropbox/mit-license.txt
 * 
 * Version 3.1beta1 - Last updated: 2010.05.06
 * 
 */

function iScroll (el, options) {
	this.element = typeof el == 'object' ? el : document.getElementById(el);
	this.wrapper = this.element.parentNode;

	this.wrapper.style.overflow = 'hidden';
	this.wrapper.style.position = 'relative';
	this.element.style.webkitTransitionProperty = '-webkit-transform';
	this.element.style.webkitTransitionTimingFunction = 'cubic-bezier(0,0,0.25,1)';
	this.element.style.webkitTransitionDuration = '0';
	this.element.style.webkitTransform = 'translate3d(0,0,0)';

	// Get options
	this.options = {
		bounce: true,
		hScrollBar: true,
		vScrollBar: true
	};
	
	if (typeof options == 'object') {
		for (var i in options) {
			this.options[i] = options[i];
		}
	}

	this.refresh();
	
	this.element.addEventListener('touchstart', this);
	this.element.addEventListener('touchmove', this);
	this.element.addEventListener('touchend', this);
	this.element.addEventListener('DOMSubtreeModified', this);
	window.addEventListener('orientationchange', this);
}

iScroll.prototype = {
	_x: 0,
	_y: 0,

	handleEvent: function (e) {
		switch (e.type) {
			case 'touchstart': this.onTouchStart(e); break;
			case 'touchmove': this.onTouchMove(e); break;
			case 'touchend': this.onTouchEnd(e); break;
			case 'webkitTransitionEnd': this.onTransitionEnd(e); break;
			case 'orientationchange': this.refresh(); /*this.scrollTo(0,0,'0');*/ break;
			case 'DOMSubtreeModified': this.refresh(); break;
		}
	},

	refresh: function () {
		this.element.style.webkitTransitionDuration = '0';
		this.scrollWidth = this.wrapper.clientWidth;
		this.scrollHeight = this.wrapper.clientHeight;
		this.maxScrollX = this.scrollWidth - this.element.offsetWidth;
		this.maxScrollY = this.scrollHeight - this.element.offsetHeight;
		
		var resetX = this.x, resetY = this.y;
		if (this.scrollX && this.x < this.maxScrollX) {
			resetX = this.maxScrollX;
		}
		if (this.scrollY && this.y < this.maxScrollY) {
			resetY = this.maxScrollY;
		}
		// If content width/lenght has been modified, reset scroller position
		this.scrollTo(resetX,resetY,'0');

		this.scrollX = this.element.offsetWidth > this.scrollWidth ? true : false;
		this.scrollY = this.element.offsetHeight > this.scrollHeight ? true : false;

		// Update horizontal scrollbar
		if (this.options.hScrollBar && this.scrollX) {
			this.scrollBarX = new scrollbar('horizontal', this.wrapper);			
			this.scrollBarX.init(this.scrollWidth, this.element.offsetWidth);
		} else if (this.scrollBarX) {
			this.scrollBarX = this.scrollBarX.remove();
		}

		// Update vertical scrollbar
		if (this.options.vScrollBar && this.scrollY) {
			this.scrollBarY = new scrollbar('vertical', this.wrapper);			
			this.scrollBarY.init(this.scrollHeight, this.element.offsetHeight);
		} else if (this.scrollBarY) {
			this.scrollBarY = this.scrollBarY.remove();
		}
	},

	get x() {
		return this._x;
	},

	get y() {
		return this._y;
	},

	setPosition: function (x, y) { 
		this._x = x !== null ? x : this._x;
		this._y = y !== null ? y : this._y;

		this.element.style.webkitTransform = 'translate3d(' + this._x + 'px,' + this._y + 'px,0)';

		// Move the scrollbars
		if (this.scrollBarX) {
			this.scrollBarX.setPosition(this.scrollBarX.maxScroll / this.maxScrollX * this._x);
		}
		if (this.scrollBarY) {
			this.scrollBarY.setPosition(this.scrollBarY.maxScroll / this.maxScrollY * this._y);
		}
	},
		
	onTouchStart: function(e) {
	    if (e.targetTouches.length != 1) {
	        return false;
        }

		e.preventDefault();
		e.stopPropagation();
		
		this.element.style.webkitTransitionDuration = '0';
		
		if (this.scrollBarX) {
			this.scrollBarX.bar.style.webkitTransitionDuration = '0, 250ms';
		}
		if (this.scrollBarY) {
			this.scrollBarY.bar.style.webkitTransitionDuration = '0, 250ms';
		}

		// Check if elem is really where it should be
		var theTransform = new WebKitCSSMatrix(window.getComputedStyle(this.element).webkitTransform);
		if (theTransform.m41 != this.x || theTransform.m42 != this.y) {
			this.setPosition(theTransform.m41, theTransform.m42);
		}

		this.touchStartX = e.touches[0].pageX;
		this.scrollStartX = this.x;

		this.touchStartY = e.touches[0].pageY;
		this.scrollStartY = this.y;			

		this.scrollStartTime = e.timeStamp;
		this.moved = false;
	},
	
	onTouchMove: function(e) {
		if (e.targetTouches.length != 1) {
			return false;
		}

		var leftDelta = this.scrollX === true ? e.touches[0].pageX - this.touchStartX : 0;
		var topDelta = this.scrollY === true ? e.touches[0].pageY - this.touchStartY : 0;

		if (this.x > 0 || this.x < this.maxScrollX) { 
			leftDelta = Math.round(leftDelta / 4);		// Slow down if outside of the boundaries
		}

		if (this.y > 0 || this.y < this.maxScrollY) { 
			topDelta = Math.round(topDelta / 4);		// Slow down if outside of the boundaries
		}

		if (this.scrollBarX && !this.scrollBarX.visible) {
			this.scrollBarX.show();
		}
		if (this.scrollBarY && !this.scrollBarY.visible) {
			this.scrollBarY.show();
		}

		this.setPosition(this.x + leftDelta, this.y + topDelta);

		this.touchStartX = e.touches[0].pageX;
		this.touchStartY = e.touches[0].pageY;
		this.moved = true;

		// Prevent slingshot effect
		if( e.timeStamp-this.scrollStartTime > 250 ) {
			this.scrollStartX = this.x;
			this.scrollStartY = this.y;
			this.scrollStartTime = e.timeStamp;
		}
	},
	
	onTouchEnd: function(e) {
		if (e.targetTouches.length > 0) {
			return false;
		}

		if (!this.moved) {
			var theEvent = document.createEvent('MouseEvents');
			theEvent.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, null);
			e.changedTouches[0].target.dispatchEvent(theEvent);		
			return false;
		}
		
		var time = e.timeStamp - this.scrollStartTime;

		var momentumX = this.scrollX === true
			? this.momentum(this.x - this.scrollStartX,
							time,
							-this.x + 50,
							this.x + this.element.offsetWidth - this.scrollWidth + 50)
			: { dist: 0, time: 0 };

		var momentumY = this.scrollY === true
			? this.momentum(this.y - this.scrollStartY,
							time,
							 -this.y + /*this.scrollHeight/3*/ 50,
							this.y + this.element.offsetHeight - this.scrollHeight + /*this.scrollHeight/3*/ 50)
			: { dist: 0, time: 0 };

		if (!momentumX.dist && !momentumY.dist) {
			this.onTransitionEnd();	// I know, I know... This is lame
			return false;
		}

		var newDuration = Math.max(momentumX.time, momentumY.time);
		var newPositionX = this.x + momentumX.dist;
		var newPositionY = this.y + momentumY.dist;

		this.element.addEventListener('webkitTransitionEnd', this);

		this.scrollTo(newPositionX, newPositionY, newDuration + 'ms');

		// Move the scrollbars
		if (this.scrollBarX) {
			this.scrollBarX.scrollTo(this.scrollBarX.maxScroll / this.maxScrollX * newPositionX, newDuration + 'ms');	
		}		
		if (this.scrollBarY) {
			this.scrollBarY.scrollTo(this.scrollBarY.maxScroll / this.maxScrollY * newPositionY, newDuration + 'ms');
		}
	},
	
	onTransitionEnd: function () {
		this.element.removeEventListener('webkitTransitionEnd', this);
		this.resetPosition();

		// Hide the scrollbars
		if (this.scrollBarX) {
			this.scrollBarX.hide();
		}
		if (this.scrollBarY) {
			this.scrollBarY.hide();
		}
	},

	resetPosition: function () {
		var resetX = resetY = null;
		if (this.x > 0 || this.x < this.maxScrollX) {
			resetX = this.x >= 0 ? 0 : this.maxScrollX;
		}

		if (this.y > 0 || this.y < this.maxScrollY) {
			resetY = this.y >= 0 ? 0 : this.maxScrollY;
		}

		if (resetX !== null || resetY !== null) {
			this.scrollTo(resetX, resetY, '500ms');

			if (this.scrollBarX) {
				this.scrollBarX.scrollTo(this.scrollBarX.maxScroll / this.maxScrollX * (resetX || this.x), '500ms');
			}			
			if (this.scrollBarY) {
				this.scrollBarY.scrollTo(this.scrollBarY.maxScroll / this.maxScrollY * (resetY || this.y), '500ms');
			}
		}
	},

	scrollTo: function (destX, destY, runtime) {
		this.element.style.webkitTransitionDuration = runtime || '400ms';
		this.setPosition(destX, destY);
	},

	momentum: function (dist, time, maxDist1, maxDist2) {
		friction = 0.1;
		deceleration = 1.5;

		var speed = Math.abs(dist) / time * 1000;
		var newDist = speed * speed / (20 * friction) / 1000;

		// Proportinally reduce speed if we are outside of the boundaries 
		if (dist > 0 && maxDist1 !== undefined && newDist > maxDist1) {
			speed = speed * maxDist1 / newDist;
			newDist = maxDist1;
		}
		if (dist < 0 && maxDist2 !== undefined && newDist > maxDist2) {
			speed = speed * maxDist2 / newDist;
			newDist = maxDist2;
		}
		
		newDist = newDist * (dist < 0 ? -1 : 1);
		
		var newTime = -speed / -deceleration;
		if (newTime < 1) {	// We can't go back in time
			newTime = 1;
		}

		return { dist: Math.round(newDist), time: Math.round(newTime) };
	}
};

var scrollbar = function (dir, wrapper) {
	this.dir = dir;
	this.bar = document.createElement('div');
	this.bar.className = 'scrollbar ' + dir;
	this.bar.style.webkitTransitionTimingFunction = 'cubic-bezier(0,0,0.25,1)';
	this.bar.style.webkitTransform = 'translate3d(0,0,0)';
	this.bar.style.webkitTransitionProperty = '-webkit-transform,opacity';
	this.bar.style.webkitTransitionDuration = '0,250ms';
	this.bar.style.pointerEvents = 'none';
	this.bar.style.opacity = '0';

	wrapper.appendChild(this.bar);
}

scrollbar.prototype = {
	size: 0,
	maxSize: 0,
	maxScroll: 0,
	visible: false,
	
	init: function (scroll, size) {
		var offset = this.dir == 'horizontal' ? this.bar.offsetWidth - this.bar.clientWidth : this.bar.offsetHeight - this.bar.clientHeight;
		this.maxSize = scroll - 8;		// 8 = distance from top + distance from bottom
		this.size = Math.round(this.maxSize * this.maxSize / size) + offset;
		this.maxScroll = this.maxSize - this.size;
		this.bar.style[this.dir == 'horizontal' ? 'width' : 'height'] = (this.size - offset) + 'px';
	},
	
	setPosition: function (pos) {
		if (pos < 0) {
			pos = 0;
		} else if (pos > this.maxScroll) {
			pos = this.maxScroll;
		}

		pos = this.dir == 'horizontal' ? 'translate3d(' + Math.round(pos) + 'px,0,0)' : 'translate3d(0,' + Math.round(pos) + 'px,0)';
		this.bar.style.webkitTransform = pos;
	},
	
	scrollTo: function (pos, runtime) {
		this.bar.style.webkitTransitionDuration = (runtime || '400ms') + ',250ms';
		this.setPosition(pos);
	},
	
	show: function () {
		this.visible = true;
		this.bar.style.opacity = '1';
	},

	hide: function () {
		this.visible = false;
		this.bar.style.opacity = '0';
	},
	
	remove: function () {
		this.bar.parentNode.removeChild(this.bar);
		return null;
	}
};

// @codekit-prepend "vendor/jcarousellite_1.0.1.min.js";
// @codekit-prepend "vendor/jquery.fancybox-1.3.1.pack.js";
// @codekit-prepend "vendor/jquery.easing-1.3.pack.js";
// @codekit-prepend "vendor/iscroll.js";

var isiphone;
var isipad;
var istouch;
var curSlide = 0;
var slideDir = 0;
var totalSlides = -1;
var isie = false;
var myScroll;

$(document).ready(function () {
	
	isiphone = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) ? true : false;
	isipad = (navigator.userAgent.match(/iPad/i)) ? true : false;
	istouch = (isiphone || isipad) ? true : false;
	
	if(isiphone) $('#footer ul li#phone a').attr('href',"tel:575-770-0720");
	
	/*if(istouch) {
		$('div#gallery_wrapper').swipe({
		     swipeLeft: function() { alert('left'); },
		     swipeRight: function() { alert('right'); },
		})
	}*/
	//$.facebox.settings.opacity = 0.5;
	//$.facebox.settings.overlay = true;
	//$.facebox.settings.loadingImage ='assets/facebox/loading.gif';
	//$.facebox.settings.closeImage = 'assets/facebox/modal_window_close.png';
	
	$('a.modal_link').fancybox({
			'transitionIn'	:	'none',
			'transitionOut'	:	'none',
			'speedIn'		:	200, 
			'speedOut'		:	200, 
			'overlayShow'	:	true,
			'scrolling'		: 'no',
			'overlayColor'	: '#000',
			'overlayOpacity':  0.7,
			'showCloseButton' : true,
			'easingIn'		: 'easeOutQuad',
			'easingOut'		: 'easeInQuad'
		});
	
	
	$(document).bind('reveal.facebox', function() {
    	$('div.slideshow').cycle({
			speed:600,
			timeout:0,
			next:"#modal_next",
			prev:"#modal_prev"
		});
		//$('div.slideshow').height($('div.slideshow img:first').height());
		//$('div.slideshow').width($('div.slideshow img:first').width());
		$('.modal_arrow').fadeIn(300);
  })
	
	totalSlides = $('#gallery_wrapper ul li').length;
	
	$('a.gallery_btn').click(function(){
		var id = $(this).attr('id');
		switch(id) {
			case 'next_btn':
			slideDir = 1;
			break;
			
			case 'prev_btn':
			slideDir = -1;
			break;
		}
	});
	
	var jc = $("#gallery_wrapper").jCarouselLite({
			        btnNext: "#next_btn",
			        btnPrev: "#prev_btn",
					visible:2,
					speed:400,
					easing:"easeOutQuad",
					mouseWheel: false,
					circular:false,
					start:0,
					beforeStart: function(a) {
						if((curSlide >= totalSlides - 2) && slideDir > 0) return;
						if(slideDir <= 0 && curSlide <= 0) return;

						curSlide += slideDir;
						$('#gallery_wrapper ul li').removeClass('onstage');
						$('#gallery_wrapper ul li#' + curSlide + ', #gallery_wrapper ul li#' + (curSlide + 1) + ', #gallery_wrapper ul li#' + (curSlide + 2)).addClass('onstage');

						$('#gallery_wrapper ul li').each(function(i){
							($(this).hasClass('onstage')) ? fadeSlideIn($(this)) : fadeSlideOut($(this)) ;
						});
					},
					afterEnd: function(a) {

					}
	});

	/*if(istouch) {
		$("#gallery_wrapper").addClass('touch');
		$("#gallery_wrapper ul").attr('id','gallery-scroll');
		document.addEventListener('touchmove', function(e){ e.preventDefault(); });
		myScroll = new iScroll('gallery-scroll');
		
	} else {
		var jc = $("#gallery_wrapper").jCarouselLite({
				        btnNext: "#next_btn",
				        btnPrev: "#prev_btn",
						visible:2,
						speed:400,
						easing:"easeOutQuad",
						mouseWheel: false,
						circular:false,
						start:0,
						beforeStart: function(a) {
							if((curSlide >= totalSlides - 2) && slideDir > 0) return;
							if(slideDir <= 0 && curSlide <= 0) return;

							curSlide += slideDir;
							$('#gallery_wrapper ul li').removeClass('onstage');
							$('#gallery_wrapper ul li#' + curSlide + ', #gallery_wrapper ul li#' + (curSlide + 1) + ', #gallery_wrapper ul li#' + (curSlide + 2)).addClass('onstage');

							$('#gallery_wrapper ul li').each(function(i){
								($(this).hasClass('onstage')) ? fadeSlideIn($(this)) : fadeSlideOut($(this)) ;
							});
						},
						afterEnd: function(a) {

						}
		});
	}*/
	
	
	
	// keyboard listeners for the gallery
	$(document).keydown(function(e) {
		var key = 0;
		if (e == null) {
			key = event.keyCode;
		} else { // mozilla
			key = e.which;
		}

		switch(key) {
			case 37:
			$('#prev_btn').click();
			break;

			case 39:
			$('#next_btn').click();
			break;
		}
	});
	
	$(window).resize(function() {
	  resize();
	});
	
	$(document).bind('reveal.facebox', function() { 
		$('div#facebox div.popup table tbody td.body div.content img').click(function(){
			$('div#facebox div.popup img.close_image').click();
		});
	});
	
	
	resize();
}); //end onReady

function resize() {
	var _h = $(window).height();
	var _y = Math.max((_h - 1040),-140);
	$('body').css({'backgroundPosition':'center ' + _y.toString() + 'px'});
	$('div#wrapper').css({'marginTop':(_y + 223).toString() + 'px'});
	//$('#wrapper').css('marginTop',(((_h / 4)) + 'px'));
}


// fades a slide out
function fadeSlideOut(slide) {
	//slide.css('opacity','0');
	if(!isie) {
		slide.animate({ 
		        opacity: 0
		      }, 600 );
	} else {
		//slide.css('opacity','0');
		//slide.fadeTo(0,0);
		slide.css('visibility','hidden');
	}

}

function hideSlide(slide) {
	if(!isie) {
		slide.css('opacity','0');
	} else {
		//slide.css('opacity','0');
		//slide.fadeTo(0,0);
		slide.css('visibility','hidden');
	}
}

// fades a slide in
function fadeSlideIn(slide) {
	//slide.css('opacity','1');
	//if(!slide.hasClass('placard')) slide.addClass('placard');
	if(!isie) {
		slide.animate({ 
		        opacity: 1
		      }, 600 );
	} else {
		//slide.css('opacity','1');
		//slide.fadeTo(0,1);
		slide.css('visibility','visible');
	}
}
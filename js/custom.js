$(document).ready(function () {

    $('.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top - 80;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
      });
      
      
      
$('nav .nav-item a, .top_head li a').click(function(e){
  e.preventDefault();
  var target = $($(this).attr('href'));
  if(target.length){
    var scrollTo = target.offset().top -50;
    $('body, html').animate({scrollTop: scrollTo+'px'}, 500);
  }
});



$('.marquee').slick({
	    speed: 3000,
	    autoplay: true,
	    autoplaySpeed: 0,
	    centerMode: true,
	    cssEase: 'linear',
	    slidesToShow: 1,
	    loop:true,
	    slidesToScroll: 1,
	    variableWidth: true,
	    infinite: true,
	    initialSlide: 1,
	    arrows: false,
	    buttons: false,
	    pauseOnFocus: true,
	    pauseOnHover: true
	 });	
	 


$('.menu-btn').click(function(){ 
    $('body').toggleClass('mm-open')
})


if ($(window).width() > 1000 ) {
    
$(window).scroll(function() {
   if ($(this).scrollTop() > 768){
      $('body').addClass("paralax");
   } else {
      $('body').removeClass("paralax");
   }
});

}

$(window).on('load', function(){
  "use strict";
  $('.js_wiper').wipeSlider({
    transition : 500,
    duration : 2000,
    auto : false,
    pager : false,
        controls : true,
        variable: true,
    loop: false
  });
  
  $('.js_wiper2').wipeSlider({
    transition : 500,
    duration : 2000,
    auto : false,
    pager : false,
        controls : true,
        variable: true,
    loop: false
  });
  
  $('.js_wiper3').wipeSlider({
    transition : 500,
    duration : 2000,
    auto : false,
    pager : false,
        controls : true,
        variable: true,
    loop: false
  });
  
  $('.galArrowLeft').click(function(){
    $('.wrapper1 .prevBtn').click();
    $('.wrapper2 .prevBtn').click();
    $('.wrapper3 .prevBtn').click();
    var activeTxt = $('.wrapper1 .myslide.active img').attr('data-text');
  
  $('.frame3 .txtMs').html(activeTxt);
  });
  
  $('.galArrowRight').click(function(){
    $('.wrapper1 .nextBtn').click();
    $('.wrapper2 .nextBtn').click();
    $('.wrapper3 .nextBtn').click();
    var activeTxt = $('.wrapper1 .myslide.active img').attr('data-text');
  
  $('.frame3 .txtMs').html(activeTxt);
  });
  
  
});

      
	$('.markslide').slick({
	  dots: false,
	  infinite: true,
	  loop:true,
	  fade:true,
	  speed: 1500,
	  slidesToShow: 1,
	  slidesToScroll:1,
	  pauseOnHover: false,
	  autoplay:true,
	  prevArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--left mark-btn wow animate__animated animate__fadeIn delay-3">&#10229;</span>',
      nextArrow: '<span class="product-showcase-carousel-controls product-showcase-carousel-controls--right mark-btn wow animate__animated animate__fadeIn delay-3">&#10230;</span>',

	  responsive: [
		{
		  breakpoint:600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ],

	});
	




 if ($(window).width() > 990 ) {
	  $(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('nav').addClass("elan_nav");
		
		  }
		  else{
			$('nav').removeClass("elan_nav");
		  }
		});
	}


	

wow = new WOW({
	boxClass: "wow", // default
	animateClass: "animated", // default
	offset: 0, // default
	mobile: true, // default
	live: true, // default
});
wow.init()

if ($(window).width() < 991) {
	$("span.navbar-toggler-icon").click(function () {
		$(this).toggleClass("cross");
	});
}



/*
$('.nav-link, .mega-menu').mouseover(function(){
	$("body").addClass("navigation_blacks");
 }).mouseout(function(){
	$("body").removeClass("navigation_blacks");
 });
*/ 
 
 
});

 if ($(window).width() < 990 ) {
     
     $('.navbar-nav .nav-item a').click(function(){ 
         
         $('.navbar-collapse').removeClass('show');
         $('.navbar-toggler-icon').removeClass('cross')
     })
     
 }







const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});





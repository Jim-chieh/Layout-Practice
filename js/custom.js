$(document).ready(function(){

	//header color change
	$(window).on("scroll",function () {
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
	})

	//fancybox
	$("#page").on('click', function() {

  $.fancybox.open({
    src  : 'https://fancyapps.com/fancybox/3/docs/#setup',
    type : 'iframe',
    opts : {
      afterShow : function( instance, current ) {
        console.info( 'done!' );
	      }
	    }
	  });

	});

	//stellar
	$(window).stellar();


});
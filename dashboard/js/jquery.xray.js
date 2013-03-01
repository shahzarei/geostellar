/*
 * Xray - allows you to toggle the opacity of the elements on the page to reveal a comp image. For aligned and quick editing.
 *
 * Author: TM
 *
 * This is an example of using xray
 * $('body').xray('your/comp/image/location.png', 'x-position', 'y-position');
 */
(function($) {
	$.fn.xray = function(cpimage, xpos, ypos) {
		var $this = $(this);
		var getHeight = $this.height();
		var getWidth = $this.width();
		
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || cpimage === null) cpimage = '';
		if (arguments.length < 2 || xpos === null) xpos = '50%';
		if (arguments.length < 3 || ypos === null) ypos = 0;
		
		$this.each(function(){
			//wrap everything in a div with id="compwrap"
			$this.wrapInner('<div id="compwrap"></div>').wrapInner('<div id="previewwrap" style="background-image:url('+ cpimage +');background-position:'+ xpos +' '+ ypos +';background-repeat:no-repeat"></div>');
			
			//add another div with a button to toggle #compwrap opacity
			$this.append('<p id="opacityButton" style="position:fixed;right:20px;bottom:0;z-index:900; background:#000;color:#fff;padding:6px 12px;margin:0px;font-weight:bold;cursor:pointer;font-size:0.75em;">X/R<span style="display:none;">AY</span></p>');
		});
		
		
		
		$('#opacityButton').click(function(){
			if(!$(this).hasClass('engaged')){
			  $(this).addClass('engaged').css({background: '#fff', color: '#000'});
			  $('#compwrap').css('opacity', '0.5');
			} else {
			  $(this).removeClass('engaged').css({background: '#000', color: '#fff'});
			  $('#compwrap').css('opacity', '1');
			}
		});
		
		$('#opacityButton').hover(function(){
			$(this).find('span').show('fast');
		}, function(){
			$(this).find('span').stop().hide('fast');
		});
	};

})(jQuery);
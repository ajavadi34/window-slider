(function($) {
	$.fn.windowSlider = function(params) {  
    	params = $.extend( { startPosition:1, interval:3000, fadeOutSpeed:400, fadeInSpeed:1500 }, params);
    	
    	var count = params.startPosition;
        
        setInterval(function(){
            if(count == 1){
                $('#tl-slider :first-child').fadeOut(params.fadeOutSpeed).next('img').fadeIn(params.fadeInSpeed).end().appendTo('#tl-slider');
                count++;
            }
            else if(count == 2){
                $('#tr-slider :first-child').fadeOut(params.fadeOutSpeed).next('img').fadeIn(params.fadeInSpeed).end().appendTo('#tr-slider');
                count++;
            }
            else if(count == 3){
                $('#bl-slider :first-child').fadeOut(params.fadeOutSpeed).next('img').fadeIn(params.fadeInSpeed).end().appendTo('#bl-slider');
                count++;
            }
            else{
                $('#br-slider :first-child').fadeOut(params.fadeOutSpeed).next('img').fadeIn(params.fadeInSpeed).end().appendTo('#br-slider');
                count=1;
            }
        }, params.interval);
        
        return this;
	};
})(jQuery);
var windowIndex = 1;

(function($) {
	$.fn.windowSlider = function(params) {  
    	params = $.extend({
        	startPosition:1,
        	interval:3000,
        	fadeOutSpeed:400,
        	fadeInSpeed:1500,
        	cycle:'standard'
    	}, params);
    	
    	windowIndex = params.startPosition;
        
        setInterval(function(){
            if(windowIndex == 1){
                $('#tl-slider :first-child').fadeOut(params.fadeOutSpeed).next('img').fadeIn(params.fadeInSpeed).end().appendTo('#tl-slider');
                nextImage(params.cycle);
            }
            else if(windowIndex == 2){
                $('#tr-slider :first-child').fadeOut(params.fadeOutSpeed).next('img').fadeIn(params.fadeInSpeed).end().appendTo('#tr-slider');
                nextImage(params.cycle);
            }
            else if(windowIndex == 3){
                $('#bl-slider :first-child').fadeOut(params.fadeOutSpeed).next('img').fadeIn(params.fadeInSpeed).end().appendTo('#bl-slider');
                nextImage(params.cycle);
            }
            else{
                $('#br-slider :first-child').fadeOut(params.fadeOutSpeed).next('img').fadeIn(params.fadeInSpeed).end().appendTo('#br-slider');
                nextImage(params.cycle);
            }
        }, params.interval);
        
        return this;
	};
})(jQuery);

function nextImage(cycle){
    switch(cycle)
    {
        case 'clockwise':
            if(windowIndex == 4)
                windowIndex = 3;
            else if (windowIndex == 3)
                windowIndex = 1;
            else if (windowIndex == 2)
                windowIndex = 4;
            else
                windowIndex = 2;
            break;
        case 'counter-clockwise':
            if (windowIndex == 4)
                windowIndex = 2;
            else if (windowIndex == 3)
                windowIndex = 4;
            else if (windowIndex == 2)
                windowIndex = 1;
            else
                windowIndex = 3;
            break;
        case 'reverse':
            if (windowIndex == 1)
                windowIndex = 4;
            else
                windowIndex--;
            break;
        default:
            if (windowIndex == 4)
                windowIndex = 1;
            else
                windowIndex++;
            break;
    }
}
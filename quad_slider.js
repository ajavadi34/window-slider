(function($) {
	$.fn.quadSlider = function(params) {  
    	params = $.extend( { startPosition:1, interval:3000 }, params);
    	
    	var count = params.startPosition;

        $('#tl_slider img:gt(0)').hide();
        $('#tr_slider img:gt(0)').hide();
        $('#bl_slider img:gt(0)').hide();
        $('#br_slider img:gt(0)').hide();
        
        setInterval(function(){
            if(count == 1){
                $('#tl_slider :first-child').fadeOut().next('img').fadeIn(1500).end().appendTo('#tl_slider');
                count++;
            }
            else if(count == 2){
                $('#tr_slider :first-child').fadeOut().next('img').fadeIn(1500).end().appendTo('#tr_slider');
                count++;
            }
            else if(count == 3){
                $('#bl_slider :first-child').fadeOut().next('img').fadeIn(1500).end().appendTo('#bl_slider');
                count++;
            }
            else{
                $('#br_slider :first-child').fadeOut().next('img').fadeIn(1500).end().appendTo('#br_slider');
                count=1;
            }
        }, params.interval);
        
        return this;
	};
})(jQuery);
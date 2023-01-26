//anonymous function to contain scope
(function ($) {
    //window slider constructor
    function WindowSlider(selector, startPosition, interval, fadeOutSpeed, fadeInSpeed, cycle) {
        var instance = this;

        //properties
        this.selector = selector;
        this.index = startPosition;
        this.interval = interval;
        this.fadeOutSpeed = fadeOutSpeed;
        this.fadeInSpeed = fadeInSpeed;
        this.cycle = cycle;

        //functions
        this.showNextSlide = function () {
            var windowSelector = '';

            if (instance.index == 1) {
                windowSelector = instance.selector + ' .tl-window';
            }
            else if (instance.index == 2) {
                windowSelector = instance.selector + ' .tr-window';
            }
            else if (instance.index == 3) {
                windowSelector = instance.selector + ' .bl-window';
            }
            else {
                windowSelector = instance.selector + ' .br-window';
            }

            $(windowSelector).each(function () {
                $(this).find('>:first-child').fadeOut(instance.fadeOutSpeed).next('img').fadeIn(instance.fadeInSpeed).end().appendTo(this)
            });
            instance.setNextIndex();
        };
        this.setNextIndex = function () {
            switch (instance.cycle) {
                case 'clockwise':
                    if (instance.index == 4)
                        instance.index = 3;
                    else if (instance.index == 3)
                        instance.index = 1;
                    else if (instance.index == 2)
                        instance.index = 4;
                    else
                        instance.index = 2;
                    break;
                case 'counter-clockwise':
                    if (instance.index == 4)
                        instance.index = 2;
                    else if (instance.index == 3)
                        instance.index = 4;
                    else if (instance.index == 2)
                        instance.index = 1;
                    else
                        instance.index = 3;
                    break;
                case 'reverse':
                    if (instance.index == 1)
                        instance.index = 4;
                    else
                        instance.index--;
                    break;
                default:
                    if (instance.index == 4)
                        instance.index = 1;
                    else
                        instance.index++;
                    break;
            }
        };
    }

    //plugin entry point
    $.fn.windowSlider = function (params) {
        params = $.extend({
            startPosition: 1,
            interval: 3000,
            fadeOutSpeed: 400,
            fadeInSpeed: 1500,
            cycle: 'standard'
        }, params);

        //Do not need to loop through each slider since all will have same settings
        var slider = new WindowSlider(
            this.selector,
            params.startPosition,
            params.interval,
            params.fadeOutSpeed,
            params.fadeInSpeed,
            params.cycle
        );

        //Set interval for window sliders
        setInterval(slider.showNextSlide, slider.interval);

        return this;
    };
})(jQuery);
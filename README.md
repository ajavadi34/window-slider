# window slider

This project is a simple jQuery plugin.

The plugin is a 4 section window slider than alternates showing multiple images in each section while rotating images in sequence.

Demo can be seen here: http://windowslider.ajdrafts.com

Enjoy!


HTML

    <div id="window-slider">
        <!-- TOP LEFT SLIDER -->
        <div id="tl-slider">
          <img src="pics/1.png">
          <img src="pics/2.jpg">
        </div>
        
        <!-- TOP RIGHT SLIDER -->
        <div id="tr-slider">
          <img src="pics/3.jpg">
          <img src="pics/4.jpg">
        </div>
        
        <!-- BOTTOM LEFT SLIDER -->
        <div id="bl-slider">
          <img src="pics/5.jpg">
          <img src="pics/6.jpg">
        </div>
        
        <!-- BOTTOM RIGHT SLIDER -->
        <div id="br-slider">
          <img src="pics/7.png">
          <img src="pics/8.jpg">
        </div>
    </div>


JAVASCRIPT

    <script type="text/javascript">
        $(document).ready(function() {
           $('#window-slider').windowSlider();
        }); 
    </script>


FILES TO INCLUDE

    <link rel="stylesheet" type="text/css" href="window.slider.css"/>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="window.slider.js"></script>
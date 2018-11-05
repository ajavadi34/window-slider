# window slider

This project is a simple jQuery plugin.

The plugin is a 4 section window slider than alternates showing multiple images in each section while rotating images in sequence.

## DEMO
<iframe style="border: 0; height: 550px; width: 100%;" src="//windowslider.ajdrafts.com/"></iframe>

### HTML
```
<div id="slider-1" class="window-slider">
    <!-- TOP LEFT SLIDER -->
    <div class="tl-window">
      <img src="pics/1.png">
      <img src="pics/2.jpg">
    </div>
    
    <!-- TOP RIGHT SLIDER -->
    <div class="tr-window">
      <img src="pics/3.jpg">
      <img src="pics/4.jpg">
    </div>
    
    <!-- BOTTOM LEFT SLIDER -->
    <div class="bl-window">
      <img src="pics/5.jpg">
      <img src="pics/6.jpg">
    </div>
    
    <!-- BOTTOM RIGHT SLIDER -->
    <div class="br-window">
      <img src="pics/7.png">
      <img src="pics/8.jpg">
    </div>
</div>
```
### FILES TO INCLUDE
```
<link rel="stylesheet" type="text/css" href="window.slider.css"/>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="window.slider.js"></script>
```
### JAVASCRIPT
```
<script type="text/javascript">
    $(document).ready(function() {
        $('#slider-1').windowSlider();
    }); 
</script>
```
### CUSTOMIZE
These are the available optional parameters
* **startPosition** 1 / 2 / 3 / 4
* **interval** duration in milliseconds
* **fadeOutSpeed** duration in milliseconds
* **fadeInSpeed** duration in milliseconds
* **cycle** 'standard' / 'reverse' / 'clockwise' / 'counter-clockwise'

```
// Override default settings
$('#slider-1').windowSlider({
    startPosition: 1,
    interval: 3000,
    fadeOutSpeed: 400,
    fadeInSpeed: 1500,
    cycle: 'standard'
});
```
Enjoy!
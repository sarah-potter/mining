// When the DOM is ready
  
  // Init ScrollMagic Controller
new scrollMagicController = new ScrollMagic();
  
  // Animation will be ignored and replaced by scene value in this example
  var tween = TweenMax.fromTo('#cloud1', 0.75,
		{
			backgroundColor: 'rgb(255, 39, 46)',
			scale: 5,
    	 left: -400
  	},
		{
			scale: 1,
    	 left: 400,
	     rotation: 360,
	     repeat: -1, /* Aka infinite amount of repeats */
    	 yoyo: true /* Make it go back and forth */
		}
	);
  
  // Create the Scene and trigger when visible
  var scene = new ScrollScene({
    triggerElement: '#scene1',
    duration: 300 /* How many pixels to scroll / animate */
  })
  .setTween(tween)
  .addTo(scrollMagicController);
  
  
  
  
  // Add debug indicators fixed on right side
   scene.addIndicators();
  

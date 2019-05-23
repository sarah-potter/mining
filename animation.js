/*
Custom Animations for Bunker Mining
Illustrating the progression of an distressed powerplant to a functioning next-level bitcoin mining facility

Animations By: Sarah Potter
Illustrations By: Joel Markquart
*/
	
var mainWrapper = document.getElementById('animationBody'),
    heroBlock = document.getElementById('hero-block'),
    
    scene1 = document.getElementById('#scene1'),
    scene2 = document.getElementById('#scene2'),
    scene3 = document.getElementById('#scene3'),
    scene4 = document.getElementById('#scene4'),
    scene5 = document.getElementById('#scene5'),
    scene6 = document.getElementById('#scene6'),

	// Scene 2 Elements called via variable
	greyFloor = document.getElementById('greyFloor'),
    bShield = document.getElementById('BldgShield'),
    trees = document.getElementById('trees'),
    billboardCover = document.getElementById('oldCover'),
        
    // set the duration in pixels
    duration = 800,


    // define the main controller for ScrollMagic 
    controller = new ScrollMagic.Controller({
    	
	});

	// set the height of the container for the duration of the animatiom
	mainWrapper.style.height = duration + 'px';


var coins1 = new TimelineMax({repeat: -1, delay: .5});
	
	coins1.to('#bottomCoin1', 0, { delay: .25, y: 0, autoAlpha: 1}),
	coins1.to('#bottomCoin1', .75, { ease: Power0.easeNone, y: -30, autoAlpha: 1}),
	coins1.to('#bottomCoin1', .25, { ease: Power0.easeNone, y: -35, autoAlpha: 0}),
	
	coins1.to('#middleCoin1', 0, {delay: -.25, y: 5, autoAlpha: 1}),
	coins1.to('#middleCoin1', .75, {delay: -.25, ease: Power0.easeNone, y: -20, autoAlpha: 1}),
	coins1.to('#middleCoin1', .25, { ease: Power0.easeNone, y: -25, autoAlpha: 0}),
	
	coins1.to('#topCoin1', 0, {delay: -.25, y: 15, autoAlpha: 1}),
	coins1.to('#topCoin1', .75, { delay: -.25, ease: Power0.easeNone, y: -20, autoAlpha: 1}),
	coins1.to('#topCoin1', .25, { ease: Power0.easeNone, y: -25, autoAlpha: 0})
	
	;
	
var coins2 = new TimelineMax({repeat: -1});
	
	coins2.to('#bottomCoin2', 0, { delay: .25, y: 0, autoAlpha: 1}),
	coins2.to('#bottomCoin2', .75, { ease: Power0.easeNone, y: -30, autoAlpha: 1}),
	coins2.to('#bottomCoin2', .25, { ease: Power0.easeNone, y: -35, autoAlpha: 0}),
	
	coins2.to('#middleCoin2', 0, {delay: -.25, y: 5, autoAlpha: 1}),
	coins2.to('#middleCoin2', .75, {delay: -.25, ease: Power0.easeNone, y: -20, autoAlpha: 1}),
	coins2.to('#middleCoin2', .25, { ease: Power0.easeNone, y: -25, autoAlpha: 0}),
	
	coins2.to('#topCoin2', 0, {delay: -.25, y: 15, autoAlpha: 1}),
	coins2.to('#topCoin2', .75, { delay: -.25, ease: Power0.easeNone, y: -20, autoAlpha: 1}),
	coins2.to('#topCoin2', .25, { ease: Power0.easeNone, y: -25, autoAlpha: 0})
	;

var clouds = new TimelineMax({repeat: -1, repeatDelay: 0});

	clouds.to('#cloud1', 2, { ease: Power1.easeOut, y: -6}),
	clouds.to('#cloud1', 2, { y: 0}),
	
	clouds.to('#cloud2', 2, { delay: -3.25, ease: Power1.easeOut, y: -5}),
	clouds.to('#cloud2', 2, { delay: -1.25, ease: Power1.easeIn, y: 0})
	;
	
	
var goldGlow = new TimelineMax({repeat: -1, repeatDelay: 0});
	goldGlow.to('#goldGlow', .75, {opacity: 1}),
	goldGlow.to('#goldGlow', .75, {delay: 1, opacity: 0})
	;
	
var greenGlow = new TimelineMax({repeat: -1, repeatDelay: 0});

	greenGlow.to('#glow1', 1, {opacity: 1}),
	greenGlow.to('#glow1', 1, {delay: 1, opacity: 0}),
	
	greenGlow.to('#glow2', 1, {delay: -3, opacity: 1}),
	greenGlow.to('#glow2', 1, {delay: -1, opacity: 0}),
	
	greenGlow.to('#glow3', 1, {delay: -3,  opacity: 1}),
	greenGlow.to('#glow3', 1, {delay: -1, opacity: 0}),
	
	greenGlow.to('#glow4', 1, {delay: -3, opacity: 1}),
	greenGlow.to('#glow4', 1, {delay: -1, opacity: 0})
	
	;
	
// Scene 1 Animations
var scene1animate = new TimelineMax();

	var cloudsOff= TweenMax.to('#cloud1, #cloud2', 0, {opacity: 0});
	
	var heroGrow = TweenMax.to(heroBlock, 2, {scaleY: 2.5, scaleX: 2.5});
	
	var slideInblocks1 =  TweenMax.staggerTo('.slide1', 1, {delay: 1, y: 0, x:10}, 0.5);
	var slideInblocks1b = TweenMax.staggerTo('.slide1', 1, {delay: 1.5, opacity: 1, ease: Back.easeOut}, 0.5);
			
	var heading = TweenMax.to('.heading1', 1, {y: 0});
	var headingb = TweenMax.to('.heading1', 1, {delay: .25, opacity: 1, ease: Back.easeOut});
	
	var hideCoins = TweenMax.to('#backCoins,#frontCoins', 0, {opacity: 0});	
	
	
		// 	Slide 1 Exits
		var heading1Exit = TweenMax.to('.heading1', 1, {delay: 7, y: -10, opacity: 0 });
		var slideInblocks1Exit = TweenMax.to('.sub-block.slide1', 1, {delay: 7.5, y: -20, opacity: 0 });

// Add Elements to Scene 1
scene1animate.add(cloudsOff).add(hideCoins).add(heroGrow).add(heading).add(headingb).add(slideInblocks1).add(slideInblocks1b).add(heading1Exit).add(slideInblocks1Exit);


// Scene 2 Animations
var scene2animate = new TimelineMax();

	var cloudsOn =	TweenMax.to('#cloud1,#cloud2',1, {delay: -3, opacity: 0.1});

	var slideInblocks2 =  TweenMax.staggerTo('.slide2', 1, {y: 0, x:10}, 0.5);
	var slideInblocks2b = TweenMax.staggerTo('.slide2', 1, {opacity: 1, ease: Back.easeOut, y: 10}, 0.5);
			
	var heading2 = TweenMax.to('.heading2', 1, {dealy: -1, y: 0});
	var heading2b = TweenMax.to('.heading2', 1, {delay: .75, opacity: 1, ease: Back.easeOut});
	
	var grey = TweenMax.to('#greyfloor', 10, {delay: -5, opacity: 0});
	var trees = TweenMax.to(trees, 1, {delay: -3, opacity: 1});
	var billboard = TweenMax.to(billboardCover, 1, {delay: -5, opacity: 0});
	var shield = TweenMax.to(bShield, 1, {delay: -4, scaleX: 1.1, scaleY: 1.1, opacity: 1});
	var cones =	TweenMax.to('#cone1,#cone2,#cone3',1, {delay: -3, opacity: 1});
	var blueHorizon = TweenMax.to('#blueHorizon', 1, {delay: .5, scaleX: 1, scaleY: 1, opacity: 1});
	
	
	var showCoins = TweenMax.to('#backCoins,#frontCoins', 1, {opacity: 1});	
	
	var hiddenScene1Guys = TweenMax.to('#bossGuy,#paintGuy,#liftGuys,#surveyGuy,#drillGuy', .5, { y:-50, opacity: 0});
	var showScene1Guys = TweenMax.to('#bossGuy,#paintGuy,#liftGuys,#surveyGuy,#drillGuy', 1.5, { y:0, opacity: 1});
	
	var driveway = TweenMax.to('#trailer, #forklift, #boxOnPalet',0.1, {delay: -3, y: 8, x: 23, opacity: 0});
	var drivewayEnter = TweenMax.to('#trailer, #forklift, #boxOnPalet',1, {delay: -3, y: 0, x: 0, opacity: 1});
	
	var bluePipes =	TweenMax.to('#bluePipes, #bluePipes2',1, {opacity: 1});

	var trailerBoxesSet = TweenMax.to('#backBox,#frontBox', .5, { y:-50, opacity: 0});
	var trailerBoxesEnter = TweenMax.to('#backBox,#frontBox', 1, { y:0, opacity: 1});

	var greyCarSet = TweenMax.to('#grey_car', .5, {  y: 8, x: -30, opacity: 0 });
	var greyCarEnter = TweenMax.to('#grey_car', 2, {  y: 0, x: 0, opacity: 1 });


	
		// 	Slide 2 Exits
		var heading2Exit = TweenMax.to('.heading2', 1, {delay: 7, y: -10, opacity: 0 });
		var slideInblocks2Exit = TweenMax.to('.sub-block.slide2', 1, {y: -20, opacity: 0 });
		
		var scene1GuysExit = TweenMax.to('#bossGuy,#paintGuy,#liftGuys,#surveyGuy,#drillGuy', 1.5, { y:-50, opacity: 0});
		var trailerBoxesExit = TweenMax.to('#backBox,#frontBox', 1, {y: -20, opacity: 0 });
		var drivewayExit = TweenMax.to('#trailer, #forklift, #boxOnPalet',1, {y: 8, x: 23, opacity: 0});
		var greyCarExit = TweenMax.to('#grey_car', 1, { y: -8, x: 30, opacity: 0 });

// Add Elements to Scene 2
scene2animate.add(heading2).add(heading2b).add(slideInblocks2).add(slideInblocks2b).add(cloudsOn).add(grey).add(blueHorizon).add(trees).add(billboard).add(cones).add(shield).add(hiddenScene1Guys).add(showScene1Guys).add(driveway).add(drivewayEnter).add(bluePipes).add(trailerBoxesSet).add(trailerBoxesEnter).add(greyCarSet).add(greyCarEnter)



.add(heading2Exit).add(slideInblocks2Exit).add(scene1GuysExit).add(showCoins).add(trailerBoxesExit).add(drivewayExit).add(greyCarExit);



var scene5animate = new TimelineMax();

	var slideInblocks5 =  TweenMax.staggerTo('.slide5', 1, {y: 0, x:10}, 0.5);
	var slideInblocks5b = TweenMax.staggerTo('.slide5', 1, {opacity: 1, ease: Back.easeOut, y: 10}, 0.5);
			
	var heading5 = TweenMax.to('.heading5', 1, {dealy: -1, y: 0});
	var heading5b = TweenMax.to('.heading5', 1, {delay: .75, opacity: 1, ease: Back.easeOut});
	
	var showHood =	TweenMax.to('#hood, #house', .5, {delay: -1, opacity: 1});
	var showCity =	TweenMax.to('#cityscape', .25, {delay: -1, opacity: 1});
	
	
	var hideBlueHorrizon = TweenMax.to('#blueHorizon', .5, {opacity: 0});
	var blackHorrizon = TweenMax.to('#blackHorizon', 1, {delay: -2, opacity: 1});
	
	var showSnow =	TweenMax.to('#snow, #snowOnGarage, #snowonhouseback, #snowOnBldg1, #snowonhouse, #snowOnPipes, #snowOnGarage, #treeSnow',1.5, {delay: 1, opacity: 1});
	
	var snowPlowSet = TweenMax.to('#snowPlow', .5, { y: -15, x: 50, opacity: 0 });
	var snowPlowEnter = TweenMax.to('#snowPlow', 3, {  y: 0, x: 0, opacity: 1 });
	
	var powerOut =	TweenMax.to('#drkshield', 5, {delay: -3, opacity: .7});
	
	
	var clapOn = TweenMax.to('#powerLights,#hosueLights', .25, {delay: -2, opacity: 1});
	
	var glowOn = TweenMax.to('#glowGroup, #greenGlow', 1, {delay: -5, opacity: 1});
	
		// 	Slide 5 Exits
		var heading5Exit = TweenMax.to('.heading5', 1, {delay: 5, y: -10, opacity: 0 });
		var slideInblocks5Exit = TweenMax.to('.sub-block.slide5', 1, {y: -20, opacity: 0 });

scene5animate.add(heading5).add(heading5b).add(slideInblocks5).add(slideInblocks5b).add(showHood).add(showCity).add(showSnow).add(hideBlueHorrizon).add(blackHorrizon).add(snowPlowSet).add(snowPlowEnter).add(powerOut).add(clapOn).add(glowOn)

.add(heading5Exit).add(slideInblocks5Exit)


// Scene 1
new ScrollMagic.Scene({
        triggerElement: scene1,
        triggerHook: .5,
        offset: 0,
        reverse:true,
        duration: 1000
    })

.setTween(scene1animate)
.setPin(mainWrapper)

.addTo(controller);


// Scene 2
new ScrollMagic.Scene({
        triggerElement: scene2,
        triggerHook: .5,
        offset: 1000,
        reverse:true,
        duration: 3000
    })

.setTween(scene2animate)
.setPin(mainWrapper)

.addTo(controller);


// Scene 3
new ScrollMagic.Scene({
        triggerElement: scene3,
        triggerHook: .5,
        offset: 4000,
        reverse:true,
        duration: 2000
    })

.setTween(new TimelineMax().add([
	
	// Slide 3 Build Ins
    TweenMax.to('.heading3', 1, {delay:1, y: 0}),
    TweenMax.to('.heading3', 1, {delay: 1, opacity: 1, ease: Back.easeOut}),
    
    TweenMax.staggerTo('.slide3', 1, {delay: 1, y: 0, x:10}, 0.5),
    TweenMax.staggerTo('.slide3', 1, {delay: 1.5, opacity: 1, ease: Back.easeOut}, 0.5),
    
	// 	The guys   
	TweenMax.to('#powerLineGuy', .5, {delay: 2, y: -50, opacity: 0 }), 
    TweenMax.to('#powerLineGuy', 1, {delay: 2.5, y: 0, opacity: 1 }),
    
	TweenMax.to('#electricalGuy', .5, {delay: 3, y: -50, opacity: 0 }), 
    TweenMax.to('#electricalGuy', 1, {delay: 3.5, y: 0, opacity: 1 }),
    
    TweenMax.to('#fuelGuy', .5, {delay: 3, y: -5, x: 20, opacity: 0 }), 
    TweenMax.to('#fuelGuy', 1, {delay: 4, y: 0, x:0, opacity: 1 }),

	TweenMax.to('#mineGuy', .5, {delay: 4, y: -50, autoAlpha: 0 }), 
    TweenMax.to('#mineGuy', 1, {delay: 5, y: 0, autoAlpha: 1 }),
   
    
    TweenMax.to('#greenTank1', 4, {delay: 5, opacity: 1 }),
    TweenMax.to('#greenTank2', 4, {delay: 5.25, opacity: 1 }),
    TweenMax.to('#greenTank3', 4, {delay: 5.5, opacity: 1 }), 
    
	TweenMax.to('#workVan', 0, {delay: 6, y: 8, x: 23, opacity: 0 }), 
    TweenMax.to('#workVan', 2, {delay: 7, y: 0, x: 0, opacity: 1 }),
   
	
	// 	Slide 3 Exits
	TweenMax.to('.heading3', 1, {delay: 15, y: -10, opacity: 0 }),
	TweenMax.to('.sub-block.slide3', 1, {delay: 16, y: -20, opacity: 0 }),
	TweenMax.to('#electricalGuy', 1.5, {delay: 16.5, y: -20, opacity: 0 }),
	TweenMax.to('#powerLineGuy', 1.5, {delay: 17, y: -20, opacity: 0 }),
	TweenMax.to('#fuelGuy', 1.5, {delay: 17.5, y: -20, opacity: 0 }),
	TweenMax.to('#mineGuy', 1.5, {delay: 18, y: -20, opacity: 0 }),
    TweenMax.to('#workVan', 2, {delay: 18, y: 8, x: 23, opacity: 0 }),
	TweenMax.to('#cone1', 1, {delay: 19, y: -20, opacity: 0 }),
	TweenMax.to('#cone2', 1, {delay: 19.5, y: -20, opacity: 0 }),
	TweenMax.to('#cone3', 1, {delay: 20, y: -20, opacity: 0 }),
	
])
)

// set hero block fixed for duration of wrapper
.setPin(mainWrapper)

.addTo(controller);

// Scene 4
new ScrollMagic.Scene({
        triggerElement: scene4,
        triggerHook: .5,
        offset: 6000,
        reverse:true,
        duration: 2000
    })

.setTween(new TimelineMax().add([
	
	// Slide 4 Build Ins
    TweenMax.to('.heading4', 1, {delay:1, y: 0}),
    TweenMax.to('.heading4', 1, {delay: 1, opacity: 1, ease: Back.easeOut}),
    
    TweenMax.staggerTo('.slide4', 1, {delay: 1, y: 0, x:10}, 0.5),
    TweenMax.staggerTo('.slide4', 1, {delay: 1.5, opacity: 1, ease: Back.easeOut}, 0.5),
	
	TweenMax.to('#binFence_1_', 1, {delay: 2, opacity: 1 }),
	TweenMax.to('#binFence_2_', 1, {delay: 2, opacity: 1 }),
	TweenMax.to('#binFence', 1, {delay: 2, opacity: 1 }),
	TweenMax.to('#bins', 1, {delay: 3, opacity: 1 }),
	
	TweenMax.to('#truckWithTrailer', 0, {delay: 4, y: 8, x: 23, opacity: 1 }), 
    TweenMax.to('#truckWithTrailer', 2, {delay: 5, y: 0, x: 0, opacity: 1 }),
	
	TweenMax.to('#drillGuy_1_', .5, {delay: 5, y: -50, x: 0, opacity: 0 }), 
    TweenMax.to('#drillGuy_1_', 1, {delay: 6, y: 0, x:0, opacity: 1 }),

	TweenMax.to('#garbageMan', .5, {delay: 5.5, y: -50, x: 0, opacity: 0 }), 
    TweenMax.to('#garbageMan', 1, {delay: 6.5, y: 0, x:0, opacity: 1 }),
	
	TweenMax.to('#computerGuy', .5, {delay: 6, y: -50, x: 0, opacity: 0 }), 
    TweenMax.to('#computerGuy', 1, {delay: 7, y: 0, x:0, opacity: 1 }),
	
	TweenMax.to('#energyOnPallete', 1, {delay: 7, opacity: 1 }),
	
	
	// 	Slide 4 Exits
	TweenMax.to('.heading4', 1, {delay: 18, y: -10, opacity: 0 }),
	TweenMax.to('.sub-block.slide4', 1, {delay: 19, y: -20, opacity: 0 }),
	TweenMax.to('#drillGuy_1_', 1.5, {delay: 20, y: -20, opacity: 0 }),
	TweenMax.to('#garbageMan', 1.5, {delay: 20.5, y: -20, opacity: 0 }),
	TweenMax.to('#computerGuy', 1.5, {delay: 21, y: -20, opacity: 0 }),
	TweenMax.to('#energyOnPallete', 1.5, {delay: 21.5, y: -20, opacity: 0 }),
    TweenMax.to('#truckWithTrailer', 2, {delay: 20, y: 8, x: 23, opacity: 0 })
	]))

// set hero block fixed for duration of wrapper
.setPin(mainWrapper)

.addTo(controller);


// Scene 5
new ScrollMagic.Scene({
        triggerElement: scene5,
        triggerHook: .5,
        offset: 8000,
        reverse:true,
        duration: 4000
    })

.setTween(scene5animate)


// set hero block fixed for duration of wrapper
.setPin(mainWrapper)

.addTo(controller);


// Scene 6
new ScrollMagic.Scene({
        triggerElement: scene6,
        triggerHook: .5,
        offset: 12000,
        reverse:true,
        duration: 1200
    })

.setTween(new TimelineMax().add([
	
		TweenMax.to('#mine', 4, {delay: 2, opacity: 0}),

		
    	TweenMax.to('.heading6', 1, {delay:3, y: 0}),
		TweenMax.to('.heading6', 1, {delay: 3, opacity: 1, ease: Back.easeOut}),
	
		TweenMax.to('#map', 2, {delay: 4, opacity: 1 }),
			
			
		TweenMax.to('#cali', .5, {delay: 5, y: -50, x: 0, opacity: 0 }), 
		TweenMax.to('#cali', 3, {delay: 6, y: 0, x:0, opacity: 1, ease: Bounce.easeOut }),
		
		TweenMax.to('#seattle', .5, {delay: 5.5, y: -50, x: 0, opacity: 0 }), 
		TweenMax.to('#seattle', 3, {delay: 6.5, y: 0, x:0, opacity: 1, ease: Bounce.easeOut }),
		
		TweenMax.to('#idaho', .5, {delay: 6, y: -50, x: 0, opacity: 0 }), 
		TweenMax.to('#idaho', 3, {delay: 7, y: 0, x:0, opacity: 1, ease: Bounce.easeOut }),
	
		TweenMax.to('#austin', .5, {delay: 6.5, y: -50, x: 0, opacity: 0 }), 
		TweenMax.to('#austin', 3, {delay: 7.5, y: 0, x:0, opacity: 1, ease: Bounce.easeOut }),
		
		TweenMax.to('#nola', .5, {delay: 7, y: -50, x: 0, opacity: 0 }), 
		TweenMax.to('#nola', 3, {delay: 8, y: 0, x:0, opacity: 1, ease: Bounce.easeOut }),
		
		TweenMax.to('#philly', .5, {delay: 7.5, y: -50, x: 0, opacity: 0 }), 
		TweenMax.to('#philly', 3, {delay: 8.5, y: 0, x:0, opacity: 1, ease: Bounce.easeOut }),
		
		TweenMax.to('#scarolina', .5, {delay: 7, y: -50, x: 0, opacity: 0 }), 
		TweenMax.to('#scarolina', 3, {delay: 8, y: 0, x:0, opacity: 1, ease: Bounce.easeOut }),
				
		TweenMax.to('#jersey', .5, {delay: 7.5, y: -50, x: 0, opacity: 0 }), 
		TweenMax.to('#jersey', 3, {delay: 8.5, y: 0, x:0, opacity: 1, ease: Bounce.easeOut }),
		
		TweenMax.to('#virginia', .5, {delay: 8, y: -50, x: 0, opacity: 0 }), 
		TweenMax.to('#virginia', 3, {delay: 9, y: 0, x:0, opacity: 1, ease: Bounce.easeOut }),
	
		// 	Slide 6 Exits
		TweenMax.to('.heading6', 1, {delay: 20, y: -10, opacity: 0 }),
	
		]))


// set hero block fixed for duration of wrapper
.setPin(mainWrapper)

.addTo(controller);
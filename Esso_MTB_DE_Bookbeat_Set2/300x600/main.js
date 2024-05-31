// Banner duration timer start time
var startTime;

// Timeline reference
var tl;
var tl1;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Background Timeline
  tl2 = new TimelineMax({  });

  // Set Global Timeline
  tl1 = new TimelineMax({ onComplete: endTime });

  var delayRollover = setTimeout(setRollover, 9000);
  animate();
}

function animate() {

  // tl1.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl1.set(["#cta"], { force3D: false, rotation: .001 });

  // tl1.to(phone, 0.5, {y: -80})

  // tl1.set(phone, {
  //   y: randomX(1),
  //   rotation: randomAngle(-1)
  // });

  


  tl1.to(".copy1", 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "+=1")
  tl1.to(".copy1", 0.5, {autoAlpha: 0, ease: Power2.easeInOut}, "+=1.5")
  tl1.to(".copy2", 0.5, {autoAlpha: 1, ease: Power2.easeInOut})
  tl1.to("#cta", 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "+=0.5")
  tl1.to("#copy3", 0.5, {autoAlpha: 1, ease: Power2.easeInOut}, "<")


  moveY(phone, -1);
  rotate(phone, 1);
  
  tl1.add(() => {pause = true; console.log("paused")}, 7)

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("bgExit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("bgExit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  TweenMax.to(["#cta", "#cta-shine-container"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0 });
}

function default_out(event) {
  TweenMax.to(["#cta", "#cta-shine-container"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0 });
}

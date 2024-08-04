//learn how this was made at https://www.youtube.com/watch?v=ersN5fk8py0

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

// toggle Actions
// restart: Restarts the animation when entering the trigger.
// pause: Pauses the animation when leaving the trigger.
// reverse: Reverses the animation when entering back.
// pause: Pauses the animation when leaving back.
gsap.to('.path', {
  scrollTrigger: {
    trigger: '.path',
    toggleActions: 'restart restart restart pause',
    start: 'top 25%', // Adjust start point to 75% of the viewport height
    end: 'bottom 40%',
    markers: true, // Adds visual markers for debugging
    onEnter: () => console.log('Entered!'),
    onLeave: () => console.log('Left!'),
    onEnterBack: () => console.log('Entered back!'),
    onLeaveBack: () => console.log('Left back!'),
    x: 200,
  },
  rotation: 180,
  duration: 5,
});


import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText) 

let split = new SplitText(".text-header, .title-header", {type:"chars"});
let chars = split.chars;

gsap.from(chars, {
  yPercent: 20,
  smoothOrigin:true,
  opacity: 0,
  duration: 1,
  ease: "power1.out",
stagger: 0.1,
})


/* gsap.from(split.chars, {
  duration: 1, 
  y: 100, 
  smoothOrigin:true,
  opacity: 0,
  delay: 1,
  autoAlpha: 0, 
  stagger: {
    grid: [9,50],
    from: "top",
    axis: "null",
    amount: .6,
  },

  duration:.6,
  ease: 'circ.out',
}); */



/* gsap.from(split.chars,{
  opacity: 0,
  duration:1,
  autoAlpha: 0,
} )

gsap.to(split.chars,{
  y: 0,
  stagger: {
    grid: [1,50],
    from: "top",
    axis: "null",
    amount: .6,
    
  },
  duration:.6,
  ease: 'circ.out',
  force3D: true
}); */



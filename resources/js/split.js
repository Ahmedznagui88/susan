
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);



gsap.from('.char',{
  opacity: 0,
  duration:1,
  autoAlpha: 0,
} )

gsap.to('.char',{
  y: 0,
  stagger: {
    grid: [9,50],
    from: "top",
    axis: "null",
    amount: .6,
    
  },
  duration:.6,
  ease: 'circ.out',
  force3D: true
});

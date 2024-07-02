import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable) 

Draggable.create(".img-who-we-re, .img-who-we-2", {
    bounds: ".row-chiSiamo",
    inertia: true
  });
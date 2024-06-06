import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y:25,
      duration:1,
      stagger:0.5,
      ease:"bounce.out",
      stagger: {
        ease: "back.out",
        amount: 1,
        from: "center",
      }
    })
  });

}
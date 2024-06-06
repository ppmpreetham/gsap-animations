import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y:-25,
      duration:1,
      stagger:0.5,
      ease:"back.out",
      repeat: -1,
      yoyo: true,
      stagger: {
        ease: "back.out",
        amount: 1,
        from: "center",
      }
    })
  });
}

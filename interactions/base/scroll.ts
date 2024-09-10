import gsap from "gsap"
import Lenis from "@studio-freight/lenis"
import ScrollTrigger from "gsap/ScrollTrigger"

export class LenisScroll {
  lenis: Lenis
  constructor() {
    const lenis = new Lenis({
      lerp: 0.1,
    })
    this.lenis = lenis
    window.lenis = lenis

    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }
}

declare global {
  interface Window {
    lenis: Lenis
  }
}

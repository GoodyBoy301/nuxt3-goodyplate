import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Draggable } from "gsap/Draggable"
import { Observer } from "gsap/Observer"

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(Observer, ScrollTrigger)

  if (process.client) {
    gsap.registerPlugin(Draggable)
  }

  return {
    provide: {
      gsap,
      Observer,
      ScrollTrigger,
      Draggable,
    },
  }
})

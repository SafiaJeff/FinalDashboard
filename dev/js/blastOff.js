import { gsap } from "gsap";

export let blastOffTL = gsap.timeline();


blastOffTL
.to("#SpaceshipAlien",{duration:.15, rotation:-2, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:2, yoyo: true, repeat:10, ease:"none"})
.to("#SpaceshipAlien",{duration:.15, rotation:0, ease:"none"})
.to("#SpaceshipAlien",{duration:4, y:"-=100", ease: "power3.in"}, "upAndAway")
.to("#Clouds path",{duration: 5, alpha:0, y:"+=100"}, "upAndAway")
.to("#Sun",{duration: 5, alpha:0, y:"+=100"}, "upAndAway")
.to("#Foreground",{duration:5, y:"+=600", ease: "power3.in"}, "upAndAway")
.to("#MiddleGround",{duration:5, y:"+=500", ease: "power3.in"}, "upAndAway")
.to("#Ground",{duration:5, y:"+=700", ease: "power3.in"}, "upAndAway")
.to("#Trees",{duration:5, y:"+=800", ease: "power3.in"}, "upAndAway")
.to("#SkyColor",{duration:5, fill:"#2F4858", ease: "power3.in"}, "upAndAway")

;
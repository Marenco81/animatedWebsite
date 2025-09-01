gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2.5,
    smoothTouch: 0.1,
    effects: true,
});

const tl = gsap.timeline();

tl.to(".loading", {
    width: "100%",
    duration: 0.9,
    delay: 0.3,
})
.to(".capsuleLogo", {
    scale: 2,
    duration: 0.5,
    transition: "0.1s ease",
    opacity: 0,
}, "a")
.to(".capsule", {
    clipPath: "inset(0% 0% 0% 0%)",
}, "a")

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        start: "90% 80%",
        end: "155% 80%",
        scrub: true,
    }    
});

tl1.to("#bgImage", {
    transform: "scale(1.1)",
});
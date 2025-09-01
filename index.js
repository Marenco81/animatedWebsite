gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2.5,
    smoothTouch: 0.1,
    effects: true,
});

const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        start: "90% 80%",
        end: "155% 80%",
        markers: true,
        scrub: true,
    }    
});

tl1.to("#bgImage", {
    transform: "scale(1.1)",
});
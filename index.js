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
    duration: 1.9,
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

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        start: "28% 70%",
        end: "100% 70%",
        // markers: true,
        scrub: 1,
    }
})
tl2.to(".page2 .bottom", {
    y: "700",
})

const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        start: "30% 50%",
        end: "60% 50%",
        scrub: 1,
        // markers: true,
    }
})
tl3.to(".page3 .hide", {
    top: "-100%",
    sttager: 0.1,
})

const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        start: "30% 30%",
        end: "190% 30%",
        markers: true,
        scrub: true,
        pin: true,
    }
});

tl4.to(".box h3", {
    opacity: 0,
}, "a")
.to(".page4 .background", {
    width: "calc(100vw - 1rem)",
    height: "calc(100vh - 1rem)",
    borderRadius: "3.5rem",
    y: -40,
}, "a")
.to(".page4 .background img", {
    transform: "scale(1)",
}, "a")
.from(".background .topText h4, .background .topText h3, .background .bottomText h3", {
    opacity: 0,
    text: 50,
})
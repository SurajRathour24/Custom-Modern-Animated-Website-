gsap.to('#navbar', {
    backgroundColor: '#000',
    duration: 0.5,
    padding: '0.8rem 0px',
    scrollTrigger: {
        trigger: '#navbar',
        scroller: 'body',
        // markers: true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 2
    }
});

gsap.to('#main', {
    backgroundColor: '#000',
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub:2
    },
})
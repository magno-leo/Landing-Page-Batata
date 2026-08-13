window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);
    const testes = document.querySelectorAll('.teste');

    testes.forEach((el) => {
    gsap.fromTo(el, {
        y: 200
    }, {
        y: 0,
        scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top center',
            scrub: 1,
            invalidateOnRefresh: true
        }
    });
});
});

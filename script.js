document.addEventListener("DOMContentLoaded", function () {
    gsap.from("#img1", {
        duration: 1,
        opacity: 0,
        delay: 0.4,
        y: 60,
    });
    gsap.from("#img2",{
        duration: 1,
        opacity: 0,
        delay: 0.6,
        x: 50,
    });
    gsap.from("#img3",{
        duration: 1,
        opacity: 0,
        delay: 0.7,
        y:60
    });
    gsap.from(".bannersection h1",{
        duration: 1,
        opacity: 0,
        delay:0.2,
        y: -30
    });
    gsap.from(".findoutmore",{
        duration: 1,
        opacity:0,
        delay:0.3,
        y:-30,
    });
    gsap.from(".sectionabout h5",{
        duration: 1,
        opacity: 0,
        delay: 0.2,
        y: -30,
        scrollTrigger:{
            trigger: ".sectionabout h5",
            scroller: "body",
            start: "top 60%",
            marker: true
        }
    });

    gsap.from(".sectionabout h2",{
        duration: 1,
        opacity: 0,
        delay: 0.3,
        y: -30,
        scrollTrigger:{
            trigger:".sectionabout h2",
            scroller: "body",
            start: "top 60%",
            marker: true
        }
    });
    gsap.from(".sectionabout .findoutmore",{
        duration: 1,
        opacity:0,
        delay:0.4,
        y:-30,
        scrollTrigger:{
            trigger:".sectionabout .findoutmore",
            scroller: "body",
            start:"top 60%",
            marker: true
        }
    })
});

gsap.registerPlugin(ScrollTrigger);
    let speed = 100;

    /*  SCENE 1 */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene1,
        trigger: ".scrollElement",
        start: "top top",
        end: "45% 100%",
        scrub: 3,
    });


    scene1.to("#lily1", { y: 8 * speed, x: 5 * speed, scale: 1.2, ease: "power1.in" }, 0)
    scene1.to("#lily2", { y: 14 * speed, x: -5 * speed, scale: 1, ease: "power2.in" }, 0)
    scene1.to("#sun1", { y: 8 * speed, x: 15 * speed, scale: 0.6, ease: "power1.in" }, 0)
    scene1.to("#sun2", { y: 30 * speed, x: -20 * speed, scale: 0.9, ease: "power2.in" }, 0)
    scene1.to("#hand-s1", { y: 30 * speed, x: -10 * speed, scale: 0.6, ease: "circ.in" }, 0)
    scene1.to("#seb", { y: 30 * speed, x: 0 * speed, scale: 0.6, ease: "circ.in" }, 0)
    scene1.to("#icon-s1", { y: 30 * speed, x: 0 * speed, scale: 0.6, ease: "circ.in" }, 0)


    /*   SCENE 2  */
    let scene2 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene2,
        trigger: ".scrollElement",
        start: "15% top",
        end: "40% 100%",
        scrub: 4,
    });

    scene2.fromTo("#icon-s2", { y: 950 }, { y: 0 }, 0.3)
    scene2.fromTo("#fire1", { y: 500, opacity: 0 }, { y: 0, opacity: 1 }, 0)
    scene2.fromTo("#fire2", { y: 500 }, { y: 0 }, 0.1)
    scene2.fromTo("#fire3", { y: 780 }, { y: 0 }, 0.1)
    scene2.fromTo("#fire4", { y: 970 }, { y: 0 }, 0.2)
    scene2.fromTo("#ruvik", { y: 970 }, { y: 0 }, 0.3)
    scene2.fromTo("#hand-s2", { y: 900 }, { y: 0 }, 0.3)



    /* Transition (from Scene2 to Scene3) */
    gsap.set("#scene3", { y: 1100, visibility: "visible" })
    let sceneTransition = gsap.timeline();
    ScrollTrigger.create({
        animation: sceneTransition,
        trigger: ".scrollElement",
        start: "65% top",
        end: "bottom 100%",
        scrub: 3,
    });

    sceneTransition.to("#fire1", { y: -1175, scale: 1, transformOrigin: "50% 50%" }, 0)
    sceneTransition.to("#bg2", { y: 0}, 0)



    /* Scene 3 */
    let scene3 = gsap.timeline();
    ScrollTrigger.create({
        animation: scene3,
        trigger: ".scrollElement",
        start: "80% 50%",
        end: "bottom 100%",
        scrub: 3,
    });

    //gradient value change
    scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0)
    scene3.to("#bg2-grad", { attr: { r: 500 } }, 0)



    //reset scrollbar position after refresh
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }


let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Exit Fullscreen";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "Go Fullscreen";
    }
});
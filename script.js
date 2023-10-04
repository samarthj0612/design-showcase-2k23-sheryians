var tl = gsap.timeline();

tl
  .from("#cover div .maintext", {
    duration: 1,
    y: 10,
    opacity: 0,
    transform: "scale(5)",
  })
  .from("#cover div .text1", {
    opacity: 0,
    y: 30,
    duration: 2,
  })
  .from("#cover div", {
    x: "40%",
  })
  .from("#cover div .text", {
    opacity: 0,
  })
  .to("#cover div", {
    transform: "scale(20)",
    opacity: 0,
    duration: 2,
  })
  .to("#cover", {
    opacity: 0,
    display: "none",
  })
  .from("nav", {
    y: -50,
  })
  .from("nav #links a", {
    stagger: 0.2,
    y: -20,
    opacity: 0,
  });

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".main1",
    start: "center center",
    scrub: 2,
    pin: true,
  },
});

tl1
  .to(
    "#fixmain .band div",
    {
      width: "0%",
      duration: 2,
    },
    "a"
  )
  .to(
    "#fixmain #content .lefttext",
    {
      marginLeft: "0",
    },
    "a"
  )
  .to(
    "#fixmain #content #circle",
    {
      x: "-150px",
    },
    "b"
  )
  .to(
    "#fixmain #content #circle img",
    {
      x: "180px",
    },
    "b"
  )
  .to("#fixmain #content p", {
    opacity: 1,
    duration: 2,
  });

let nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 1450) {
    nav.classList.add("shadow");
    nav.style.backdropFilter = "blur(8px)";
  } else {
    nav.classList.remove("shadow");
    nav.style.backdropFilter = "blur(0px)";
  }
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main1",
    start: "top 30%",
    end: "center center",
    scrub: 2,
  },
});

tl2.from("#main1 img", {
  opacity: 0,
  duration: 3,
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main3",
    start: "top 55%",
    end: "center center",
    scrub: 2,
  },
});

tl3.from("#main3 div", {
  y: 150,
  borderRadius: "50%",
});

gsap.from("#main2 #img1", {
  scrollTrigger: {
    trigger: "#main2",
    start: "top 70%",
    end: "100% 60%",
    scrub: 2,
  },
  top: "70%",
  left: "-30%",
  rotation: 0,
  width: "40vw",
});

gsap.from("#main2 #img2", {
  scrollTrigger: {
    trigger: "#main2",
    start: "top 40%",
    end: "90% 70%",
    scrub: 2,
  },
  top: "100%",
  right: "-30%",
  rotation: 0,
  width: "40vw",
});

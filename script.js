var vid = document.getElementById("musik");
vid.volume = 0.2;

//animasi menu
console.clear();
let targets = gsap.utils.toArray(".btn-menu");

targets.forEach((obj) => {
    obj.anim = gsap.to(".menu", { 
        display: "block",
        opacity: 1,
        delay: 0,
        duration: 1,
        ease: "power3.inOut",
        stagger: 0.1
    }).reversed(true);
    obj.addEventListener("click", doCoolStuff);
});

function doCoolStuff() {
    this.anim.reversed(!this.anim.reversed());
}


gsap.from(".logo2", {
    y: 150,
    rotation: 10,
    duration: 2,
    stagger: 0.1,
    ease: "power3.inOut"
});

gsap.from(".tagline2", {
    delay: 2,
    x: -250,
    duration: 2,
    ease: "power3.inOut"
});



//animasi sejarah
gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".sejarah",
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=7000",
  }
});     


ScrollTrigger.saveStyles(".mobile, .desktop");

ScrollTrigger.matchMedia({
	
	// monitor
	"(min-width: 1901px)": function() {
        gsap.from(".sinden-ilustrasi", {
            left: "65%",
            top: "-80%",
            scale: 0.1,
            ease: "none",
            scrollTrigger: {
                trigger: ".sinden",
                scrub: true,
                start: "top bottom",
                end: "bottom bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".box-gamelan", {
            x: -2750,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-gamelan",
                scrub: true,
                start: "95% bottom",
                end: "300% bottom",
                toggleActions: "play none reverse none",
                pin: true,
            }
        });
        gsap.to(".gong", {
            rotation: 360,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-gong",
                scrub: true,
                start: "bottom bottom",
                end: "300% bottom",
                toggleActions: "play none reverse none",
                pin: true,
            }
        });
        gsap.to(".gamelan-meledak", {
            x: -2750,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-gamelan-meledak",
                scrub: true,
                start: "bottom bottom",
                end: "300% bottom",
                toggleActions: "play none reverse none",
                pin: true,
            }
        });
        gsap.to(".tirai-kanan", {
            x: 800,
            ease: "none",
            scrollTrigger: {
                trigger: ".panggung",
                scrub: true,
                start: "top bottom",
                end: "top top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".tirai-kiri", {
            x: -800,
            ease: "none",
            scrollTrigger: {
                trigger: ".panggung",
                scrub: true,
                start: "top bottom",
                end: "top top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".panggung-wayang", {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: ".panggung",
                scrub: true,
                start: "25% bottom",
                end: "top top",
                toggleActions: "play none reverse none",
            }
        });
        const gugunungan = gsap.timeline({
            scrollTrigger: {
                trigger: ".finish",
                scrub: true,
                start: "-25% bottom",
                end: "bottom bottom",
                toggleActions: "play none reverse none",
            }
        });
        gugunungan.to(".gugunungan",{top:"-50%", rotationY: 180}).to(".gugunungan",{top:"50%", rotationY:0});
        const pattern3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".finish",
                scrub: true,
                start: "-25% bottom",
                end: "bottom bottom",
            }
        });
        pattern3.to(".pattern3",{top:"-50%", rotation: 180, scale: 1}).to(".pattern3",{top:"50%", rotation: 360,});
    }, 
  
	// laptop
	"(max-width: 1900px)": function() {
        gsap.from(".sinden-ilustrasi", {
            left: "65%",
            top: "-85%",
            scale: 0.1,
            ease: "none",
            scrollTrigger: {
                trigger: ".sinden",
                scrub: true,
                start: "top bottom",
                end: "bottom bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".box-gamelan", {
            x: -1900,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-gamelan",
                scrub: true,
                start: "90% bottom",
                end: "300% bottom",
                toggleActions: "play none reverse none",
                pin: true,
            }
        });
        gsap.to(".gong", {
            rotation: 360,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-gong",
                scrub: true,
                start: "bottom bottom",
                end: "300% bottom",
                toggleActions: "play none reverse none",
                pin: true,
            }
        });
        gsap.to(".gamelan-meledak", {
            x: -1900,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-gamelan-meledak",
                scrub: true,
                start: "bottom bottom",
                end: "300% bottom",
                toggleActions: "play none reverse none",
                pin: true,
            }
        });
        gsap.to(".tirai-kanan", {
            x: 650,
            ease: "none",
            scrollTrigger: {
                trigger: ".panggung",
                scrub: true,
                start: "25% bottom",
                end: "top top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".tirai-kiri", {
            x: -650,
            ease: "none",
            scrollTrigger: {
                trigger: ".panggung",
                scrub: true,
                start: "25% bottom",
                end: "top top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".panggung-wayang", {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: ".panggung",
                scrub: true,
                start: "25% bottom",
                end: "top top",
                toggleActions: "play none reverse none",
            }
        });
        const gugunungan = gsap.timeline({
            scrollTrigger: {
                trigger: ".finish",
                scrub: true,
                start: "-25% bottom",
                end: "bottom bottom",
                toggleActions: "play none reverse none",
            }
        });
        gugunungan.to(".gugunungan",{top:"-25%", rotationY: 180}).to(".gugunungan",{top:"40%", rotationY:0});
        const pattern3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".finish",
                scrub: true,
                start: "-25% bottom",
                end: "bottom bottom",
            }
        });
        pattern3.to(".pattern3",{top:"-50%", rotation: 180, scale: 1}).to(".pattern3",{top:"40%", rotation: 360,});
    }, 
  
	// semua layar
	"all": function() {
        gsap.from(".navbar", 2, {
            top: "-20%",
            ease: Expo.easeInOut,
            delay: 3,
        });
        gsap.from(".mode-web", 2, {
            bottom: "-20%",
            ease: Expo.easeInOut,
            delay: 3,
        });
        
        gsap.to(".judul-nav", {
          scrollTrigger: {
            trigger: "#sejarah",
            start: "-5% top",
            end: "-5% top",
            scrub: 1,
          },
          color: "#DEA627",
        });

        gsap.to(".judul-nav", {
          scrollTrigger: {
            trigger: "#sejarah",
            start: "95% top",
            end: "95% top",
            scrub: 1,
          },
          color: "#FF2847",
          immediateRender: false
        });
        
        gsap.to(".judul-nav", {
          scrollTrigger: {
            trigger: "#elemen",
            start: "-5% top",
            end: "-5% top",
            scrub: 1,
          },
          color: "#DEA627",
        });

        gsap.to(".judul-nav", {
          scrollTrigger: {
            trigger: "#elemen",
            start: "95% top",
            end: "95% top",
            scrub: 1,
          },
          color: "#FF2847",
          immediateRender: false
        });
        
        gsap.to(".mode-web a", {
          scrollTrigger: {
            trigger: "#sejarah",
            start: "-5% 90%",
            end: "-5% 90%",
            scrub: 1,
          },
          color: "#DEA627",
        });

        gsap.to(".mode-web a", {
          scrollTrigger: {
            trigger: "#sejarah",
            start: "95% 90%",
            end: "95% 90%",
            scrub: 1,
          },
          color: "#FF2847",
          immediateRender: false
        });
        
        gsap.to(".mode-web a", {
          scrollTrigger: {
            trigger: "#elemen",
            start: "-5% 90%",
            end: "-5% 90%",
            scrub: 1,
          },
          color: "#DEA627",
        });

        gsap.to(".mode-web a", {
          scrollTrigger: {
            trigger: "#elemen",
            start: "95% 90%",
            end: "95% 90%",
            scrub: 1,
          },
          color: "#FF2847",
          immediateRender: false
        });
        
        function getElementPosition(element, bottom = false) {
          let position = element.offset().top - $(window).scrollTop();
          return !bottom ? position : position + element.outerHeight();
        }
        
        gsap.from(".content-sejarah-2", {
            y: 100,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-sejarah-2",
                containerAnimation: scrollTween,
                scrub: true,
                start: "left right",
                end: "right right",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".content-sejarah-3", {
            y: -100,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-sejarah-3",
                containerAnimation: scrollTween,
                scrub: true,
                start: "left right",
                end: "50% right",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".content-sejarah-4", {
            y: 100,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-sejarah-4",
                containerAnimation: scrollTween,
                scrub: true,
                start: "left right",
                end: "75% right",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".content-sejarah-5", {
            y: 100,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-sejarah-5",
                containerAnimation: scrollTween,
                scrub: true,
                start: "left right",
                end: "75% right",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".img-sejarah-6", {
            y: -100,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".img-sejarah-6",
                containerAnimation: scrollTween,
                scrub: true,
                start: "50% right",
                end: "right right",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".muka1", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-wagol",
                scrub: true,
                start: "105% bottom",
                end: "115% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".muka5", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-wagol",
                scrub: true,
                start: "165% bottom",
                end: "175% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".muka4", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-wagol",
                scrub: true,
                start: "225% bottom",
                end: "235% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".muka8", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-wagol",
                scrub: true,
                start: "285% bottom",
                end: "295% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".muka3", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-wagol",
                scrub: true,
                start: "345% bottom",
                end: "355% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".muka6", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-wagol",
                scrub: true,
                start: "405% bottom",
                end: "415% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".muka2", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-wagol",
                scrub: true,
                start: "465% bottom",
                end: "475% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".muka7", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".box-wagol",
                scrub: true,
                start: "525% bottom",
                end: "535% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".box-wagol", {
            ease: "none",
            scrollTrigger: {
                trigger: ".box-wagol",
                scrub: true,
                start: "bottom bottom",
                end: "585% bottom",
                pin: true,
            }
        });
        gsap.to(".anak-panah1", {
            left: "100%",
            top: "50%",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".kesatria",
                scrub: true,
                start: "bottom bottom",
                end: "bottom top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".anak-panah2", {
            right: "100%",
            top: "80%",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".panggawa",
                scrub: true,
                start: "bottom bottom",
                end: "bottom top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".anak-panah3", {
            left: "100%",
            top: "100%",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: ".punakawan",
                scrub: true,
                start: "bottom bottom",
                end: "bottom top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".arjuna", {
            x: -100,
            opacity: 0,
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: ".kesatria",
                start: "center bottom",
            }
        });
        gsap.from(".gatotkaca", {
            x: 100,
            opacity: 0,
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: ".panggawa",
                start: "center bottom",
            }
        });
        gsap.from(".cepot", {
            x: -100,
            opacity: 0,
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: ".punakawan",
                start: "center bottom",
            }
        });
        gsap.from(".ilustrasi-buta", {
            x: 100,
            opacity: 0,
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: ".buta",
                start: "center bottom",
            }
        });
        gsap.from(".dalang-ilustrasi", {
            x: 200,
            opacity: 0,
            duration: 2,
            ease: "circ.out",
            scrollTrigger: {
                trigger: ".dalang",
                start: "25% center",
            }
        });
        gsap.to(".image-dalang", {
            y: -200,
            ease: "none",
            scrollTrigger: {
                trigger: ".dalang",
                scrub: true,
                start: "75% center",
                end: "center top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".awan1", {
            x: -250,
            ease: "none",
            scrollTrigger: {
                trigger: ".sinden",
                scrub: true,
                start: "top bottom",
                end: "30% top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".awan2", {
            x: 100,
            ease: "none",
            scrollTrigger: {
                trigger: ".sinden",
                scrub: true,
                start: "top bottom",
                end: "30% top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".awan1, .awan2", {
            y: -300,
            ease: "none",
            scrollTrigger: {
                trigger: ".sinden",
                scrub: true,
                start: "75% center",
                end: "center top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".awan4", {
            x: 50,
            ease: "none",
            scrollTrigger: {
                trigger: ".sinden",
                scrub: true,
                start: "top bottom",
                end: "30% top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".awan3", {
            x: -100,
            ease: "none",
            scrollTrigger: {
                trigger: ".sinden",
                scrub: true,
                start: "top bottom",
                end: "30% top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".awan3, .awan4", {
            y: -100,
            ease: "none",
            scrollTrigger: {
                trigger: ".sinden",
                scrub: true,
                start: "75% center",
                end: "center top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".sinden-2", {
            y: -300,
            ease: "none",
            scrollTrigger: {
                trigger: ".sinden",
                scrub: true,
                start: "75% center",
                end: "center top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".pemukul", {
            y: -1500,
            ease: "none",
            scrollTrigger: {
                trigger: ".nayaga",
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".meledak1", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".nayaga",
                scrub: true,
                start: "25% bottom",
                end: "center 75%",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".meledak2", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".nayaga",
                scrub: true,
                start: "50% bottom",
                end: "top top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.from(".meledak3", {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".nayaga",
                scrub: true,
                start: "85% bottom",
                end: "25% top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".penonton", {
            y: -100,
            ease: "none",
            scrollTrigger: {
                trigger: ".panggung",
                scrub: true,
                start: "top 50%",
                end: "top top",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".box-galeri", {
            ease: "none",
            scrollTrigger: {
                trigger: ".box-galeri",
                scrub: true,
                start: "bottom bottom",
                end: "150% bottom",
                pin: true,
            }
        });
        gsap.to(".img-galeri1", {
            ease: "none",
            left: "-50%",
            top: "-50%",
            opacity: 0,
            scrollTrigger: {
                trigger: ".box-galeri",
                scrub: true,
                start: "100% bottom",
                end: "150% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".img-galeri2", {
            ease: "none",
            top: "-50%",
            opacity: 0,
            scrollTrigger: {
                trigger: ".box-galeri",
                scrub: true,
                start: "100% bottom",
                end: "150% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".img-galeri3", {
            ease: "none",
            top: "-50%",
            right: "-50%",
            opacity: 0,
            scrollTrigger: {
                trigger: ".box-galeri",
                scrub: true,
                start: "100% bottom",
                end: "150% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".img-galeri4", {
            ease: "none",
            bottom: "-50%",
            left: "-50%",
            opacity: 0,
            scrollTrigger: {
                trigger: ".box-galeri",
                scrub: true,
                start: "100% bottom",
                end: "150% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".img-galeri5", {
            ease: "none",
            left: "-50%",
            opacity: 0,
            scrollTrigger: {
                trigger: ".box-galeri",
                scrub: true,
                start: "100% bottom",
                end: "150% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".img-galeri6", {
            ease: "none",
            right: "-50%",
            opacity: 0,
            scrollTrigger: {
                trigger: ".box-galeri",
                scrub: true,
                start: "100% bottom",
                end: "150% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".img-galeri7", {
            ease: "none",
            right: "-50%",
            bottom: "-50%",
            opacity: 0,
            scrollTrigger: {
                trigger: ".box-galeri",
                scrub: true,
                start: "100% bottom",
                end: "150% bottom",
                toggleActions: "play none reverse none",
            }
        });
        gsap.to(".img-galeri8", {
            ease: "none",
            bottom: "-50%",
            opacity: 0,
            scrollTrigger: {
                trigger: ".box-galeri",
                scrub: true,
                start: "100% bottom",
                end: "150% bottom",
                toggleActions: "play none reverse none",
            }
        });
        

	}
  
});

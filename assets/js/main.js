const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});


/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

window.addEventListener("load", revealSections);


/*=========================================
        SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(".reveal");

function reveal(){

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);

/*=========================================
        BACK TO TOP
=========================================*/

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});

document.querySelectorAll("#navMenu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});

/*=========================================
        THEME
=========================================*/

const themeBtn = document.querySelector(".theme-btn");

const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if(savedTheme){

    html.setAttribute("data-theme",savedTheme);

}

themeBtn.addEventListener("click",()=>{

    const current = html.getAttribute("data-theme");

    const next = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme",next);

    localStorage.setItem("theme",next);

});


/*=========================================
            COUNTER
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const update = ()=>{

                count += speed;

                if(count < target){

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});



function myMenuFunction()
{
    var menuBth = document.getElementById("myNavMenu");

    if (menuBth.className === "nav-menu")
    {
        menuBth.className += "responsive";
    }
    else
    {
        menuBth.className = "nav-menu";
    }
}
//  DARK MODE
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () =>
{
    body.classList.toggle("dark");
});

//  TYPING EFFECT   
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

// SCROLL ANIMATION
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

//  ACTIVE LINK
const sections = document.querySelectorAll(".section[id]");
function scrollActive()
{
    const scrollY = window.scrollY;

    sections.forEach((current) =>
    {
        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        }
        else
        {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

// SEND GOOGLE SHEET MESSAGE
const scriptURL = 'https://script.google.com/macros/s/AKfycbypk8Bm4CQF36J8f5wLddp8cUqIc1ddFs_yHSsh32IMaNkSPvzh9UbPod3ZF3Vp8kRQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e =>
{
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response =>
        {
            msg.innerHTML = 'Message sent successfully!'
            setTimeout(function ()
            {
                msg.innerHTML = ''
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!'), e.message);
})

// SIDEBAR BUTTON
/* function showSidebar()
{
    const sidebar = document.querySelector('.sidemenu')
    sidebar.style.display = 'flex';


}
function hideSidebar()
{
    const sidebar = document.querySelector('.sidemenu')
    sidebar.style.display = 'none';
} */


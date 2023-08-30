// TopMenu
const toggleMenuBtn = document.querySelector("#menu-btn");
const toggleMenuImg = document.querySelector("#menu-btn img");
const toggledMenu = document.querySelector("#toggled-menu");
// const menuLinks = document.querySelectorAll("#nav-bar ul a");
const menuLinks = document.querySelector("#competencesLink");
const projetsLink = document.querySelector("#projetsLink");
const formationsLink = document.querySelector("#formationsLink");

toggleMenuBtn.addEventListener("click", toggleNav);

projetsLink.addEventListener("click", toggleNav);
formationsLink.addEventListener("click", toggleNav);
menuLinks.addEventListener("click", toggleNav);

function toggleNav() {
    toggledMenu.classList.toggle("-translate-y-full")

    if (toggledMenu.classList.contains("-translate-y-full")) {
        toggleMenuImg.setAttribute("src", "./assets/logos/logo_menu/menu.svg")
        toggleMenuBtn.setAttribute("aria-expanded", "false")
    }
    else {
        toggleMenuImg.setAttribute("src", "./assets/logos/logo_menu/cross.svg")
        toggleMenuBtn.setAttribute("aria-expanded", "true")
    }
}

// AsideMenu
const toggleAsideBtn = document.querySelector("#aside-btn");
const competencesLink = document.querySelector("#competencesLink");
const toggleAsideImg = document.querySelector("#aside-btn img");
const toggledAside = document.querySelector("#toggled-aside");

toggleAsideBtn.addEventListener("click", toggleAside);
competencesLink.addEventListener("click", toggleAside);
projetsLink.addEventListener("click", toggleAside);
formationsLink.addEventListener("click", toggleAside);

function toggleAside() {
    toggledAside.classList.toggle("-translate-x-full")

    if (toggledAside.classList.contains("-translate-x-full")) {
        toggleAsideImg.setAttribute("src", "./assets/logos/logo_menu/menu.svg")
        toggleAsideBtn.setAttribute("aria-expanded", "false")
    }
    else {
        toggleAsideImg.setAttribute("src", "./assets/logos/logo_menu/cross.svg")
        toggleAsideBtn.setAttribute("aria-expanded", "true")
    }
}

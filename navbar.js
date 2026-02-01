const navIcon = document.querySelector(".navbtn");
const navMenu = document.querySelector(".navbar__menu")

navIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    if (navMenu.classList.contains("active")){
        navIcon.innerHTML = "✖"
        navIcon.setAttribute("aria-expanded", "true")
    } else {
        navIcon.innerHTML = "☰"
        navIcon.setAttribute("aria-expanded", "false")
    }
})

window.addEventListener("scroll",() => {
    navMenu.classList.remove("active")
    navIcon.innerHTML = "☰"
    navIcon.setAttribute("aria-expanded", "false")
})

window.addEventListener("resize", () => {
    navMenu.classList.remove("active")
    navIcon.innerHTML = "☰"
    navIcon.setAttribute("aria-expanded", "false")
})
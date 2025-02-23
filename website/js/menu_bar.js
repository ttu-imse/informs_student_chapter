const menu = document.querySelector(".nav-links-mobile ul");
const menuIcon = document.querySelector(".menu-icon");
const overlay = document.querySelector(".overlay");

// toggles menu bar
function toggleMenu(){
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
    overlay.classList.toggle("active");

    // Add event listener to detect outside clicks when menu is open
    if (menu.classList.contains("active")) {
        document.addEventListener("click", closeMenuOutside);
    } else {
        document.removeEventListener("click", closeMenuOutside);
    }
}

// function to close menu when clicking outside
function closeMenuOutside(e){

    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove("active");
        menuIcon.classList.remove("active");
        overlay.classList.remove("active");
        document.removeEventListener("click", closeMenuOutside);
    }
}
const menu = document.querySelector(".nav_links_mobile ul");
const menuIcon = document.querySelector(".menu-icon");

// toggles menu bar
function toggleMenu() {
    menu.classList.toggle("active");

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
        document.removeEventListener("click", closeMenuOutside);
    }
}
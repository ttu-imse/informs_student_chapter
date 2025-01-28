const staticHeader = document.getElementsByClassName("static_header")[0];
const fixedHeader = document.getElementsByClassName("fixed_header")[0];

document.addEventListener("scroll", () => {
    if (window.scrollY > staticHeader.offsetHeight){
        // When scrolling down past the static header, show the fixed header
        fixedHeader.style.top = "0";
    }
    else{
        // When scrolling back up to the top, reset both headers
        fixedHeader.style.top = null; // Hide the fixed header
    }
});
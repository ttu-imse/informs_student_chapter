// DOM Elements
const loginButton = document.querySelector(".login");
const loginName = loginButton.getElementsByTagName("h4")[0];
const loginForm = document.querySelector(".login-form");
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginError = document.getElementById('login-error');


let isLoggedIn = false;


// toggle login form
function toggleLoginForm() {
    loginForm.classList.toggle("active");

    // Add event listener to detect outside clicks when menu is open
    if (loginForm.classList.contains("active")) {
        document.addEventListener("click", closeLoginFormOutside);
    } else {
        document.removeEventListener("click", closeLoginFormOutside);
    }
}

// function to close LoginForm when clicking outside
function closeLoginFormOutside(e) {
    if (!loginForm.contains(e.target) && !loginButton.contains(e.target)) {
        loginForm.classList.remove("active");
        document.removeEventListener("click", closeLoginFormOutside);
    }
}


// login user
function loginUser() {
    if (usernameInput.value === 'adm' && passwordInput.value === '123') {
        isLoggedIn = true;
        loginName.innerHTML = "Administrator";
        console.log(loginName)
    } else {
        loginError.style.display = 'block';
    }
}
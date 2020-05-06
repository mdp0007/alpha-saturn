function submitForm(e) {
    e.preventDefault();
    resetStyles();
    document.querySelector(".sign-in").style.display = "none";
    document.querySelector(".loading").style.display = "block";
    setTimeout(() => {
        document.querySelector(".login-incorrect").style.display = "block";
        document.querySelector(".sign-in").style.display = "block";
        document.querySelector(".loading").style.display = "none";
    }, 500);
}

function registerForm(e) {
    e.preventDefault();
    resetStyles();
    document.querySelector(".registration-disabled").style.display = "block";
}

function resetStyles() {
    document.querySelector(".login-incorrect").style.display = "none";
    document.querySelector(".registration-disabled").style.display = "none";
    document.querySelector(".sign-in").style.display = "block";
    document.querySelector(".loading").style.display = "none";
}
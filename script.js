function showMessage() {

    alert("Thanks for visiting my portfolio! 🚀");

}

function changeTheme() {

    document.body.classList.toggle("light-mode");

    let themeButton = document.getElementById("themeButton");

    if (document.body.classList.contains("light-mode")) {

        themeButton.innerHTML = "☀️";

    } else {

        themeButton.innerHTML = "🌙";

    }

}
function toggleMenu() {

    let navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


let text = "Frontend Developer in Progress";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);

    }

}


typeEffect();
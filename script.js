document.addEventListener("DOMContentLoaded", () => {

    console.log("Welcome to Tabitha's little corner of the internet ✦");

});
function openLetter() {

    const letter = document.getElementById("letterContent");

    const button = document.querySelector(".letter-button");

    letter.classList.toggle("show");

    if (letter.classList.contains("show")) {

        button.textContent = "Close the letter ↑";

    } else {

        button.textContent = "Open the letter →";

    }

}

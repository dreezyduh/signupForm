const samePass = document.querySelectorAll(`.error`);
const errorPass = document.querySelector(`.errorPassword`);
let error = 0;

for (i = 0; i < samePass.length; i++) {
    samePass[i].addEventListener('input', showError);
    samePass[i].addEventListener(`focus`, function(e) {
        if (error !== 1) {
            e.target.style.border = `1px solid #0055ff`;
        }
    });
    samePass[i].addEventListener(`focusout`, function(e) {
        if (error !== 1) {
            e.target.style.border = `1px solid #ebe5e5`;
        }
    });
}

function showError() {
    if (samePass[0].value !== samePass[1].value) {
        samePass[0].style.border = `1px solid #ff0000`;
        samePass[1].style.border = samePass[0].style.border;
        errorPass.textContent = `* Passwords do not match`;
        errorPass.style.color = `red`;
        error = 1;
    } else {
        samePass[0].style.border = `1px solid #ebe5e5`;
        samePass[1].style.border = samePass[0].style.border;
        errorPass.textContent = ``;
        error = 0;
    }
}
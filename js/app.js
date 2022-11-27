"use strict";
const form = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');
const linkInput = document.getElementById('link-input');
const menu = document.getElementById('menu');
const menuBtn = document.getElementById('menu-btn');
const openMenu = () => {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('hidden');
};
const validation = (inputValue) => {
    let isValid = true;
    if (inputValue.trim().length === 0) {
        isValid = false;
    }
    return isValid;
};
const formSubmition = (e) => {
    e.preventDefault();
    const { value } = linkInput;
    if (!validation(value)) {
        errMsg.textContent = 'Please, enter something';
        linkInput.classList.add('border-red');
        setTimeout(() => {
            errMsg.textContent = '';
            linkInput.classList.remove('border-red');
        }, 3000);
    }
    else if (!validURL(value)) {
        errMsg.textContent = 'Please, enter valid url';
        linkInput.classList.add('border-red');
        setTimeout(() => {
            errMsg.textContent = '';
            linkInput.classList.remove('border-red');
        }, 3000);
    }
    else {
        linkInput.value = '';
        linkInput.classList.remove('border-red');
    }
};
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}
form.addEventListener('submit', formSubmition);
menuBtn.addEventListener('click', openMenu);

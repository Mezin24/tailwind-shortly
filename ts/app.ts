const form = document.getElementById('link-form')! as HTMLFormElement;
const errMsg = document.getElementById('err-msg')! as HTMLDivElement;
const linkInput = document.getElementById('link-input')! as HTMLInputElement;
const menu = document.getElementById('menu')! as HTMLDivElement;
const menuBtn = document.getElementById('menu-btn')! as HTMLButtonElement;

const openMenu = () => {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('hidden');
};

const validation = (inputValue: string) => {
  let isValid = true;
  if (inputValue.trim().length === 0) {
    isValid = false;
  }
  return isValid;
};

const formSubmition = (e: SubmitEvent) => {
  e.preventDefault();
  const { value } = linkInput;

  if (!validation(value)) {
    errMsg.textContent = 'Please, enter something';
    linkInput.classList.add('border-red');
    setTimeout(() => {
      errMsg.textContent = '';
      linkInput.classList.remove('border-red');
    }, 3000);
  } else if (!validURL(value)) {
    errMsg.textContent = 'Please, enter valid url';
    linkInput.classList.add('border-red');
    setTimeout(() => {
      errMsg.textContent = '';
      linkInput.classList.remove('border-red');
    }, 3000);
  } else {
    linkInput.value = '';
    linkInput.classList.remove('border-red');
  }
};

function validURL(str: string) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}

form.addEventListener('submit', formSubmition);
menuBtn.addEventListener('click', openMenu);

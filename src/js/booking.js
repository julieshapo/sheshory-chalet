import { Datepicker } from 'vanillajs-datepicker';
import Inputmask from 'inputmask';

const titleEl = document.querySelector('.modal--title');
const formEl = document.querySelector('.modal--form');
const telEl = document.querySelector('.user-tel');
const startEl = document.querySelector('.start-date');
const endEl = document.querySelector('.end-date');
const checkboxEl = document.getElementById('personal-data');
const submitBtnEl = document.querySelector('.modal--btn__submit');
const thankYouEl = document.querySelector('.modal--thank-you');
const closeBtnEl = document.querySelector('.modal--btn__close');

const datepickerStart = new Datepicker(startEl, {
  format: 'dd-mm-yyyy',
});

const datepickerEnd = new Datepicker(endEl, {
  format: 'dd-mm-yyyy',
});

const onTelInputChange = () => {
  Inputmask({ mask: '+38 (999) 999 99 99' }).mask(telEl);
};

const onCheckboxChange = e => {
  submitBtnEl.disabled = !e.currentTarget.checked;
};

const onFormSubmit = e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    console.log('name', name);
    console.log('value', value);
  });

  // e.currentTarget.reset();
  titleEl.classList.add('visually-hidden');
  formEl.classList.add('visually-hidden');
  thankYouEl.classList.remove('visually-hidden');
};

telEl.addEventListener('input', onTelInputChange);
checkboxEl.addEventListener('change', onCheckboxChange);
formEl.addEventListener('submit', onFormSubmit);

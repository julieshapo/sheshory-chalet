import { Datepicker } from 'vanillajs-datepicker';
const { parse } = require('date-fns');
import { Notify } from 'notiflix';
import Inputmask from 'inputmask';

const openModalBtnEl = document.querySelector('[data-action="open-modal"]');
const closeModalBtnEl = document.querySelector('[data-action="close-modal"]');
const backdropEl = document.querySelector('.js-backdrop');
const titleEl = document.querySelector('.modal--title');
const formEl = document.querySelector('.modal--form');
const telEl = document.querySelector('.user-tel');
const startEl = document.querySelector('.start-date');
const endEl = document.querySelector('.end-date');
const checkboxEl = document.getElementById('personal-data');
const submitBtnEl = document.querySelector('.modal--btn__submit');
const thankYouEl = document.querySelector('.modal--thank-you');

const nameEl = document.querySelector('.user-name');
const emailEl = document.querySelector('.user-email');
const commentEl = document.querySelector('.comment');

//Open & CLose modal

const onModalOpen = () => {
  window.addEventListener('keydown', onEscKeyPress);
  document.body.classList.add('show-modal');
};

const onModalClose = () => {
  window.removeEventListener('keydown', onEscKeyPress);
  document.body.classList.remove('show-modal');
};

const onBackdropClick = e => {
  if (e.currentTarget === e.target) {
    onModalClose();
  }
};

const onEscKeyPress = e => {
  const ESC_KEY_CODE = 'Escape';

  if (e.code === ESC_KEY_CODE) {
    onModalClose();
  }
};

// Dates booking elements

const datepickerStart = new Datepicker(startEl, {
  format: 'dd-mm-yyyy',
  weekStart: 1,
  autohide: true,
});

const handleStartDate = e => {
  try {
    const startDate = e.detail.date;
    const currentDate = new Date();

    if (startDate <= currentDate) {
      Notify.warning(
        'Бронювання можливе не раніше завтрашнього дня, оберіть іншу дату.'
      );
      startEl.value = 'дд-мм-рррр';
    }
  } catch (e) {
    Notify.failure('Упс, сталася помилка, спробуйте ще раз пізніше.');
  }
};

const datepickerEnd = new Datepicker(endEl, {
  format: 'dd-mm-yyyy',
  weekStart: 1,
  autohide: true,
});

const handleEndDate = e => {
  try {
    const endDate = e.detail.date;
    const startDate = startEl.value;
    const parsedStartDate = parse(startDate, 'dd-MM-yyyy', new Date());

    const currentDate = new Date();

    const timeDifference = Math.floor(
      (endDate - parsedStartDate) / (1000 * 60 * 60 * 24)
    );

    if (endDate <= currentDate || endDate <= startDate) {
      Notify.warning(
        'Кінець бронювання не може бути раніше за початок, оберіть іншу дату.'
      );
      endEl.value = 'дд-мм-рррр';
    }
    if (timeDifference < 3) {
      Notify.warning(
        'Бронювання можливе не менше ніж на 3 дні, оберіть іншу дату.'
      );
      endEl.value = 'дд-мм-рррр';
    }
  } catch (e) {
    Notify.failure('Упс, сталася помилка, спробуйте ще раз пізніше.');
    console.log(e);
  }
};

// Custom Form elements and Form submit

const telInputMask = () => {
  Inputmask({ mask: '+38 (999) 999 99 99' }).mask(telEl);
};

const onCheckboxChange = e => {
  submitBtnEl.disabled = !e.currentTarget.checked;
};

const onFormSubmit = e => {
  e.preventDefault();

  // const formData = new FormData(e.currentTarget);

  const formData = {
    name: nameEl.value,
    tel: telEl.value,
    email: emailEl.value,
    start: startEl.value,
    end: endEl.value,
    comment: commentEl.value,
  };

  fetch('http://localhost:3000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.success) {
        console.log('Email sent successfully');
      } else {
        console.error('Email sending failed');
      }
    })
    .catch(error => {
      console.log(error);
    });

  e.currentTarget.reset();
  titleEl.classList.add('visually-hidden');
  formEl.classList.add('visually-hidden');
  thankYouEl.classList.remove('visually-hidden');
};

openModalBtnEl.addEventListener('click', onModalOpen);
closeModalBtnEl.addEventListener('click', onModalClose);
backdropEl.addEventListener('click', onBackdropClick);
telEl.addEventListener('input', telInputMask);
checkboxEl.addEventListener('change', onCheckboxChange);
formEl.addEventListener('submit', onFormSubmit);
startEl.addEventListener('changeDate', handleStartDate);
endEl.addEventListener('changeDate', handleEndDate);

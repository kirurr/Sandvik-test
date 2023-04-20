"use strict";

// проверяем, загружена ли страница и начинаем работу
document.addEventListener('DOMContentLoaded', function () {
  // выбираем форму и обрабатываем нажатие на кнопку
  const form = document.getElementById('form');
  const button = document.getElementById('form-button');
  form.addEventListener('submit', formSend);

  // функция отправки формы
  async function formSend(e) {
    // прерываем отправку
    e.preventDefault();

    // проверяем, все ли подходит
    let error = formValidate(form);

    // забираем данные из полей
    let formData = new FormData(form);

    // отправляем форму

    if (error === 0) {
      button.classList.add('_sending');
      let response = await fetch('send.php', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        if (result.message === 'sended') {
          form.reset();
          button.classList.add('_sended');
          form.classList.remove('_sending');
        }

      } else {
        button.classList.add('_send-error');
        form.classList.remove('_sending');
      }

    } else {
      // alert('Заполните имя и почту');
    }
  }

  // функция проверки полей
  function formValidate(form) {
    // собираем ошибки
    let error = 0;
    // выбираем необходимые поля
    let formReq = document.querySelectorAll('._req');

    // запускаем проверку
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  // функции добавления и удаления класса с ошибкой
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.parentElement.classList.add('_error-anim');
    setTimeout(formRemoveErrorAnim, 300, input);
  }
  function formRemoveErrorAnim(input) {
    input.parentElement.classList.remove('_error-anim');
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
  }

  // функция проверки почты
  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }



  const about = [document.querySelector('.about-text-anim'), document.querySelector('.about-img-anim')];

  const aboutOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-100px'
  };

  const aboutObserver = new IntersectionObserver(function (entry, observer) {
    entry.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.add('show-anim');
        aboutObserver.unobserve(item.target);
      }
    });
  }, aboutOptions);

  about.forEach(item => {
    aboutObserver.observe(item);
  });



  const panels = document.querySelectorAll('.panel');

  const panelsOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-100px'
  };

  const panelsObserver = new IntersectionObserver(function (entry, observer) {
    entry.forEach(item => {
      if (item.isIntersecting) {
        item.target.classList.add('show-anim');
        panelsObserver.unobserve(item.target);
      }
    });
  }, panelsOptions);

  panels.forEach(item => {
    panelsObserver.observe(item);
  });

})
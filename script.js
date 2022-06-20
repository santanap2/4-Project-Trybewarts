// Requisito 3
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#senha');
const loginButton = document.querySelector('.login-btn');

function inputVerification() {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', inputVerification);

// Requisito 18 //

function enableCheckbox() {
  const buttonSubmitt = document.querySelector('#submit-btn');
  const buttonCheckbox = document.querySelector('#agreement');
  buttonSubmitt.disabled = !buttonCheckbox.checked;
}

window.onload = function a() {
  const buttonCheckbox = document.querySelector('#agreement');
  buttonCheckbox.addEventListener('change', enableCheckbox);
};

// Requisito 20 //

function contador() {
  const cont = document.getElementById('counter');
  const textArea = document.getElementById('textarea');
  cont.innerText = 500 - (textArea.value.length);
}

const textArea = document.getElementById('textarea');
textArea.addEventListener('input', contador);

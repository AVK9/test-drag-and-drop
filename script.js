import makeMessage from './makeMessage.js';
// /////////////////////
// document.addEventListener('DOMContentLoaded', () => {
//   const refs = {
//     input: document.getElementById('text'),
//     btnStart: document.getElementById('btn-start'),
//     workSheet: document.getElementById('sheet'),
//     dropZone: document.getElementById('drop-zone'), // Додай цей div у HTML для нової зони
//   };

//   let selected = [];

//   function destroyBoxes() {
//     const inputText = refs.input.value;
//     refs.workSheet.innerHTML = '';
//     [...inputText].forEach((i, index) => {
//       const letter = document.createElement('span');
//       letter.textContent = i;
//       letter.setAttribute('ind', index);
//       letter.setAttribute('draggable', true); // Зробити кожен span перетягуваним
//       refs.workSheet.appendChild(letter);
//     });
//   }

//   refs.btnStart.addEventListener('click', destroyBoxes);

//   refs.workSheet.addEventListener('click', e => {
//     if (e.ctrlKey && e.target.tagName === 'SPAN') {
//       e.target.classList.toggle('selected');
//     }
//   });

//   // Обробка подій перетягування
//   refs.workSheet.addEventListener('dragstart', e => {
//     if (e.target.classList.contains('selected')) {
//       selected = Array.from(refs.workSheet.querySelectorAll('.selected'));
//       e.dataTransfer.setData('text/plain', 'selected-elements'); // Мітка для передачі
//     }
//   });

//   refs.dropZone.addEventListener('dragover', e => {
//     e.preventDefault(); // Дозволяємо перетягування на цю зону
//   });

//   refs.dropZone.addEventListener('drop', e => {
//     e.preventDefault();
//     // Переносимо всі виділені елементи у dropZone
//     selected.forEach(el => {
//       refs.dropZone.appendChild(el);
//       el.classList.remove('selected'); // Можна зняти виділення після перенесення
//     });
//     selected = [];
//   });
// });

// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedTheme = localStorage.getItem('settings');
// console.log(savedTheme); // "light"

// const parsedSettings = JSON.parse(savedTheme);
// console.log(parsedSettings); // Settings object

// localStorage.removeItem('settings');
// console.log(localStorage.getItem('settings')); // null

// localStorage.clear();

/////////////////

/////////////////

//////////////
const form = document.querySelector('.feedback-form');
const localStorageKey = 'goit-example-message';
console.log('form.elements.message.value', form.elements.message.value);
form.elements.message.value = localStorage.getItem(localStorageKey) ?? 'пппп';

form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});

console.log(makeMessage('Jacob'));

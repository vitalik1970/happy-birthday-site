$(document).ready(function() {
    $("[data-fancybox]").fancybox({
      loop: true,
      buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "close"
      ],
      thumbs: {
        autoStart: true
      }
    });
  });
// Получаем ссылки на кнопки и галерею
const galleryButton = document.getElementById("gallery-button");
const closeButton = document.getElementById("close-button");
const gallery = document.getElementById("gallery");

// Добавляем обработчик клика на кнопку открытия галереи
galleryButton.addEventListener("click", function() {
// Отображаем галерею
gallery.style.display = "block";
});

// Добавляем обработчик клика на кнопку закрытия галереи
closeButton.addEventListener("click", function() {
// Скрываем галерею
gallery.style.display = "none";
});

let video = document.getElementById("myVideo");

// Get the button
let btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play()
        btn.innerHTML = "Pause video";
    } else {
        video.pause();
        btn.innerHTML = "Play video";
    }
}

// ********************  поздравления  *****************
const input = document.querySelector('.input1');
const pubBtn = document.querySelector('.publish-btn');
const list = document.querySelector('.list');
const privet = document.querySelector('.tim');
const zametki = JSON.parse(localStorage.getItem('zametki')) || []; // Восстановление данных из localStorage

function saveToLocalStorage() {
  localStorage.setItem('zametki', JSON.stringify(zametki)); // Сохранение данных в localStorage
}

function render() {
  list.innerHTML = ""; // Очищаем список перед перерисовкой
  for (let index = 0; index < zametki.length; index++) {
    list.insertAdjacentHTML('beforeend', addingHtml(zametki[index], index));
  }
}

render();

pubBtn.onclick = function () {
  if (input.value.length === 0) {
    return alert('Введите текст и нажмите на кнопку');
  }
  let newInput = { title: input.value, completed: false };
  zametki.unshift(newInput);
  saveToLocalStorage(); // Сохраняем данные в localStorage
  render();
  input.value = ' ';
}

list.onclick = function (event) {
  console.log(event.target.dataset);
  if (event.target.classList.contains('check')) {
    let index = event.target.getAttribute('data-index');
    zametki[index].completed = !zametki[index].completed;
    saveToLocalStorage(); // Сохраняем данные в localStorage
    render();
  }
  // if (event.target.classList.contains('remove')) {
  //     let index = event.target.getAttribute('data-index');
  //       zametki.splice([index], 1);

  //     saveToLocalStorage(); // Сохраняем данные в localStorage
  //     render();
  // }
}
list.onclick = function (event) {
  console.log(event.target.dataset);
  if (event.target.classList.contains('remove')) {
    let index = event.target.getAttribute('data-index');
    console.log(index);
    zametki.splice([index], 1);

    saveToLocalStorage(); // Сохраняем данные в localStorage
    render();
  }
}

function addingHtml(insert, index) {
  return `<li class="message">
    <span class="${insert.completed ? 'line-through-text' : ''}">${insert.title}</span>
    
    <span>
    
    <span class="remove" data-type="remove" data-index="${index}">&times;</span>
    </span>
    </li>`;
}
{/* <span class="check ${insert.completed ? 'greed' : 'green'}" data-type="check" data-index="${index}">&check;</span> */ }


// Получаем элемент с классом .gratters
const grattersLabel = document.querySelector('.gratters');
const closeBtn = document.querySelector('.close-btn')
// Получаем значение стиля display
const displayValue = window.getComputedStyle(grattersLabel).getPropertyValue('display');
function gratFunction() {
  // Если значение display равно 'none', меняем его на 'block'
  if (displayValue === 'none') {
    grattersLabel.style.display = 'flex';
  }
}
function closFunction() {
  // Если значение display равно 'none', меняем его на 'block'
  if (displayValue === 'flex') {
    grattersLabel.style.display = 'none';
  }
}
// Добавляем обработчик клика на кнопку закрытия галереи
closeBtn.addEventListener("click", function () {
  // Скрываем галерею
  grattersLabel.style.display = "none";
});
// *************************************************
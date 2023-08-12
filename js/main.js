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
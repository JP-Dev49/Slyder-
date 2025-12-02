let i = 0;
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots");
let interval

function next() {
  dots.forEach(item => {
    item.classList.remove("dots-active");
  });
  if (i >= slide.length - 1) {
    i = 0;
  } else {
    i++;
  }
  slides.style.transform = `translateX(-${i * 100}%)`;
  dots[i].classList.toggle("dots-active");

  console.log(`-${(i * 100) / slide.length}%`);
}
function previw() {
  dots.forEach(item => {
    item.classList.remove("dots-active");
  });
  if (i >= 0) {
    i --
  } else {
    i = slide.length - 1
  }
  slides.style.transform = `translateX(-${i * 100}%)`;
  dots[i].classList.toggle("dots-active");

  console.log(`-${(i * 100) / slide.length}%`);
}

function initInterval() {
  interval = setInterval(() => {
    next()
  }, 5000);
}

initInterval()
dots.forEach((item, index) => {
  item.addEventListener("click", () => {
    dots.forEach(item => {
      item.classList.remove("dots-active");
    });
    i = index
    slides.style.transform = `translateX(-${i * 100}%)`;
    dots[i].classList.toggle("dots-active");
    clearInterval(interval);
    initInterval()
  })
});
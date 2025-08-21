let i = 0;
let slides = document.querySelector(".slides");
let slide = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots");

setInterval(() => {
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
}, 5000);



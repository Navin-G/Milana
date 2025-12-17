let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // 3 seconds
}

document.querySelectorAll('.auto-swap').forEach(card => {
  const images = card.querySelectorAll('.img-swap img');
  let index = 0;

  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000); // 3 seconds
});


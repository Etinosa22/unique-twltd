const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
   
});

const scrollToTop = () => {
    window.scrollTo(0, 0);
}

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


  document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Adjust this value as needed
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
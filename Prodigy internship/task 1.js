// Show the button when user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


 document.addEventListener('DOMContentLoaded', function () {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            const toggleBtn = document.getElementById('toggleBtn');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            let index = 0;
            const slideWidth = slides[0].clientWidth;
            let isPaused = false;
            let interval;

            function nextSlide() {
                index++;
                if (index === slides.length) {
                    index = 0;
                }
                updateSlide();
            }

            function prevSlide() {
                index--;
                if (index < 0) {
                    index = slides.length - 1;
                }
                updateSlide();
            }

            function updateSlide() {
                const offset = -index * slideWidth;
                document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
            }

            function toggleSlider() {
                isPaused = !isPaused;
                toggleBtn.textContent = isPaused ? 'Play' : 'Pause';
            }

            toggleBtn.addEventListener('click', toggleSlider);

            interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

            prevBtn.addEventListener('click', prevSlide);
            nextBtn.addEventListener('click', nextSlide);
        });
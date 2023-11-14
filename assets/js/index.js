// =============================
// services toggle button js
// ==========================

function showDiv(divNumber) {
  for (let i = 1; i <= 15; i++) {
    const div = document.getElementById(`div${i}`);
    const button = document.getElementById(`btn${i}`);
    
    if (i === divNumber) {
      div.classList.add('active');
      div.classList.remove('hidden');
      button.classList.add('active-button');
    } else {
      div.classList.remove('active');
      div.classList.add('hidden');
      button.classList.remove('active-button');
    }
  }
}

function NestedshowDiv(divNumber) {
  for (let i = 5; i <= 30; i++) {
    const div = document.getElementById(`div${i}`);
    const button = document.getElementById(`btn${i}`);
    
    if (i === divNumber) {
      div.classList.add('active');
      div.classList.remove('hidden');
      button.classList.add('active-button');
    } else {
      div.classList.remove('active');
      div.classList.add('hidden');
      button.classList.remove('active-button');
    }
  }
}

//  click active
let btn1 = document.querySelector("#btn1")
let div5 = document.querySelector("#div5")
let btn5 = document.querySelector("#btn5")
btn1.addEventListener("click",function(){
  div5.classList.add("active")
  btn5.classList.add("active-button")
})

let btn2 = document.querySelector("#btn2")
let btn9 = document.querySelector("#btn9")
let div9 = document.querySelector("#div9")
btn2.addEventListener("click",function(){
  div9.classList.add("active")
  btn9.classList.add("active-button")
})



// =============================
// satisfaction slider js
// ==========================

const sliderContainer = document.getElementById('slider-container');
        const sliderContent = document.getElementById('slider-content');
        const sliderItems = document.querySelectorAll('.slider-item');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dots = document.querySelectorAll('.dot');

        let currentIndex = 0;
        let interval;

        function showCurrentSlide() {
            sliderContent.style.transform = `translateX(-${currentIndex * 1100}px)`; // Adjust the width (e.g., 300) as needed
            updateDots();
        }

        function showNext() {
            if (currentIndex < sliderItems.length - 1) {
                currentIndex++;
                showCurrentSlide();
            }
        }

        function showPrevious() {
            if (currentIndex > 0) {
                currentIndex--;
                showCurrentSlide();
            }
        }

        function goToSlide(index) {
            currentIndex = index;
            showCurrentSlide();
        }

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        prevBtn.addEventListener('click', showPrevious);
        nextBtn.addEventListener('click', showNext);

        function startAutoplay() {
            interval = setInterval(showNext, 3000); // Change the interval (in milliseconds) as needed
        }

        function stopAutoplay() {
            clearInterval(interval);
        }

        // Initially display the first slide and start autoplay
        showCurrentSlide();
        startAutoplay();

        // Pause autoplay when hovering over the slider
        sliderContainer.addEventListener('mouseenter', stopAutoplay);
        sliderContainer.addEventListener('mouseleave', startAutoplay);



// =============================
// portfolio slider js
// ==========================
        

function PshowDiv(divNumber) {
  for (let i = 11; i <= 14; i++) {
      const Pdiv = document.getElementById(`div${i}`);
      const Pbutton = document.getElementById(`btn${i}`);

      if (i === divNumber) {
          Pdiv.classList.add('active');
          Pdiv.classList.remove('hidden');
          Pbutton.classList.add('active-button');
      } else {
          Pdiv.classList.remove('active');
          Pdiv.classList.add('hidden');
          Pbutton.classList.remove('active-button');
      }
  }
}

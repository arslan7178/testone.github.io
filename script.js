var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2800,
      disableOnInteraction: false,
    },
    speed: 1200,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  // Add the parallax effect using translate transform
// document.addEventListener('scroll', function() {
//   let scrollTop = window.scrollY;
//   let parallaxElement = document.querySelector('.image2');
//   parallaxElement.style.transform = 'translateX(' + scrollTop * 0.1 + 'px)';
// });


// Add the parallax effect when a specific image comes into view
// document.addEventListener('scroll', function() {
//   let parallaxElements = document.querySelectorAll('.image2');

//   parallaxElements.forEach(function(parallaxElement) {
//     let elementTop = parallaxElement.getBoundingClientRect().top;
//     let windowHeight = window.innerHeight;

//     if (elementTop < windowHeight) {
//       let scrollTop = window.scrollY;
//       parallaxElement.style.transform = 'translateX(' + scrollTop * 0.01 + 'px)';
//     }
//   });
// });


// Use Intersection Observer API for parallax effect
// Add the parallax effect when the page loads and continue with scrolling
// Add the parallax effect when the page is scrolled and the specific image comes into view
document.addEventListener('scroll', function() {
  let parallaxElement = document.querySelector('.image2');
  let elementTop = parallaxElement.getBoundingClientRect().top;
  let triggerPoint = window.innerHeight / 2; // Adjust this threshold as needed

  // Check if the image is in view
  if (elementTop < triggerPoint) {
    let scrollTop = window.scrollY;
    parallaxElement.style.transform = 'translateX(' + scrollTop * 0.05 + 'px)';
  }
});

document.addEventListener('scroll', function() {
  let parallaxElement = document.querySelector('.image3');
  let elementTop = parallaxElement.getBoundingClientRect().top;
  let triggerPoint = window.innerHeight / 2; // Adjust this threshold as needed

  // Check if the image is in view
  if (elementTop < triggerPoint) {
    let scrollTop = window.scrollY;
    parallaxElement.style.transform = 'translateX(' + scrollTop * 0.09 + 'px)';
  }
});


{/* <script type="text/javascript"> */}
        window.addEventListener('load', () => {
          if (!window.matchMedia('(min-width: 769px)').matches) return;
          const rotate = document.querySelector('#svg-rotate');
          window.addEventListener('scroll', () => {
            const degrees = (window.scrollY / 4) % 360;
            rotate.style.transform = `rotate(${degrees}deg)`;
          });
        });
      // </script>



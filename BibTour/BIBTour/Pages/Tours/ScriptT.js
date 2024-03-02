document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counters span");
    const container = document.querySelector(".counters");
    let activated = false;
  
    //add scroll event to the page
    window.addEventListener("scroll", () => {
      console.log("Sayfa kaydırma olayı tetiklendi");
      if (
        document.pageYOffset >
          container.offsetTop - container.offsetHeight - 200 &&
        activated === false
      ) {
        counters.forEach((counter) => {
          counter.innerText = 0;
          let count = 0;
          function updateCount() {
            const target = parseInt(counter.dataset.count);
  
            if (count < target) {
              //increment the count
              count++;
              //set the counter text to the count
              counter.innerText = count;
              //Repeat this every 10 miliseconds
  
              setTimeout(updateCount, 10);
            } else {
              counter.innerText = target;
            }
          }
  
          updateCount();
          //setactiviated to true
          activated = true;
        });
      } else if (
        document.pageYOffset <
          container.offsetTop - container.offsetHeight - 500 ||
        (document.pageYOffset === 0 && activated === true)
      ) {
        counters.forEach((counter) => {
          counter.innerText = 0;
        });
        activated = false;
      }
    });
  
    let spanTexts = document.getElementsByTagName("span");
  
    window.onload = function () {
      for (spanText of spanTexts) {
        spanText.classList.add("active");
      }
    };
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );
    let currentIndex = 0;
  
    function showSlide(index) {
      const slides = document.querySelector(".slides");
      const totalSlides = document.querySelectorAll(".slide").length;
  
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }
  
      currentIndex = index;
  
      const transformValue = -index * 100 + "%";
      slides.style.transform = "translateX(" + transformValue + ")";
    }
  
    function prevSlide() {
      showSlide(currentIndex - 1);
    }
  
    function nextSlide() {
      showSlide(currentIndex + 1);
    }
  });
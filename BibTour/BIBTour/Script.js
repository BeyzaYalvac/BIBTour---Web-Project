document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counters span");
  const container = document.querySelector(".counters");
  let activated = false;

  // Sayfa kaydırma olayına bağlı olarak counter'ların çalışması
  window.addEventListener("scroll", () => {
    if (
      document.documentElement.scrollTop >
        container.offsetTop - container.offsetHeight - 200 &&
      !activated
    ) {
      counters.forEach((counter) => {
        counter.innerText = 0;
        let count = 0;

        function updateCount() {
          const target = parseInt(counter.dataset.count);

          if (count < target) {
            count++;
            counter.innerText = count;
            setTimeout(updateCount, 10);
          } else {
            counter.innerText = target;
          }
        }

        updateCount();
        activated = true;
      });
    } else if (
      document.documentElement.scrollTop <
        container.offsetTop - container.offsetHeight - 500 ||
      (document.documentElement.scrollTop === 0 && activated === true)
    ) {
      counters.forEach((counter) => {
        counter.innerText = 0;
      });
      activated = false;
    }
  });

  // Tüm counter'ları aktif hale getirme
  window.onload = function () {
    const spanTexts = document.getElementsByTagName("span");
    for (let i = 0; i < spanTexts.length; i++) {
      spanTexts[i].classList.add("active");
    }
  };

  // Sayfa kaydırma durumunu CSS değişkenine ekleme
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

  // Slider işlevleri
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

  // Önceki ve Sonraki butonlarını bağlama
  document.getElementsByClassName("prev").addEventListener("click", prevSlide);
  document.getElementsByClassName("next").addEventListener("click", nextSlide);
});

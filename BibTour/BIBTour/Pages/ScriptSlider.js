document.addEventListener("DOMContentLoaded", function () {
  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");

  next.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0].cloneNode(true));
    document.querySelector(".slide").removeChild(items[0]);
  });

  prev.addEventListener("click", function () {
    let items = document.querySelectorAll(".item");
    document
      .querySelector(".slide")
      .insertBefore(items[items.length - 1].cloneNode(true), items[0]);
    document.querySelector(".slide").removeChild(items[items.length - 1]);
  });
});

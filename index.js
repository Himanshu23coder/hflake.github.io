// select elements
const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

// slider function
arrows.forEach((arrow, i) => {
  const itemNumber = movieList[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerHeight / 200);
    console.log(ratio);
    clickCounter++;
    if (itemNumber - (4.25 + clickCounter) + (4.25 - ratio) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 220
      }px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// toggle function
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-conatiner,.sidebar,.left-menu-icon,.toggle,.movie-list-item-button,.movie-list-item-desc,.movie-list-item-title"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

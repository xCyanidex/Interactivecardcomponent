let ratingbtn = document.querySelectorAll(".rating-btn");

let submitbtn = document.querySelector(".submit-btn");
submitbtn.addEventListener("click", function () {
  if (
    document.querySelector(".rating-value").innerHTML == 1 ||
    document.querySelector(".rating-value").innerHTML == 2 ||
    document.querySelector(".rating-value").innerHTML == 3 ||
    document.querySelector(".rating-value").innerHTML == 4 ||
    document.querySelector(".rating-value").innerHTML == 5
  ) {
    document.querySelector(".div-1").classList.replace("block", "hidden");
    document.querySelector(".div-2").classList.replace("hidden", "block");
  }
});

document.querySelectorAll(".rating-btn").forEach((item) => {
  item.addEventListener("click", function (e) {
    let parent = e.target.parentElement;
    let children = parent.children;
    for (let i = 0; i < children.length; i++) {
      if (children[i].getAttribute("value") == e.target.getAttribute("value")) {
        break;
      } else {
        children[i].classList.replace(
          "bg-medium-gray-custom",
          "bg-gray-circle"
        );
        children[i].classList.replace(
          "text-white-custom",
          "text-light-gray-custom"
        );
      }
    }
    for (let i = children.length - 1; i >= 0; i--) {
      if (children[i].getAttribute("value") == e.target.getAttribute("value")) {
        break;
      } else {
        children[i].classList.replace(
          "bg-medium-gray-custom",
          "bg-gray-circle"
        );
        children[i].classList.replace(
          "text-white-custom",
          "text-light-gray-custom"
        );
      }
    }

    valueRating = e.target.getAttribute("value");
    document.querySelector(".rating-value").innerHTML = valueRating;

    e.target.classList.replace("bg-gray-circle", "bg-medium-gray-custom");
    e.target.classList.replace("text-light-gray-custom", "text-white-custom");
  });
});

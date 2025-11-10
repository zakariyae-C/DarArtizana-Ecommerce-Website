/* Start Show nav burgerMenu */
let burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});
/* End Show nav burgerMenu */
/* Start to top button */
let upBtn = document.getElementById("up");
window.onscroll = function () {
  if (window.scrollY >= 50) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
};
upBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
/* End to top button */
/* Start image slider landing */
let list = document.querySelector(".landing .list");
let items = document.querySelectorAll(".landing .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let bullets = document.querySelectorAll(".landing .bullets li");

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};

prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};

let refreshInterval = setInterval(() => {
  next.click();
}, 3000);

function reloadSlider() {
  list.style.left = -items[active].offsetLeft + "px";

  let activeBullet = document.querySelector(".landing .bullets li.active");
  activeBullet.classList.remove("active");
  bullets[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

bullets.forEach((li, index) => {
  li.addEventListener("click", () => {
    active = index;
    reloadSlider();
  });
});
/* End image slider landing */
/* Start Feedback slider */
let feedbacks = document.querySelector(".feedback .client-feedback");
let feedbackItems = document.querySelectorAll(
  ".feedback .client-feedback .item"
);
let feedbackBullets = document.querySelectorAll(".feedback .bullets li");
let nextFeed = document.getElementById("nextFeed");
let prevFeed = document.getElementById("prevFeed");

let lengthFeedbackItems = feedbackItems.length - 1;
let activeFeedbackItems = 0;

nextFeed.onclick = function () {
  activeFeedbackItems =
    activeFeedbackItems + 1 <= lengthFeedbackItems
      ? activeFeedbackItems + 1
      : 0;
  reloadFeedback();
};

prevFeed.onclick = function () {
  activeFeedbackItems =
    activeFeedbackItems - 1 >= 0
      ? activeFeedbackItems - 1
      : lengthFeedbackItems;
  reloadFeedback();
};

let refInter = setInterval(() => nextFeed.click(), 3000);

function reloadFeedback() {
  feedbacks.style.left = -feedbackItems[activeFeedbackItems].offsetLeft + "px";

  let activeFeedbackBullet = document.querySelector(
    ".feedback .bullets li.active"
  );
  activeFeedbackBullet.classList.remove("active");
  feedbackBullets[activeFeedbackItems].classList.add("active");

  clearInterval(refInter);
  refInter = setInterval(() => nextFeed.click(), 3000);
}

feedbackBullets.forEach((li, index) => {
  li.addEventListener("click", function () {
    activeFeedbackItems = index;
    reloadFeedback();
  });
});
/* End Feedback slider */

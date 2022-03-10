const tabs = document.querySelectorAll(".tab");
const tabTitles = document.querySelectorAll(".tab__title");
const imgs = document.querySelectorAll("img");

tabTitles.forEach((tabTitle) => {
  tabTitle.addEventListener("click", () => {
    if (tabTitle.classList.contains("active")) {
      return;
    }
    tabTitles.forEach((tabTitle) => {
      tabTitle.classList.remove("active");
    });
    tabTitle.classList.add("active");

    if (tabTitles[0].classList.contains("active")) {
      tabs[0].classList.add("active");
      tabs[1].classList.remove("active");
      tabs[2].classList.remove("active");
      imgs[0].classList.add("active");
      imgs[1].classList.remove("active");
      imgs[2].classList.remove("active");
    } else if (tabTitles[1].classList.contains("active")) {
      tabs[1].classList.add("active");
      tabs[0].classList.remove("active");
      tabs[2].classList.remove("active");
      imgs[1].classList.add("active");
      imgs[0].classList.remove("active");
      imgs[2].classList.remove("active");
    } else {
      tabs[2].classList.add("active");
      tabs[1].classList.remove("active");
      tabs[0].classList.remove("active");
      imgs[2].classList.add("active");
      imgs[1].classList.remove("active");
      imgs[0].classList.remove("active");
    }
  });
});

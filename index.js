document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  requestAnimationFrame(() => {
    header.style.opacity = "1";
    header.style.transform = "scale(1)";
  });

  setTimeout(function () {
    document.querySelector(".scroll-indicator").style.opacity = "1";
  }, 8500);

  window.addEventListener("scroll", function () {
    document.querySelector(".scroll-indicator").style.opacity = "0";
  });})

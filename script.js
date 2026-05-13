const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const header = document.querySelector(".top-header");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
  });
}

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (mainNav) {
      mainNav.classList.remove("active");
    }
  });
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 90) {
      element.classList.add("active");
    }
  });
}

function changeHeaderOnScroll() {
  if (!header) return;

  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

const callButtons = document.querySelectorAll('a[href="tel:0912584777"]');

callButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const isMobile = /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);

    if (!isMobile) {
      alert("Vui lòng gọi hotline: 0912584777");
    }
  });
});


window.addEventListener("scroll", function () {
  revealOnScroll();
  changeHeaderOnScroll();
});

window.addEventListener("load", function () {
  revealOnScroll();
  changeHeaderOnScroll();
});
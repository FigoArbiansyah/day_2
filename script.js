// const jumbotron = document.getElementById("#jumbotron");
// const Y = window.pageYOffset;

// function parallax() {
//   jumbotron.style.transform = `translateY(${Y * 10}px)`;
// }

// window.addEventListener("scroll", parallax);

const nav = document.querySelector("nav");
nav.classList.add("-translate-y-20");

function showNavbar() {
  const scrollPosition = window.pageYOffset;

  if (scrollPosition > 100) {
    nav.classList.add("translate-y-0");
  } else {
    nav.classList.remove("translate-y-0");
  }
}

window.addEventListener("scroll", showNavbar);

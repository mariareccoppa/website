const header = document.querySelector('header');

window.addEventListener('load', () => {
  header.classList.add('header-animation');
});

const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    const target = document.querySelector(link.hash);
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

function isInView(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function addVisibleClass() {
  var sections = document.querySelectorAll("section");
  for (var i = 0; i < sections.length; i++) {
    if (isInView(sections[i])) {
      sections[i].classList.add("visible");
    }
  }
}

window.addEventListener("scroll", addVisibleClass);

function animateMariaHeading() {
  const mariaHeading = document.querySelector('h1:first-of-type');
  mariaHeading.style.transform = 'scale(1.8)';
  mariaHeading.style.transition = 'transform 1s';
}

// Call the function on page load
window.addEventListener('load', animateMariaHeading);


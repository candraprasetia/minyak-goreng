function toggleMenu() {
  const menu = document.querySelector('.menu-items');
  menu.classList.toggle('show');
}

function closeMenu() {
  const menu = document.querySelector('.menu-items');
  menu.classList.remove('show');
}

function animateOnScroll() {
  const sections = document.querySelectorAll('.section');
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
          section.classList.add('show');
      } else {
          section.classList.remove('show');
      }
  });
}

window.addEventListener('load', () => {
  animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);
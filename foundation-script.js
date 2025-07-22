const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
const sections = document.querySelectorAll('.section');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < triggerBottom) {
      sec.classList.add('show');
    } else {
      sec.classList.remove('show');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

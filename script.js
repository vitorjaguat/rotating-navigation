const open = document.getElementById('open');
const close = document.getElementById('close');
const homeBtn = document.getElementById('home-btn');
const aboutBtn = document.getElementById('about-btn');
const projectsBtn = document.getElementById('projects-btn');
const contactBtn = document.getElementById('contact-btn');
const container = document.querySelector('.container');
const contents = document.querySelectorAll('.content');

//Toggle nav
open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));

//Pages
homeBtn.addEventListener('click', () => {
  contents.forEach((item) => {
    item.classList.add('hidden');
  });
  contents[0].classList.remove('hidden');
  container.classList.remove('show-nav');
});

aboutBtn.addEventListener('click', () => {
  contents.forEach((item) => {
    item.classList.add('hidden');
  });
  contents[1].classList.remove('hidden');
  container.classList.remove('show-nav');
});

projectsBtn.addEventListener('click', () => {
  contents.forEach((item) => {
    item.classList.add('hidden');
  });
  contents[2].classList.remove('hidden');
  container.classList.remove('show-nav');
});

contactBtn.addEventListener('click', () => {
  contents.forEach((item) => {
    item.classList.add('hidden');
    // item.style.display = 'none';
  });
  contents[3].classList.remove('hidden');

  container.classList.remove('show-nav');
});

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

const burger = document.getElementById('burger');
const links = document.querySelector('.links');
burger?.addEventListener('click', () => {
  const open = links.style.display === 'flex';
  links.style.display = open ? 'none' : 'flex';
  links.style.cssText += open ? '' : 'position:fixed;top:70px;left:0;right:0;background:#F6EEE0;flex-direction:column;padding:24px 32px;gap:20px;z-index:99;';
  document.querySelectorAll('.links a').forEach(a => a.style.color = open ? '' : '#241C15');
});

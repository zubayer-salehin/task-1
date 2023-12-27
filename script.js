// JavaScript functionality for toggling the mobile menu
const toggleButton = document.querySelector('.toggle-button');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  menu.classList.toggle('active');
});

logo.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
  menu.classList.toggle('active');
});

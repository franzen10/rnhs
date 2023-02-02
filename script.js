const logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click', () => {
  alert('You have successfully logged out!');
});

const dropdownBtn = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown')) {
    dropdownContent.classList.remove('show');
  }
});
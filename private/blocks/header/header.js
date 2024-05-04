function header() {
  const hamburger = document.querySelector('.hamburger');
  const body = document.querySelector('body');

  hamburger.addEventListener('click', () => {
    body.classList.toggle('mobile_menu__active');
  });
}

export default header;

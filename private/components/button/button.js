function clickButton() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      button.classList.toggle('active');
    });
  });
}

export default clickButton;

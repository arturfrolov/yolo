function readMore() {
  function pageUp() {
    const upBtn = document.querySelector('.read-more__btns-pageup');
    upBtn.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }
  pageUp();
}

export default readMore;
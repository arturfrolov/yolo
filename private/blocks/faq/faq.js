function faq() {
  // eslint-disable-next-line
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const active = question.classList.contains('active');
      // eslint-disable-next-line
      document.querySelectorAll('.faq-question').forEach(el => {
        el.classList.remove('active');
        // eslint-disable-next-line
        el.nextElementSibling.style.maxHeight = null;
      });

      if (!active) {
        question.classList.add('active');
        const answer = question.nextElementSibling;
        // eslint-disable-next-line
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}
export default faq;

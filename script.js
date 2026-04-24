const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    faqQuestions.forEach((otherButton) => {
      otherButton.setAttribute('aria-expanded', 'false');
      const otherAnswer = otherButton.nextElementSibling;
      otherAnswer.style.maxHeight = '0px';
    });

    if (!isExpanded) {
      button.setAttribute('aria-expanded', 'true');
      const answer = button.nextElementSibling;
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});

const updatedDateElement = document.getElementById('updated-date');
if (updatedDateElement) {
  const today = new Date();
  const formatted = today.toLocaleDateString('nb-NO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  updatedDateElement.textContent = formatted;
}

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.s8-faq-item');

  faqItems.forEach(item => {
    const questionBox = item.querySelector('.s8-faq-question-box');
    
    questionBox.addEventListener('click', () => {
      // Якщо хочете, щоб інші закривались при відкритті нового, розкоментуйте наступні 3 рядки:
      faqItems.forEach(otherItem => {
        if (otherItem !== item) otherItem.classList.remove('is-open');
      });

      // Перемикаємо клас для поточного елемента
      item.classList.toggle('is-open');
    });
  });
});
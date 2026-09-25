document.addEventListener('DOMContentLoaded', () => {
  const swiperS4 = new Swiper('.s4-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    grabCursor: true,
    loop: false,
    
    // Чиста пагінація без додаткових ефектів, що ламають CSS
    pagination: {
      el: '.s4-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.s4-next',
      prevEl: '.s4-prev',
    },
    
    lazy: {
      loadPrevNext: true,
    },
  });
});
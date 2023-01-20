let switchKz = document.querySelector('.tabs__inner__switches--kz');
let switchWorld = document.querySelector('.tabs__inner__switches--world');
let switchKz__items = document.querySelector('.tabs__inner__items__v2');
let switchWorld__items = document.querySelector('.tabs__inner__items');
let specialInfo = document.querySelector('.tabs__inner__special-info');

switchKz.addEventListener('click', function(){
    switchWorld.classList.remove('active');
    switchKz.classList.add('active');
    switchWorld__items.classList.remove('show');
    switchKz__items.classList.add('show');
    specialInfo.classList.add('show');
});

switchWorld.addEventListener('click', function(){
    switchKz.classList.remove('active');
    switchWorld.classList.add('active');
    switchKz__items.classList.remove('show');
    switchWorld__items.classList.add('show');
    specialInfo.classList.remove('show');
});


var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopSlides: 4,
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
    },
    pagination: {
      el: ".s-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    },
  });

let slide = document.querySelector('swiper-slide-active');

  var swiper = new Swiper(".mySwiper2", {
    centeredSlides: true,
      slidesPerView: 1.5,
      spaceBetween: 55,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: ".s-button-next2",
        prevEl: ".s-button-prev2",
      },
    });

  
const sliderBrand = document.querySelector('.swiper-container--brand');
const sliderType = document.querySelector('.swiper-container--type');
const sliderPrices = document.querySelector('.swiper-container--prices');


let swiperBrand = new Swiper(sliderBrand, {
	slidesPerView: 1,
	spaceBetween: 15,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
  },

  breakpoints: {
    460: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    660: {
      slidesPerView: 3
    }
  }
});

let swiperType = new Swiper(sliderType, {
  slidesPerView: 1,
	spaceBetween: 15,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
  },

  breakpoints: {
    460: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    660: {
      slidesPerView: 3
    }
  }
});

let swiperPrices = new Swiper(sliderPrices, {
  slidesPerView: 1,
	spaceBetween: 15,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
  },

  breakpoints: {
    460: {
      slidesPerView: 2,
      spaceBetween: 10
    },
  }
});
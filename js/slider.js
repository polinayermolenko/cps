const TABLET = 768;
const sliderBrand = document.querySelector('.swiper-container--brand');
const sliderDevice = document.querySelector(".swiper-container--device");
const sliderPrice = document.querySelector('.swiper-container--price');

let swiperBrand;
let swiperDevice;
let swiperPrice;
let isSwiperActived = false;

const activateSwiper = () => {
  if (document.documentElement.clientWidth < TABLET) {
    if (isSwiperActived) {
        return false;
    }
    swiperBrand = new Swiper(sliderBrand, {
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
          spaceBetween: 10,
        },

        660: {
          slidesPerView: 3
        }
       }
   });
   swiperDevice = new Swiper(sliderDevice, {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    breakpoints: {
      460: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
  
      660: {
        slidesPerView: 3,
      },
    },
  });
  swiperPrice = new Swiper(sliderPrice, {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    breakpoints: {
      460: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
  });
   isSwiperActived = true;
  } else {
    if (!isSwiperActived) {
        return false;
    }
    swiperBrand.destroy(true, true);
    swiperDevice.destroy(true, true);
    swiperPrice.destroy(true, true);
    isSwiperActived = false;
 }
};

window.onload = activateSwiper;
window.onresize = activateSwiper;
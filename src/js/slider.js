let swiperBrand;
let swiperDevice;
let isSwiperActived = false;
const TABLET = 768;
const sliderBrand = document.querySelector('.swiper-container--brand');
const sliderDevice = document.querySelector(".swiper-container--device");

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
   isSwiperActived = true;
  } else {
    if (!isSwiperActived) {
        return false;
    }
    swiperBrand.destroy(true, true);
    swiperDevice.destroy(true, true)
    isSwiperActived = false;
 }
};

window.onload = activateSwiper;
window.onresize = activateSwiper;
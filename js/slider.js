 
let swiperBrand;
let isSwiperBrandActived = false;
const TABLET = 768;
const sliderBrand = document.querySelector('.swiper-container');


const activateSwiper = () => {
  if (document.documentElement.clientWidth < TABLET) {
    if (isSwiperBrandActived) {
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
   isSwiperBrandActived = true;
  } else {
    if (!isSwiperBrandActived) {
        return false;
    }
    swiperBrand.destroy(true, true);
    isSwiperBrandActived = false;
}
  }
 window.onload = activateSwiper;
  window.onresize = activateSwiper;
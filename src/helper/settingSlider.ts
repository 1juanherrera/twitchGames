// Este archivo contiene la configuración del slider del archivo TopGames.tsx
export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1335,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
}

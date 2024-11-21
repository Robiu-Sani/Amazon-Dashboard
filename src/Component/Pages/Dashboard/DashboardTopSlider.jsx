import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const DashboardTopSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/Pr5MZYK/Grey-Minimalist-Special-Offer-Banner-Landscape.png",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/FgH6NVf/Green-and-Yellow-Simple-Clean-Shoes-Sale-Banner.png",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/Trn6MXF/Black-and-Yellow-Simple-Modern-Special-Offer-Sale-Banner.png",
    },
  ];

  return (
    <div className="relative w-full scroll-animation shadow-md rounded-md h-[150px] sm:h-[250px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full">
            <div className="w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DashboardTopSlider;

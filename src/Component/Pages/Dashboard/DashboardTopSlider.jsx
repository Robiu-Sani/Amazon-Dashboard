import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const DashboardTopSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://img.lovepik.com/background/20211021/large/lovepik-banner-background-image_500453380.jpg",
    },
    {
      id: 2,
      image:
        "https://png.pngtree.com/background/20210709/original/pngtree-flat-yellow-geometric-background-big-promotion-picture-image_351323.jpg",
    },
    {
      id: 3,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/021/053/699/small/background-banners-full-color-geometric-gradations-eps-10-free-vector.jpg",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKR1K6aQaL80IJjWGQNDjt1HLs6oRO9LSa0GqeOrFwD_O_Jgum1CCslBWrP4ilOkBo6FE&usqp=CAU",
    },
  ];

  return (
    <div className="relative w-full shadow-md rounded-md h-[150px] sm:h-[250px] overflow-hidden">
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

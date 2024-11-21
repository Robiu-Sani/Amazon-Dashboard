import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const EmployesOftheYear = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      sellerNumber: "S001",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 2,
      name: "Jane Smith",
      sellerNumber: "S002",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 3,
      name: "Alice Johnson",
      sellerNumber: "S003",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 4,
      name: "Robert Brown",
      sellerNumber: "S004",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 5,
      name: "Emma Wilson",
      sellerNumber: "S005",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 6,
      name: "Liam Miller",
      sellerNumber: "S006",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 7,
      name: "Sophia Davis",
      sellerNumber: "S007",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 8,
      name: "Noah Garcia",
      sellerNumber: "S008",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 9,
      name: "Olivia Martinez",
      sellerNumber: "S009",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 10,
      name: "Elijah Hernandez",
      sellerNumber: "S010",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 11,
      name: "Isabella Moore",
      sellerNumber: "S011",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 12,
      name: "James Clark",
      sellerNumber: "S012",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 13,
      name: "Mia Lewis",
      sellerNumber: "S013",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 14,
      name: "William Walker",
      sellerNumber: "S014",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
    {
      id: 15,
      name: "Ava Young",
      sellerNumber: "S015",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
    },
  ];

  return (
    <div className="w-full scroll-animation">
      <div className="pb-2">
        <strong>Employ of the year</strong>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {employees.map((item) => (
          <SwiperSlide
            className="w-full border bg-white justify-center rounded-md p-4 shadow-md flex flex-col items-center"
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-md h-auto mb-4"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-gray-500">Seller: {item.sellerNumber}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EmployesOftheYear;

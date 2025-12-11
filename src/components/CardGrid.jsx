import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CardItem from "./CardItem";

const CardGrid = ({ products }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        speed={800}
        spaceBetween={20} // khoảng cách giữa các card
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="custom-pagination"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id} className="">
            <CardItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardGrid;

import { Link } from "react-router-dom";
import {
  FaBolt,
  FaPrint,
  FaMoneyBillWave,
  FaHeadset,
  FaLayerGroup,
  FaClock,
} from "react-icons/fa";

import videoBanner from "../../public/video/video-banner.png";

const Banner = () => {
  return (
    <section className="h-full rounded-2xl bg-(--color-secondary) p-4">
      <div className="mx-auto flex h-full w-full flex-col gap-7 lg:flex-row lg:items-center">
        {/* VIDEOq */}
        <div className="shadow_black relative h-100 w-full overflow-hidden rounded-2xl bg-white p-3">
          {/* <video
            src={videoBanner}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full rounded-xl object-cover"
          /> */}
          <img
            src={videoBanner}
            alt=""
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex h-full w-full flex-col items-center justify-center gap-7 text-white">
          <h1 className="text-2xl font-bold uppercase italic">ABOUT US</h1>

          <div className="grid w-full grid-cols-3 gap-4 text-center text-lg">
            <div className="flex flex-col items-center gap-2">
              <FaBolt className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">In ấn nhanh</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaPrint className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">Chất lượng rõ nét</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaMoneyBillWave className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">Giá cả hợp lý</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaHeadset className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">Tư vấn tận tình</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaLayerGroup className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">Đa dạng dịch vụ</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <FaClock className="text-2xl text-(--color-primary)" />
              <span className="font-semibold italic">Đúng hẹn – uy tín</span>
            </div>
          </div>

          <Link to="/product" className="btn-primary">
            Explore more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;

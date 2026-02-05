import anhThe from "../assets/anh-the.jpg";
import photoCopy from "../assets/photocopy.png";
import mayIn from "../assets/muc-may-in.jpg";

const ServicePage = () => {
  return (
    <section className="flex h-full flex-col gap-4 overflow-y-auto rounded-2xl pt-12">
      {/* HEADER */}
      <div className="">
        <h3 className="title mb-4 text-center text-4xl font-bold text-(--color-primary)">
          Dịch vụ khác
        </h3>
        {/* <p className="text-base">
          Ngoài thiết kế in ấn bán sản phẩm, chúng tôi còn làm các dịch vụ khác
          như chụp hình thẻ, photocopy, nạp mực máy in,...
        </p> */}
      </div>

      {/* SERVICES */}
      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* ITEM */}
        <div className="flex h-fit flex-col items-center justify-between gap-3 rounded-xl bg-(--color-primary) p-4 shadow">
          <img
            src={anhThe}
            alt=""
            className="h-40 w-full object-contain sm:h-48"
          />
          <p className="text-lg font-bold text-white italic sm:text-xl">
            Chụp hình thẻ
          </p>
        </div>

        <div className="flex h-fit flex-col items-center justify-between gap-3 rounded-xl bg-(--color-primary) p-4 shadow">
          <img
            src={photoCopy}
            alt=""
            className="h-40 w-fit bg-white object-contain sm:h-48"
          />
          <p className="text-lg font-bold text-white italic sm:text-xl">
            Photocopy
          </p>
        </div>

        <div className="flex h-fit flex-col items-center justify-between gap-3 rounded-xl bg-(--color-primary) p-4 shadow">
          <img
            src={mayIn}
            alt=""
            className="h-40 w-full object-contain sm:h-48"
          />
          <p className="text-lg font-bold text-white italic sm:text-xl">
            Nạp mực máy in
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;

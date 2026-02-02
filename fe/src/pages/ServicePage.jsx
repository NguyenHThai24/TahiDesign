import anhThe from "../assets/anh-the.jpg";
import photoCopy from "../assets/photocopy.png";
import mayIn from "../assets/muc-may-in.jpg";

const ServicePage = () => {
  return (
    <section className="flex h-full flex-col gap-4 overflow-y-auto rounded-2xl bg-(--color-secondary) p-4 sm:p-6">
      {/* HEADER */}
      <div className="text-balck max-w-xl font-medium">
        <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
          Tahi Design
        </h3>
        <p className="text-base">
          Ngoài thiết kế in ấn bán sản phẩm, chúng tôi còn làm các dịch vụ khác
          như chụp hình thẻ, photocopy, nạp mực máy in,...
        </p>
      </div>

      {/* SERVICES */}
      <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* ITEM */}
        <div className="flex flex-col items-center justify-between gap-3 rounded-xl bg-white p-4 shadow">
          <img
            src={anhThe}
            alt=""
            className="h-40 w-full object-contain sm:h-48"
          />
          <p className="text-lg font-bold text-(--color-primary) italic sm:text-xl">
            Chụp hình thẻ
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 rounded-xl bg-white p-4 shadow">
          <img
            src={photoCopy}
            alt=""
            className="h-40 w-full object-contain sm:h-48"
          />
          <p className="text-lg font-bold text-(--color-primary) italic sm:text-xl">
            Photocopy
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 rounded-xl bg-white p-4 shadow">
          <img
            src={mayIn}
            alt=""
            className="h-40 w-full object-contain sm:h-48"
          />
          <p className="text-lg font-bold text-(--color-primary) italic sm:text-xl">
            Nạp mực máy in
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;

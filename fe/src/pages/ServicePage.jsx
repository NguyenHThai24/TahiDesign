import anhThe from "../assets/anh-the.jpg";
import photoCopy from "../assets/photocopy.png";
import mayIn from "../assets/muc-may-in.jpg";

const ServicePage = () => {
  return (
    <section className="h-full rounded-2xl bg-(--color-primary) p-6">
      <div className="mb-6 max-w-xl text-white">
        <h3 className="mb-4 text-3xl font-bold text-yellow-400">Tahi Design</h3>
        <p>
          Ngoài thiết kế in ấn bán sản phẩm, chúng tôi còn làm các dịch vụ khác
          như chụp hình thẻ, photocopy, nạp mực máy in,...
        </p>
      </div>
      <div className="flex gap-4">
        <div className="flex w-50 flex-col items-center justify-between gap-3 bg-white p-2">
          <img src={anhThe} alt="" className="w-full p-4" />
          <p className="text-2xl font-bold text-(--color-primary) italic">
            Chụp hình thẻ
          </p>
        </div>
        <div className="flex w-50 flex-col items-center justify-between gap-3 bg-white p-2">
          <img src={photoCopy} alt="" className="w-full p-4" />
          <p className="text-2xl font-bold text-(--color-primary) italic">
            Photocopy
          </p>
        </div>
        <div className="flex w-50 flex-col items-center justify-between gap-3 bg-white p-2">
          <img src={mayIn} alt="" className="w-full p-4" />
          <p className="text-2xl font-bold text-(--color-primary) italic">
            Nạp mực máy in
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;

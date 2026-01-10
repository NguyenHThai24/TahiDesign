import thiepIMG from "/images/li-xi.png";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Introduce = () => {
  return (
    <section className="mx-auto my-6 w-full max-w-7xl">
      <div className="flex h-full w-full items-center gap-4">
        <div className="flex w-full justify-end">
          <img src={thiepIMG} alt="" />
        </div>
        <div className="w-full space-y-4">
          <p className="title text-2xl text-(--secondary-color)">
            Vì sao nên chọn Tahi Design?
          </p>
          <p className="flex items-center gap-4">
            <IoCheckmarkDoneSharp color="#58901f" />
            Thiết kế độc quyền
          </p>
          <p className="flex items-center gap-4">
            <IoCheckmarkDoneSharp color="#58901f" />
            Chất liệu cao cấp
          </p>
          <p className="flex items-center gap-4">
            <IoCheckmarkDoneSharp color="#58901f" />
            Tinh tế trong từng chi tiết
          </p>
          <button className="btn">Xem thêm</button>
        </div>
      </div>
    </section>
  );
};

export default Introduce;

import meImg from "../../../public/images/aboutImg.png";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const About = ({ title }) => {
  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <h3 className="title">{title}</h3>
        <p className="italic text-sm font-medium leading-6">
          Chúng tôi mang đến giải pháp trọn vẹn
          <br />
          cho những khoảnh khắc quan trọng của bạn.
        </p>
      </div>
      <div className="w-full flex gap-4 max-w-4xl mx-auto">
        <div className="w-full flex flex-col justify-center gap-10">
          <div className="text-left max-w-xs">
            <div className="mb-5 text-(--text-color) flex justify-start pl-2">
              <TfiHeadphoneAlt size={25} />
            </div>
            <h2 className="font-bold mb-2">Hỗ trợ nhanh 24/7</h2>
            <p className="text-gray-600 text-sm">
              Tư vấn nhanh, chỉnh sửa linh hoạt, đúng hẹn.
            </p>
          </div>

          <div className="text-left max-w-xs">
            <div className="mb-5 text-(--text-color) flex justify-start pl-2">
              <TfiHeadphoneAlt size={25} />
            </div>
            <h2 className="font-bold mb-2">Hỗ trợ nhanh 24/7</h2>
            <p className="text-gray-600 text-sm">
              Tư vấn nhanh, chỉnh sửa linh hoạt, đúng hẹn.
            </p>
          </div>
        </div>

        <div className="w-full">
          <img src={meImg} alt="" className="max-h-[400px]" />
        </div>
        <div className="w-full flex flex-col justify-center gap-10">
          <div className="text-left max-w-xs">
            <div className="mb-5 text-(--text-color) flex justify-start pl-2">
              <TfiHeadphoneAlt size={25} />
            </div>
            <h2 className="font-bold mb-2">Hỗ trợ nhanh 24/7</h2>
            <p className="text-gray-600 text-sm">
              Tư vấn nhanh, chỉnh sửa linh hoạt, đúng hẹn.
            </p>
          </div>

          <div className="text-left max-w-xs">
            <div className="mb-5 text-(--text-color) flex justify-start pl-2">
              <TfiHeadphoneAlt size={25} />
            </div>
            <h2 className="font-bold mb-2">Hỗ trợ nhanh 24/7</h2>
            <p className="text-gray-600 text-sm">
              Tư vấn nhanh, chỉnh sửa linh hoạt, đúng hẹn.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

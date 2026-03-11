import {
  FaPrint,
  FaCopy,
  FaCamera,
  FaFileAlt,
  FaPaintBrush,
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaImage,
} from "react-icons/fa";

const servicesLeft = [
  { icon: <FaPrint />, text: "In ấn tài liệu" },
  { icon: <FaCopy />, text: "Photocopy" },
  { icon: <FaCamera />, text: "Chụp hình thẻ" },
  { icon: <FaFileAlt />, text: "Nhận chỉnh sửa tài liệu" },
];

const servicesRight = [
  { icon: <FaEnvelopeOpenText />, text: "Thiết kế thiệp cưới theo yêu cầu" },
  { icon: <FaCalendarAlt />, text: "Thiết kế lịch (treo tường, để bàn)" },
  { icon: <FaImage />, text: "Thiết kế ảnh / chỉnh sửa ảnh" },
  { icon: <FaPaintBrush />, text: "Thiết kế theo yêu cầu" },
];

const Service = () => {
  return (
    <section className="my-16">
      {/* Title */}
      <h3 className="text-center text-2xl font-bold uppercase">
        <span className="bg-linear-to-r from-black to-(--color-primary) bg-clip-text text-transparent">
          Dịch vụ
        </span>
        <span className="mx-auto mt-2 block h-1 w-20 rounded-full bg-linear-to-r from-(--color-primary) to-black"></span>{" "}
      </h3>

      {/* Content */}
      <div className="mx-auto mt-12 grid max-w-7xl items-center gap-8 md:grid-cols-2">
        {/* Left */}
        <div className="w-full justify-self-end border border-gray-200 bg-[radial-gradient(circle_at_top_right,#dff1d8_0%,#ffffff_30%)] p-6">
          <ul className="space-y-4">
            {servicesLeft.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-lg text-black">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="w-full justify-self-start border border-gray-200 bg-[radial-gradient(circle_at_bottom_right,#dff1d8_0%,#ffffff_30%)] p-6">
          <ul className="space-y-4">
            {servicesRight.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-lg text-black">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;

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

const Service = ({ title }) => {
  return (
    <section className="my-16 px-4">
      {/* Title */}
      <h3 className="relative mx-auto inline-block w-full text-center text-2xl font-bold tracking-wide uppercase">
        {title}
        <span className="mx-auto mt-1 block h-0.5 w-16 rounded-full bg-black"></span>
      </h3>

      {/* Content */}
      <div className="mx-auto mt-12 grid max-w-6xl items-center gap-8 md:grid-cols-2">
        {/* Left */}
        <div className="w-full justify-self-end rounded border border-gray-200 bg-[radial-gradient(circle_at_top_right,#dff1d8_0%,#ffffff_30%)] p-6">
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
        <div className="w-full justify-self-start rounded border border-gray-200 bg-[radial-gradient(circle_at_bottom_right,#dff1d8_0%,#ffffff_30%)] p-6">
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

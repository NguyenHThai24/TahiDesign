import { FaRegEdit, FaShoppingCart, FaFileAlt, FaTruck } from "react-icons/fa";

const steps = [
  {
    id: 1,
    icon: <FaRegEdit size={40} />,
    title: "Bước 1",
    desc: "Tư vấn & báo giá",
    detail:
      "Khách hàng cung cấp yêu cầu, chúng tôi tư vấn mẫu mã, chất liệu và báo giá chi tiết.",
  },
  {
    id: 2,
    icon: <FaShoppingCart size={40} />,
    title: "Bước 2",
    desc: "Đặt cọc & thanh toán",
    detail:
      "Xác nhận đơn hàng và tiến hành đặt cọc để bắt đầu quy trình thiết kế.",
  },
  {
    id: 3,
    icon: <FaFileAlt size={40} />,
    title: "Bước 3",
    desc: "Thiết kế & duyệt file",
    detail:
      "Thiết kế demo theo yêu cầu, chỉnh sửa đến khi khách hàng hài lòng.",
  },
  {
    id: 4,
    icon: <FaTruck size={40} />,
    title: "Bước 4",
    desc: "In ấn & giao hàng",
    detail: "Tiến hành sản xuất và giao hàng tận nơi đúng thời gian cam kết.",
  },
];

const OrderingProcess = () => {
  return (
    <section className="my-16">
      {/* Title */}
      <h3 className="text-center text-2xl font-bold uppercase">
        <span className="bg-linear-to-r from-(--color-primary) to-black bg-clip-text text-transparent">
          Quy trình mua hàng
        </span>
        <span className="mx-auto mt-2 block h-1 w-42 rounded-full bg-linear-to-r from-black to-(--color-primary)"></span>{" "}
      </h3>

      {/* Steps */}
      <div className="mt-10 grid grid-cols-1 gap-6 bg-white p-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center px-4 text-center"
          >
            {/* Icon */}
            <div className="mb-3 text-gray-400">{step.icon}</div>

            {/* Step title */}
            <p className="font-semibold">{step.title}</p>

            {/* Short desc */}
            <p className="text-lg font-bold text-(--color-primary)">
              {step.desc}
            </p>

            {/* Detail */}
            <p className="mt-4 text-base leading-relaxed text-gray-900">
              {step.detail}
            </p>

            {/* Divider (desktop only) */}
            {index !== steps.length - 1 && (
              <div className="absolute top-1/2 right-0 hidden h-full w-px -translate-y-1/2 bg-gray-300 md:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OrderingProcess;

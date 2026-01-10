import { Link } from "react-router-dom";
import thiepCuoiIMG from "../../public/images/li-xi.png";
import { FiPrinter, FiPackage, FiHeart, FiAward } from "react-icons/fi";

const Introduce = ({ title }) => {
  const services = [
    {
      icon: <FiHeart className="text-2xl" />,
      title: "Thiết kế độc quyền",
      description: "Mẫu mã đa dạng, cá nhân hóa theo yêu cầu",
    },
    {
      icon: <FiPrinter className="text-2xl" />,
      title: "In ấn chất lượng",
      description: "Công nghệ in hiện đại, màu sắc chuẩn xác",
    },
  ];

  const features = [
    {
      icon: <FiPackage className="text-2xl" />,
      title: "Bao bì sang trọng",
      description: "Thiết kế bao bì ấn tượng, chất lượng cao",
    },
    {
      icon: <FiAward className="text-2xl" />,
      title: "Uy tín 10 năm",
      description: "Đồng hành cùng hàng ngàn khách hàng",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-6">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <h3 className="title mb-6 text-3xl font-bold">{title}</h3>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Chúng tôi chuyên thiết kế và in ấn cao cấp, <br />
            biến những ý tưởng của bạn thành tác phẩm nghệ thuật
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-12 flex flex-col items-center gap-8 lg:flex-row lg:gap-16">
          {/* Left Column - Services */}
          <div className="w-full space-y-10">
            {services.map((service, index) => (
              <div key={index} className="hover:scale-[1.02]">
                <div className="flex flex-col items-start gap-4">
                  <div className="rounded-xl bg-linear-to-br from-green-50 to-green-100 p-2">
                    <div className="text-green-600">{service.icon}</div>
                  </div>
                  <div>
                    <h4 className="mb-4 text-xl font-bold text-gray-800">
                      {service.title}
                    </h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="relative w-full">
            {/* Main image container */}
            <div className="relative">
              <img
                src={thiepCuoiIMG}
                alt="Thiết kế thiệp cưới cao cấp"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="w-full space-y-10">
            {features.map((feature, index) => (
              <div key={index} className="hover:scale-[1.02]">
                <div className="flex flex-col items-start gap-4">
                  <div className="rounded-xl bg-linear-to-br from-green-50 to-green-100 p-2">
                    <div className="text-green-600">{feature.icon}</div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/about"
            className="btn inline-flex items-center gap-3 rounded-full bg-(--secondary-color) hover:scale-105 hover:shadow-xl"
          >
            <span>Xem thêm</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduce;

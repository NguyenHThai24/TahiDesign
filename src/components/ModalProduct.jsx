import { useState } from "react";

const ModalProduct = ({ product, onClose }) => {
  const [activeImg, setActiveImg] = useState(product?.images?.[0]);
  const [zoom, setZoom] = useState(false);

  if (!product) return null;

  return (
    <>
      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
        {/* BACKDROP */}
        <div className="absolute inset-0" onClick={onClose}></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-4xl rounded-2xl bg-white bg-[radial-gradient(circle_at_bottom_right,#dff1d8_0%,#ffffff_30%)] p-4 sm:p-6">
          {/* HEADER */}
          <div className="relative">
            <h3 className="mb-4 text-center text-lg font-bold uppercase sm:text-2xl">
              <span className="bg-linear-to-r from-black to-(--color-primary) bg-clip-text text-transparent">
                Mã sản phẩm: {product.id}
              </span>
              <span className="mx-auto mt-2 block h-1 w-16 rounded-full bg-linear-to-r from-(--color-primary) to-black sm:w-20"></span>
            </h3>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border text-base font-bold text-red-600 transition hover:bg-red-100 sm:h-10 sm:w-10"
            >
              ✕
            </button>
          </div>

          {/* MAIN IMAGE */}
          <div className="flex justify-center">
            <div className="flex h-64 w-full items-center justify-center overflow-hidden sm:h-80 md:h-96">
              <img
                src={activeImg}
                alt=""
                onClick={() => setZoom(true)}
                className="max-h-full cursor-zoom-in object-contain transition"
              />
            </div>
          </div>

          {/* THUMBNAILS */}
          <div className="mt-5 flex gap-3 overflow-x-auto px-1 sm:justify-center sm:overflow-visible">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => setActiveImg(img)}
                className={`h-14 w-14 shrink-0 cursor-pointer rounded-lg border object-cover sm:h-16 sm:w-16 ${
                  activeImg === img ? "border-black" : "border-gray-200"
                }`}
              />
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-6 rounded-xl bg-green-50 p-4 text-gray-700 shadow-sm sm:mt-7">
            <p className="mb-2 text-xl font-semibold text-green-700">
              Thông tin đặt hàng
            </p>

            <div className="flex flex-col gap-2 text-base">
              <p>
                - Quý khách đặt hàng vui lòng liên hệ qua{" "}
                <span className="font-semibold text-green-600">
                  Zalo / Điện thoại:
                </span>{" "}
                <span className="text-lg font-bold">0123 456 789</span>
              </p>

              <p>
                - Hoặc liên hệ qua{" "}
                <span className="font-semibold text-blue-600">Facebook:</span>{" "}
                <a
                  href="https://facebook.com"
                  className="text-lg font-medium text-blue-500 underline hover:text-blue-600"
                >
                  facebook.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ZOOM FULL SCREEN */}
      {zoom && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black p-4"
          onClick={() => setZoom(false)}
        >
          <img
            src={activeImg}
            alt=""
            className="max-h-full max-w-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default ModalProduct;

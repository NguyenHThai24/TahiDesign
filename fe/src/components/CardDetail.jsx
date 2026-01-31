import { useState } from "react";

const CardDetail = ({ item, onClose }) => {
  const { name, price, salePrice, currency, images, material, size } = item;

  const [activeImage, setActiveImage] = useState(images.main);
  const [zoomImage, setZoomImage] = useState(null);

  const formatPrice = (value) => value.toLocaleString("vi-VN") + " " + currency;

  return (
    <>
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/90" onClick={onClose} />

        <div className="relative z-10 w-225 rounded bg-white p-3 shadow-2xl">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 bottom-2 rounded-full bg-red-500 px-4 py-1 text-sm text-white"
          >
            Đóng
          </button>

          <div className="grid grid-cols-2 gap-6">
            {/* Images */}
            <div>
              {/* Main image */}
              <img
                src={activeImage}
                alt={name}
                onClick={() => setZoomImage(activeImage)}
                className="mb-3 h-[420px] w-full cursor-zoom-in rounded object-cover"
              />

              {/* Gallery */}
              <div className="flex gap-2 overflow-x-auto">
                {images.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setActiveImage(img)}
                    className={`h-20 w-20 cursor-pointer rounded border object-cover transition ${
                      activeImage === img
                        ? "border-red-500"
                        : "border-gray-200 hover:border-gray-400"
                    } `}
                  />
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 className="mb-2 text-2xl font-bold">{name}</h2>

              <div className="mb-4 flex gap-2">
                <span className="text-xl font-semibold text-red-600">
                  {formatPrice(salePrice)}
                </span>
                <span className="text-gray-400 line-through">
                  {formatPrice(price)}
                </span>
              </div>

              <ul className="space-y-2 text-sm">
                <li>
                  <b>Material:</b> {material}
                </li>
                <li>
                  <b>Size:</b> {size.width} × {size.height} {size.unit}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomImage && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/95">
          <img
            src={zoomImage}
            alt="Zoom"
            className="max-h-[90vh] max-w-[90vw] rounded object-contain"
          />
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-6 right-6 text-3xl text-white"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default CardDetail;

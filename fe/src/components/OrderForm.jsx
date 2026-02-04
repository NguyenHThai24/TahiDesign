import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import productsData from "../../public/data/productsData.json";
import { useEffect, useState } from "react";

const OrderForm = ({ id, onClose }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;

    const foundProduct = productsData.find(
      (item) => String(item.id) === String(id),
    );

    setProduct(foundProduct || null);
  }, [id]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3">
      <div className="max-h-[95vh] w-full overflow-y-auto rounded-2xl bg-white p-4 shadow-xl sm:p-6 md:max-w-2xl">
        {/* HEADER */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold sm:text-xl">Thông tin đặt hàng</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-red-100 hover:text-red-500"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* PRODUCT INFO */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
          {/* TÊN */}
          <div className="w-full">
            <label className="font-semibold">Tên sản phẩm</label>
            <input
              value={product?.name || ""}
              readOnly
              className="w-full rounded bg-(--color-primary) p-2 font-bold text-white"
            />
          </div>

          {/* GIÁ */}
          <div className="w-full sm:w-56">
            <label className="font-semibold">Giá</label>
            <p className="flex h-[42px] items-center gap-1 rounded bg-(--color-primary) p-2 font-bold text-white">
              {product?.price ? product.price.toLocaleString("vi-VN") : ""}
              <span>đ/cái</span>
            </p>
          </div>
        </div>

        {/* FORM */}
        <form className="space-y-4 rounded bg-white p-3 shadow sm:p-5">
          {/* HỌ TÊN + SĐT */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium">Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>

            <div>
              <label className="mb-1 block font-medium">Số điện thoại</label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại"
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
          </div>

          {/* ĐỊA CHỈ */}
          <div>
            <label className="mb-1 block font-medium">Địa chỉ</label>
            <input
              type="text"
              placeholder="Nhập địa chỉ"
              className="w-full rounded-lg border px-3 py-2"
            />
          </div>

          {/* SỐ LƯỢNG – TƯ VẤN – NGÀY */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* SỐ LƯỢNG */}
            <div>
              <label className="mb-1 block font-medium">Số lượng</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value)))
                }
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>

            {/* TƯ VẤN */}
            <div>
              <label className="mb-1 block font-medium">Nhận tư vấn qua</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" value="phone" />
                  SĐT
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" value="zalo" />
                  Zalo
                </label>
              </div>
            </div>

            {/* NGÀY */}
            <div>
              <label className="mb-1 block font-medium">
                Thời gian nhận hàng
              </label>
              <input
                type="date"
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
          </div>

          {/* GHI CHÚ */}
          <div>
            <label className="mb-1 block font-medium">Ghi chú</label>
            <textarea
              rows="3"
              placeholder="Nhập ghi chú thêm..."
              className="w-full rounded-lg border px-3 py-2"
            ></textarea>
          </div>

          {/* BUTTON */}
          <button type="submit" className="btn-primary w-full">
            Gửi thông tin
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-4 text-center text-sm sm:text-base">
          <p>
            Cảm ơn quý khách đã tin tưởng và đặt hàng từ chúng tôi. Chúng tôi sẽ
            cố gắng tiếp nhận thông tin sớm nhất.
          </p>
          <Link
            to="/contact"
            className="text-(--color-primary) italic underline"
          >
            Xem quy trình đặt hàng
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;

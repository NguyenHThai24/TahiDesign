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
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex justify-between">
          <h2 className="text-xl font-bold">Thông tin đặt hàng</h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-red-100 hover:text-red-500"
          >
            <FaTimes size={14} />
          </button>
        </div>
        <div className="flex w-full gap-4">
          {/* ID có sẵn */}
          {/* <div className="w-fit">
            <label className="font-semibold">ID Sản phẩm</label>
            <input
              value={id}
              readOnly
              className="w-full rounded bg-(--color-primary) p-2 font-bold text-white outline-0 focus:outline-0"
            />
          </div> */}{" "}
          <div className="w-full">
            <label className="font-semibold">Tên sản phẩm</label>
            <input
              value={product?.name || ""}
              readOnly
              className="w-full rounded bg-(--color-primary) p-2 font-bold text-white outline-0"
            />
          </div>
          {/* giá sản phẩm*/}
          <div className="w-fit">
            <label className="font-semibold">Giá</label>
            <p className="flex gap-1 rounded bg-(--color-primary) p-2 font-bold text-white outline-0">
              {product?.price ? product.price.toLocaleString("vi-VN") : ""}{" "}
              <span>đ/cái</span>
            </p>
          </div>
        </div>
        <form class="shadow_black mx-auto mt-2 max-w-xl space-y-4 rounded bg-white p-6">
          <div className="flex w-full justify-between gap-4">
            {/* <!-- Họ và tên --> */}
            <div className="w-full">
              <label class="mb-1 block font-medium">Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                class="w-full rounded-lg border px-3 py-2"
              />
            </div>
            {/* <!-- Số điện thoại --> */}
            <div className="w-full">
              <label class="mb-1 block font-medium">Số điện thoại</label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại"
                class="w-full rounded-lg border px-3 py-2"
              />
            </div>
          </div>
          <div className="flex w-full justify-between gap-4">
            {/* <!-- Địa chỉ --> */}
            <div className="w-full">
              <label class="mb-1 block font-medium">Địa chỉ</label>
              <input
                type="text"
                placeholder="Nhập địa chỉ"
                class="w-full rounded-lg border px-3 py-2"
              />
            </div>
          </div>

          <div className="flex w-full justify-between gap-4">
            {/* <!-- Số lượng --> */}
            <div className="w-fit">
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

            {/* <!-- Nhận tư vấn --> */}
            <div className="w-fit">
              <label class="mb-2 block font-medium">Nhận tư vấn qua</label>
              <div class="flex gap-4">
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contact"
                    value="phone"
                    class="accent-blue-500"
                  />
                  SĐT
                </label>
                <label class="flex items-center gap-2">
                  <input
                    type="radio"
                    name="contact"
                    value="zalo"
                    class="accent-blue-500"
                  />
                  Zalo
                </label>
              </div>
            </div>

            {/* <!-- Thời gian nhận hàng --> */}
            <div className="w-full">
              <label class="mb-1 block font-medium">Thời gian nhận hàng</label>
              <input type="date" class="w-full rounded-lg border px-3 py-2" />
            </div>
          </div>
          {/* <!-- Ghi chú --> */}
          <div>
            <label class="mb-1 block font-medium">Ghi chú</label>
            <textarea
              rows="3"
              placeholder="Nhập ghi chú thêm..."
              class="w-full rounded-lg border px-3 py-2"
            ></textarea>
          </div>

          {/* <!-- Button --> */}
          <button type="submit" className="btn-primary">
            Gửi thông tin
          </button>
        </form>

        {/* các field khác bạn tự thêm */}

        <div className="mt-4 w-full text-center">
          <p className="">
            Cảm ơn quý khách đã tin tưởng và đặt hàng từ chúng tôi. Chúng tôi sẽ
            cố gắn tiếp nhận thông tin và tư vấn cho quý khách sớm nhất có thể.
          </p>
          <Link
            to={"/contact"}
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

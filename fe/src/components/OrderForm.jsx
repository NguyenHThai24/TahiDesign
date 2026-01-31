import { FaTimes } from "react-icons/fa";

const OrderForm = ({ id, onClose }) => {
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

        {/* ID có sẵn */}
        <div className="mb-4">
          <label className="font-semibold">ID Sản phẩm</label>
          <input
            value={id}
            readOnly
            className="w-full rounded border p-2 outline-0 focus:outline-0"
          />
        </div>

        {/* các field khác bạn tự thêm */}
        <button className="btn-primary">Gửi đơn hàng</button>
        <div className="mt-7 w-full text-center">
          <h3 className="mb-3 text-xl font-bold">Lưu ý khi đặt hàng</h3>
          <p className="">
            Quý khách vui lòng điền đầy đủ thông tin, trong vòng 24h chúng tôi
            sẻ gọi điện hoặc nhắn tin qua Zalo để xác nhận đơn hàng
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;

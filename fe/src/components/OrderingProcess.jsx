const OrderingProcess = () => {
  return (
    <div className="rounded-2xl bg-(--color-primary) p-6 text-white">
      <h2 className="mb-4 text-2xl font-bold italic">Quy trình đặt hàng</h2>
      <div className="flex flex-col gap-3">
        <p>
          <b className="text-yellow-400">Bước 1:</b> Liên hệ với chúng tôi qua
          hotline hoặc email để được tư vấn.
        </p>
        <p>
          <b className="text-yellow-400">Bước 2:</b> Cung cấp thông tin sản phẩm
          bạn muốn in ấn.
        </p>
        <p>
          <b className="text-yellow-400">Bước 3:</b> Chúng tôi sẽ báo giá và xác
          nhận đơn hàng.
        </p>
        <p>
          <b className="text-yellow-400">Bước 4:</b> Bạn thanh toán và gửi mẫu
          thiết kế (nếu có).
        </p>
        <p>
          <b className="text-yellow-400">Bước 5:</b> Chúng tôi tiến hành sản
          xuất sản phẩm.
        </p>
        <p>
          <b className="text-yellow-400">Bước 6:</b> Giao hàng tận nơi hoặc bạn
          đến lấy sản phẩm.
        </p>
      </div>
    </div>
  );
};

export default OrderingProcess;

import CardItem from "./CardItem";
const ListItem = ({ products }) => {
  if (!products.length) {
    return (
      <div className="shadow_black flex h-fit max-w-80 flex-col justify-between rounded-2xl bg-white text-center text-lg text-(--color-primary) italic">
        <p className="p-6">
          Chúng tôi xin lỗi vì sự bất tiện này. Hiện tại chưa có sản phẩm nào
          đáp ứng đúng tiêu chí mà quý khách đã chọn. Xin vui lòng điều chỉnh bộ
          lọc hoặc tham khảo các sản phẩm khác của cửa hàng.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
        {products.map((product) => (
          <CardItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ListItem;

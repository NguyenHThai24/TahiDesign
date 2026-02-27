const CardItem = ({ item }) => {
  return (
    <div className="cursor-pointer overflow-hidden border border-gray-200 bg-white transition hover:shadow-lg">
      {/* Image */}
      <img
        src={item.images[0]}
        alt={item.name}
        className="h-48 w-full object-contain"
      />

      {/* Info */}
      <div className="p-3 text-center">
        <p className="text-sm font-medium">{item.name}</p>
        <p className="mt-1 font-semibold text-red-500">
          <span className="text-black">Giá tham khảo:</span>{" "}
          {item.price.toLocaleString()}đ/cái
        </p>
      </div>
    </div>
  );
};

export default CardItem;

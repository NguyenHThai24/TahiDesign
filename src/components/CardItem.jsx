const CardItem = ({ item, onClick }) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="flex justify-center">
        <div className="relative w-full">
          {/* Card */}
          <div className="relative overflow-hidden border border-gray-200 bg-white p-4">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={item.images[0]}
                alt={item.name}
                className="h-64 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* NAME (hiện từ dưới lên, nằm trong card) */}
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded bg-white/90 px-4 py-2 text-sm font-semibold whitespace-nowrap shadow-md backdrop-blur">
                  {item.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

const CardItem = ({ item }) => {
  return (
    <div className="group cursor-pointer">
      <div className="flex justify-center py-4">
        <div className="relative w-52 md:w-60 lg:w-68">
          {/* Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.25)]">
            {/* Image */}
            <div className="flex justify-center">
              <img
                src={item.images[0]}
                alt={item.name}
                className="h-48 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* NAME (hiện từ dưới lên, nằm trong card) */}
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold whitespace-nowrap shadow-md backdrop-blur">
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

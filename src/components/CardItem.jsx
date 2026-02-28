const CardItem = ({ item }) => {
  return (
    <div className="group cursor-pointer">
      <div className="flex justify-center py-4">
        <div className="relative h-52 w-52 md:h-60 md:w-60">
          {/* Background */}
          <div className="rounded-full bg-[radial-gradient(circle_at_center,#dff1d8_0%,#ffffff_70%)] pt-28 pb-6">
            {/* Image wrapper */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="relative h-52 w-52">
                {/* FAKE SHADOW */}
                <div className="absolute -bottom-2.5 left-1/2 h-6 w-32 -translate-x-1/2 rounded-full bg-black/20 blur-xl transition-all duration-300 group-hover:w-40 group-hover:opacity-30"></div>

                {/* Circle */}
                <div className="relative z-10 h-52 w-52 rounded-full bg-white p-5 shadow-[0_25px_60px_rgba(0,0,0,0.25)] ring-4 ring-white transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.35)]">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />

                  {/* NAME nằm trong nhưng trồi ra */}
                  <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold whitespace-nowrap shadow-lg">
                        {item.name}
                      </div>
                    </div>
                  </div>
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

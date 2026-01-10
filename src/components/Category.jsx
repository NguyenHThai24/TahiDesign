const Category = ({ data = [] }) => {
  return (
    <section className="mx-auto -mt-20 flex max-w-7xl flex-col gap-14">
      <div className="flex justify-center gap-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="group border-4 border-(--secondary-color) bg-(--primary-color) p-4"
          >
            {/* Vùng tròn */}
            <div className="perspective -mt-16 h-46 w-46">
              {/* Flip container */}
              <div className="transform-style-preserve-3d relative h-full w-full rounded-full transition-transform duration-700 group-hover:rotate-y-180">
                {/* Mặt trước */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full border-4 border-(--secondary-color) bg-white backface-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-32 object-contain"
                  />
                </div>

                {/* Mặt sau */}
                <div className="absolute inset-0 flex rotate-y-180 items-center justify-center rounded-full border-4 border-(--secondary-color) bg-white backface-hidden">
                  <img
                    src={item.image1}
                    alt={`${item.name}-back`}
                    className="h-32 w-32 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Tên */}
            <div className="mt-4 text-center text-lg font-bold text-white">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;

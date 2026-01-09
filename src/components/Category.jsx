

const Category = ({ data = [] }) => {
  return (
    <div className="flex justify-center gap-10">
      {data.map((item) => (
        <div
          key={item.id}
          className="group relative flex h-46 w-46 items-center justify-center overflow-hidden rounded-full border-4 border-(--primary-color) bg-white transition hover:-translate-y-1 hover:shadow-xl"
        >

          <img
            src={item.image}
            alt={item.name}
            className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute inset-0 flex translate-y-full items-end justify-center bg-white/80 transition-all duration-300 ease-out group-hover:translate-y-0">
            <h3 className="mb-20 font-bold text-(--primary-color)">
              {item.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const productCountMap = useMemo(() => {
    const map = {};
    products.forEach((p) => {
      map[p.categoryId] = (map[p.categoryId] || 0) + 1;
    });
    return map;
  }, [products]);

  return (
    <section className="my-16 px-4">
      {/* Title */}

      <h3 className="mb-12 text-center text-2xl font-bold uppercase">
        <span className="bg-linear-to-r from-(--color-primary) to-black bg-clip-text text-transparent">
          Danh mục sản phẩm
        </span>
        <span className="mx-auto mt-2 block h-1 w-42 rounded-full bg-linear-to-r from-black to-(--color-primary)"></span>
      </h3>

      {/* List */}
      <div className="mx-auto flex flex-wrap justify-center gap-8">
        {categories.map((item) => (
          <Link
            to={`/san-pham?danh-muc=${item.id}`}
            key={item.id}
            className="group w-full border border-gray-100 sm:w-[45%] md:w-[30%]"
          >
            <div className="relative overflow-hidden transition hover:shadow-xl">
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute right-0 bottom-0 left-0 h-24 bg-black/30"></div>

              {/* Content */}
              <div className="absolute bottom-0 z-10 w-full p-6 text-center text-white">
                <p className="text-xl font-semibold uppercase">{item.name}</p>
                <p className="mt-1 text-base">
                  {productCountMap[item.id] || 0} sản phẩm
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;

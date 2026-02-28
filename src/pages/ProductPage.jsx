import { useEffect, useState } from "react";

const ProductPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="">
      <section className="my-7 flex flex-wrap items-center justify-evenly gap-3 py-2">
        {categories.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer bg-[radial-gradient(circle_at_center,#dff1d8_0%,#ffffff_70%)] py-3 text-center sm:w-[30%] md:w-[22%] lg:w-[18%] xl:w-[14%]"
          >
            <p className="bg-linear-to-r from-(--color-primary) to-black bg-clip-text text-sm font-bold text-transparent uppercase hover:scale-105 sm:text-base md:text-lg">
              {item.name}
            </p>
          </div>
        ))}
      </section>
      <section>Danh sách sản phẩm</section>
    </main>
  );
};

export default ProductPage;

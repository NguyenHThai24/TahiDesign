import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Categories = ({ categories }) => {
  const { t } = useLanguage();
  return (
    <section className="mx-4 flex flex-col gap-5 py-12 text-(--color-primary)">
      <h1 className="title text-center text-3xl font-bold uppercase italic">
        {t("productCatalog")}
      </h1>

      <div className="grid flex-1 grid-cols-1 gap-7 overflow-hidden md:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => (
          <Link
            to={`/product?category=${cat.id}`}
            key={cat.id}
            className="group shadow_black flex h-75 w-full flex-col justify-between rounded border border-b-0 border-(--color-primary) bg-white text-(--color-primary)"
          >
            {/* IMAGE */}
            <div className="h-full w-full overflow-hidden rounded-xl p-6">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-contain group-hover:animate-[wobble_0.6s_ease-in-out]"
              />
            </div>

            {/* TITLE */}
            <h3 className="mx-auto flex h-12 w-[80%] items-center justify-center rounded-t-2xl bg-white text-xl font-bold text-(--color-primary)">
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;

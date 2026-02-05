import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Categories = ({ categories }) => {
  const { t } = useLanguage();

  return (
    <section className="mx-auto flex max-w-6xl flex-col gap-2 text-(--color-primary)">
      {/* <h1 className="title text-center text-3xl font-bold uppercase italic">
        {t("productCatalog")}
      </h1> */}

      <div className="flex flex-col">
        {categories.map((cat, index) => {
          const isReverse = index % 2 === 1;

          return (
            <Link
              to={`/product?category=${cat.id}`}
              key={cat.id}
              className="group grid overflow-hidden border bg-white transition-all hover:shadow-xl lg:grid-cols-2"
            >
              {/* IMAGE */}
              <div
                className={`flex items-center justify-center p-10 ${
                  isReverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-60 w-full object-contain transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* TEXT */}
              <div
                className={`flex flex-col items-center justify-center gap-7 bg-(--color-secondary) p-10 text-center text-white ${
                  isReverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="text-3xl font-bold">{cat.name}</h3>
                <p className="text-white">{cat.description}</p>

                <span className="btn-primary">{t("viewMore")}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;

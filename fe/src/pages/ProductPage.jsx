import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import FilterProduct from "../components/FilterProduct";
import ListItem from "../components/ListItem";
import { useLanguage } from "../context/LanguageContext";

const ProductPage = () => {
  const { t } = useLanguage();

  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [filters, setFilters] = useState({
    categories: [],
    priceRanges: [],
    sort: null,
  });

  useEffect(() => {
    if (categoryFromUrl) {
      setFilters((prev) => ({
        ...prev,
        categories: [categoryFromUrl],
      }));
    }
  }, [categoryFromUrl]);

  useEffect(() => {
    fetch("/data/productsData.json")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const filteredProducts = products
    .filter((p) => {
      if (
        filters.categories.length &&
        !filters.categories.includes(p.categoryId)
      )
        return false;

      if (filters.priceRanges.length) {
        const price = p.price;
        const match = filters.priceRanges.some((range) => {
          if (range === "price_low") return price < 50000;
          if (range === "price_medium")
            return price >= 50000 && price <= 200000;
          if (range === "price_high") return price > 200000 && price <= 500000;
          if (range === "price_premium") return price > 500000;
        });

        if (!match) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (filters.sort === "asc") return a.price - b.price;
      if (filters.sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="relative mx-4 flex h-full">
      {/* Header */}
      <div className="relative shrink-0">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="fixed top-12 left-2 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-(--color-primary) bg-white font-bold text-(--color-primary) shadow-lg md:hidden"
        >
          {t("filterTitle")}
        </button>

        <div
          className={`fixed right-0 bottom-0 left-0 z-50 w-full transition-transform duration-300 ease-in-out md:static md:translate-y-0 md:rounded-none md:shadow-none ${showFilter ? "translate-y-0" : "translate-y-full"} `}
        >
          <FilterProduct filters={filters} onChange={setFilters} />
        </div>
      </div>

      {/* List Wrapper */}
      <div className="my-7 flex flex-1 justify-center overflow-y-auto scroll-smooth">
        <ListItem products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductPage;

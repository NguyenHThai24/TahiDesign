import { useState, useEffect } from "react";

import FilterProduct from "../components/FilterProduct";
import ListItem from "../components/ListItem";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
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
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
          if (range === "low") return price < 50000;
          if (range === "medium") return price >= 50000 && price <= 200000;
          if (range === "high") return price > 200000 && price <= 500000;
          if (range === "premium") return price > 500000;
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
    <div className="relative flex h-full flex-col rounded-2xl bg-(--color-secondary)">
      {/* Header */}
      <div className="relative shrink-0">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="m-1 flex h-10 w-10 items-center justify-center rounded-full bg-white px-4 font-bold text-(--color-primary)"
        >
          Lọc
        </button>

        {showFilter && (
          <div className="absolute top-12 left-32 z-50 w-60 -translate-x-1/2">
            <FilterProduct filters={filters} onChange={setFilters} />
          </div>
        )}
      </div>

      {/* List Wrapper */}
      <div className="my-2 flex flex-1 justify-center overflow-y-auto scroll-smooth">
        <ListItem products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductPage;

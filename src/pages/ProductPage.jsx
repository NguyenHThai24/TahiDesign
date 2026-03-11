import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardItem from "../components/CardItem";
import ModalProduct from "../components/ModalProduct";

const ProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCate, setActiveCate] = useState(null);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);
  const [tempCate, setTempCate] = useState(null);

  const [searchParams] = useSearchParams();

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  /* GET CATEGORY FROM URL */
  useEffect(() => {
    const cateId = searchParams.get("danh-muc");
    if (cateId) setActiveCate(Number(cateId));
  }, [searchParams]);

  /* FETCH CATEGORY */
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  /* FETCH PRODUCTS */
  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = activeCate
    ? products.filter((p) => p.categoryId === activeCate)
    : products;

  return (
    <>
      <main className="mx-auto w-full max-w-7xl py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* SIDEBAR DESKTOP */}
          <aside className="col-span-3 hidden bg-white lg:block">
            <div className="p-4">
              <h3 className="mb-3 text-xl font-bold uppercase">
                Danh mục sản phẩm
              </h3>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setActiveCate(null)}
                  className={`border-b border-gray-200 px-3 py-2 text-left text-lg font-semibold transition ${
                    activeCate === null
                      ? " text-(--color-primary)"
                      : "hover:text-(--color-primary)"
                  }`}
                >
                  Tất cả
                </button>

                {categories.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveCate(item.id)}
                    className={`border-b border-gray-200 px-3 py-2 text-left text-lg font-semibold transition ${
                      activeCate === item.id
                        ? "text-(--color-primary)"
                        : "hover:text-(--color-primary)"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* MOBILE FILTER BUTTON */}
          <div className="col-span-12 lg:hidden">
            <button
              onClick={() => {
                setTempCate(activeCate);
                setOpenFilter(true);
              }}
              className="w-full rounded-lg border py-3 font-semibold hover:bg-gray-50"
            >
              Lọc sản phẩm
            </button>
          </div>

          {/* PRODUCT GRID */}
          <section className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((item) => (
                <CardItem
                  key={item.id}
                  item={item}
                  onClick={() => handleOpenModal(item)}
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* MODAL PRODUCT */}
      {openModal && (
        <ModalProduct
          product={selectedProduct}
          onClose={() => setOpenModal(false)}
        />
      )}

      {/* MOBILE FILTER MODAL */}
      {openFilter && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/40">
          <div className="animate-slideUp w-full rounded-t-2xl bg-white p-5">
            {/* HEADER */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold">Lọc sản phẩm</h3>

              <button
                onClick={() => setOpenFilter(false)}
                className="text-xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* CATEGORY */}
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setTempCate(null)}
                className={`rounded-lg border px-4 py-2 text-left ${
                  tempCate === null
                    ? "bg-gray-100 font-bold"
                    : "hover:bg-gray-50"
                }`}
              >
                Tất cả
              </button>

              {categories.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTempCate(item.id)}
                  className={`rounded-lg border px-4 py-2 text-left ${
                    tempCate === item.id
                      ? "bg-gray-100 font-bold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* APPLY */}
            <button
              onClick={() => {
                setActiveCate(tempCate);
                setOpenFilter(false);
              }}
              className="mt-5 w-full rounded-lg bg-black py-3 font-semibold text-white"
            >
              Áp dụng
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductPage;

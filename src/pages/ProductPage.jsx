import Gallery from "../components/Gallery";

const ProductPage = () => {
  return (
    <main>
      <section className="grid grid-cols-12 gap-2">
        <div className="col-span-3 bg-[#e9ece9] p-2">Cột danh mục</div>
        <div className="col-span-9">
          <Gallery />
        </div>
      </section>
    </main>
  );
};

export default ProductPage;

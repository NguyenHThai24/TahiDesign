import Category from "../components/Category";

const HomePage = () => {
  return (
    <>
      <section className="h-[450px] border-2 border-r-0 border-l-0 border-(--primary-color)">
        Banner
      </section>
      <main className="mx-auto -mt-22 max-w-7xl">
        <section className="">
          <Category />
        </section>
      </main>
    </>
  );
};

export default HomePage;

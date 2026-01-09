import Category from "../components/Category";

const HomePage = () => {
  return (
    <>
      <section className="h-[450px] border">Banner</section>
      <main className="max-w-7xl mx-auto -mt-20">
        <section className="">
          <Category />
        </section>
      </main>
    </>
  );
};

export default HomePage;

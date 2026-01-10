import thiepCuoiIMG from "../../public/images/li-xi.png";

const Introduce = () => {
  return (
    <section className="flex h-full items-center gap-6 p-2">
      <div className="flex w-full flex-col items-end">
        <div>1</div>
        <div>2</div>
      </div>

      <div className="h-full w-full">
        <img
          src={thiepCuoiIMG}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      <div className="flex w-full flex-col items-start">
        <div>1</div>
        <div>2</div>
      </div>
    </section>
  );
};

export default Introduce;

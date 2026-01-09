import thiepCuoiIMG from '../../public/images/thiep-cuoi.jpg'

const Introduce = () => {
  return (
    <section className="flex items-center h-[450px] gap-6 border">
      <div className="w-full">
        1
      </div>

      <div className="w-full h-full">
        <img
          src={thiepCuoiIMG}
          alt=""
          className="h-full w-full"
        />
      </div>

      <div className="w-full">
        3
      </div>
    </section>
  );
};

export default Introduce;

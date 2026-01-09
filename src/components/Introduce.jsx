import thiepCuoiIMG from '../../public/images/thiep-cuoi.jpg'

const Introduce = () => {
  return (
    <section className="flex items-center h-[450px] gap-6 border">
      <div className="w-full flex justify-end">
        1
      </div>

      <div className="w-full h-full">
        <img
          src={thiepCuoiIMG}
          alt=""
          className="w-full h-full object-contain"
        />

      </div>

      <div className="w-full flex justify-start">
        3
      </div>
    </section>
  );
};

export default Introduce;

import meImg from "../../../public/images/imgMe.png";

const About = () => {
  return (
    <div className="w-full  flex ">
      <div className="w-[550px] bg-white ">
        <img src={meImg} alt="" className="mx-auto h-[250px]" />
      </div>
      <div className="w-full bg-white p-2 text-(--text-color) flex flex-col justify-center gap-7">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit neque,
          at dolore exercitationem omnis expedita doloremque, quod iste voluptas
          natus necessitatibus animi, rem unde soluta? Ut harum beatae esse
          recusandae?
        </p>
        <div className="flex gap-5">
          <button className="border w-36 h-10 rounded-full font-medium cursor-pointer hover:bg-(--background-color)">
            Liên hệ
          </button>
          <button className="border w-36 h-10 rounded-full font-medium cursor-pointer hover:bg-(--background-color)">
            Mua hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

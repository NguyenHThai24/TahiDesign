import { RiHome9Fill, RiPhoneFill, RiMailSendFill } from "react-icons/ri";

const ContactPage = () => {
  return (
    <main className="flex flex-col gap-10 w-full">
      <section className="relative h-[450px] bg-cover bg-position-[50%_100%] bg-[url('/images/contact/bannerContact.jpg')]">
        {/* Overlay mờ */}
        <div className="absolute inset-0 bg-white/40"></div>

        {/* Nội dung */}
        <div className="relative flex flex-col gap-8 justify-center h-full items-center">
          <h1 className="text-4xl font-semibold text-(--text-color)">
            Liên hệ
          </h1>
          <p className="text-lg">Liên hệ với chúng tôi</p>
        </div>
      </section>
      <section className="flex justify-center h-[300px] gap-5">
        {/* div 1 - address  */}
        <div className="h-full border border-(--background-color) w-[300px] flex flex-col justify-center items-center gap-4 p-4">
          <RiHome9Fill size={40} color="#315040" />
          <h3 className="font-bold text-base uppercase">Địa chỉ</h3>
          <p className="text-sm text-center text-gray-800 leading-6">
            Vì tính chất công việc. Quý khách hàng vui lòng liên hệ trước khi
            đến địa chỉ này.
          </p>
          <h4 className="font-bold text-(--text-color)">
            Bình Tây 2, Bình Thạnh Đông, AG
          </h4>
        </div>

        {/* div 2 - phone  */}
        <div className="h-full border border-(--background-color) w-[300px] flex flex-col justify-center items-center gap-4 p-4">
          <RiPhoneFill size={40} color="#315040" />
          <h3 className="font-bold text-base uppercase">Điện thoại</h3>
          <p className="text-sm text-center text-gray-800 leading-6">
            Vì tính chất công việc. Quý khách hàng vui lòng liên hệ trước khi
            đến địa chỉ này.
          </p>
          <h4 className="font-bold text-(--text-color)">+84 333 929 901</h4>
        </div>

        {/* div 3 - email  */}
        <div className="h-full border border-(--background-color) w-[300px] flex flex-col justify-center items-center gap-4 p-4">
          <RiMailSendFill size={40} color="#315040" />
          <h3 className="font-bold text-base uppercase">Email</h3>
          <p className="text-sm text-center text-gray-800 leading-6">
            Vì tính chất công việc. Quý khách hàng vui lòng liên hệ trước khi
            đến địa chỉ này.
          </p>
          <h4 className="font-bold text-(--text-color)">abc@gmail.com</h4>
        </div>
      </section>
      <section className="h-[350px] w-full border border-(--background-color)">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15687.580433109737!2d105.24213305919645!3d10.587373490193675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1765433067092!5m2!1sen!2s"
          width="100%"
          height="100%"
        ></iframe>
      </section>
    </main>
  );
};

export default ContactPage;

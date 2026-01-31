import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const SCRIPT_URL = import.meta.env.VITE_GG_SCRIPT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sheet: "contact",
        name,
        phone,
        message,
      }),
    });

    alert("Gửi liên hệ thành công!");
  };

  return (
    <section className="mx-auto h-full max-w-6xl px-6 py-4 text-(--color-primary)">
      {/* TITLE */}
      <div className="mb-7 text-center">
        <h1 className="title mb-4 text-4xl font-bold">LIÊN HỆ</h1>
        <p className="mx-auto max-w-3xl text-lg italic">
          Nếu bạn cần tư vấn in ấn, báo giá hoặc hỗ trợ nhanh, đừng ngần ngại
          liên hệ với chúng tôi. <br /> Chúng tôi luôn sẵn sàng hỗ trợ khách
          hàng nhanh nhất có thể.
        </p>
      </div>

      {/* CONTENT */}
      <div className="grid gap-10 md:grid-cols-2">
        {/* LEFT – INFO */}
        <div className="flex flex-col gap-6">
          <div className="flex w-full items-start justify-center rounded-2xl bg-(--color-primary)">
            <div className="flex w-full flex-col items-center gap-4 text-white">
              <h3 className="flex w-50 justify-center gap-2 rounded-b-2xl bg-white px-4 py-1.5 text-center font-bold text-(--color-primary) italic">
                <FaMapMarkerAlt className="text-xl" />
                Địa chỉ
              </h3>
              <p className="px-4 pb-4">123 Đường ABC, Quận XYZ, TP.HCM</p>
            </div>
          </div>

          <div className="flex w-full items-start justify-center rounded-2xl bg-(--color-primary)">
            <div className="flex w-full flex-col items-center gap-4 text-white">
              <h3 className="flex w-50 justify-center gap-2 rounded-b-2xl bg-white px-4 py-1.5 text-center font-bold text-(--color-primary) italic shadow">
                <FaPhoneAlt className="text-xl" />
                Điện thoại
              </h3>
              <p className="px-4 pb-4">+84 123.456.789</p>
            </div>
          </div>

          <div className="flex w-full items-start justify-center rounded-2xl bg-(--color-primary)">
            <div className="flex w-full flex-col items-center gap-4 text-white">
              <h3 className="flex w-50 justify-center gap-2 rounded-b-2xl bg-white px-4 py-1.5 text-center font-bold text-(--color-primary) italic">
                <FaEnvelope className="text-xl" />
                Email
              </h3>
              <p className="px-4 pb-4">tahidesign@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="rounded-2xl border p-4">
          <h3 className="mb-4 text-2xl font-bold italic">Gửi tin nhắn</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Họ và tên"
              className="rounded-lg border px-4 py-3 outline-none focus:border-(--color-primary)"
            />

            <input
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="Số điện thoại"
              className="rounded-lg border px-4 py-3 outline-none focus:border-(--color-primary)"
            />

            <textarea
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              placeholder="Nội dung cần tư vấn"
              className="resize-none rounded-lg border px-4 py-3 outline-none focus:border-(--color-primary)"
            />

            <button type="submit" className="btn-primary">
              GỬI LIÊN HỆ
            </button>
          </form>
        </div>
      </div>
      {/* TULIP DECORATION */}

      {/* <div className="pointer-events-none fixed bottom-0 left-[50%] z-0">
        <img
          src={tulipIMG}
          alt="Tulip decoration"
          className="h-[50%] w-[100%] select-none"
        />
      </div> */}
    </section>
  );
};

export default ContactPage;

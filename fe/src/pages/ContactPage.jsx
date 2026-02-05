import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import OrderingProcess from "../components/OrderingProcess";
import { useLanguage } from "../context/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <section className="my-4 h-full w-full px-4 text-(--color-primary)">
      {/* TITLE */}
      <div className="mb-7 text-center">
        <h1 className="title mb-4 text-4xl font-bold">{t("contact")}</h1>
        <p className="mx-auto max-w-3xl text-lg italic">{t("contactInfo")}</p>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <OrderingProcess />
        {/* LEFT – INFO */}
        <div className="flex flex-col gap-6">
          <div className="flex w-full items-start justify-center rounded-2xl bg-(--color-primary)">
            <div className="flex w-full flex-col items-center gap-4 text-white">
              <h3 className="flex w-50 justify-center gap-2 rounded-b-2xl bg-white px-4 py-1.5 text-center font-bold text-(--color-primary) italic">
                <FaMapMarkerAlt className="text-xl" />
                {t("address")}
              </h3>
              <p className="px-4 pb-4">123 Đường ABC, Quận XYZ, TP.HCM</p>
            </div>
          </div>

          <div className="flex w-full items-start justify-center rounded-2xl bg-(--color-primary)">
            <div className="flex w-full flex-col items-center gap-4 text-white">
              <h3 className="flex w-50 justify-center gap-2 rounded-b-2xl bg-white px-4 py-1.5 text-center font-bold text-(--color-primary) italic shadow">
                <FaPhoneAlt className="text-xl" />
                {t("phone")}
              </h3>
              <p className="px-4 pb-4">+84 123.456.789</p>
            </div>
          </div>

          <div className="flex w-full items-start justify-center rounded-2xl bg-(--color-primary)">
            <div className="flex w-full flex-col items-center gap-4 text-white">
              <h3 className="flex w-50 justify-center gap-2 rounded-b-2xl bg-white px-4 py-1.5 text-center font-bold text-(--color-primary) italic">
                <FaEnvelope className="text-xl" />
                {t("email")}
              </h3>
              <p className="px-4 pb-4">tahidesign@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div className="rounded-2xl border p-4">
          <h3 className="mb-4 text-2xl font-bold italic">{t("sendMessage")}</h3>

          <form onSubmit="" className="flex flex-col gap-5">
            <input
              name="name"
              type="text"
              placeholder={t("fullName")}
              className="rounded-lg border px-4 py-3 outline-none focus:border-(--color-primary)"
            />

            <input
              name="phone"
              type="text"
              placeholder={t("phone")}
              className="rounded-lg border px-4 py-3 outline-none focus:border-(--color-primary)"
            />

            <textarea
              name="message"
              rows="4"
              placeholder={t("description")}
              className="resize-none rounded-lg border px-4 py-3 outline-none focus:border-(--color-primary)"
            />

            <button type="submit" className="btn-primary">
              {t("submitContact")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

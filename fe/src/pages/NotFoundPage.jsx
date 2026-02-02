import { Link } from "react-router-dom";
import notFound from "../assets/not-found.png";
import { useLanguage } from "../context/LanguageContext";

function NotFoundPage() {
  const { t } = useLanguage();
  return (
    <section className="flex h-full flex-col items-center justify-center gap-4">
      <img src={notFound} alt="" width={500} />
      <Link to={"/"} className="title text-3xl font-bold">
        {t("backToHome")}
      </Link>
    </section>
  );
}
export default NotFoundPage;
